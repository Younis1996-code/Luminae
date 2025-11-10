import { LongRightArrow } from "../svg/RightArrow";

interface ReadMorebtnProps {
  background?: "blue" | "transparent";
}

const ReadMorebtn = ({ background = "transparent" }: ReadMorebtnProps) => {
  const blueBgStyle = "bg-Primary-700 border-none hover:bg-Primary-800";
  const transparentBgStyle =
    "border border-white bg-transparent hover:bg-white hover:text-Primary-700";

  const buttonStyle = background === "blue" ? blueBgStyle : transparentBgStyle;

  return (
    <button
      className={`px-5 py-2.5 text-white uppercase rounded flex items-center gap-2 text-[2.92887vw] md:text-[1.41271vw] lg:text-[1.1666vw] xl:text-[0.97222vw] relative transition-all duration-300 ${buttonStyle}`}
    >
      Read more <LongRightArrow />
    </button>
  );
};

export default ReadMorebtn;
