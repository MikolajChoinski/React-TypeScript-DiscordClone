import {createSlice} from '@reduxjs/toolkit';
import {AuthSliceState} from "./auth/types.ts";


const appSlice = createSlice({
    name: "app",
    initialState: {
        channelId: null,
        channelName: null,
    },
    reducers: {
        setChannelInfo: (state: any, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },
    },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state: any) => state.app.channelId;
export const selectChannelName = (state: any) => state.app.channelName;

export const appReducer = appSlice.reducer;