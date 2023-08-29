// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import { Component } from 'react';
// import { ChatContext, useChatContext } from "../contexts/ChatContext";
import { getCreatedTime } from "./timezone";
// Api's
import * as Api from "./mattermost";

const MAX_WEBSOCKET_FAILS = 7;
const MIN_WEBSOCKET_RETRY_TIME = 3000; // 3 sec
const MAX_WEBSOCKET_RETRY_TIME = 300000; // 5 mins

let Socket: any;

class WebSocketClient extends Component {
    conn?: WebSocket;
    connectionUrl: null;
    token: string|null;
    sequence: number;
    connectFailCount: number;
    eventCallback?: (message: any) => void;
    firstConnectCallback?: () => void;
    reconnectCallback?: () => void;
    errorCallback?: (event: Event) => void;
    closeCallback?: (connectFailCount: number) => void;
    connectingCallback?: () => void;
    stop: boolean;
    platform: string;
    connectionTimeout: any;
    chatContext: any;

    constructor(props: any, useChatContext: any) {
        super(props);
        this.connectionUrl = null;
        this.token = null;
        this.sequence = 1;
        this.connectFailCount = 0;
        this.stop = false;
        this.platform = '';
        this.chatContext = useChatContext;
    }

    initialize(token: string|null, opts: any) {
        const defaults = {
            forceConnection: true,
            connectionUrl: this.connectionUrl,
            webSocketConnector: WebSocket,
        };

        const {connectionUrl, forceConnection, webSocketConnector, platform, ...additionalOptions} = Object.assign({}, defaults, opts);

        if (platform) {
            this.platform = platform;
        }

        if (forceConnection) {
            this.stop = false;
        }

        return new Promise<void>((resolve, reject) => {
            if (this.conn) {
                resolve();
                return;
            }

            if (connectionUrl == null) {
                console.log('websocket must have connection url'); //eslint-disable-line no-console
                reject(new Error('websocket must have connection url'));
                return;
            }

            if (this.connectFailCount === 0) {
                console.log('websocket connecting to ' + connectionUrl); //eslint-disable-line no-console
            }

            Socket = webSocketConnector;
            if (this.connectingCallback) {
                this.connectingCallback();
            }

            const regex = /^(?:https?|wss?):(?:\/\/)?[^/]*/;
            const captured = (regex).exec(connectionUrl);

            let origin;
            if (captured) {
                origin = captured[0];

                if (platform === 'android') {
                    // this is done cause for android having the port 80 or 443 will fail the connection
                    // the websocket will append them
                    const split = origin.split(':');
                    const port = split[2];
                    if (port === '80' || port === '443') {
                        origin = `${split[0]}:${split[1]}`;
                    }
                }
            } else {
                // If we're unable to set the origin header, the websocket won't connect, but the URL is likely malformed anyway
                const errorMessage = 'websocket failed to parse origin from ' + connectionUrl;
                console.warn(errorMessage); // eslint-disable-line no-console
                reject(new Error(errorMessage));
                return;
            }

            this.conn = new Socket(connectionUrl, [], {headers: {origin}, ...(additionalOptions || {})});
            this.connectionUrl = connectionUrl;
            this.token = token;

            this.conn!.onopen = () => {
                if (token) {
                    // we check for the platform as a workaround until we fix on the server that further authentications
                    // are ignored
                    this.sendMessage('authentication_challenge', {token});
                }

                if (this.connectFailCount > 0) {
                    console.log('websocket re-established connection'); //eslint-disable-line no-console
                    if (this.reconnectCallback) {
                        this.reconnectCallback();
                    }
                } else if (this.firstConnectCallback) {
                    this.firstConnectCallback();
                }

                this.connectFailCount = 0;
                resolve();
            };

            this.conn!.onclose = () => {
                this.conn = undefined;
                this.sequence = 1;

                if (this.connectFailCount === 0) {
                    console.log('websocket closed'); //eslint-disable-line no-console
                }

                this.connectFailCount++;

                if (this.closeCallback) {
                    this.closeCallback(this.connectFailCount);
                }

                let retryTime = MIN_WEBSOCKET_RETRY_TIME;

                // If we've failed a bunch of connections then start backing off
                if (this.connectFailCount > MAX_WEBSOCKET_FAILS) {
                    retryTime = MIN_WEBSOCKET_RETRY_TIME * this.connectFailCount;
                    if (retryTime > MAX_WEBSOCKET_RETRY_TIME) {
                        retryTime = MAX_WEBSOCKET_RETRY_TIME;
                    }
                }

                if (this.connectionTimeout) {
                    clearTimeout(this.connectionTimeout);
                }

                this.connectionTimeout = setTimeout(
                    () => {
                        if (this.stop) {
                            clearTimeout(this.connectionTimeout);
                            return;
                        }
                        this.initialize(token, opts);
                    },
                    retryTime,
                );
            };

            this.conn!.onerror = (evt) => {
                if (this.connectFailCount <= 1) {
                    console.log('websocket error'); //eslint-disable-line no-console
                    console.log(evt); //eslint-disable-line no-console
                }

                if (this.errorCallback) {
                    this.errorCallback(evt);
                }
            };

            this.conn!.onmessage = async (evt) => {
                
                const msg = JSON.parse(evt.data);

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { 
                    activeUser, 
                    setMessages, 
                    messages, 
                    threads, 
                    setThreads, 
                    getThreads
                } = this.chatContext;

                console.log('CONNECTION event', msg, evt);
                console.log('activeUser ======>', activeUser);
                console.log('messages ======>', messages);
                console.log('threads ======>', threads);

                if(msg.event === 'reaction_added') {

                    if(activeUser) {

                        const reaction = JSON.parse(msg.data.reaction);
                        console.log('UPCOMING REACTIONS =========>', reaction);

                        const postResp: any = await Api.getSinglePost(reaction.post_id);

                       if (postResp.data) {

                       const updatedMessages = messages.map((msg: any) => {
                        return { ...msg, reactions: postResp.data.metadata.reactions };
                       })
                       const msgs = [...updatedMessages].sort((a: any, b: any) => a.create_at - b.create_at);
                       setMessages && setMessages([...msgs]);

                       }

                    }
                }

                if(msg.event === 'posted') {

                    if(activeUser) { 

                    const post = JSON.parse(msg.data.post);
                    getThreads(post.id);
                    const user = post?.props;
                    console.log('=======> POST', post);
                    
                    if(post.root_id === "") {

                        
            let file: any;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            if (post?.file_ids) file = await Api.getFiles(post.file_ids[0]);

                    // TODO Set message body
                    const message = {
                    id: post.id,
                    user: user,
                    reactions: post.reactions ? post.reactions : [],
                    replies: threads.data ? threads.data.order.length : 1,
                    type: user.username === activeUser?.username ? 'sender' : 'receiver',
                    timestamp: getCreatedTime(post.create_at),
                    message: {  data: file ? file.data.files : '', caption: post.message },
                    create_at: post.create_at
                    }
                    const msgs = [...messages, message].sort((a: any, b: any) => a.create_at - b.create_at);
                    setMessages && setMessages([...msgs]);

                  } 
                  else {

                    let file: any;
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    if (post?.file_ids) file = await Api.getFiles(post.file_ids[0]);

   // TODO Set message body
   const message = {
    id: post.id,
    user: user,
    reactions: post.reactions ? post.reactions : [],
    replies: threads.data ? threads.data.order.length : 1,
    type: 'sender',
    timestamp: getCreatedTime(post.create_at),
    message: {  data: file ? file.data.files : '', caption: post.message },
    create_at: post.create_at
    }
    const msgs = [...threads, message].sort((a: any, b: any) => a.create_at - b.create_at);
    setThreads && setThreads([...msgs]);
                  }

                }
            }

                if (msg.seq_reply) {
                    if (msg.error) {
                        console.warn(msg); //eslint-disable-line no-console
                    }
                } else if (this.eventCallback) {
                    this.eventCallback(msg);
                }
            };
        });
    }

