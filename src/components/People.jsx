import React from "react";

import quotes from "../assets/quotes.svg";
import people from "../assets/people01.png";
import styles from "../styles/styles";

import { peopleCard } from "../constants";

const People = () => {
  const [active, setActive] = React.useState(null);

  return (
    <section className={`flex flex-col mt-20`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div
          className={`text-white text-[48px] font-semibold md:text-left ss:text-center max-w-[570px]`}
        >
          <span className="">What people are saying about us</span>
        </div>
        <div
          className={`text-dimWhite text-[18px] ss:mt-10 md:mt-0 max-w-[480px]`}
        >
          <p className="">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mt-10">
        {peopleCard.map((card, index) => (
          <div
            key={card.name}
            onClick={() => setActive(index)}
            className={`flex-1 flex-col justify-between ${
              index === peopleCard.length - 1 ? "mr-0" : "md:mr-10 lg:mr-20"
            } ${
              index === active ? "bg-black-gradient-2" : "opacity-50"
            } box-shadow rounded-[20px] p-10`}
          >
            <div className="mb-7">
              <img src={quotes} alt="" />
            </div>
            <div className="text-white text-[18px] mb-7">{card.text}</div>
            <div className="flex items-center">
              <img src={card.img} alt="" className="mr-5 w-[70px]" />
              <div>
                <span className="text-[20px] text-white">{card.name}</span>
                <p className="text-[16px] text-dimWhite">{card.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
