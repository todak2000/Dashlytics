/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import type { PayloadAction } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";

type StateProps = {
  open: boolean;
};

// Mode
const OpenSlice = createSlice({
  name: "open",
  initialState: false,
  reducers: {
    setOpen: (_state: boolean, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setOpen } = OpenSlice.actions;

const store = configureStore({
  reducer: {
    open: OpenSlice.reducer,
  },
});

export default store;

export const open = (state: StateProps) => state.open;
