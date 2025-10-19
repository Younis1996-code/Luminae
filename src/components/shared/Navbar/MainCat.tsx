import TransitionLink from "@/components/ui/TransitionLink";
// import { usePathname } from 'next/navigation';
import React from "react";

const categories: string[] = [
  "All Categories",
  "Women",
  "Male",
  "Mother-Child",
  "Home & Furniture",
  "Super market",
  "Cosmetics",
  "Shoe & Bag",
  "Electronic",
  "Sport & Outdoor",
  "Best seller",
];

const MainCat = ({ search, aside }: { search?: boolean; aside?: boolean }) => {
  // const pathName = usePathname();
  return (
    <>
      {categories.slice(search ? 0 : 1).map((cat, index) => {
        // const isActive =
        //       pathName === href || (pathName?.startsWith(href) && href !== "/");

        return (
          <TransitionLink
            key={index}
            href="#"
            className={`text-Grey-600 hover:text-sText transition-colors duration-300 ease-in-out leading-[20px] font-normal ${
              aside
                ? "py-2 px-6 hover:bg-Grey-100 text-sm"
                : "text-[1.41271vw] lg:text-sm"
            }`}
          >
            {cat}
          </TransitionLink>
        );
      })}
    </>
  );
};

export default MainCat;
