import React from "react";
import ContainerX from "../Containers/ContainerX";
import MainCat from "./MainCat";
import SubCat from "./SubCat";

const CatNav = ({ catNavOpen }: { catNavOpen: boolean }) => {
  const [hoveredCategory, setHoveredCategory] = React.useState<boolean>(false);
  return (
    <div
      className={`transition-all duration-300 origin-top hidden md:block ${
        catNavOpen
          ? "max-h-full opacity-100 scale-y-100"
          : "max-h-0 opacity-0 scale-y-0"
      } `}
    >
      <ContainerX
        className={` flex justify-between py-4 gap-4 bg-White overflow-x-auto`}
      >
        <MainCat setHoveredCategory={setHoveredCategory} />
      </ContainerX>
      {hoveredCategory && <SubCat />}
    </div>
  );
};

export default CatNav;
