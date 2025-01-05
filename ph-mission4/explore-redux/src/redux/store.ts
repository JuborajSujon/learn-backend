import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
