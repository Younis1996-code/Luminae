'use client';

import { useRouter } from "next/navigation";
import CtaIcon from "../icons/CtaIcon";

interface Props{
  action: "moveToShop" | "showModal" | "moveToCart"
  textContent:string;
  hasIcon:boolean;
  disabled?:boolean;
  className:string;
}

const CTA = ({textContent, hasIcon, disabled, className,action }: Props) => {
  const router = useRouter();

  return (
    <button
    onClick={()=>{
      action == "moveToShop" ? router.push('/shop')  :
      action == "moveToCart" ? router.push('/cart') :
      action == "showModal" ? console.log("show modal") : null
    }}
    
    disabled={disabled} className={`cursor-pointer ${hasIcon ? 'px-[66.5px]' : 'px-[98px]'} py-4 
    flex gap-2 items-center bg-Primary-700 rounded-sm  ${className}`}>
      {hasIcon && 
      <CtaIcon strokeColor="white" hoverColor="white"/>
      }
      {textContent} 
    </button>
  )
}

export default CTA
