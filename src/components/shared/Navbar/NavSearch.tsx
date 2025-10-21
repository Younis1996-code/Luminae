import DropDown1 from "@/components/ui/DropDown1";
import SearchIcon from "@/components/ui/svg/SearchIcon";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import MainCat from "./MainCat";
import { setSelectedCategory } from "@/redux/slices/categoriesSlice";
import { useEffect } from "react";

const NavSearch = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.categories.selectedCategory
  );

   useEffect(() => {
    const saved = localStorage.getItem("selectedCategory");
    if (saved) dispatch(setSelectedCategory(saved));
  }, [dispatch]);

  return (
    <div className="flex items-center justify-between gap-1 border border-Grey-200 rounded-sm px-3 py-2 w-full md:max-w-86.5">
      <input
        type="text"
        placeholder="Search Products"
        className="max-xs:max-w-[45%] xs:flex-1 xs:min-w-fit border-none outline-none focus:outline-none text-sm font-normal leading-[20px] placeholder:text-Grey-400"
      />
      <div className="flex items-center gap-3 w-fit 2xl:min-w-fit">
        <DropDown1
          className="pr-3 border-r border-Grey-100"
          size="w-6 h-6"
          initialValue={selectedCategory}
          selected1={selectedCategory}
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
