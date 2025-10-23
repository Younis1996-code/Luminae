import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Paragraph from "../Typograpgy/Paragraph";
import CardImage from "../CardImage";

const SubCat = ({ hoveredCategory1 }: { hoveredCategory1?: boolean }) => {
  const subCats = useSelector(
    (state: RootState) => state.categories.subCategories
  );
  const subImage = useSelector(
    (state: RootState) => state.categories.subCategoryImage
  );
  const hoveredCategory = useSelector(
    (state: RootState) => state.categories.hoveredCategory
  );

  if (!subCats || subCats.length === 0) return null;
  return (
    <div
      className={`absolute hidden md:grid grid-cols-6 gap-4 left-1/2 -translate-x-1/2 bg-White shadow-lg rounded-t-sm rounded-b-lg p-6 z-50 w-full max-w-[87.5vw] transition-all duration-800 origin-top ease-out ${
        hoveredCategory1
          ? "opacity-100 scale-y-100 visible"
          : "opacity-0 scale-y-95 invisible pointer-events-none"
      }`}
    >
      <div
        className={`grid grid-cols-4 gap-x-12 gap-y-10 col-span-4 w-full max-w-fit`}
      >
        {subCats.map((subCat) => (
          <div
            key={subCat.title}
            className={`w-full flex flex-col gap-4 max-w-fit h-fit ${
              subCat.title === "Clothes" ? "row-span-2" : ""
            }`}
          >
            <Paragraph
              size="p14"
              weight="bold"
              lineH="lh20"
              className="text-Grey-800 w-full"
            >
              {subCat.title.toUpperCase()}
            </Paragraph>

            {subCat.items.length > 0 && (
              <ul className="w-full flex flex-col gap-2">
                {subCat.items.map((item) => (
                  <li key={item} className="">
                    <Paragraph
                      size="p14"
                      weight="normal"
                      lineH="lh20"
                      className="text-Grey-600"
                    >
                      {item}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <CardImage
        src={subImage as string}
        alt={`${hoveredCategory} category image`}
        className="col-span-2"
        objectType="contain"
      />
    </div>
  );
};

export default SubCat;
