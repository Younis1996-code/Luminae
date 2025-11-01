import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { topData } from "@/data/top";
import { Product } from "@/types/product";


interface TopState {
  items: Product[];
}

const initialState: TopState = {
  items: topData.map((item) => ({ ...item, isFavorite: false })),
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    setTop: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    addTop: (state, action: PayloadAction<Product>) => {
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
