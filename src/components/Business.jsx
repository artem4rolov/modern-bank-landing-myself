import React, { useState } from "react";

import styles from "../styles/styles";
import Button from "./Button";
import { cardBusiness } from "../constants/index";

import Star from "../assets/Star.svg";

const Business = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="business"
      className={`flex flex-col items-center md:flex-row ${styles.paddingY}`}
    >
      <div className="flex-1 mb-5">
        <div className="text-white text-[48px] font-semibold mb-10">
          You do the business, <br /> we’ll handle the money.
        </div>
        <div className="text-dimWhite text-[18px] mb-10 max-w-[570px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </div>
        <Button />
      </div>

      <div className="flex-1 flex-col ml-5">
        {cardBusiness.map((card, index) => (
          <div
            key={card.title}
            className={`${
              active === index ? "bg-black-gradient-2 box-shadow" : "opacity-50"
            } rounded-[20px] flex items-center p-4 cursor-pointer hover:bg-sky-900 mt-3`}
            onClick={() => setActive(index)}
          >
            <div className="mr-[20px]">
              <img
                src={card.img}
                alt="card image"
                className="w-[32px] h-[42px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="text-white text-[18px] font-semibold mb-[8px]">
                {card.title}
              </span>
              <span className="text-dimWhite text-[18px]">{card.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
