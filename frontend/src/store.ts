import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import examConfigurationReducer from "./features/examConfigurationSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        examConfig: examConfigurationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;