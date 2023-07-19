// Dependencies
import React, {useContext, useEffect, useState} from 'react'
// @ts-ignore
import { ChatEngineContext, ChatHeader } from 'react-chat-engine'

// Components
import { Avatar } from '../../Avatar';

// Export component
const NewChatHeader = () => {
    const { conn, chats, activeChat } = useContext(ChatEngineContext) as any;
    
    if (conn === null || chats === null || !chats[activeChat]) return <ChatHeader />

    const chat = chats[activeChat]

    let username = '';
    let avatarUrl = '';
    chat.people.forEach((chat_person: any) => {
        if (chat_person.person.userName !== conn.userName) {
            username = chat_person.person.username
            avatarUrl = chat_person.person.avatar
        }
    })

    return (
      <div className="w-full absolute top-0 bg-[#FFFFFF] z-10">
        <div className="flex items-center pt-[7px] ml-3 mr-6 pb-[10px] border-[#B9B9B9] border-b-[1px]">
          <Avatar avatarUrl={chat?.is_direct_chat ? avatarUrl : chat?.admin?.avatar} size={60} shadow />
          <p className="text-black text-3xl font-medium ml-[13px]">{chat?.is_direct_chat ? username : (chat?.title ?? conn?.userName)}</p>
          <button className="ml-auto">
            <img className="w-[47px] h-[47px]" src={'/images/icons/user-group.svg'} alt={'user group icon'} />
          </button>
        </div>
      </div>
    )
}

export default NewChatHeader;
