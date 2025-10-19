import React from "react";


type Size = "p24" | "p20" | "p18" | "p16" | "p14" | "p12" | "p10" ;
type Weight = "normal" | "medium" | "semibold" | "extrabold" | "bold"  ;
type LineH = "lh28" | "lh25" | "lh20" | "lh30" ;

interface Props {
  children: React.ReactNode;
  size?: Size;
  className?: string;
  weight?: Weight;
  lineH?: LineH
}

export default function Paragraph({ children, size = "p18", className = "", weight = "medium", lineH = "lh28" }: Props) {
  const sizeClass = {
    p24: "text-[4.10256vw] md:text-[2.25vw] lg:text-[1.3888vw] xl:text-[1.25vw]",
    p20: "text-[3.76569vw] md:text-[2.01816vw] lg:text-[1.66666vw] xl:text-[1.38888vw]",
    p18: "text-[3.76569vw] md:text-[1.816347vw] lg:text-[1.5vw] xl:text-[1.25vw]",
    p16: "text-[3.34728vw] md:text-[1.61453vw] lg:text-[1.3333vw] xl:text-[1.1111vw]",
    p14: "text-[2.92887vw] md:text-[1.41271vw] lg:text-[1.1666vw] xl:text-[0.97222vw]",
    p12: "text-[2.51046vw] md:text-[1.210898vw] lg:text-[1vw] xl:text-[0.83333vw]",
    p10: "text-[2.564vw] md:text-[1.302vw] lg:text-[0.7813vw] xl:text-[0.6944vw]",
  }[size];
  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
    semibold: "font-semibold",
    extrabold: "font-extrabold",
  }[weight];
  const LineHClass = {
    lh28: "leading-[28px]",
    lh25: "leading-[25px]",
    lh20: "leading-[20px]",
    lh30: "leading-[30px]",
  }[lineH];
 
  return <p className={`${sizeClass} ${weightClass} ${LineHClass} ${className}`}>{children}</p>;
}
