import TransitionLink from "@/components/ui/TransitionLink";
import {
  setSelectedCategory,
  setSubCategories,
} from "@/redux/slices/categoriesSlice";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MainCat = ({
  search,
  aside,
  onselectedCategory,
  setHoveredCategory,
}: {
  search?: boolean;
  aside?: boolean;
  onselectedCategory?: (item: string) => void;
  setHoveredCategory?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const MainCategories = useSelector(
    (state: RootState) => state.categories.mainCategories
  );
  const pathName = usePathname();
  const dispatch = useDispatch();

  if (!Array.isArray(MainCategories)) return null;

  const handleSelectedCategory = (item: string) => {
    dispatch(setSelectedCategory(item));
    onselectedCategory?.(item);
  };

  const handlehoveredCategory = (cat: string) => {
    if (setHoveredCategory) {
      setHoveredCategory(search ? false : true);
    }
    dispatch(setSubCategories(cat));
  };

  return (
    <>
      {MainCategories.slice(search ? 0 : 1).map((cat, index) => {
        const catLink =
          typeof cat?.link === "string"
            ? cat.link
            : `/categories/${encodeURIComponent(
                cat?.name?.toLowerCase?.() ?? "unknown"
              )}`;

        const catName = cat?.name ?? "Unknown";

        const isActive =
          catName === "All Categories"
            ? pathName === "/"
            : pathName?.startsWith(catLink) && catName !== "All Categories";
        return (
          <div
            key={index}
            onMouseEnter={() => handlehoveredCategory(catName)}
            className={`${search ? "px-6 py-3 hover:bg-Grey-50 w-full" : ""}`}
          >
            <TransitionLink
              href={catLink}
              onClick={() => handleSelectedCategory(catName)}
              className={`text-Grey-600 hover:text-sText text-sm transition-colors duration-300 ease-in-out leading-[20px] font-normal ${
                isActive ? "text-sText font-bold" : ""
              } ${aside ? "py-2 px-6 hover:bg-Grey-100" : "whitespace-nowrap"}`}
            >
              {catName}
            </TransitionLink>
          </div>
        );
      })}
    </>
  );
};

export default MainCat;
