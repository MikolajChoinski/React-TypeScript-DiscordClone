// store/counterReducer.ts
import {createSlice} from '@reduxjs/toolkit';
import {AuthSliceState} from "./auth/types.ts";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        // TODO: example action, remove later
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;
export const userReducer = userSlice.reducer;