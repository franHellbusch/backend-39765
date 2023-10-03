import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  displayName: "",
  name: "",
  lastName: "",
  picture: "",
  age: 0,
  cart: "",
  role: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return initialState;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
