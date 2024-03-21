import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: Number(localStorage.getItem("totalAmount")) || 0,
};

export const atmSlice = createSlice({
  name: "atm",
  initialState,
  reducers: {
    DepositAmount: (state, action) => {
      const { totalAmount } = action.payload;
      state.totalAmount += totalAmount;
      localStorage.setItem("totalAmount", state.totalAmount);
    },
    widthdrowAmount: (state, action) => {
      const { totalAmount } = action.payload;
      state.totalAmount -= totalAmount;
      localStorage.setItem("totalAmount", state.totalAmount);
    },
  },
});

export const { DepositAmount, widthdrowAmount } = atmSlice.actions;

export default atmSlice.reducer;
