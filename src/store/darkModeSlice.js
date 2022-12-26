import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    toggleMode: (state, action) => {
      return !state;
    },
  }
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;