import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../utils/setting';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config;
})

export default $api;