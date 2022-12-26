import { createSlice } from "@reduxjs/toolkit";

export const filterMenuSlice = createSlice({
  name: "filterMenu",
  initialState: false,
  reducers: {
    toggleFilterMenu: (state, action) => {
      return !state;
    },
  }
});

export const { toggleFilterMenu } = filterMenuSlice.actions;
export default filterMenuSlice.reducer;