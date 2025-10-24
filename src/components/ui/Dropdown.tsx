"use client";

import React, { useState, useRef, useEffect } from "react";
import DropdownIcon from "./svg/DropdownIcon";
import TransitionLink from "./TransitionLink";
import Paragraph from "../shared/Typograpgy/Paragraph";

interface DropdownProps {
  className?: string;
  size?: string;
  data: { name: string; link: string }[] | string[];
  white?: boolean;
  side?: boolean;
   onSelect?: (value: string) => void;
   initialValue?: string;
  dropUp?:boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  size,
  data,
  white,
  side,
  onSelect,
  initialValue,
  dropUp
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const normalizedData =
  typeof data[0] === "string"
    ? (data as string[]).map((item) => ({ name: item }))
    : (data as { name: string; link?: string }[]);

  const [selected, setSelected] = useState<string>(
  () => initialValue || normalizedData[0].name
);

useEffect(() => {
    if (initialValue) {
      setSelected(initialValue);
    }
  }, [initialValue, selected]);



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
    onSelect?.(item);
  };

  return (
    <div
      ref={dropdownRef}
      className={` ${
        side
          ? "w-full flex flex-col h-fit overflow-hidden"
          : "relative inline-block"
      }  ${className}`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex ${
          side ? "p-3" : "justify-between"
        } items-center focus:outline-none transition-all w-full cursor-pointer`}
      >
        <Paragraph
          size="p14"
          weight="normal"
          lineH="lh20"
          className={white ? "text-White" : "text-Grey-800"}
        >
          {selected}
        </Paragraph>
        <div
          className={`transition-transform duration-300 ${
            white ? "text-White" : "text-Grey-800"
          } ${size ?? "w-4 h-4"} ${isOpen ? "rotate-180" : ""}`}
        >
          <DropdownIcon />
        </div>
      </button>

      <div
        className={` ${
          side
            ? "bg-Grey-50 shadow-sm"
            : "absolute rounded-sm md:rounded-lg transform mt-2.5 bg-White py-2 shadow-md"
        } ${
          side
            ? isOpen
              ? "max-h-full pointer-events-auto"
              : "max-h-0 pointer-events-none"
            : ""
        }  w-max min-w-full z-50 left-0 overflow-hidden transition-all duration-300 origin-top
        ${
          isOpen ? 
          dropUp ?
           'opacity-100 scale-y-100 -translate-y-[calc(100%+40px)]' : 'opacity-100 scale-y-100'
           : 'opacity-0 scale-y-0'
        }`}
      >
        <div className={`flex flex-col`}>
          {data.map((item, index) => (
            <TransitionLink
              href={typeof item === "string" ? item : item.link}
              key={index}
              onClick={() => handleSelect(typeof item === "string" ? item : item.name)}
              className={`${
                side
                  ? "px-6 py-2 hover:bg-Grey-100 hover:text-sText"
                  : "px-6 py-3 hover:bg-Grey-50"
              } text-Grey-600 cursor-pointer transition-colors duration-300`}
            >
              {typeof item === "string" ? item : item.name}
            </TransitionLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
