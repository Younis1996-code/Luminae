import Image from "next/image";
import Paragraph from "../shared/Typograpgy/Paragraph";
import NewArivalsTag from "../ui/NewArivalsTag";
import ShopButton from "../ui/ShopButton";

interface MostTrendingCardProps {
  tag?: string;
  title: string;
  subtitle: string;
  price: number;
  imageSrc: string;
}

const MostTrendingCard = ({
  tag = "",
  title,
  subtitle,
  price,
  imageSrc,
}: MostTrendingCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden min-w-[357px]">
      <div className="relative p-[10px] h-[437px] w-full">
        {tag !== "" && <NewArivalsTag text={tag} className="relative z-10" />}

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-[50%_40%]  relative z-1"
        />
      </div>

      <div className="flex flex-col p-5 bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <Paragraph
              size="p16"
              className="text-white"
              weight="bold"
              lineH="lh25"
            >
              {title}
            </Paragraph>
            <Paragraph
              size="p14"
              className="text-gray-300"
              weight="medium"
              lineH="lh20"
            >
              {subtitle}
            </Paragraph>
          </div>
          <ShopButton price={price} onClick={(): void => {}} />
        </div>
      </div>
    </div>
  );
};

export default MostTrendingCard;
