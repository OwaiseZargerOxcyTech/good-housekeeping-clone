import React from "react";

const SustainableLiving = () => {
  return (
    <div className="sustainable-living mb-8 bg-zinc-200 lg:p-16">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/ghk050120ghr-ecofriendly-003-1602876105.jpg?crop=1.00xw:0.753xh;0,0.127xh&resize=1200:*"
        alt="sustainable-living-img"
      />
      <div className="flex flex-col justify-center items-center m-4">
        <p className="font-sans text-xs lg:text-base font-bold">
          REDUCE, REUSE, RECYCLE
        </p>
        <h1 className="font-serif lg:text-4xl font-bold text-center">
          Sustainable Living 101: A Complete Guide
        </h1>
      </div>
    </div>
  );
};

export default SustainableLiving;
