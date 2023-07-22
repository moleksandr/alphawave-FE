import axios, { AxiosError } from 'axios';
import { server } from '../utils/setting'

export async function currentUser(token:any) {
  console.log(token)
  try{
    const response = await axios.get(`${server}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return true;
  } catch(error) {
    return false;
  }
}