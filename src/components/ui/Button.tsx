"use client";
import { ReactNode } from "react";
import { RightArrow } from "../icons/Arrow";

type ViewAllButtonProps = {
  children: ReactNode; // ✅ lowercase
  onClick: () => void;
};

const ViewAllButton = ({ children, onClick }: ViewAllButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-Grey-800 hover:text-mBlue-600 transition flex items-center text-[2.51046vw] md:text-[1.210898vw] lg:text-[1vw] xl:text-[0.83333vw]"
    >
      {children}
      <RightArrow className="text-[3.76569vw] md:text-[1.816347vw] lg:text-[1.5vw] xl:text-[1.25vw] hover:text-mBlue-600 ml-1" />
    </button>
  );
};

export default ViewAllButton;
