import CategoryHero from "@/components/category/CategoryHero";
import CategoryProducts from "@/components/category/CategoryProducts";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbar";
import React from "react";

const Category = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CategoryHero />
      <CategoryProducts />
      {/* <Footer /> */}
    </div>
  );
};

export default Category;
