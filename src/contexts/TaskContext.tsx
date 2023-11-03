// Dependencies
import React, { useState, createContext, useContext, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskService from '../service/TaskService';

export enum TASK_STATE {
    HIGH = 'High',
    MEDIUM = 'Med',
    LOW = 'Low'
}

export enum TASK_STATUS {
    DELETE = 'del',
    DONE = 'done',
    ACTIVE = 'active'
}

export interface TASK {
    id: string;
    title: string;
    state: TASK_STATE;
    deleted_at?: string;
    completed_at?: string;
}

interface TaskContextProps {
    tasks: TASK[];
    deletedTasks: TASK[];
    finishedTasks: TASK[];
    addTask: (title: string) => void;
    deleteTask: (id: string) => void;
    getAllTask: () => void;
    undoDeletingTask: (id: string) => void;
    completeTask: (id: string) => void;
    undoCompletingTask: (id: string) => void;
    deleteAll: () => void;
    clearAll: () => void;
}

const initialValues = {
    tasks: [],
    deletedTasks: [],
    finishedTasks: [],
    addTask: () => {},
    deleteTask: () => {},
    getAllTask: () => {},
    undoDeletingTask: () => {},
    completeTask: () => {},
    undoCompletingTask: () => {},
    deleteAll: () => {},
    clearAll: () => {},
}

const TaskContext = createContext<TaskContextProps>(initialValues);

export const TaskProvider: FC<any> = ({ children }) => {
    const taskService = new TaskService
    const [tasks, setTasks] = useState<TASK[]>(initialValues.tasks);

    const getAllTask = () => {
        taskService.getAll().then((res) => {
            res.data.forEach(item => {
                let taskState = TASK_STATE.HIGH
                switch (item.priority) {
                    case TASK_STATE.HIGH:
                        taskState = TASK_STATE.HIGH
                        break;
                    case TASK_STATE.LOW:
                        taskState = TASK_STATE.LOW
                        break;
                    case TASK_STATE.MEDIUM:
                        taskState = TASK_STATE.MEDIUM
                        break;
                }
                const newTask: TASK = {
                    id: item.id,
                    title: item.title,
                    state: taskState,
                    deleted_at: "",
                    completed_at: "",
                };
                
                setTasks(prev => [...prev, newTask])
            })
        })
       
    }

    const addTask = (title: string) => {
        const newTask: TASK = {
            id: uuidv4(),
            title,
            state: TASK_STATE.HIGH,
        };
        
        taskService.create(title, TASK_STATUS.ACTIVE, TASK_STATE.HIGH, tasks.length)

        setTasks(prev => [...prev, newTask]);
     };

    const deleteTask = (id: string) => {
        taskService.changeStatus(id, TASK_STATUS.DELETE)
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            deleted_at: new Date().toLocaleString(),
        }) : task));
    };

    const undoDeletingTask = (id: string) => {
        taskService.changeStatus(id, TASK_STATUS.ACTIVE)
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            deleted_at: undefined,
        }) : task));
    };

    const completeTask = (id: string) => {
        taskService.changeStatus(id, TASK_STATUS.DONE)
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            completed_at: new Date().toLocaleString(),
        }) : task));
    };

    const undoCompletingTask = (id: string) => {
        taskService.changeStatus(id, TASK_STATUS.ACTIVE)
        setTasks(prev => prev.map((task) => task.id === id ? ({
            ...task,
            completed_at: undefined,
        }) : task));
     };

    const deleteAll = () => {
        taskService.delete(TASK_STATUS.DELETE)
        setTasks(prev => prev.filter(({ deleted_at }) => !deleted_at));
    };

    const clearAll = () => {
        taskService.delete(TASK_STATUS.DONE)
        setTasks(prev => prev.filter(({ completed_at }) => !completed_at));
    };

    const value = {
        tasks: tasks.filter(({ deleted_at, completed_at }) => !deleted_at && !completed_at),
        deletedTasks: tasks.filter(({ deleted_at }) => !!deleted_at),
        finishedTasks: tasks.filter(({ completed_at }) => !!completed_at),
        addTask,
        deleteTask,
        getAllTask,
        undoDeletingTask,
        completeTask,
        undoCompletingTask,
        deleteAll,
        clearAll,
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTaskContext = () => {
    return useContext(TaskContext);
}
