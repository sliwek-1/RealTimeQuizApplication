import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: String,
    surrname: String,
    login: String,
    email: String,
    uniqueId: String,
}

const initialState: UserState = {
    name: "",
    surrname: "",
    login: "",
    email: "",
    uniqueId: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserToStorage: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.surrname = action.payload.surrname;
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.uniqueId = action.payload.uniqueId;
        },
        removeUserFromStorage: (state) => {
            state.name = "";
            state.surrname = "";
            state.login = "";
            state.email = "";
            state.uniqueId = "";
        },
    }
})

export const {addUserToStorage, removeUserFromStorage} = userSlice.actions;

export default userSlice.reducer;