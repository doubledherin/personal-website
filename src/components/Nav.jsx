// src/components/Nav.jsx
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="border-sand sticky top-0 z-50 hidden h-16 w-full items-center justify-between border-b bg-black px-10 py-0 font-medium tracking-widest md:flex">
        <ul className="nav-links flex w-full list-none justify-between gap-10 text-xl lg:justify-end lg:text-2xl">
          <li>
            <a href="#home" className="hover:text-sand transition-colors">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sand transition-colors">
              about
            </a>
          </li>
          <li>
            <a
              href="#dev-experience"
              className="hover:text-sand transition-colors"
            >
              dev experience
            </a>
          </li>
          <li>
            <a
              href="#generative-art"
              className="hover:text-sand transition-colors"
            >
              generative art
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="border-sand sticky top-0 z-50 flex h-16 w-full items-center justify-end border-b-[1.5px] bg-black px-[30px] md:hidden">
        <div className="hamburger-menu relative inline-block">
          {/* Hamburger Icon */}
          <div
            className="hamburger-icon flex h-[24px] w-[30px] cursor-pointer flex-col justify-between"
            onClick={toggleMenu}
          >
            <span
              className={`bg-sand h-[2px] w-full transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "translate-x-[10px] translate-y-[11px] rotate-45"
                  : ""
              }`}
            ></span>
            <span
              className={`bg-sand h-[2px] w-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`bg-sand h-[2px] w-full transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "translate-x-[10px] -translate-y-[11px] -rotate-45"
                  : ""
              }`}
            ></span>
          </div>

          {/* Mobile Menu */}
          <div
            className={`menu-links absolute overflow-hidden text-center text-xl transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "top-[200%] right-[-30px] max-h-96 w-[200px] overflow-visible rounded-lg border border-white/10 bg-black"
                : "top-[100%] right-0 max-h-0 w-fit"
            }`}
          >
            <ul className="list-none space-y-2 p-4">
              <li className="hover:text-sand transition-colors">
                <a href="#home" onClick={toggleMenu} className="block py-2">
                  home
                </a>
              </li>
              <li className="hover:text-sand transition-colors">
                <a href="#about" onClick={toggleMenu} className="block py-2">
                  about
                </a>
              </li>
              <li className="hover:text-sand transition-colors">
                <a
                  href="#dev-experience"
                  onClick={toggleMenu}
                  className="block py-2"
                >
                  dev experience
                </a>
              </li>
              <li className="hover:text-sand transition-colors">
                <a
                  href="#generative-art"
                  onClick={toggleMenu}
                  className="block py-2"
                >
                  generative art
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
