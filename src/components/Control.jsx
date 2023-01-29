import React from "react";

import bill from "../assets/bill.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import styles from "../styles/styles";

const Control = () => {
  return (
    <section
      id="Features"
      className={`flex flex-col items-center md:flex-row ${styles.paddingY} mt-20`}
    >
      <div className={`flex-1 ${styles.flexStart} mt-10`}>
        <img src={bill} alt="" />
      </div>

      <div className={`flex-1 items-center`}>
        <div className="text-white text-[48px] font-semibold mb-10 max-w-[470px]">
          Easily control your billing & invoicing.
        </div>
        <div className="text-dimWhite text-[18px] mb-10 max-w-[470px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <div className="flex">
          <img src={apple} alt="" className="mr-5" />
          <img src={google} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Control;
