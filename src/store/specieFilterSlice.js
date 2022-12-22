import { createSlice } from "@reduxjs/toolkit";

export const specieFilterSlice = createSlice({
  name: "specieFilter",
  initialState: {
    value: "",
  },
  reducers: {
    setSpecieFilter: (state, action) => {
      if (state.value === action.payload) {
        state.value = "";
      } else {
        state.value = action.payload;
      }
    }
  }
});

export const { setSpecieFilter } = specieFilterSlice.actions;
export default specieFilterSlice.reducer;