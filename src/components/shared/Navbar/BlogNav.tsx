"use client";

import ContainerX from "../Containers/ContainerX";
import MobileMenu from "@/components/ui/svg/MobileMenu";
import TransitionLink from "@/components/ui/TransitionLink";
import CardImage from "../CardImage";
import Heading from "../Typograpgy/Heading";
import { NavLinks, SocialLinks } from "./Navbar";
import { usePathname } from "next/navigation";

interface BlogNavProps {
  scrollTop: () => void;
  socialLinks: SocialLinks[];
  navLinks: NavLinks[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogNav = ({
  scrollTop,
  socialLinks,
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
}: BlogNavProps) => {
  const pathName = usePathname();

  return (
    <ContainerX className="fixed top-0 left-0 w-screen bg-white z-[1000] py-7 flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-3 xl:gap-6">
      <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-6 lg:gap-3 xl:gap-6 justify-between">
        <div className="flex justify-between">
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            scrollTop={scrollTop}
          />

          <TransitionLink
            href="/"
            className="flex gap-2 md:gap-1.5 items-center cursor-pointer"
          >
            <CardImage
              src="/assets/icons/logo.svg"
              alt="Luminae Logo"
              className="w-10 h-6.5 md:w-12.5 md:h-8.5"
            />
            <Heading level={1} size="h32" weight="bold" lineH="lh20">
              Luminae
            </Heading>
          </TransitionLink>
        </div>
      </div>

      <div className="flex-1 hidden md:flex justify-between md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
        <div className="w-1/2 lg:w-full flex items-center justify-between lg:justify-around gap-1">
          {navLinks.map((link, index) => {
            const isActive =
              pathName === link.href ||
              (pathName?.startsWith(link.href) && link.href !== "/");
            return (
              <TransitionLink
                key={index}
                href={link.href}
                className={`relative text-sm leading-[20px] transition-colors duration-300 ease-in-out before:content-[''] before:absolute before:-bottom-1 before:w-full before:h-0.5 before:bg-sText before:rounded-full before:left-0 before:origin-left before:transition-transform before:duration-2000 hover:before:scale-x-100 ${
                  isActive
                    ? "text-sText font-bold before:scale-x-100"
                    : "text-Grey-800 font-notmal before:scale-x-0"
                }`}
              >
                {link.name}
              </TransitionLink>
            );
          })}
        </div>
        <div className="flex gap-3 items-center">
          {socialLinks.map((link, index) => (
            <TransitionLink
              key={index}
              href={link.link}
              className="text-Grey-300"
              onClick={scrollTop}
            >
              {link.icon}
            </TransitionLink>
          ))}
        </div>
      </div>
    </ContainerX>
  );
};

export default BlogNav;


