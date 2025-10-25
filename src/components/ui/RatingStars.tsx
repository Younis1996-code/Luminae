import { StarIcon } from "./svg/Star";
import Paragraph from "../shared/Typograpgy/Paragraph";
type Size = 4 | 6;
type RatingStarsProp = {
  num?: number;
  size: Size;
};

const RatingStars = ({ num, size }: RatingStarsProp) => {
  const sizeClass = {
    4: "w-4 h-4",
    6: "w-4 h-4",
  }[size];

  return (
    <div className="flex justify-between items-center space-x-1 w-fit">
      <div className="flex items-center ">
        <StarIcon color="#FFC000" className={`${sizeClass}`} />
        <StarIcon color="#FFC000" className={`${sizeClass}`} />
        <StarIcon color="#FFC000" className={`${sizeClass}`} />
        <StarIcon color="#FFC000" className={`${sizeClass}`} />
      </div>
      <Paragraph
        size="p12"
        className="text-Grey-600"
        weight="medium"
        lineH="lh20"
      >
        ({num})
      </Paragraph>
    </div>
  );
};

export default RatingStars;
