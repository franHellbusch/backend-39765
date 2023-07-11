import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  name: "",
  lastName: "",
  age: 0,
  cart: "",
  role: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => action.payload,
    removeUser: (state) => initialState,
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
