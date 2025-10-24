import { trendingData } from "@/data/trending";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface TrendingState {
  items: Product[];
}

const initialState: TrendingState = {
  items: trendingData,
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrending: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    addTrending: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeTrending: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setTrending, addTrending, removeTrending } = trendingSlice.actions;

export default trendingSlice.reducer;

