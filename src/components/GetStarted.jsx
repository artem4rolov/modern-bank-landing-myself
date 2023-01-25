import React from "react";

import styles from "../styles/styles";
import arrow from "../assets/arrow-up.svg";

const GetStarted = () => {
  return (
    <div
      className={`w-[140px] h-[140px] rounded-full border-[3px] border-cyan-300 text-gradient text-[18px] font-semibold flex justify-center items-center flex-col cursor-pointer`}
    >
      <div className="flex">
        Get <img src={arrow} alt="arrow up" />
      </div>
      <span>Started</span>
    </div>
  );
};

export default GetStarted;
