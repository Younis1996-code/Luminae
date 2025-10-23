import {  CategoryData, SubCategory } from "@/data/categories";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  categories: CategoryData[];
  mainCategories: {
    name: string;
    link: string;
  }[];
  subCategories: SubCategory[];
  subCategoryImage: string | string[];
  selectedCategory: string;
  hoveredCategory: string
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
  subCategoryImage: '',
  selectedCategory: "All Categories",
  hoveredCategory: ''
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

    setSubCategories: (state, action: PayloadAction<string>) => {
      const chosenCategory = action.payload;
      state.hoveredCategory = chosenCategory;

      if (chosenCategory === "All Categories") {
        // collect all subcategories
        state.subCategories = state.categories.flatMap(
          (cat) => cat.subCategories || []
        );

        // collect all images (filter out empty)
        const allImages = state.categories
          .map((cat) => cat.image)
          .filter(Boolean) as string[];

        state.subCategoryImage = allImages;
      } else {
        const matchedCategory = state.categories.find(
          (cat) => cat.name === chosenCategory
        );

        state.subCategories = matchedCategory?.subCategories || [];
        state.subCategoryImage = matchedCategory?.image || "";
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
