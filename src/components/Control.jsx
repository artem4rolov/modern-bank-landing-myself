import React from "react";

import bill from "../assets/bill.png";
import apple from "../assets/apple.svg";
import apple from "../assets/apple.svg";
import google from "../styles/google.svg";

const Control = () => {
  return (
    <section className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className="">
        <img src={bill} alt="" />
      </div>

      <div className="flex-1">
        <div className="text-white text-[48px] font-semibold mb-10">
          Easily control your <br /> billing & invoicing.
        </div>
        <div className="text-dimWhite text-[18px] mb-10">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <img src={apple} alt="" />
        <img src={google} alt="" />
      </div>
    </section>
  );
};

export default Control;
