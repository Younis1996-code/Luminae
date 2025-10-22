import { trendingData } from "@/data/trending";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Trending = {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  price: number;
  imageSrc: string;
};

interface TrendingState {
  items: Trending[];
}

const initialState: TrendingState = {
  items: trendingData,
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrending: (state, action: PayloadAction<Trending[]>) => {
      state.items = action.payload;
    },
    addTrending: (state, action: PayloadAction<Trending>) => {
      state.items.push(action.payload);
    },
    removeTrending: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setTrending, addTrending, removeTrending } = trendingSlice.actions;

export default trendingSlice.reducer;

