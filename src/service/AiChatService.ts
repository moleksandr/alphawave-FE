import axios, { AxiosError, AxiosResponse } from "axios"
import $api from "../http"
import { IAiChatResponse } from "../types/AiChatResponse"
import { IAiChatInput } from "../types"

export const newMessage = async (messages: IAiChatInput[]): Promise<AxiosResponse<IAiChatResponse>> => {
  console.log(messages)
   return await $api.post<IAiChatResponse>("/ai/new-message", JSON.stringify(messages))
}