    setConnectingCallback(callback: () => void) {
        this.connectingCallback = callback;
    }

    setEventCallback(callback: (message: any) => void) {
        this.eventCallback = callback;
    }

    setFirstConnectCallback(callback: () => void) {
        this.firstConnectCallback = callback;
    }

    setReconnectCallback(callback: () => void) {
        this.reconnectCallback = callback;
    }

    setErrorCallback(callback: (event: Event) => void) {
        this.errorCallback = callback;
    }

    setCloseCallback(callback: (connectFailCount: number) => void) {
        this.closeCallback = callback;
    }

    close(stop = false) {
        this.stop = stop;
        this.connectFailCount = 0;
        this.sequence = 1;
        if (this.conn && this.conn.readyState === Socket.OPEN) {
            this.conn.onclose = () => {}; //eslint-disable-line @typescript-eslint/no-empty-function
            this.conn.close();
            this.conn = undefined;
            console.log('websocket closed'); //eslint-disable-line no-console
        }
    }

    sendMessage(action: string, data: any) {
        const msg = {
            action,
            seq: this.sequence++,
            data,
        };

        if (this.conn && this.conn.readyState === Socket.OPEN) {
            this.conn.send(JSON.stringify(msg));
        } else if (!this.conn || this.conn.readyState === Socket.CLOSED) {
            this.conn = undefined;
            this.initialize(this.token, {platform: this.platform});
        }
    }

    userTyping(channelId: string, parentId: string) {
        this.sendMessage('user_typing', {
            channel_id: channelId,
            parent_id: parentId,
        });
    }

    getStatuses() {
        this.sendMessage('get_statuses', null);
    }

    getStatusesByIds(userIds: string[]) {
        this.sendMessage('get_statuses_by_ids', {
            user_ids: userIds,
        });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new WebSocketClient({}, {activeUser: false});