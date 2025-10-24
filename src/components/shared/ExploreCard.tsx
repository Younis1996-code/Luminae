'use client';

import Link from "next/link";
import Image from "next/image";

type colors = 'blue' | 'red' | 'pink' | 'darkGreen';

interface Props{
  img:string;
  title:string;
  desc:string;
  color:colors;
  category?:string;
  className?:string
}

const ExploreCard = ({img, title, desc, color, className}:Props) => {
  return (
    <div className={`flex items-stretch ${className} group`}>
      {/* text side */}
      <div className={`flex flex-col text-white 
        ${color === 'blue' ? 'bg-[#0186C4]' : color === 'red' ?
         'bg-[#BF2E3B]' : color === 'pink' ?
        'bg-[#D11FB5]' : color === 'darkGreen' ?
        'bg-[#1D5159]' : 'bg-[#1D5159]'}
        px-5 py-7 md:pt-[68px] md:pb-[34px] lg:py-[68px] w-1/2
        `}>

        <h4 className="mb-2 lg:mb-4 text-2xl lg:text-4xl font-extrabold leading-[46p]">
          {title}
        </h4>
        <p className="text-lg lg:text-[28px] font-normal leading-[36px] mb-2 lg:mb-[31px]">
          {desc}
        </p>
        <Link href={`Update this later, to move to the cateogry page.`} className="text-xl font-normal leading-[36px] underline underline-offset-1">
          Exlopre all category
        </Link>
      </div>

      {/* image side */}
      <div className="w-1/2 overflow-hidden relative">
          <Image 
            src={img}
            alt={title}
            fill
            className="object-top duration-200 group-hover:contrast-125 group-hover:scale-110"
            quality={100}
          />
      </div>
    </div>
  )
}

export default ExploreCard
