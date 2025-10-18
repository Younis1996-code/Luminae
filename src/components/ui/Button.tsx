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
      className="text-Grey-800 hover:text-mBlue-600 transition flex items-center"
    >
      {children}
      <RightArrow className="text-sm hover:text-mBlue-600 ml-1" />
    </button>
  );
};

export default ViewAllButton;
