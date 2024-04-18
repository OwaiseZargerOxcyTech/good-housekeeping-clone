import React from "react";

const CategoryHero = () => {
  return (
    <div className="sustainable-living mb-8 sm:p-8 flex justify-center">
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/fluffy-pancakes-1675719604-65d519d0d893f.jpg?crop=1.00xw:0.502xh;0,0.282xh&resize=1200:* "
          alt="sustainable-living-img"
          className="w-full"
        />
        <div className="flex flex-col justify-center items-center m-4">
          <p className="font-sans text-xs lg:text-base font-bold text-black">
            Gordon Ramsays's
          </p>
          <h1 className="font-serif lg:text-4xl font-bold text-center text-black">
            Epic Brunch Recipes to Try This Weekend
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
