import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
  };

  return (
    <div>
      <nav
        id="desktop-nav"
        className="border-sand h-nav-h top-0 z-1 hidden w-full items-center justify-between border-b bg-black px-10 py-0 font-medium tracking-widest md:sticky md:flex"
      >
        <ul className="nav-links flex w-full list-none justify-between gap-10 text-xl lg:justify-end lg:text-2xl">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#dev-experience">dev experience</a>
          </li>
          <li>
            <a href="#generative-art">generative art</a>
          </li>
        </ul>
      </nav>

      <nav
        id="hamburger-nav"
        className="border-sand h-nav-h sticky top-0 z-1 flex w-full items-center justify-end border-b-[1.5px] bg-black px-[30px] md:hidden"
      >
        <div className="hamburger-menu relative inline-block">
          <div
            className="hamburger-icon flex h-[24px] w-[30px] cursor-pointer flex-col justify-between"
            onClick={toggleMenu}
          >
            <span
              className={`bg-sand h-[2px] w-full duration-300 ease-in-out ${isMenuOpen ? "translate-x-[10px] translate-y-[11px] rotate-45" : ""}`}
            ></span>
            <span
              className={`bg-sand h-[2px] w-full duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`bg-sand h-[2px] w-full duration-300 ease-in-out ${isMenuOpen ? "translate-x-[10px] -translate-y-[11px] -rotate-45" : ""}`}
            ></span>
          </div>
          <div
            className={`menu-links absolute top-[100%] right-0 w-fit overflow-hidden text-center text-xl duration-300 ease-in-out ${
              isMenuOpen
                ? "open top-[200%] right-[-30px] max-h-max !w-[200px] overflow-visible bg-black"
                : "max-h-0"
            }`}
          >
            <li className="h-10">
              <a href="#home" onClick={toggleMenu}>
                home
              </a>
            </li>
            <li className="h-10">
              <a href="#about" onClick={toggleMenu}>
                about
              </a>
            </li>
            <li className="h-10">
              <a href="#dev-experience" onClick={toggleMenu}>
                dev experience
              </a>
            </li>
            <li className="h-10">
              <a href="#generative-art" onClick={toggleMenu}>
                generative art
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
