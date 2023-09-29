import {RootState} from "../store.ts";
import {USER_SLICE_NAME} from "../userSlice.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (state: RootState) => state[USER_SLICE_NAME];

const isLogged = createSelector(root, (state) => state.isLogged);

export const authSelectors = {isLogged};