import React from 'react'

const MobileMenu = ({isMenuOpen, setIsMenuOpen, scrollTop}: {isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, scrollTop: () => void}) => {
 const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
    scrollTop();
  };
    return (
    
    <div
          className="md:hidden flex justify-center items-center w-7 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-[21px] h-3.5 flex flex-col justify-between items-center">
            <span
              className={`block w-full h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5 bg-Grey-900" : "bg-Grey-900"
              }`}
            />
            <span
              className={`block w-full h-0.5 rounded-full transition-all duration-400 ${
                isMenuOpen ? "opacity-0" : "bg-Grey-900"
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-1.5 bg-Grey-900"
                  : " bg-Grey-900"
              }`}
            />
          </div>
        </div>
  )
}

export default MobileMenu
