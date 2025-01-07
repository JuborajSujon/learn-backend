import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/tasks/taskSlice";
// import logger from "./middlewares/logger";

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
