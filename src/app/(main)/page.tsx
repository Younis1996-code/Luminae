import FlashSalesCard from "@/components/ui/cards/FlashSalesCard";
import TopCard from "@/components/ui/cards/TopCard";
import FlashSales from "@/components/sections/home/FlashSales";
import Top from "@/components/sections/home/Top";
import Trending from "@/components/sections/home/Trending";
import Hero from "@/components/sections/home/Hero";
import ExploreCardsSection from "@/components/sections/home/ExploreCardsSection";
import HomeBanner from "@/components/sections/home/HomeBanner";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSales/>
      <Trending/>
      <ExploreCardsSection  topSection={true}/>
      <HomeBanner />
      <ExploreCardsSection  topSection={false} />
      <Top/>
    </>
  );
}
