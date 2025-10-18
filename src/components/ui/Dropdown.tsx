"use client";

import React, { useState, useRef, useEffect } from "react";
import DropdownIcon from "./svg/DropdownIcon";
import TransitionLink from "./TransitionLink";
import Paragraph from "../shared/Typograpgy/Paragraph";

interface DropdownProps {
  className?: string;
  size?: string;
  data: string[];
  white?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ className, size, data, white }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(data[0]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between focus:outline-none transition-all w-full cursor-pointer"
      >
        <Paragraph size="p14" weight="normal" lineH="lh20" className={white ? "text-White" : "text-Grey-800"}>{selected}</Paragraph>
        <div
          className={`transition-transform duration-300 ${white ? "text-White" : "text-Grey-800"} ${size ?? "w-4 h-4"} ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <DropdownIcon />
        </div>
      </button>

      <div
        className={`absolute py-2 flex flex-col rounded-sm md:rounded-lg shadow-md left-0 mt-2.5 w-max min-w-full bg-White overflow-hidden transform transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {data.map((item, index) => (
          <TransitionLink
          href="#"
            key={index}
            onClick={() => handleSelect(item)}
            className="px-6 py-3 text-Grey-600 hover:bg-Grey-50 cursor-pointer transition-colors"
          >
            {item}
          </TransitionLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
