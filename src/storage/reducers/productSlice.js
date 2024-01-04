import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    createProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createProduct } = productSlice.actions;
export default productSlice.reducer;
