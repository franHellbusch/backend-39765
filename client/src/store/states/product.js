import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  page: 0,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
  totalPages: 1,
  prevLink: null,
  nextLink: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts: (state, action) => action.payload,
    addProduct: (state, action) => {
      state.products.push(action.payload);
      return state;
    },
    updateProduct: (state, action) => {
      const { product, prodId } = action.payload;
      return state.map((p) => {
        if (p.id == prodId) {
          p = { ...p, ...product };
        }
      });
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id != action.payload);
    },
    removeAllProduct: (state) => initialState,
  },
});

export const { saveProducts, addProduct, updateProduct, removeProduct, removeAllProduct } =
  productSlice.actions;

export default productSlice.reducer;
