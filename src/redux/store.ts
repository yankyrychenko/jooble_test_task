import { configureStore } from "@reduxjs/toolkit";
import { forecastSlice } from "./forecast/forecast.slice";

export const store = configureStore({
  reducer: {
    forecast: forecastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
