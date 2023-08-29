import { useRef, FormEvent, useState } from 'react';

import Messages from "./Messages";
import Header from "./Header";

import websocket from '../../../utils/websocket';

const ChatMessage = (props: any) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const ImageElement = useRef<HTMLInputElement>(null);
    const [imageData, setImageData] = useState('');
    const [fileName, setFileName] = useState(null);

    const {
        user,
        messages,
        sendMessage,
        setMessages,
        activeUser,
        channel,
        reaction,
        customReactions,
        setThread,
        threads,
        setThreads,
        setRoot,
        getThreads,
        inviteToTheChannel,
        inviteToTheTeam
    } = props;

    console.log('MESSAGE', messages);

    console.log('CHANNEL', channel);

    websocket.chatContext = {
        activeUser,
        setMessages,
        messages,
        threads,
        setThreads,
        getThreads
    }

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file?.name) {
            setFileName(file.name)
        } else setFileName(null);

        if (file) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                setImageData(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSvgClick = () => {
        ImageElement?.current?.click();
    };

    return (
        <div className="flex-1 bg-white p-4 my-6 ml-6">
            <Header
                user={user}
                channel={channel}
                inviteToTheChannel={inviteToTheChannel}
                inviteToTheTeam={inviteToTheTeam}
            />
            <hr />
            <Messages
                messages={messages}
                reaction={reaction}
                customReactions={customReactions}
                setThread={setThread}
                getThreads={getThreads}
                setRoot={setRoot}
                threads={threads}
            />
            <br />
            <div className="flex items-center border border-gray-300 rounded-2xl pl-2 bg-bgColorGrey bg-opacity-10">
                <input
                    ref={inputElement}
                    type="text"
                    placeholder="Type a new message..."
                    className="flex-1 outline-none focus:ring focus:border-indigo-500 rounded-l w-1368 h-42 bg-bgColorGrey bg-opacity-10"
                    disabled={fileName ? true : false}
                />
                {fileName ? `${fileName} Selected` : ''}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={ImageElement}
                    style={{ display: 'none' }}
                />
                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={handleSvgClick}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.50489 4.2549C3.33331 5.42647 3.33331 7.31209 3.33331 11.0833V25.9167C3.33331 29.6879 3.33331 31.5735 4.50489 32.7451C5.67646 33.9167 7.56208 33.9167 11.3333 33.9167H28.6666C32.4379 33.9167 34.3235 33.9167 35.4951 32.7451C36.6666 31.5735 36.6666 29.6879 36.6666 25.9167V11.0833C36.6666 7.71691 36.6666 5.85302 35.8333 4.65831V26.2083C34.913 26.2083 34.4528 26.2083 34.017 26.1097C33.6242 26.0209 33.247 25.8732 32.8983 25.6717C32.5115 25.4481 32.1737 25.1357 31.4982 24.5108L31.4981 24.5107L31.4981 24.5107L29.3828 22.5541C28.0941 21.3621 27.4498 20.7661 26.6666 20.7661C25.8835 20.7661 25.2391 21.3621 23.9505 22.5541L22.0174 24.3422C21.0958 25.1947 20.635 25.6209 20.1357 25.5222C19.6363 25.4234 19.3724 24.8539 18.8447 23.7148L17.3106 20.4038C16.2551 18.1256 15.7273 16.9865 14.7286 16.789C13.7299 16.5915 12.8083 17.444 10.9651 19.1489L5.83331 23.8958V3.46881C5.29886 3.6417 4.86764 3.89214 4.50489 4.2549Z" fill="#5F6368" />
                    <path d="M4.33331 11.0833C4.33331 9.16946 4.33544 7.83464 4.47084 6.8275C4.60238 5.84914 4.84298 5.33104 5.21199 4.96202C5.58101 4.59301 6.09911 4.35241 7.07747 4.22087C8.08461 4.08547 9.41943 4.08334 11.3333 4.08334H28.6666C30.5805 4.08334 31.9154 4.08547 32.9225 4.22087C33.9009 4.35241 34.419 4.59301 34.788 4.96202C35.157 5.33104 35.3976 5.84914 35.5291 6.8275C35.6645 7.83464 35.6666 9.16946 35.6666 11.0833V25.9167C35.6666 27.8306 35.6645 29.1654 35.5291 30.1725C35.3976 31.1509 35.157 31.669 34.788 32.038C34.419 32.407 33.9009 32.6476 32.9225 32.7791C31.9154 32.9146 30.5805 32.9167 28.6666 32.9167H11.3333C9.41943 32.9167 8.08461 32.9146 7.07747 32.7791C6.09911 32.6476 5.58101 32.407 5.21199 32.038L4.52213 32.7279L5.21199 32.038C4.84298 31.669 4.60238 31.1509 4.47084 30.1725C4.33544 29.1654 4.33331 27.8306 4.33331 25.9167V11.0833Z" stroke="#5E6368" strokeWidth="2" />
                    <ellipse cx="25" cy="13.875" rx="3.33333" ry="3.08333" fill="#5F6368" />
                </svg>
                <button
                    className="ml-3 px-3 py-2 button-primary-gradient rounded"
                    onClick={(e: FormEvent) => {

                        setFileName(null);
                        setImageData('');

                        e.preventDefault();
                        // eslint-disable-next-line no-lone-blocks
                        sendMessage(inputElement?.current?.value, null, imageData);

                        if (inputElement.current) {
                            inputElement.current.value = '';
                        }

                    }}
                >
                    Send
                </button>
            </div>
        </div >
    )
}

export default ChatMessage;