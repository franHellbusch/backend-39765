import { configureStore } from "@reduxjs/toolkit";
import { userReducer, productReducer, cartReducer } from "./states";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
