import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    saveTickets: (state, action) => action.payload,
  },
});

export const { saveTickets } = ticketSlice.actions;

export default ticketSlice.reducer;
