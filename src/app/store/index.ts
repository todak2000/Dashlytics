/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import type { PayloadAction } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";

type StateProps = {
  open: boolean;
  isLoading: boolean;
};

// Theme Mode
const OpenSlice = createSlice({
  name: "open",
  initialState: true,
  reducers: {
    setOpen: (_state: boolean, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

// Loader
const LoaderSlice = createSlice({
  name: "isLoading",
  initialState: true,
  reducers: {
    setIsLoading: (_state: boolean, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setOpen } = OpenSlice.actions;
export const { setIsLoading } = LoaderSlice.actions;

const store = configureStore({
  reducer: {
    open: OpenSlice.reducer,
    isLoading: LoaderSlice.reducer,
  },
});

export default store;

export const open = (state: StateProps) => state.open;
export const isLoading = (state: StateProps) => state.isLoading;
