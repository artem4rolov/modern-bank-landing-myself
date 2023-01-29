import React from "react";

import logo from "../assets/logo.svg";
import styles from "../styles/styles";
import { footerLinks, socialMedia } from "../constants";
import { facebook, instagram, linkedin, twitter } from "../assets";

const Footer = () => {
  return (
    <section className="flex mt-10">
      <div className="flex flex-col w-[100%]">
        {/*  */}
        <div className="flex ss:justify-between text-center items-center ss:items-start ss:text-left  ss:flex-row flex-col ">
          <div className="">
            <img src={logo} alt="" />
            <div className="text-dimWhite max-w-[320px] ml-0 ss:m-5">
              A new way to make the payments easy, reliable and secure.
            </div>
          </div>
          {footerLinks.map((footerLink, index) => (
            <div className={`flex flex-col ss:mt-0 mt-10`}>
              <div className="text-white font-semibold">{footerLink.title}</div>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li className={`text-dimWhite mt-3 hover:text-white`}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="border-t-2 border-slate-600 flex flex-col items-center text-center ss:items-start ss:flex-row justify-between mt-5 pt-5 pb-5">
          <div className="flex text-[18px] text-dimWhite">
            <span>Copyright © 2023 HooBank. All Rights Reserved.</span>
          </div>
          <div className="flex mt-5 ss:mt-0">
            {socialMedia.map((link, index) => (
              <img
                src={link.img}
                alt="social img"
                className="w-[21px] h-[21px] ml-5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
