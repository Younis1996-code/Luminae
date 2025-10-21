"use client";

import React, { ReactNode, useState } from "react";
import Instagram from "@/components/ui/svg/Instagram";
import Facebook from "@/components/ui/svg/Facebook";
import Telegram from "@/components/ui/svg/Telegram";
import MobNav from "./MobNav";
import SecondNav from "./SecondNav";
import FirstNav from "./FirstNav";
import CatNav from "./CatNav";

export interface NavLinks {
  name: string;
  href: string;
}

export interface SocialLinks {
  icon: ReactNode;
  link: string;
}

const categories: string[] = [
  "All Categories",
  "Women",
  "Male",
  "Mother-Child",
  "Home & Furniture",
  "Super market",
  "Cosmetics",
  "Shoe & Bag",
  "Electronic",
  "Sport & Outdoor",
  "Best seller",
];

const navLinks: NavLinks[] = [
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
  {
    name: "Help & support",
    href: "/support",
  },
];

export const socialLonks: SocialLinks[] = [
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <Telegram />,
    link: "https://telegram.com/",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [catNavOpen, setCatNavOpen] = useState<boolean>(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-screen z-[1000] bg-White transition-all duration-300 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] shadow-sm">
        <FirstNav
          scrollTop={scrollTop}
          categories={categories}
          socialLonks={socialLonks}
          navLinks={navLinks}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <SecondNav setCatNavOpen={setCatNavOpen} catNavOpen={catNavOpen} />
        <CatNav catNavOpen={catNavOpen} />
      </nav>
      <MobNav
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollTop={scrollTop}
        catNavOpen={catNavOpen}
        setCatNavOpen={setCatNavOpen}
      />
    </>
  );
};

export default Navbar;
