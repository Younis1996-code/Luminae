import React from "react";
import ContainerX from "../Containers/ContainerX";
import MobileMenu from "@/components/ui/svg/MobileMenu";
import TransitionLink from "@/components/ui/TransitionLink";
import CardImage from "../CardImage";
import Heading from "../Typograpgy/Heading";
import CartBtn from "./CartBtn";
import Dropdown from "@/components/ui/Dropdown";
import SearchIcon from "@/components/ui/svg/SearchIcon";
import { NavLinks, SocialLinks } from "./Navbar";
import { usePathname } from "next/navigation";

interface FirstNavProps {
  scrollTop: () => void;
  categories: string[];
  socialLonks: SocialLinks[];
  navLinks: NavLinks[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstNav = ({
  scrollTop,
  categories,
  socialLonks,
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
}: FirstNavProps) => {
  const pathName = usePathname();
  return (
    <ContainerX className="py-7 flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-3 xl:gap-6">
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

          <CartBtn />
        </div>
        <div className="flex items-center justify-between gap-1 border border-Grey-200 rounded-sm px-3 py-2 w-full md:max-w-86.5">
          <input
            type="text"
            placeholder="Search Products"
            className="max-xs:max-w-[45%] xs:flex-1 xs:min-w-fit border-none outline-none focus:outline-none text-sm font-normal leading-[20px] placeholder:text-Grey-400"
          />
          <div className="flex items-center gap-3 w-fit">
            <Dropdown
              className="pr-3 border-r border-Grey-100"
              size="w-6 h-6"
              data={categories}
            />

            <button className="text-Grey-800 w-5 h-5 pointer-events-none">
              <SearchIcon />
            </button>
          </div>
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
                className={`text-sm leading-[20px] ${
                  isActive
                    ? "text-sText font-bold"
                    : "text-Grey-800 font-notmal"
                }`}
              >
                {link.name}
              </TransitionLink>
            );
          })}
        </div>
        <div className="flex gap-3 items-center">
          {socialLonks.map((link, index) => (
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

export default FirstNav;
