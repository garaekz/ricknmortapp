import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    species: "",
    gender: "",
    status: "",
  },
  reducers: {
    toggleFilter: (state, action) => {
      const { type, value } = action.payload;
      switch (type) {
        case "species":
        case "status":
        case "gender":
          if (state[type] === value) {
            state[type] = "";
          } else {
            state[type] = value;
          }
          break;
      
        default:
          break;
      }
    },
    clearFilters: (state, action) => {
      state.species = "";
      state.gender = "";
      state.status = "";
    }
  }
});

export const { toggleFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;