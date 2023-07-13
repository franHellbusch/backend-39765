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
      state.products = state.products.map((p) => {
        if (p.id == prodId) {
          p = { ...p, ...product };
        }
        return p;
      });

      return state;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id != action.payload);
      return state;
    },
    removeAllProduct: (state) => initialState,
  },
});

export const { saveProducts, addProduct, updateProduct, removeProduct, removeAllProduct } =
  productSlice.actions;

export default productSlice.reducer;
