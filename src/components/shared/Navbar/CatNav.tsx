import React from "react";
import ContainerX from "../Containers/ContainerX";
import MainCat from "./MainCat";

const CatNav = ({ catNavOpen }: { catNavOpen: boolean }) => {
  return (
    <div
      className={`transition-all duration-300 origin-top hidden md:block ${
        catNavOpen
          ? "max-h-full opacity-100 scale-y-100"
          : "max-h-0 opacity-0 scale-y-0"
      } overflow-hidden`}
    >
      <ContainerX className={`flex justify-between py-4 bg-White`}>
        <MainCat />
      </ContainerX>
    </div>
  );
};

export default CatNav;
