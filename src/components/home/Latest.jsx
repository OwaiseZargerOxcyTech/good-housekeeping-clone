import React from "react";

const ProductCard = ({ imageUrl, title }) => {
  return (
    <div className="w-1/2 lg:w-1/4">
      <div className="border border-gray-300 overflow-hidden">
        <img src={imageUrl} alt="product-card-img" className="w-full p-4" />
        <p className="mt-2 text-center lg:text-xl font-bold p-4">{title}</p>
      </div>
    </div>
  );
};

const Latest = () => {
  const products = [
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/gh-best-couches-at-walmart-1-645e67c640b95.png?crop=0.487xw:0.974xh;0.00801xw,0.0128xh&resize=360:*",
      title: "13 Best Couches at Walmart",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/lead1-bp-2tone-pompeii-shower-0017-open-angle-rev-65fae35d416ab.jpg?crop=0.692xw:1.00xh;0.0918xw,0&resize=360:*",
      title: "Upgrade Your Bathroom ",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/gh-toys-gifts-for-1-year-olds-1666363469.png?crop=0.502xw:1.00xh;0,0&resize=360:*",
      title: "Best Toy for 1 Year Old ",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/natural-sunscreens-66159254499c1.png?crop=0.502xw:1.00xh;0.250xw,0&resize=360:*",
      title: "The 18 Organic Sunscreens",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/gifts-for-3-year-olds-645a96cfdb5b4.png?crop=0.502xw:1.00xh;0,0&resize=360:*",
      title: "The Best Gift for 3 Year Olds",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/gh-best-luggage-sets-657cac4e66de2.png?crop=0.502xw:1.00xh;0.250xw,0&resize=360:*",
      title: "The Best Luggage Sets",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/property-interiors-royalty-free-image-1712597697.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*",
      title: "Composite Decking",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/saatva-mattress-1652122011-6408bff14f50b.jpeg?crop=0.563xw:1.00xh;0.206xw,0&resize=360:*",
      title: "Memorial Mattress Sale",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/saatva-mattress-deals-sales-6410cf5e91616.png?crop=0.502xw:1.00xh;0,0&resize=360:*",
      title: "Mattress Deals of 2024",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/ghk-1122-digital-institutetesting-waterpicks-138-1664469035.jpg?crop=0.651xw:0.976xh;0.157xw,0.00721xh&resize=360:*",
      title: "The Best Water Flossers",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.575xw:0.884xh;0.220xw,0.116xh&resize=360:*",
      title: "The Best Pillow for comfort",
    },
    {
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/strawberry-pistachio-cake-parfaits-660dc50f532e7.jpg?crop=1.00xw:0.668xh;0,0.112xh&resize=360:*",
      title: "40 Delicious Desserts",
    },
  ];

  return (
    <>
      <h1 className="font-serif mt-8 text-2xl lg:text-4xl font-bold">LATEST</h1>
      <div className="border-t border-black my-4"></div>
      <div className="flex flex-wrap mt-12 border border-gray-400">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
          />
        ))}
      </div>
    </>
  );
};

export default Latest;
