import React, { useState } from "react";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-[30px]">
      <img src={logo} alt="logo image" className="w-[124px] h-[32px]" />

      <ul className="sm:flex hidden flex-row">
        {navLinks.map((link, index) => (
          <li
            key={link.titel}
            className={`text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-[16px] text-dimWhite hover:text-white cursor-pointer`}
          >
            {link.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <img
          src={toggle ? close : menu}
          alt=""
          onClick={() => setToggle(!toggle)}
          className="w-[28px] h-[28px]"
        />
      </div>

      <div
        className={`${
          toggle ? "sm:hidden" : "hidden"
        } sidebar bg-black-gradient rounded p-6 flex items-center text-center absolute top-20 right-5`}
      >
        <ul>
          {navLinks.map((link, index) => (
            <li
              key={link.titel}
              className={`text-white ${
                index === 0 ? "my-0" : "my-3"
              } text-[22px] text-dimWhite hover:text-white cursor-pointer`}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
