import FlashSalesCard from "@/components/cards/FlashSalesCard";
import FlashSales from "@/components/sections/home/FlashSales";
import Trending from "@/components/sections/home/Trending";
import Hero from "@/sections/Home/Hero";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSales/>
      <Trending/>
    </>
  );
}
