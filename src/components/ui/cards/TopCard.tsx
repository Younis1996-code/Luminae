"use client";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/redux/slices/top"; 
import { useState } from "react";
import Image from "next/image";
import Heading from "../../shared/Typograpgy/Heading";
import Paragraph from "../../shared/Typograpgy/Paragraph";
import RatingStars from "../RatingStars";
import PriceBox from "../PriceBox";
import Heart from "../svg/Heart";

type TopCardProps = {
  id: number;
  brand: string;
  title: string;
  reviews: number;
  price: number;
  oldPrice: number;
  image: string;
  isFavorite?: boolean;
};

const TopCard = ({
  id,
  brand,
  title,
  reviews,
  price,
  oldPrice,
  image,
  isFavorite = false,
}: TopCardProps) => {
  const dispatch = useDispatch();

  const handleHeartClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="flex flex-col items-center w-full rounded-lg shadow-[0_0_12px_0_rgba(0,0,0,0.1)] space-y-5 min-w-[200px] transition-all hover:scale-[1.02]">
      <div className="relative w-full min-h-[327px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center rounded-t-lg"
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

          <button onClick={handleHeartClick}>
            <Heart
              className={`transition-colors duration-200 ${
                isFavorite
                  ? "text-Notification fill-Notification"
                  : "text-gray-400 fill-none"
              }`}
            />
          </button>
        </div>

        <RatingStars num={reviews} size={6} />
        <PriceBox oldPrice={oldPrice} newPrice={price} plainDiscount={true} />
      </div>
    </div>
  );
};

export default TopCard;
