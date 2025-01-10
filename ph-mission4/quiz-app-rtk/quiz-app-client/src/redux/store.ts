import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./features/quiz/quizSlice";
import { quizApi } from "./api/quizApi";

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
