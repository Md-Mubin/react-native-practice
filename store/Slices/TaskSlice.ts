import { saveTasksToStorage } from '@/utils/storage';
import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';

export const TaskSlice = createSlice({
    name: 'allTasks',
    initialState: {
        allTaskArray: [],
    },
    reducers: {
        setTask: (state, action) => {
            state.allTaskArray = action.payload
        },

        addTasks: (state: any, action: { payload: any }) => {
            state.allTaskArray.unshift({ id: uuid.v4(), tasks: action.payload });
            saveTasksToStorage(state.allTaskArray);
        },

        editTaskSave: (state: any, action: { payload: any }) => {
            const index = state.allTaskArray.findIndex((i: any) => i.id === action.payload.id)

            if (index !== -1) {
                state.allTaskArray[index].tasks = action.payload.tasks;
                saveTasksToStorage(state.allTaskArray);
            }
        },

        deleteTask: (state: any, action: { payload: any }) => {
            state.allTaskArray = state.allTaskArray.filter((f: any) => f.id !== action.payload);
            saveTasksToStorage(state.allTaskArray);
        }
    },
})

export const { addTasks, editTaskSave, deleteTask, setTask } = TaskSlice.actions
export default TaskSlice.reducer