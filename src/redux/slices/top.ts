import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { topData } from "@/data/top";

export type Top = {
  id: number;
  brand: string;
  title: string;
  reviews: number;
  price: number;
  oldPrice: number;
  image: string;
};

interface TopState {
  items: Top[];
}

const initialState: TopState = {
  items: topData,
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    setTop: (state, action: PayloadAction<Top[]>) => {
      state.items = action.payload;
    },
    addTop: (state, action: PayloadAction<Top>) => {
      state.items.push(action.payload);
    },
    removeTop: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setTop, addTop, removeTop } = topSlice.actions;
export default topSlice.reducer;
