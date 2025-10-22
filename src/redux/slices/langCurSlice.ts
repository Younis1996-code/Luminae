import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string;
  currency: string;
}

const initialState: LanguageState = {
  language: typeof window !== "undefined" ? localStorage.getItem("language") || "English" : "English",
  currency: typeof window !== "undefined" ? localStorage.getItem("currency") || "USD" : "USD",
};

const langCurSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
      if (typeof window !== "undefined") localStorage.setItem("language", action.payload);
    },
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
      if (typeof window !== "undefined") localStorage.setItem("currency", action.payload);
    },
  },
});

export const { setLanguage, setCurrency } = langCurSlice.actions;
export default langCurSlice.reducer;
