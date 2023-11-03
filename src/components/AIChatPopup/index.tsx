// Dependencies
import React, {FC, useState} from "react";
import classNames from "classnames";
import axios, {Axios, AxiosError} from "axios"

// Components
// Types
import {AIChatPopupProps} from "./types";
// Styles
import "./style.css";
import { newMessage } from "../../service/AiChatService";

import { RootState } from "../../redux/store";

// Export component

export const AIChatPopup: FC<AIChatPopupProps> = ({
  opened,
  onClose,
}) => {
  const userInfo = {
    name: 'Lucy Smith',
    avatar: '/images/avatars/Erick.png',
  };

  const [chats, setChats] = useState<any[]>([])

  const [inputValue, setInputValue] = useState<string>("")

  const handleSend = () => {
   setChats(prevValue => [...prevValue, {role: "user", content: inputValue}])
    
    setInputValue("")
   async function handleRequest() {
      await newMessage(chats).then(res => {
        setChats(prevValue => [...prevValue, {role: "assistant", content: res.data.content}])
      }).catch((err: AxiosError) => {
        console.log(err.message)
      })
    }    
   handleRequest()

  }

  const containerClass = classNames(
    'fixed top-0 left-0 z-[900] w-screen h-screen flex justify-center pt-36 transition-all',
    opened ? 'backdrop-blur' : 'opacity-0 pointer-events-none',
  );

  const popupClass = classNames(
    'w-[1500px] max-w-[90%] h-[90%] flex flex-col bg-white rounded-3xl card-shadow overflow-hidden transition-all',
    !opened && 'translate-y-40',
  );

  const popupTitleClass = classNames(
    'h-20 flex items-center bg-chat-popup-title text-white text-[1.875rem] font-semibold px-4'
  );

  const chatBotIconClass = classNames(
    'flex items-center justify-center bg-white border-2 border-lightBlue rounded-full',
  );

  return (
    <div className={containerClass}>
      <div className={popupClass}>
        <div className={popupTitleClass}>
          <div className={classNames(chatBotIconClass, 'w-[3.75rem] h-[3.75rem]')}>
            <img className="w-10" src="/images/icons/chat-bot-blue.svg" alt="" />
          </div>
          <div className="ml-3">AI Chat</div>
          <div
            className="w-10 h-10 flex items-center justify-center bg-white text-gray rounded-full ml-auto cursor-pointer"
            onClick={onClose}
          >
            <img className="w-4" src="/images/icons/close-gray.svg" alt="" />
          </div>
        </div>

        <div className="chat-content flex-1 overflow-auto">
          {chats?.map((chat, i) => (
            <div key={i} className="p-3 mb-2">
              {
                chat.role == 'user' ? (
                  <div className="max-w-[80%] flex justify-end ml-auto">
                  <div className="text-right">
                    <div className="text-gray-5c text-sm font-medium">{userInfo.name}</div>
                    <div className="bg-chat-speech text-white text-base font-medium leading-[1.25rem] rounded-[0.625rem] pl-5 pr-3 py-2 mt-1">
                      {chat.content}
                    </div>
                  </div>
                  <div className="w-10 h-10 flex-shrink-0 rounded-full ml-4 mt-6">
                    <img src={userInfo.avatar} alt="" />
                  </div>
                </div>
                ) :
                (
                  <div className="max-w-[80%] flex mt-2">
                  <div className={classNames(chatBotIconClass, 'w-11 h-11')}>
                    <img className="w-8" src="/images/icons/chat-bot-blue.svg" alt="" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="text-gray-5c text-sm font-medium">AI Chat</div>
                    <div className="text-lg font-light leading-[1.5rem] mt-1" dangerouslySetInnerHTML={{ __html: chat.content }} />
                  </div>
                </div>
                )
              }
     



            </div>
          ))}
        </div>

        <div className="flex px-5 pt-2 pb-5">
          <input
            className="flex-1 h-11 bg-gray-f9 border border-border rounded-[0.625rem] px-4 outline-none"
            placeholder="Send a message"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button 
            className="button-primary-gradient text-white text-base font-bold rounded-[0.625rem] px-4 ml-4"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
