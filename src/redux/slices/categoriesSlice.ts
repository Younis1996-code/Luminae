import {  CategoryData, SubCategory } from "@/data/categories";
import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  categories: CategoryData[];
  mainCategories: {
    name: string;
    link: string;
  }[];
  subCategories: SubCategory[];
  selectedCategory: string
}

const initialState: CategoryState = {
  categories: [],
  mainCategories: [
    {
      name: "All Categories",
      link: "/",
    },
  ],
  subCategories: [],
  selectedCategory: "All Categories",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,

  reducers: {
    setMainCategories: (state, action) => {
      state.categories = action.payload;
      const categoriesNames = action.payload.map((category: CategoryData) => {
        const catName =
          typeof category.name === "string"
            ? category.name
            : JSON.stringify(category.name) || "Unknown";

        return {
          name: catName,
          link: `/categories/${encodeURIComponent(catName.toLowerCase())}`,
        };
      });
      state.mainCategories = [
        { name: "All Categories", link: "/" },
        ...categoriesNames,
      ];
    },

    setSubCategories: (state, action) => {
  const choosenCategory = action.payload;

  if (choosenCategory === "All Categories") {
    state.subCategories = state.categories.flatMap(
      (cat) => cat.subCategories || []
    );
  } else {
    state.subCategories =
      state.categories.find((cat) => cat.name === choosenCategory)?.subCategories || [];
  }
},


    setSelectedCategory: (state, action) => {
        state.selectedCategory = action.payload;
        if (typeof window !== "undefined") localStorage.setItem("selectedCategory", action.payload);
    },
  },
});

export const { setMainCategories, setSubCategories, setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
