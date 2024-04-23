import CategoryHero from "@/components/category/CategoryHero";
import Footer from "@/components/footer/Footer";
import LifeBlogs from "@/components/life/LifeBlogs";
import Navbar from "@/components/navbars/Navbar";
import React from "react";

const Category = () => {
  return (
    <div>
      <Navbar />
      <CategoryHero />
      <LifeBlogs />
      <Footer />
    </div>
  );
};

export default Category;
