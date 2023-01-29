import React from "react";

import card from "../assets/card.png";
import Button from "./Button";
import styles from "../styles/styles";

const Card = () => {
  return (
    <section
      id="Solution"
      className={`flex flex-col items-center md:flex-row ${styles.paddingY} mt-20`}
    >
      <div className={`flex-1 items-center`}>
        <div className="text-white text-[48px] max-w-[570px] font-semibold mb-10">
          Find a better card deal <br /> in few easy steps.
        </div>
        <div className="text-dimWhite text-[18px] mb-10 max-w-[470px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </div>
        <Button />
      </div>

      <div className={`flex-1 ${styles.flexStart} mt-10`}>
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default Card;
