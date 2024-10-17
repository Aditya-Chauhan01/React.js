import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

// store ko bhi reducers ki knowledge honi chahiye
export const store = configureStore({
    reducer: todoReducer
})