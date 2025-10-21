import Dropdown from "@/components/ui/Dropdown";
import React from "react";

const currency: string[] = ["USD", "EUR", "GBP", "INR", "JPY", "CNY", "KRW"];
export const lang: string[] = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
];

const LangCurBtns = ({ aside }: { aside?: boolean }) => {
  return (
    <div
      className={`flex ${
        aside ? "flex-col w-full" : "gap-4 flex-row items-center"
      }`}
    >
      <Dropdown white={aside ? false : true} data={currency} side={aside} />
      <Dropdown white={aside ? false : true} data={lang} side={aside} />
    </div>
  );
};

export default LangCurBtns;
