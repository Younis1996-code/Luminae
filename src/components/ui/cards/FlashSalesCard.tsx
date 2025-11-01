"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "@/components/shared/Typograpgy/Heading"; 
import Paragraph from "@/components/shared/Typograpgy/Paragraph";
import RatingStars from "../RatingStars";
import PriceBox from "../PriceBox";
import DateBox from "../DateBox"; 
import { Product } from "@/types/product";

type FlashSalesCardProps = Pick<
  Product,
  | "title"
  | "image"
  | "rating"
  | "price"
  | "oldPrice"
  | "discountEndTime"
  | "brand"
>;

const FlashSalesCard = ({
  title,
  brand,
  image,
  rating,
  price,
  oldPrice,
  discountEndTime,
}: FlashSalesCardProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
useEffect(() => {
  if (!discountEndTime) return;

  const updateTimer = () => {
    const now = Date.now();
    const end = new Date(discountEndTime + "Z").getTime();
    const diff = Math.max(0, end - now);

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setTimeLeft({ hours, minutes, seconds });
  };

  updateTimer();
  const timer = setInterval(updateTimer, 1000);
  return () => clearInterval(timer);
}, [discountEndTime]);


  // useEffect(() => {
  //   if (!discountEndTime) return;

  //   const updateTimer = () => {
  //     const now = new Date().getTime();
  //     const end = new Date(discountEndTime).getTime();
  //     const diff = Math.max(0, end - now);

  //     const hours = Math.floor(diff / (1000 * 60 * 60));
  //     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  //     setTimeLeft({ hours, minutes, seconds });
  //   };

  //   updateTimer();
  //   const timer = setInterval(updateTimer, 1000);

  //   return () => clearInterval(timer);
  // }, [discountEndTime]);

  return (
    <div className="flex flex-col items-center w-full rounded-lg px-10 py-5 shadow-[0_0_12px_0_rgba(0,0,0,0.1)] space-y-4 min-w-[200px] transition-all hover:scale-[1.02]">
      <Heading
        level={3}
        size="h16"
        weight="extrabold"
        lineH="lh20"
        className="text-Grey-400 whitespace-nowrap"
      >
        Deal of the Day
      </Heading>

      {/* Countdown Timer */}
      <DateBox
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
      />

      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-contain mt-4"
      />

      <div className="flex flex-col space-y-[6px] w-full items-start">
        <Heading
          level={3}
          size="h16"
          weight="bold"
          lineH="lh20"
          className="text-Grey-800"
        >
          {title}
        </Heading>

        {brand && (
          <Paragraph
            size="p12"
            className="text-Grey-600"
            weight="medium"
            lineH="lh20"
          >
            {brand}
          </Paragraph>
        )}

        <RatingStars num={rating} size={4} />
        <PriceBox oldPrice={oldPrice} newPrice={price} />
      </div>
    </div>
  );
};

export default FlashSalesCard;
