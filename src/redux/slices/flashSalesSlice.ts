import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { flashSalesData } from "@/data/flashSales";

export type FlashSale = {
  id: number;
  title: string;
  description: string;
  newPrice: number;
  oldPrice: number;
  rating: number;
  image: string;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};

interface FlashSalesState {
  items: FlashSale[];
}

const initialState: FlashSalesState = {
  items: flashSalesData,
};

const flashSalesSlice = createSlice({
  name: "flashSales",
  initialState,
  reducers: {
    setFlashSales: (state, action: PayloadAction<FlashSale[]>) => {
      state.items = action.payload;
    },
    addFlashSale: (state, action: PayloadAction<FlashSale>) => {
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
