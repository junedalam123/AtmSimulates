import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "./AtmSlice";

const store = configureStore({
  reducer: {
    atm: atmReducer
  }
});

export default store;
