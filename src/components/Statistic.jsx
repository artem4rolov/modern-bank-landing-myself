import React from "react";

import { Statistics } from "../constants";
import styles from "../styles/styles";

const Statistic = () => {
  return (
    <section
      id="About Us"
      className="text-white lg:flex-row ss:flex mt-10 mb-[192px] items-ceter uppercase sm:divide-x "
    >
      {Statistics.map((stat, index) => (
        <div
          className={`flex justify-evenly text-center items-center pl-4 pr-4 ${styles.boxWidth} `}
          key={stat.num}
        >
          <span className="text-[40px] font-semibold ">{stat.num}</span>
          <span className="text-gradient text-[18px] font-light">
            {stat.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Statistic;
