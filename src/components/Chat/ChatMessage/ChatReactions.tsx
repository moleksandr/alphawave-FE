const ChatReactions = (props: any) => {
    const { messageId, reactions: totalReactions, addReaction, customReactions } = props;

    return (
        <div className="group relative mr-20">
            <div className="opacity-0 group-hover:opacity-100 absolute flex items-center space-x-1 bg-white shadow-md rounded-md p-1 w-28">
                {
                    customReactions.map((reaction: any) => {
                        return (
                            <img width={20} src={reaction.url} alt="" className="rounded-xl cursor-pointer" onClick={() => addReaction(messageId, reaction.title)} />
                        )
                    })
                }
                <span className="text-xs font-bold">{totalReactions ? totalReactions.length : 0}</span>
            </div>
        </div>
    )
}

export default ChatReactions;