import { AxiosResponse } from "axios"
import $api from "../http"
import { ICreateTeamResponse, ITeamResponse } from "../types/TeamResponse"


export const createTeam = async (teamName: string, jobTitle: string): Promise<AxiosResponse<ICreateTeamResponse>> => {
  return await $api.post<ICreateTeamResponse>(`/teams/create`, {teamName, jobTitle})
}

export const setSession = async (id: string): Promise<AxiosResponse> => {
  return await $api.get(`/teams/set-session/${id}`)
}

export const getMyOwnTeam = async (): Promise<AxiosResponse<ITeamResponse>> => {
  return await $api.get<ITeamResponse>(`/teams/my-own`)
}