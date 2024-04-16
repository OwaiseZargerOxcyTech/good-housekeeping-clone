import React from "react";

const CardForProducts = ({ imageUrl, altText, title }) => {
  return (
    <div className="w-1/2 lg:w-1/4 p-4 border ">
      <img src={imageUrl} alt={altText} className="w-full" />
      <p className="mt-2 text-center lg:text-xl font-bold">{title}</p>
    </div>
  );
};

export default CardForProducts;
