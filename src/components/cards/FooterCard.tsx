'use client'

import { useState } from "react";
import SendIcon from "../icons/SendIcon";
import Heading from "../shared/Typograpgy/Heading";
import Paragraph from "../shared/Typograpgy/Paragraph";

interface Props{
  className:string;
}

const FooterCard = ({className} : Props) => {
  const [btnHover,setBtnHover] = useState<boolean>(false);
  const emailSubmited = ()=>{
    console.log('submited');
  }
  return (
    <div className={`py-8 px-[60px] rounded-lg bg-mBlue-500 flex flex-col items-center gap-6 ${className}`}>
      <Heading size="h32" weight="bold" lineH="lh20" className=" text-white">
        Luminae <span className="text-mBlue-100 ">Store</span>
      </Heading>
      <Paragraph size="p16" weight="normal" lineH="lh20" className=" text-white">
        Register your email not to miss the last minutes off+ Free delivery
      </Paragraph>
      <div className="flex relative border-0 bg-white rounded-sm w-[60%]">
       <input type="email" placeholder="Enter your email" className="bg-transparent px-3 py-2 text-sm focus-within:outline-0 focus-within:border-0 w-[90%]"/>
       <button className="absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer" 
       onMouseEnter={()=>setBtnHover(true)}
       onMouseLeave={()=>setBtnHover(false)}
       onClick={emailSubmited}>
        <SendIcon color={btnHover ? "#6EB3FF" : "#434343"} />
       </button>
      </div>
    </div>
  )
}

export default FooterCard
