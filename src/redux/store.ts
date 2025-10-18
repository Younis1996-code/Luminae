import { configureStore } from "@reduxjs/toolkit";
import flashSalesReducer from "./slices/flashSalesSlice";

export const store = configureStore({
  reducer: {
    flashSales: flashSalesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default store;
