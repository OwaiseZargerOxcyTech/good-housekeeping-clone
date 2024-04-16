import React from "react";
import CardForProducts from "./CardForProducts";
import { latestProducts } from "./LatestProductsData";

const Latest = () => {
  return (
    <div className="sm:mx-[7%]">
      <h1 className="font-sans mt-8 text-2xl lg:text-4xl font-bold text-black">
        LATEST
      </h1>
      <div className="border-t border-black my-4"></div>
      <div className="flex flex-wrap mt-12 border border-gray-400">
        {latestProducts.map((product, index) => (
          <CardForProducts
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Latest;
