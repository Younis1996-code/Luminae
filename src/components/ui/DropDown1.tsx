'use client'

import React, { useEffect, useRef, useState } from 'react'
import Paragraph from '../shared/Typograpgy/Paragraph';
import DropdownIcon from './svg/DropdownIcon';

interface DropdownProps {
  className?: string;
  size?: string;
  white?: boolean;
  side?: boolean;
   initialValue?: string;
   children?: React.ReactNode;
   selected1?: string
}

const DropDown1 = ({
  className,
  size,
  white,
  side,
  children,
  selected1,
}: DropdownProps) => {

      const [isOpen, setIsOpen] = useState(false);
      const dropdownRef = useRef<HTMLDivElement>(null);

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
          {selected1}
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
      onClick={() => setIsOpen((prev) => !prev)}
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
        }  w-max min-w-full z-50 left-auto right-auto overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default DropDown1
