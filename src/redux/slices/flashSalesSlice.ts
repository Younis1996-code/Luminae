import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { flashSalesData } from "@/data/flashSales";
import { Product } from "@/types/product";


interface FlashSalesState {
  items: Product[];
}

const initialState: FlashSalesState = {
  items: flashSalesData,
};

const flashSalesSlice = createSlice({
  name: "flashSales",
  initialState,
  reducers: {
    setFlashSales: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    addFlashSale: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFlashSale: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setFlashSales, addFlashSale, removeFlashSale } =
  flashSalesSlice.actions;

export default flashSalesSlice.reducer;
