import React from "react";
import ContainerX from "../Containers/ContainerX";
import CartBtn from "./CartBtn";
import LangCurBtns from "./LangCurBtns";
import CatBtn from "./CatBtn";
import SignBtn from "./SignBtn";
import FavBtn from "./FavBtn";
import NavTrend from "./NavTrend";

const SecondNav = ({
  setCatNavOpen,
  catNavOpen,
}: {
  setCatNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  catNavOpen: boolean;
}) => {
  return (
    <ContainerX className="bg-Grey-800 py-2 hidden md:flex justify-between gap-[10%] lg:gap-0 mb-7">
      <div className="flex justify-between items-center lg:justify-start lg:gap-6 xl:gap-8 w-full lg:w-[30%] xl:w-[30%]">
        <CatBtn setCatNavOpen={setCatNavOpen} catNavOpen={catNavOpen} />

        <LangCurBtns />
      </div>

      <NavTrend />
      <div className="w-full lg:w-[32%] xl:w-[30%] flex justify-between lg:justify-end items-center gap-5">
        <SignBtn />

        <FavBtn />
        <CartBtn text />
      </div>
    </ContainerX>
  );
};

export default SecondNav;
