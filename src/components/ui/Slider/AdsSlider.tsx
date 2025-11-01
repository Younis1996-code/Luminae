'use client'

import { BannerSlide } from "@/data/homeBannerData"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RightArrow } from "../svg/Arrow"


interface AdsSliderProps{
  data:Array<BannerSlide>
}

const AdsSlider = ({data} : AdsSliderProps) => {
  const [currentIndex,setCurrentIndex] = useState<number>(0);
  const handleNext = ()=>{
    currentIndex + 1 === data.length ? setCurrentIndex(0) : setCurrentIndex(prev=>prev + 1)
  }

  const handlePev = ()=>{
    currentIndex === 0 ? setCurrentIndex(data.length - 1) : setCurrentIndex(prev=>prev-1)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === data.length ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <div className="relative">
      <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 cursor-pointer right-0 ">
        <RightArrow color="#434343" className="fill-none w-8 h-8"/>
      </button>
      <button onClick={handlePev} className="absolute top-1/2 -translate-y-1/2 cursor-pointer left-0 rotate-180">
        <RightArrow color="#434343" className="fill-none w-8 h-8"/>
      </button>
      <div className="overflow-hidden w-full max-w-[83.8096%] mx-auto">
        {/* cards container, contains three cards */}
        <div className="flex transition-transform duration-700 ease-in-out"
        style={{transform :`translateX(-${currentIndex * 100}%)`}}
        // translateX : 0 , -100 , -200 %
        >
          {data.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full flex items-center justify-between gap-[70px]">
                  <div className="flex flex-col gap-4 w-1/2">
                    <h4 className="text-mBlue-800 font-bold leading-[20px] text-2xl">
                      {slide.title}
                    </h4>
                    <p className="text-xl font-medium leading-[24px] text-Grey-600">{slide.description}</p>
                  </div>
                  <div className="relative w-1/2 h-[200px]">
                    <Image src={slide.img} alt={slide.description} fill />
                  </div>
                </div>
              ))}
        </div>
      </div>

    </div>
  )
}

export default AdsSlider
