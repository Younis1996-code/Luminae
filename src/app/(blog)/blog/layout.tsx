"use client";

import "@/app/globals.css";
import Footer from "@/components/sections/Footer";
import BlogNav from "@/components/shared/Navbar/BlogNav";
import Instagram from "@/components/ui/svg/Instagram";
import Facebook from "@/components/ui/svg/Facebook";
import Telegram from "@/components/ui/svg/Telegram";
import { ReactNode, useState } from "react";

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
    name: "News",
    href: "/blog/news",
  },
  {
    name: "Fashion",
    href: "/fashion",
  },
  {
    name: "Health",
    href: "/health",
  },
  {
    name: "Tech",
    href: "/tech",
  },
  {
    name: "Sience",
    href: "/sience",
  },
];

export const socialLinks: SocialLinks[] = [
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <html lang="en">
      <body>
        <BlogNav
          scrollTop={scrollTop}
          socialLinks={socialLinks}
          navLinks={navLinks}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {children}
       <Footer/>
      </body>
    </html>
  );
}
