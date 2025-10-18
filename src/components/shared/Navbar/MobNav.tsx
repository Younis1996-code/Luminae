'use client'

import TransitionLink from '@/components/ui/TransitionLink';
import { usePathname } from 'next/navigation';
import React, { MouseEvent, useEffect } from 'react'
import { NavLinks } from './Navbar';
import CatBtn from './CatBtn';
import LangCurBtns from './LangCurBtns';
import SignBtn from './SignBtn';
import FavBtn from './FavBtn';

const MobNav = ({navLinks, isMenuOpen, setIsMenuOpen, scrollTop}: {navLinks: NavLinks[], isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, scrollTop: () => void}) => {
    const pathName = usePathname();
    //   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMenuOpen]);
  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
    scrollTop();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    toggleMenu();
  };

//   const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
//     const baseStyles =
//       "text-White xl:py-3.5 md:py-3 transition-all ease-in-out duration-1000";
//     const activeStyles = "bg-Grey-08 border-Grey-15 md:px-5 xl:px-6 rounded-lg";
//     const inactiveStyles = "border-Grey-10";

//     return isActive
//       ? `${baseStyles} ${activeStyles}`
//       : `${baseStyles} ${inactiveStyles}`;
//   };

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
  return (
    <>
        {isMenuOpen && (
        <div
          className="fixed md:hidden top-0 left-0 w-screen h-screen bg-Grey-900 opacity-20 z-40"
          onClick={handleOverlayClick}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-1/2 overflow-y-auto bg-White z-50 transform transition-all duration-700 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] shadow-md md:hidden  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="mt-[180px] flex flex-col items-start gap-8">
          <div className='flex flex-col items-start'>
            {navLinks.map(({ name, href }) => {
            const isActive =
              pathName === href || (pathName?.startsWith(href) && href !== "/");
            return (
              <TransitionLink
                key={href}
                href={href}
                onClick={toggleMenu}
                className={`w-full p-3 ${
                  isActive ? "border-r-2 border-mBlue-600 font-semibold" : ""
                }`}
              >
                {name}
              </TransitionLink>
            );
          })}
          </div>

          <div className='flex flex-col items-start'>
            <CatBtn aside />
            <LangCurBtns aside />
          </div>

          <div>
            <SignBtn aside />
            <FavBtn aside />
          </div>
          
        </div>
      </aside>
    </>
  )
}

export default MobNav
