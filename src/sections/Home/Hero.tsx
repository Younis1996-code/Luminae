
import CTA from "@/components/btns/CTA";
import ExploreCard from "@/components/shared/ExploreCard";
import Heading from "@/components/shared/Typograpgy/Heading";
import Image from "next/image";
import { exploreCardsData } from "@/data/ExploreCardsData";

const Hero = () => {

  return (
<section className="flex w-full min-h-screen flex-col pt-[29vh]">
  <div className="heroContent hidden md:flex flex-1 items-stretch w-full">

    {/* Image side */}
    <div className="hidden md:block relative w-1/2 lg:w-[38%] overflow-hidden">
      <Image
        src="/assets/images/Home/left.png"
        alt="women wearing fashionable clothes"
        fill
        className="object-cover"
        quality={100}
      
      />
    </div>

    {/* Text side */}
    <div className="relative flex flex-col items-center justify-center w-1/2 lg:w-[62%] bg-cover bg-left bg-[url('/assets/images/Home/heroImageBG.png')]">
      <div className="absolute inset-0 bg-blue-700/50 " />

      <div className="relative z-10 w-full flex flex-col items-center text-white max-w-[315px] lg:max-w-full">
        <Heading level={2} size="h32" weight="bold" className="uppercase mb-8 text-[32px] text-center">
          Kimonos, Caftans & Pareos
        </Heading>
        <p className="text-[28px] leading-[50px] font-medium mb-8 text-center">
          Poolside glam included From $4.99
        </p>
        <CTA action="moveToShop" hasIcon textContent="Shop Now" className="uppercase" />
      </div>

      <div className="absolute hidden lg:flex flex-col items-center bg-white left-0 -translate-x-1/2 z-10">
        <div className="top text-center py-9 px-[30px]">
          <h4 className="font-bold text-xl leading-[20px] text-Grey-800 mb-3">Summer Essentials</h4>
          <span className="font-bold text-xl leading-[20px] text-Notification ">20% off</span>
        </div>
        <div className="bottom bg-Grey-800 w-full text-center text-white py-[10px]">
          <p className="text-sm font-normal leading-[20px]">19 Jul-30 Jul</p>
        </div>
      </div>
    </div>


  </div>

  <div className="flex md:hidden flex-col items-center gap-5 w-full px-5">
    {
      exploreCardsData.slice(0,2).map((card,idx)=>{
        return(
          <ExploreCard key={idx} img={card.img} color={card.color} desc={card.desc} title={card.title} category={card.category}
          className="w-full"/>
        )
      })
    }
  </div>
</section>

  );
};

export default Hero;