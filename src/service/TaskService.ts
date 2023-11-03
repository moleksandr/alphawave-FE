import { AxiosResponse } from "axios"
import $api from "../http"
import { ITaskResponse } from "../types/TaskResponse"


class TaskService {
  create = async (title: string, status: string, priority: string, order: number): Promise<AxiosResponse> => {
    return await $api.post(`/tasks/create`, {title, status, priority, order})
  }

  getById = async (id: string): Promise<AxiosResponse<ITaskResponse>> => {
    return await $api.get<ITaskResponse>(`/tasks/${id}`)
  }

  getAll = async (): Promise<AxiosResponse<ITaskResponse[]>> => {
    return await $api.get<ITaskResponse[]>(`/tasks/`)
  }

  changeStatus = async (id: string, status: string): Promise<AxiosResponse> => {
    return await $api.post(`/tasks/change-status`, {id, status})
  }

  update = async (id: string, title: string, status: string, priority: string, order: string): Promise<AxiosResponse> => {
    return await $api.post(`/tasks/update`, {id, title, status, priority, order})
  }

  delete = async (status: string): Promise<AxiosResponse> => {
    return await $api.delete(`/tasks/${status}`)
  }
}

export default TaskService
