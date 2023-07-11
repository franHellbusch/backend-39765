import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveCart: (state, action) => action.payload,
    removeAllProductsInCart: (state) => initialState,
  },
});

export const { saveCart, removeAllProductsInCart } = cartSlice.actions;

export default cartSlice.reducer;
