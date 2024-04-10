import React from "react";

const BeautyLab = () => {
  return (
    <>
      <h1 className="font-serif mt-8 text-2xl lg:text-4xl font-bold">
        INSIDE THE BEAUTY LAB
      </h1>
      <div className="border-t border-black my-4"></div>
      <div className="flex flex-wrap mt-12 border border-gray-400">
        {/* Product Card 1 */}
        <div className="w-1/2 lg:w-1/4 p-4 ">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gh-anti-aging-creams-6552921e402c6.png?crop=0.502xw:1.00xh;0.250xw,0&resize=360:*"
            alt="product-card-1-img"
            className="w-full"
          />
          <p className="mt-2 text-center lg:text-xl font-bold">
            The Best Anti-Aging Creams
          </p>
        </div>

        {/* Product Card 2 */}
        <div className="w-1/2 lg:w-1/4 p-4">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gh-head-shaver-64f9e87fa5475.png?crop=0.502xw:1.00xh;0.250xw,0&resize=360:*"
            alt="product-card-2-img"
            className="w-full"
          />
          <p className="mt-2 text-center lg:text-xl font-bold">
            The Best Head Shavers
          </p>
        </div>

        {/* Product Card 3 */}
        <div className="w-1/2 lg:w-1/4 p-4">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/best-cellulite-cream-1646756254.jpg?crop=0.640xw:0.640xh;0.187xw,0.151xh&resize=360:*"
            alt="product-card-3-img"
            className="w-full"
          />
          <p className="mt-2 text-center lg:text-xl font-bold">
            The Best Cellulite Creams
          </p>
        </div>

        {/* Product Card 4 */}
        <div className="w-1/2 lg:w-1/4 p-4">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gh-best-shampoo-for-curly-hair-64e788c02081f.png?crop=0.502xw:1.00xh;0.277xw,0&resize=360:*"
            alt="product-card-4-img"
            className="w-full"
          />
          <p className="mt-2 text-center lg:text-xl font-bold">
            The Best Shampoos for Curly Hair
          </p>
        </div>
      </div>
    </>
  );
};

export default BeautyLab;
