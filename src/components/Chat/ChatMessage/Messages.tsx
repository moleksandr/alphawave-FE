import { Avatar } from "../../Avatar";
import ChatReactions from "./ChatReactions";

const Message = (props: any) => {
    const {
        messages,
        reaction,
        customReactions,
        setThread,
        getThreads,
        setRoot
    } = props;


    const ChatMessage: React.FC<any> = ({ replies, id, user, message, type, timestamp, reactions, addReaction, customReactions }) => {
        if (type === 'receiver') {
            return (
                <div className="chat-message mb-8">
                    <div className="flex items-start ml-2">
                        <div>
                            <Avatar avatarUrl={user.url} username={user.first_name + ' ' + user.last_name} size={30} />
                            <span className="block text-xs text-gray-400 mt-1">{timestamp}</span>
                        </div>
                        <div className="ml-2">
                            <div className="font-bold text-xs text-cyan-800">{user.first_name + ' ' + user.last_name}</div>
                            {message.caption.match('data:', ';base64,') || message.caption === '' ? <br /> : <div className="text-sm pb-2">{message.caption}</div>}
                            {message.data === '' ? '' : <img src={message.data} alt="" width={412} height={229} />}
                            {<ChatReactions reactions={reactions} addReaction={addReaction} messageId={id} customReactions={customReactions} />}
                            <p className="text-cyan-800 text-xs font-bold py-1 mt-5 cursor-pointer" onClick={() => {
                                setThread(user);
                                getThreads(id);
                                setRoot(id);
                            }}>{`${replies} reply`}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="chat-message mb-8 flex items-center justify-end">
                    <div className="ml-2">
                        <div className="font-bold text-xs text-cyan-800 float-right">{user.first_name + ' ' + user.last_name}</div>
                        {message.caption.match('data:', ';base64,') || message.caption === '' ? <br /> : <div className="bg-gradient-to-r from-brandBlueDark to-brandBlue mt-4 pl-4 pr-4 pt-2 pb-2 rounded-lg text-white text-sm">{message.caption}</div>}
                        {message.data === '' ? '' : <img src={message.data} alt="" width={412} height={229} />}
                        {<ChatReactions reactions={reactions} addReaction={addReaction} messageId={id} customReactions={customReactions} />}
                        <p className="text-cyan-800 text-xs font-bold py-1 mt-5 cursor-pointer" onClick={() => {
                            setThread(user);
                            getThreads(id);
                            setRoot(id);
                        }}>{`${replies} reply`}</p>
                    </div>
                    <div className="flex flex-col ml-2 mt-6">
                        <Avatar avatarUrl={user.url} username={user.first_name + ' ' + user.last_name} size={30} />
                        <span className="text-xs text-gray-400 mt-1">{timestamp}</span>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="pt-2" style={{ height: '80%', overflowY: 'scroll' }}>
            {messages.map((message: any, index: number) => {
                return (
                    <ChatMessage
                        id={message.id}
                        key={index}
                        user={message.user}
                        message={message.message}
                        type={message.type}
                        timestamp={message.timestamp}
                        reactions={message.reactions}
                        addReaction={reaction}
                        customReactions={customReactions}
                        replies={message.replies}
                    />
                )
            }
            )}
        </div>
    )
}

export default Message;