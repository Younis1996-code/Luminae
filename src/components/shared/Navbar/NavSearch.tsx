'use client';

import DropDown1 from "@/components/ui/DropDown1";
import SearchIcon from "@/components/ui/svg/SearchIcon";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import MainCat from "./MainCat";
import { setSelectedCategory } from "@/redux/slices/categoriesSlice";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NavSearch = () => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const selectedCategory = useSelector(
    (state: RootState) => state.categories.selectedCategory
  );

   useEffect(() => {
    const saved = localStorage.getItem("selectedCategory");
    if (saved) dispatch(setSelectedCategory(saved));
  }, [dispatch]);

   const decodedPath = decodeURIComponent(pathName!.toLowerCase());
  const decodedCategory = selectedCategory?.toLowerCase() || "";

  const isActive =
    decodedCategory.length > 0 && decodedPath.includes(decodedCategory);

  const selectedValue = isActive ? selectedCategory : "All Categories";

  return (
    <div className="flex items-center justify-between gap-1 border border-Grey-200 rounded-sm px-3 py-2 w-full md:max-w-86.5">
      <input
        type="text"
        placeholder="Search Products"
        className="w-full border-none outline-none focus:outline-none text-sm font-normal leading-[20px] placeholder:text-Grey-400"
      />
      <div className="flex items-center gap-3 w-full min-w-fit xs:max-w-fit md:min-w-fit justify-end">
        <DropDown1
          className="pr-3 border-r border-Grey-100"
          size="w-6 h-6"
          initialValue={selectedCategory}
          selected1={selectedValue}
        >
          <div className="flex flex-col">
            <MainCat search />
          </div>
        </DropDown1>

        <button className="text-Grey-800 w-5 h-5 pointer-events-none">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default NavSearch;
