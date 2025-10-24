"use client";

import Image from "next/image";
import Paragraph from "../shared/Typograpgy/Paragraph";
import NewArivalsTag from "../ui/NewArivalsTag";
import ShopButton from "../ui/ShopButton";
import { Product } from "@/types/product";

type MostTrendingCardProps = Product & {
  tag?: string; 
};

const MostTrendingCard = ({
  tag,
  title,
  brand,
  description,
  price,
  image,
}: MostTrendingCardProps) => {
   const shortText = description
     ? description.split(" ").slice(0, 3).join(" ")
     : brand;
  return (
    <div className="rounded-lg overflow-hidden min-w-[357px] bg-white shadow-md hover:shadow-lg transition-all duration-300">
      {/* Image Section */}
      <div className="relative p-[10px] h-[437px] w-full">
        {tag && <NewArivalsTag text={tag} className="relative z-10" />}

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-[50%_40%] rounded-t-lg"
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
              {shortText} 
            </Paragraph>
          </div>

          <ShopButton price={price} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MostTrendingCard;
