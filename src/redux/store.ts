// store/store.ts
import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from "./userSlice.ts";
import { appReducer } from './appSlice.ts';
// Import your reducers here
// import counterReducer from './counterReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
    },
});

export default store;