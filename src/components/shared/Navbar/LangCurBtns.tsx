import DropDown1 from "@/components/ui/DropDown1";
import TransitionLink from "@/components/ui/TransitionLink";
import { setCurrency, setLanguage } from "@/redux/slices/langCurSlice";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const currencyOptions: string[] = [
  "USD",
  "EUR",
  "GBP",
  "INR",
  "JPY",
  "CNY",
  "KRW",
];
const langOptions: string[] = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
];

const LangCurBtns = ({ aside }: { aside?: boolean }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { language, currency } = useSelector(
    (state: RootState) => state.langCurSlice
  );
  const [selected, setSelected] = useState({
    language: language || "English",
    currency: currency || "USD",
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleLanguageSelect = (lang: string) => {
    dispatch(setLanguage(lang));
    setSelected({ language: lang, currency: currency });
  };

  const handleCurrencySelect = (curr: string) => {
    dispatch(setCurrency(curr));
    setSelected({ language: language, currency: curr });
  };

  return (
    <div
      className={`flex ${
        aside ? "flex-col w-full" : "gap-4 flex-row items-center"
      }`}
    >
      <DropDown1
        white={!aside}
        side={aside}
        selected1={selected.currency}
        initialValue={currency}
      >
        <div className="flex flex-col ">
          {currencyOptions.map((curr) => (
            <TransitionLink
              key={curr}
              href={`${pathname}?lang=${language.toLowerCase()}&currency=${curr.toLowerCase()}`}
              onClick={() => handleCurrencySelect(curr)}
              className={`${
                curr === selected.currency
                  ? "bg-Grey-100 text-sText"
                  : "text-Grey-600 hover:text-sText"
              } ${
                aside
                  ? "px-6 py-2 hover:bg-Grey-100 hover:text-sText"
                  : "px-6 py-3 hover:bg-Grey-50"
              } text-Grey-600 cursor-pointer transition-colors duration-300`}
            >
              {curr}
            </TransitionLink>
          ))}
        </div>
      </DropDown1>
      <DropDown1
        white={!aside}
        side={aside}
        selected1={selected.language}
        initialValue={language}
      >
        <div className="flex flex-col ">
          {langOptions.map((lang) => (
            <TransitionLink
              key={lang}
              href={`${pathname}?lang=${lang.toLowerCase()}&currency=${currency.toLowerCase()}`}
              onClick={() => handleLanguageSelect(lang)}
              className={`${
                lang === selected.language
                  ? "bg-Grey-100 text-sText"
                  : "text-Grey-600 hover:text-sText"
              } ${
                aside
                  ? "px-6 py-2 hover:bg-Grey-100 hover:text-sText"
                  : "px-6 py-3 hover:bg-Grey-50"
              } text-Grey-600 cursor-pointer transition-colors duration-300`}
            >
              {lang}
            </TransitionLink>
          ))}
        </div>
      </DropDown1>
    </div>
  );
};

export default LangCurBtns;
