import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import flashSalesReducer from "./slices/flashSalesSlice";
import categoriesReducer from "./slices/categoriesSlice";
import langCurSliceReducer from "./slices/langCurSlice";
import trendingReducer from "./slices/trendingSlice";


export const makeStore = () => {
  return configureStore({
    reducer: {
      flashSales: flashSalesReducer,
      categories: categoriesReducer,
      langCurSlice: langCurSliceReducer,
      trending: trendingReducer,
    },
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()