import { configureStore } from "@reduxjs/toolkit";
import currentIndexReducer from "../features/currentIndex";

export const store = configureStore({
  reducer: {
    currentIndex: currentIndexReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
