import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    categories: [],
    images: [],
  },

  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setCategories, setImages } = dataSlice.actions;
export default dataSlice.reducer;
