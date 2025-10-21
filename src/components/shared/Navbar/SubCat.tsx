import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Paragraph from "../Typograpgy/Paragraph";

const SubCat = () => {
  const subCats = useSelector(
    (state: RootState) => state.categories.subCategories
  );

  if (!subCats || subCats.length === 0) return null;
  return (
    <div className="absolute hidden md:grid grid-cols-4 gap-x-12 gap-y-10 left-1/2 -translate-x-1/2 bg-White shadow-lg rounded-lg p-6 z-50 min-w-fit">
      {subCats.map((subCat) => (
        <div
          key={subCat.title}
          className={`w-full flex flex-col gap-4 min-w-fit h-fit ${
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
  );
};

export default SubCat;
