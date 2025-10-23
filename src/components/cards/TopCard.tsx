import Image from "next/image";
import Heading from "../shared/Typograpgy/Heading";
import Paragraph from "../shared/Typograpgy/Paragraph";
import RatingStars from "../ui/RatingStars";
import PriceBox from "../ui/PriceBox";
import Heart from "../ui/svg/Heart";

type TopCardProps = {
  id: number;
  brand: string;
  title: string;
  reviews: number;
  price: number;
  oldPrice: number;
  image: string;
};

const TopCard = ({
  brand,
  title,
  reviews,
  price,
  oldPrice,
  image,
}: TopCardProps) => {
  return (
    <div className="flex flex-col items-center w-full rounded-lg shadow-[0_0_12px_0_rgba(0,0,0,0.1)] space-y-5 min-w-[200px]">
      <div className="relative w-full  min-h-[327px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col space-y-3 px-5 w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <Heading
              level={3}
              size="h12"
              weight="bold"
              lineH="lh20"
              className="text-Grey-800"
            >
              {brand}
            </Heading>

            <Paragraph
              size="p10"
              className="text-Grey-600"
              weight="medium"
              lineH="lh20"
            >
              {title}
            </Paragraph>
          </div>
          <Heart />
        </div>

        <RatingStars num={reviews} size={6} />
        <PriceBox oldPrice={oldPrice} newPrice={price} />
      </div>
    </div>
  );
};

export default TopCard;
