import React, { useState } from "react";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import GetStarted from "./GetStarted";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="w-full flex justify-between items-center py-[30px]">
      <img src={logo} alt="logo image" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            onClick={() => setActive(nav.title)}
            href={nav.id}
            key={nav.title}
            className={`text-white ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-[16px] text-dimWhite hover:text-white cursor-pointer`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <img
          src={toggle ? close : menu}
          alt=""
          onClick={() => setToggle(!toggle)}
          className="w-[28px] h-[28px] cursor-pointer"
        />
      </div>

      <div
        className={`${
          toggle ? "sm:hidden" : "hidden"
        } sidebar bg-black-gradient rounded-[10px] p-6 flex items-center text-center absolute top-20 right-5 z-[10]`}
      >
        <ul>
          {navLinks.map((nav, index) => (
            <li
              href={nav.id}
              key={nav.title}
              className={`text-white ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${
                index === 0 ? "my-0" : "my-3"
              } text-[22px] text-dimWhite hover:text-white cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
