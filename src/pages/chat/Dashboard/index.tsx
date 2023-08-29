import React, { useState } from "react";

// Components
import ChatMessage from "../../../components/Chat/ChatMessage";
import SideBar from "../../../components/Chat/ChatSidebar";
import Thread from "../../../components/Chat/ChatThread/Thread";

// Context
import { useChatContext, ChatProvider } from "../../../contexts/ChatContext";


const App: React.FC = () => {

  const [thread, setThread] = useState(false);
  const [root, setRoot] = useState("");

  const {
    activeUser,
    user,
    getUser,
    channels,
    users,
    messages,
    sendMessage,
    setMessages,
    activeChannel,
    setActiveChannel,
    addReaction,
    customReactions,
    getThreads,
    threads,
    setThreads,
    inviteToTheChannel,
    inviteToTheTeam
  } = useChatContext();

  const groups = ['Test 1 (+ 7)', 'How to Wash Cats', 'Secrets of Dark Matter'];

  return (
    <ChatProvider>
      <div className="flex h-screen bg-grey bg-opacity-20">
        <SideBar
          projects={channels}
          groups={groups}
          users={users}
          activeUser={activeUser}
          getUser={getUser}
          setActiveChannel={setActiveChannel}
        />
        {
          user.username || activeChannel.id ? <ChatMessage
            user={user}
            messages={messages}
            sendMessage={sendMessage}
            activeUser={activeUser}
            setMessages={setMessages}
            channel={activeChannel}
            reaction={addReaction}
            customReactions={customReactions}
            setThread={setThread}
            setRoot={setRoot}
            threads={threads}
            setThreads={setThreads}
            getThreads={getThreads}
            inviteToTheChannel={inviteToTheChannel}
            inviteToTheTeam={inviteToTheTeam}
          /> : ''
        }
        {
          thread ? <Thread
            user={user}
            messages={messages}
            sendMessage={sendMessage}
            activeUser={activeUser}
            setMessages={setMessages}
            channel={activeChannel}
            reaction={addReaction}
            customReactions={customReactions}
            setThread={setThread}
            thread={thread}
            root={root}
            threads={threads}
            setThreads={setThreads}
            getThreads={getThreads}
          /> : ''
        }
      </div >
    </ChatProvider >
  );
};

export default App;
