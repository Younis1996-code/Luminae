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
  isFavorite?: boolean; 
};

interface TopState {
  items: Top[];
}

const initialState: TopState = {
  items: topData.map((item) => ({ ...item, isFavorite: false })),
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    setTop: (state, action: PayloadAction<Top[]>) => {
      state.items = action.payload;
    },
    addTop: (state, action: PayloadAction<Top>) => {
      state.items.push({ ...action.payload, isFavorite: false });
    },
    removeTop: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.isFavorite = !item.isFavorite; 
    },
  },
});

export const { setTop, addTop, removeTop, toggleFavorite } = topSlice.actions;
export default topSlice.reducer;
