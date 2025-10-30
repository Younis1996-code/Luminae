import Image from "next/image";
import Heading from "../../shared/Typograpgy/Heading";
import DateBox from "../DateBox";
import Paragraph from "../../shared/Typograpgy/Paragraph";
import RatingStars from "../RatingStars";
import PriceBox from "../PriceBox";

type FlashSalesCardProps = {
  title: string;
  description: string;
  image: string;
  rating: number;
  newPrice: number;
  oldPrice: number;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};

const FlashSalesCard = ({
  title,
  description,
  image,
  rating,
  newPrice,
  oldPrice,
  time
}: FlashSalesCardProps) => {
  return (
    <div className="flex flex-col items-center w-full rounded-lg px-10 py-5 shadow-[0_0_12px_0_rgba(0,0,0,0.1)] space-y-4 min-w-[200px]">
      <Heading
        level={3}
        size="h16"
        weight="extrabold"
        lineH="lh20"
        className="text-Grey-400 whitespace-nowrap"
      >
        Deal of the Day
      </Heading>

      <DateBox
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />

      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-contain mt-4"
      />

      <div className="flex flex-col space-y-[6px] items-left">
        <Heading
          level={3}
          size="h16"
          weight="extrabold"
          lineH="lh20"
          className="text-Grey-800"
        >
          {title}
        </Heading>

        <Paragraph
          size="p12"
          className="text-Grey-600"
          weight="medium"
          lineH="lh20"
        >
          {description}
        </Paragraph>

        <RatingStars num={rating} size={4} />
        <PriceBox oldPrice={oldPrice} newPrice={newPrice} />
      </div>
    </div>
  );
};

export default FlashSalesCard;
