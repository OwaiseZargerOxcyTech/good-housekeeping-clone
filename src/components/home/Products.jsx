import React from "react";

const Products = () => {
  return (
    <div className="flex flex-wrap sm:mx-[7%]">
      {/* Product Card 1 */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/71fe-exiu-l-sl1500-1573057281.jpg?crop=0.566xw:1.00xh;0.218xw,0&resize=360:*"
          alt="product-card-1-img"
          className="w-full"
        />
        <p className="mt-2 text-center lg:text-xl text-black font-bold">
          The Best Air Mattresses
        </p>
      </div>

      {/* Product Card 2 */}
      <div className="w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/gh-iron-64bab0bf2fc3d.png?crop=0.447xw:0.894xh;0.276xw,0.00641xh&resize=360:*"
          alt="product-card-2-img"
          className="w-full"
        />
        <p className="mt-2 text-center lg:text-xl font-bold text-black w-[80%]">
          The 8 Best Iron Supplements
        </p>
      </div>

      {/* Product Card 3 */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/gh-office-gadgets-66042b2e9168c.png?crop=0.502xw:1.00xh;0.250xw,0&resize=360:*"
          alt="product-card-3-img"
          className="w-full"
        />
        <p className="mt-2 text-center lg:text-xl font-bold text-black">
          The Best Cool Office Gadgets
        </p>
      </div>

      {/* Product Card 4 */}
      <div className="w-1/2 lg:w-1/4 p-4">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/gh-automatic-cat-feeder-66059f40a370b.png?crop=0.462xw:0.923xh;0.250xw,0.0224xh&resize=360:*"
          alt="product-card-4-img"
          className="w-full"
        />
        <p className="mt-2 text-center lg:text-xl text-black font-bold">
          The Best Automatic Cat Feeders
        </p>
      </div>
    </div>
  );
};

export default Products;
