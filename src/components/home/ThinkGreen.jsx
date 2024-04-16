import React from "react";

const ThinkGreen = () => {
  return (
    <div className="think-green mt-8 sm:mx-[7%] ">
      <div>
        <h1 className="font-sans text-2xl lg:text-4xl font-bold text-black">
          THINK GREEN
        </h1>
        <div className="border-t border-black my-4"></div>
        <div className="sm:flex">
          <div>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/cleaning-questions-natural-cleaners-1607634435.png?crop=1.00xw:0.503xh;0,0.191xh&resize=1120:*"
              alt="think-green-img"
            />
            <div className="py-4 bg-slate-200 ">
              <p className="font-sans text-xs lg:text-base text-center font-bold  text-black">
                EARTH MONTH
              </p>
              <h1 className="font-serif lg:text-4xl font-bold text-center  text-black">
                The Best Eco-Friendly Cleaning Products
              </h1>
            </div>
            <div className="p-4 flex flex-wrap lg:justify-evenly">
              <div className="w-1/2 lg:w-1/4 p-2">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1355386396.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*"
                  alt="think-green-card-1-img"
                />
                <p>Famous Quotes for Earth Day</p>
              </div>
              <div className="w-1/2 lg:w-1/4 p-2">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/family-planting-flowers-together-royalty-free-image-1710534764.jpg?crop=0.668xw:1.00xh;0.179xw,0&resize=360:*"
                  alt="think-green-card-2-img"
                />
                <p>Earth Day Activities for Adults and Children</p>
              </div>
              <div className="w-1/2 lg:w-1/4 p-2">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/recycling-symbols-1618244867.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=360:*"
                  alt="think-green-card-3-img"
                />
                <p>How to decode Recycling Symbols</p>
              </div>
              <div className="w-1/2 lg:w-1/4 p-2">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/ghk050120ghr-ecofriendly-003-1602876105.jpg?crop=0.669xw:1.00xh;0.130xw,0&resize=360:*"
                  alt="think-green-card-4-img"
                />
                <p>Your Ultimate Guide to Sustainable Living</p>
              </div>
            </div>
          </div>
          <div className="m-4 sm:mt-0 hidden sm:flex">
            <img
              src="https://tpc.googlesyndication.com/simgad/2311008341451174436"
              alt="think-green-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkGreen;
