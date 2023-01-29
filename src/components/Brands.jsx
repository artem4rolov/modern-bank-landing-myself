import React from "react";
import styles from "../styles/styles";

import { brands } from "../constants";

const Brands = () => {
  return (
    <section
      className={`${styles.paddingX} flex flex-col items-center md:flex-row justify-between mt-10`}
    >
      {brands.map((brand, index) => (
        <div key={brand.id} className={`${index === 0 ? "" : "mt-20"} md:mt-0`}>
          <img
            src={brand.img}
            alt="brand image"
            className="md:w-[200px] ss:w-[300px]"
          />
        </div>
      ))}
    </section>
  );
};

export default Brands;
