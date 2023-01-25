import React from "react";

import styles from "../styles/styles";

import Discount from "../assets/Discount.svg";
import robot from "../assets/robot.png";
import arrow from "../assets/arrow-up.svg";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mb-10 mt-10`}
    >
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex justify-center items-center max-w-[480px] py-[6px] px-[10px] text-white uppercase bg-discount-gradient rounded-[10px] mb-2 text-[16px] relative">
          <img src={Discount} alt="" />
          <div>
            <span>20%</span>
            <span className="text-dimWhite"> discount for </span>
            <span>1 month</span>
            <span className="text-dimWhite"> account</span>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="text-white text-[55px] ss:text-[72px] font-semibold">
              <span>The Next</span>
              <br />
              <span className="text-gradient">Generation</span>
              <br />
            </div>
            <div className="sm:flex hidden">
              <GetStarted />
            </div>
          </div>
          <span className="text-white text-[55px] ss:text-[72px] font-semibold">
            Payment Method.
          </span>
          <div className="sm:hidden flex mt-10 justify-center">
            <GetStarted />
          </div>
        </div>
        <p className="text-dimWhite max-w-[440px] mt-[40px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br /> We examine annual percentage
          rates, annual fees.
        </p>

        {/* <div className="absolute blue__gradient absolute left-10 w-[30%] h-[30%] z-[1]" /> */}
      </div>
      <div className="flex flex-1 relative">
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] z-[5] mt-10"
        />

        <div className="absolute blue__gradient absolute left-10 w-[80%] h-[40%] z-[1]" />
        <div className="absolute pink__gradient absolute left-20 w-[80%] h-[40%] z-[2]" />
        <div className="absolute white__gradient absolute right-10 bottom-40 w-[80%] h-[40%] z-[2]" />
      </div>
    </section>
  );
};

export default Hero;
