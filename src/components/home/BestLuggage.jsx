import React from "react";

const BestLuggage = () => {
  return (
    <div className="Best-luggage mt-4 lg:my-8 flex justify-center items-center lg:h-screen">
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/ghk-032024-indexteting-luggage-225-srgb-660daf9f03d7d.jpg?crop=0.875xw:0.656xh;0.0705xw,0.183xh&resize=1120:*"
          alt="Best-luggage-img"
        />
        <div className="flex flex-col justify-center items-center m-4">
          <h1 className="font-sans lg:text-4xl font-bold text-center">
            The Best Luggage Brand
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BestLuggage;
