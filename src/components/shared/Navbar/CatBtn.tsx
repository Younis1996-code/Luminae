import Categories from "@/components/ui/svg/Categories";
import Paragraph from "../Typograpgy/Paragraph";
import MainCat from "./MainCat";

interface Props {
  aside?: boolean;
  setCatNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  catNavOpen?: boolean;
}

const CatBtn = ({ aside, catNavOpen, setCatNavOpen }: Props) => {
  const handleCate = () => {
    setCatNavOpen((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={handleCate}
        className={`flex items-center gap-1 cursor-pointer ${
          aside ? "p-3 w-full" : ""
        }`}
      >
        <div className={aside ? "" : "text-White"}>
          <Categories />
        </div>
        <Paragraph
          size="p20"
          weight={catNavOpen ? "bold" : "normal"}
          lineH="lh20"
          className={aside ? "" : "text-White"}
        >
          Categories
        </Paragraph>
      </div>
      {aside && (
        <div
          className={`flex flex-col bg-Grey-50 w-full transition-all duration-300 origin-top shadow-sm ${
            catNavOpen
              ? "max-h-full opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          } overflow-hidden`}
        >
          <MainCat aside />
        </div>
      )}
    </>
  );
};

export default CatBtn;
