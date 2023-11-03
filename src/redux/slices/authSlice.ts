import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import $api from '../../http'
import { IAuthResponse } from '../../types/AuthResponse'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { IGetCurrentUserResponse } from '../../types/UserResponse'
import { API_URL } from '../../utils/setting'

const accessToken = localStorage.getItem('access_token')
  ? localStorage.getItem("access_token")
  : null

export const fetchLogin = createAsyncThunk("authLogin", async ({email, password}: any, {rejectWithValue}) => {
  const res = await $api.post<IAuthResponse>("users/sign-in", {email, password}).then((res) => {
    return res
  }).catch((err: AxiosError) => {
    if (err.response?.status === 400) {
      toast.error("Input Error")
    } else if (err.response?.status === 404) {
      toast.warning("user with such email and password doesn't exists")
    } else if (err.response?.status === 400) {
      toast.warning("Incorrect Email or Password")
    } else if (err.response?.status === 500) {
      toast.warning("Thre was an internal server bug, please try again later")
    }
    return rejectWithValue(err?.response)
  }) 
  console.log(res)
  return res
})

export const fetchCheckAuth = createAsyncThunk("authCheckAuth", async () => {
  const { data } = await axios.get(`${API_URL}/users/auth/refresh`, {withCredentials: true})
  return data
})

export const fetchGetCurrentUser = createAsyncThunk("authGetCurrentUser", async () => {
  const { data } = await $api.get("users/me")
  return data
})

export const fetchRegister = createAsyncThunk("authRegister", async ({firstName, lastName, jobTitle, email, password}: any, {rejectWithValue}) => {
  const res = await $api.post("users/sign-up", {firstName, lastName, jobTitle, email, password}).then((res) => {
    return res
  }).catch((err: AxiosError) => {
    if (err.response?.status === 409) {
      toast.warning("Account already exist")
    } else if (err.response?.status === 400) {
      toast.error("Input Error")
    } else if (err.response?.status === 500) {
      toast.error("Internal server error")
    }
  })
  return res
})

export const fetchResendVerification = createAsyncThunk("authResendVerification", async ({email}: any) => {
  const { data } = await $api.post("users/resend-verification", {email})
  return data
})

export const fetchLogOut = createAsyncThunk("authLogOut", async () => {
  const { data } = await $api.post("users/logout")
  return data
})


export interface AuthState {
  loading: boolean;
  isAuth: boolean;
  tokenInfo: null | IAuthResponse;
  userInfo: null | IGetCurrentUserResponse;
  status: 'loading' | 'loaded' | 'error';
  error: null | any;
  isUserNotVerify: boolean;
  isError: boolean;
  isRefreshToken: boolean;
  success: boolean;
}

const initialState: AuthState = {
  loading: true,
  isAuth: false,
  tokenInfo: {accessToken: accessToken, refreshToken: null, mattermostToken: null,},
  userInfo: null,
  status: 'loading',
  error: null,
  isUserNotVerify: false,
  isError: false,
  isRefreshToken: false,
  success: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login
    [fetchLogin.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.isAuth = false
      state.status = 'loading'
      state.tokenInfo = null
    },
    [fetchLogin.fulfilled.type]: (state, action) => {
      state.isError = false

      state.isAuth = true
      state.loading = false
      state.status = 'loaded'
      state.tokenInfo = action.payload.data
      localStorage.setItem('access_token', action.payload.data.accessToken)
      
    },
    [fetchLogin.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isAuth = false
      state.isError = true
      state.error = payload
      if (payload?.status === 401) {
        state.isUserNotVerify = true; 
      } else {
        state.isUserNotVerify = false;
      }
      state.tokenInfo = null
    },

  // checkAuth
    [fetchCheckAuth.pending.type]: (state) => { 
      state.isError = false
      state.isRefreshToken = true
      state.loading = true
      state.status = 'loading'
      state.tokenInfo = null
    },
    [fetchCheckAuth.fulfilled.type]: (state, action) => {
      state.isError = false

      state.isAuth = true
      state.loading = false
      state.status = 'loaded'
      state.tokenInfo = action.payload
      localStorage.setItem('access_token', action.payload.accessToken)
      state.isRefreshToken = false
    },
    [fetchCheckAuth.rejected.type]: (state) => {
      state.isAuth = false
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.tokenInfo = null
    },

    // users
    [fetchGetCurrentUser.pending.type]: (state) => { 
      state.isError = false

      state.loading = true
      state.status = 'loading'

    },
    [fetchGetCurrentUser.fulfilled.type]: (state, action) => {
      state.isError = false

      state.loading = false

      state.status = 'loaded'

      state.userInfo = action.payload
      localStorage.setItem('lastVisitTime', action.payload.lastVisitTime)
    },
    [fetchGetCurrentUser.rejected.type]: (state) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.userInfo = null
    },

    // register
    [fetchRegister.pending.type]: (state) => { 
      state.isError = false
      state.success = false
      state.loading = true
      state.status = 'loading'
    },
    [fetchRegister.fulfilled.type]: (state, action) => {
      state.success = true
      state.isError = false
      state.loading = false
      state.status = 'loaded'
    },
    [fetchRegister.rejected.type]: (state) => {
      state.success = false
      state.loading = false
      state.status = 'error'
      state.isError = true
    },

    // resend verification
    [fetchResendVerification.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
    },
    [fetchResendVerification.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      state.status = 'loaded'
    },
    [fetchResendVerification.rejected.type]: (state) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
    },

    // logout
    [fetchLogOut.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
    },
    [fetchLogOut.fulfilled.type]: (state, action) => {
      state.isError = false
      state.isAuth = false
      state.tokenInfo = null
      state.userInfo = null
      state.loading = false
      state.status = 'loaded'
      // localStorage.removeItem('access_token')
    },
    [fetchLogOut.rejected.type]: (state) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
    },

  },
})


export const authReducer = authSlice.reducer
