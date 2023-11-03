import { AxiosResponse } from "axios"
import $api from "../http"
import { IGetCurrentUserResponse } from "../types/UserResponse"

class UserService {
  getCurrentUser = async (): Promise<AxiosResponse<IGetCurrentUserResponse>> => {
    return await $api.get<IGetCurrentUserResponse>(`/users/me`, )
  }
}

export default UserService
