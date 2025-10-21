"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Instagram from "@/components/ui/svg/Instagram";
import Facebook from "@/components/ui/svg/Facebook";
import Telegram from "@/components/ui/svg/Telegram";
import MobNav from "./MobNav";
import SecondNav from "./SecondNav";
import FirstNav from "./FirstNav";
import CatNav from "./CatNav";
import { useDispatch } from "react-redux";
import { categories } from "@/data/categories";
import { setMainCategories } from "@/redux/slices/categoriesSlice";

export interface NavLinks {
  name: string;
  href: string;
}

export interface SocialLinks {
  icon: ReactNode;
  link: string;
}
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

const socialLonks: SocialLinks[] = [
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMainCategories(categories));
  }, [dispatch]);

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
