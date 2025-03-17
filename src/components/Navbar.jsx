import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="w-full max-w-[81.25rem] flex items-center justify-between px-4">
      <div className="flex items-center justify-between px-4 w-full max-w-[81.25rem] px-4">
        <img src={assets.logo} alt="Logo for Estate" />
        <ul className="md:flex items-center gap-8 hidden">
          <li>
            <a
              href="#header"
              className="text-white decoration-none hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white decoration-none hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white decoration-none hover:text-gray-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-white decoration-none hover:text-gray-400"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden md:block bg-white text-black px-8 py-4 rounded-full font-[500]">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          alt="mobile menu icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {/* mobile menu items */}
      <div
        className={`md:hidden ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden py-[4rem] bg-white transition-all`}
      >
        <div className="flex justify-end p-4 cursor-pointer px-10">
          <img
            src={assets.cross_icon}
            alt="mobile menu close icon"
            className="w-6"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-8 font-medium">
          <li>
            <a href="#header" className="px-4 py-2 rounded-full inline-block">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="px-4 py-2 rounded-full inline-block">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="px-4 py-2 rounded-full inline-block">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
