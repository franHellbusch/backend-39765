import { clearLocalStorage, getLocalStorage, setLocalStorage } from "@/utils";
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
  initialState: getLocalStorage("user") || initialState,
  reducers: {
    saveUser: (state, action) => {
      setLocalStorage("user", action.payload);
      return action.payload;
    },
    removeUser: (state) => {
      clearLocalStorage("user");
      return initialState;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
