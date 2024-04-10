import React from "react";

const SpringBreak = () => {
  return (
    <div className="spring-break mt-8">
      <h1 className="font-sans text-2xl lg:text-4xl font-bold">
        PLAN YOUR SPRING BREAK
      </h1>
      <div className="border-t border-black my-4"></div>
      <div className="lg:flex">
        <div className="lg:w-3/5">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gh-travel-awards-index-65551789783ff.png?crop=1xw:1xh;center,top&resize=1120:*"
            alt="spring-break-img"
          />
          <div className="flex flex-col justify-center items-center py-4 bg-slate-200 ">
            <p className="font-sans text-xs lg:text-base text-center font-bold">
              The Best in Family Travel
            </p>
            <h1 className="font-serif lg:text-4xl font-bold text-center">
              Good HouseKeeping's 2024 Family Travel Awards
            </h1>
          </div>
        </div>
        {/* right section */}
        <div className="">
          <div className="flex items-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/child-in-swimming-pool-royalty-free-image-1675277341.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*"
              alt="spring-break-img"
              className="w-20 lg:w-32 m-2"
            />
            <p>The Best All-Inclusive Resorts for Families</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/glacier-bay-national-park-and-preserve-alaska-royalty-free-image-1710984202.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*"
              alt="spring-break-img"
              className="w-20 lg:w-32 m-2"
            />
            <p>The Best Alaska Cruises</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/view-of-canal-in-amsterdam-royalty-free-image-1648486463.jpg?crop=0.639xw:1.00xh;0.181xw,0&resize=360:*"
              alt="spring-break-img"
              className="w-20 lg:w-32 m-2"
            />
            <p>20 Best Places to Visit in April</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/family-running-and-splashing-into-sea-together-with-royalty-free-image-1672326837.jpg?crop=0.668xw:1.00xh;0.120xw,0&resize=360:*"
              alt="spring-break-img"
              className="w-20 lg:w-32 m-2"
            />
            <p>The Best Family Vacation Ideas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringBreak;
