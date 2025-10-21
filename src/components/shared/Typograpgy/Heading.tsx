import React from "react";

type Level = 1 | 2 | 3 | 4 | 5 ;
type Size = "h36" | "h32" | "h28" | "h20" | "h16" | "h14";
type Weight = "normal" | "medium" | "semibold" | "bold" | "extrabold" ;
type TagType = React.ElementType
type LineH = "lh50" | "lh46" | "lh25" | "lh20"

interface Props {
  children: React.ReactNode;
  level?: Level;
  size?: Size;
  className?: string;
  weight?: Weight
  lineH?: LineH
}

export default function Heading({ children, level = 3, size = "h32", className = "", weight = "bold", lineH = "lh50" }: Props) {
  const Tag: TagType = `h${level}`;
  const sizeClass = {
    h36: "text-[5.0209vw] md:text-[3.63269vw] lg:text-[3vw] xl:text-[2.5vw]",
    h32: "text-[4.60251vw] md:text-[3.229vw] lg:text-[2.6666vw] xl:text-[2.2222vw]",
    h28: "text-[4.1841vw] md:text-[2.8254vw] lg:text-[2.3333vw] xl:text-[1.9444vw]",
    h20: "text-[3.76569vw] md:text-[2.01816vw] lg:text-[1.6666vw] xl:text-[1.3888vw]",
    h16: "text-[3.34728vw] md:text-[1.6145vw] lg:text-[1.3333vw] xl:text-[1.1111vw]",
    h14:"text-sm"
  }[size];
  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  }[weight];
  const lineHClass = {
    lh50: "leading-[50px]",
    lh46: "leading-[46px]",
    lh25: "leading-[25px]",
    lh20: "leading-[20px]",
  }[lineH];
 
  return <Tag className={`${sizeClass} ${weightClass} ${lineHClass} ${className}`}>{children}</Tag>;
}
