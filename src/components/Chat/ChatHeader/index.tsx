// Dependencies
import React, { useContext } from 'react'
// @ts-ignore
import { ChatEngineContext } from 'react-chat-engine'

// Utils
import { getCurrentTime } from '../../../utils/timezone'

// Components
import { Avatar } from '../../Avatar';

// Export component
const NewChatHeader = () => {
    const { conn, chats, activeChat } = useContext(ChatEngineContext) as any;

    if (conn === null || chats === null || !chats[activeChat]) return <div />

    const chat = chats[activeChat]

    let otherOffset = 0;
    let firstName = '';
    let username = '';
    let avatarUrl = '';
    chat.people.forEach((chat_person: any) => {
        if (chat_person.person.userName !== conn.userName) {
            otherOffset = chat_person.person.custom_json.gmt_offset
            firstName = chat_person.person.first_name
            username = chat_person.person.username
            avatarUrl = chat_person.person.avatar
        }
    })

    return (
      <div className="w-full absolute top-0 bg-[#FFFFFF92] z-10">
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
