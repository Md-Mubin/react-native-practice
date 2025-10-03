
import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from './Slices/TaskSlice'
import authSlice from './Slices/AuthSlice'

export const store = configureStore({
    reducer: {
        tasks: TaskSlice,
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;