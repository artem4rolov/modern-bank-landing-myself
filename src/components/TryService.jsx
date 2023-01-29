import React from "react";

import Button from "./Button";
import styles from "../styles/styles";

const TryService = () => {
  return (
    <section className={`flex mt-10`}>
      <div className="bg-black-gradient-2 flex md:flex-row flex-col items-center md:justify-evenly text-center rounded-[20px] w-[100%] p-20">
        <div>
          <span
            className={`text-white text-[48px] font-semibold max-w-[670px]`}
          >
            Let’s try our service now!
          </span>
          <p className={`text-dimWhite text-[18px] mt-5 max-w-[445px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <div className="flex justify-center items-center md:mt-0 mt-5">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default TryService;
