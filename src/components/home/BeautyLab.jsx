import React from "react";
import beautyLabData from "./beautyLabData";
import CardForProducts from "./CardForProducts";

const BeautyLab = () => {
  return (
    <div className="sm:mx-[7%] pt-4">
      <div className="flex ">
        <span>
          <img
            src="https://www.goodhousekeeping.com/_assets/design-tokens/goodhousekeeping/static/images/Clover.5c7a1a0.svg"
            alt="clover"
            className="w-8 mr-2"
          />
        </span>
        <h1 className="font-sans text-2xl lg:text-4xl font-bold text-black">
          INSIDE THE BEAUTY LAB
        </h1>
      </div>

      <div className="border-t border-black my-4"></div>
      <div className="flex flex-wrap mt-12 border border-gray-400">
        {beautyLabData.map((product, index) => (
          <CardForProducts
            key={index}
            imageUrl={product.imageUrl}
            altText={product.alt}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BeautyLab;
