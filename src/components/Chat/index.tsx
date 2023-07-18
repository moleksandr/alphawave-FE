// Dependencies
import React from 'react';
// @ts-ignore
import { ChatEngine, ChatFeed } from 'react-chat-engine';

// Components
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import Message from './Message';
import { ChatInput } from './ChatInput';

// Export component
export const Chat = () => {
  return (
    <div className={'container h-full flex pt-[25px] pb-4'}>
      <ChatEngine
        projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
        userName={process.env.REACT_APP_CHAT_USERNAME}
        userSecret={process.env.REACT_APP_CHAT_SECRET}
        renderChatHeader={() => <ChatHeader />}
        renderChatFeed={(props: any) => (
          <div className={'flex-1 ml-[18px] h-full bg-white rounded-[25px] card-shadow relative overflow-hidden'}>
            <ChatFeed {...props} />
          </div>
        )}
        renderChatList={(chatEngineState: any) => <ChatList {...chatEngineState} />}
        renderMessageBubble={(creds: any, chat: any, lastMessage: any, message: any, nextMessage: any) => <Message creds={creds} chat={chat} lastMessage={lastMessage} message={message} nextMessage={nextMessage} />}
        renderNewMessageForm={ChatInput}
        renderChatSettings={() => {}}
      />
    </div>
  );
};
