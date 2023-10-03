import { configureStore } from "@reduxjs/toolkit";
import { userReducer, productReducer, cartReducer, ticketReducer } from "./states";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    ticket: ticketReducer,
  },
});
