import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import $api from '../../http'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { ITaskResponse } from '../../types/TaskResponse'
import reducers from '../reducers'

export const fetchCreateTask = createAsyncThunk("tasksCreate", async ({title, status, priority, order}: any, {rejectWithValue}) => {
  const res = await $api.post("tasks/create", {title, status, priority, order}).then((res) => {
    return res.data
  }).catch((err: AxiosError) => {
    return err
  }) 
  return res
})

export const fetchGetTasks = createAsyncThunk("tasksGet", async () => {
  const res = await $api.get("tasks/").then((res) => {
    return res
  }).catch((err: AxiosError) => {
    return err
  }) 
  return res
})


export const fetchDeleteTask = createAsyncThunk("tasksDeleteTask", async ({id}: any, {rejectWithValue}) => {
  const res = await $api.post(`tasks/delete/${id}`).then((res) => {
    return res
  }).catch((err: AxiosError) => {
    return err
  }) 
  return res
})

export const fetchFinishedTask = createAsyncThunk("tasksFinishedTask", async ({id}: any, {rejectWithValue}) => {
  const res = await $api.post(`tasks/finished/${id}`).then((res) => {
    return res
  }).catch((err: AxiosError) => {
    return err
  }) 
  return res
})

export const fetchDeleteAll = createAsyncThunk("tasksDeleteAll", async () => {
  const res = await $api.delete(`tasks/delete`).then((res) => {
    return res
  }).catch((err: AxiosError) => {
    return err
  }) 
  return res
})

export const fetchClearAll = createAsyncThunk("tasksClearAll", async () => {
  const res = await $api.delete(`tasks/clear`).then((res) => {
    return res
  }).catch((err: AxiosError) => {
    return err
  }) 
  return res
})

export interface TasksState {
  loading: boolean;
  tasks: ITaskResponse[];
  finishedTasks: ITaskResponse[];
  deletedTasks: ITaskResponse[];
  status: 'loading' | 'loaded' | 'error';
  error: null | any;
  isError: boolean;
  success: boolean;
}

const initialState: TasksState = {
  loading: true,
  tasks: [],
  finishedTasks: [],
  deletedTasks: [],
  status: 'loading',
  error: null,
  isError: false,
  success: false,
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = action.payload
      state.tasks = [...state.tasks, newTask];
    }
  },
  extraReducers: {
    // Create Task
    [fetchCreateTask.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
      state.success = false
 
    },
    [fetchCreateTask.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      
      state.status = 'loaded'
      state.success = true

      const newTask: ITaskResponse = {
        id: action.payload.id,
        title: action.meta.arg.title,
        priority: action.meta.arg.priority,
        order: action.meta.arg.order
      };
      console.log(newTask.id)
      state.tasks = [...state.tasks, newTask];
     
    },
    [fetchCreateTask.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.error = payload
    },
    // Get tasks
    [fetchGetTasks.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
 
    },
    [fetchGetTasks.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      state.tasks = action?.payload.data.activeTasks
      state.finishedTasks = action?.payload.data.finishedTasks
      state.deletedTasks = action?.payload.data.deletedTasks
      state.status = 'loaded'
    },
    [fetchGetTasks.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.error = payload
    },
    // DeleteTask
    [fetchDeleteTask.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
  
    },
    [fetchDeleteTask.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      state.status = 'loaded'
      const deletedTask = action.meta.arg.id;
      const task = state.tasks.find(task => task.id === deletedTask);
      state.tasks = state.tasks.filter(task => task.id !== deletedTask)
      if (task) {
        state.deletedTasks.push(task)
      }      
    },
    [fetchDeleteTask.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.error = payload
    },
    // Finished Task
    [fetchFinishedTask.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
  
    },
    [fetchFinishedTask.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      const finishedTaskId = action.meta.arg.id;
      const task = state.tasks.find(task => task.id === finishedTaskId);
      state.tasks = state.tasks.filter(task => task.id !== finishedTaskId)
      
      
      if (task) {
        state.finishedTasks.push(task)
      }      
      state.status = 'loaded'
    },
    [fetchFinishedTask.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.error = payload
    },
    // DeleteAll
    [fetchDeleteAll.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
  
    },
    [fetchDeleteAll.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      state.deletedTasks = []
      state.status = 'loaded'
    },
    [fetchDeleteAll.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.error = payload
    },

    // Clear All
    [fetchClearAll.pending.type]: (state) => { 
      state.isError = false
      state.loading = true
      state.status = 'loading'
  
    },
    [fetchClearAll.fulfilled.type]: (state, action) => {
      state.isError = false
      state.loading = false
      state.finishedTasks = []
      state.status = 'loaded'
    },
    [fetchClearAll.rejected.type]: (state, {payload}) => {
      state.loading = false
      state.status = 'error'
      state.isError = true
      state.error = payload
    },

  },
})


export const tasksReducer = tasksSlice.reducer
