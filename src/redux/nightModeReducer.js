import { createSlice } from "@reduxjs/toolkit";

const nightModeSlice = createSlice({
  name: "nightmode",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleNightMode: (state) => {
      state.toggle = false;
    },
  },
});

export const { toggleNightMode } = nightModeSlice.actions;

export default nightModeSlice.reducer;
