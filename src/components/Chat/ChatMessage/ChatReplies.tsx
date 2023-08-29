import { Avatar } from "../../Avatar";

const ChatReplies = (props: any) => {

    const { messages } = props;

    const ChatMessage: React.FC<any> = ({ index, id, user, message, timestamp }) => {
        if (!index) {
            return (
                <div className="chat-message mb-8 mt-5 bg-gray shadow-md">
                    <div className="flex items-start ml-2">
                        <div>
                            <Avatar avatarUrl={user.url} username={user.first_name + ' ' + user.last_name} size={30} />
                            <span className="block text-xs text-gray-400 mt-1">{timestamp}</span>
                        </div>
                        <div className="ml-2 pb-2">
                            <div className="font-bold text-xs text-cyan-800">{user.first_name + ' ' + user.last_name}</div>
                            {message.caption.match('data:', ';base64,') || message.caption === '' ? <br /> : <div className="text-sm pb-2">{message.caption}</div>}
                            {message.data === '' ? '' : <img src={message.data} alt="" width={412} height={229} />}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="chat-message mb-8">
                    <div className="flex items-start ml-2">
                        <div>
                            <Avatar avatarUrl={user.url} username={user.first_name + ' ' + user.last_name} size={30} />
                            <span className="block text-xs text-gray-400 mt-1">{timestamp}</span>
                        </div>
                        <div className="ml-2 pb-2">
                            <div className="font-bold text-xs text-cyan-800">{user.first_name + ' ' + user.last_name}</div>
                            {message.caption.match('data:', ';base64,') || message.caption === '' ? <br /> : <div className="text-sm pb-2">{message.caption}</div>}
                            {message.data === '' ? '' : <img src={message.data} alt="" width={412} height={229} />}
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="pt-2" style={{ height: '80%', overflowY: 'scroll' }}>
            {
                messages.map((message: any, index: number) => (
                    <ChatMessage
                        id={message.id}
                        key={index}
                        index={index}
                        user={message.user}
                        message={message.message}
                        timestamp={message.timestamp}
                    />
                ))
            }
        </div>
    )
}

export default ChatReplies;