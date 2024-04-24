import CategoryHero from "@/components/category/CategoryHero";
import FoodBlogs from "@/components/food/FoodBlogs";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbar";
import React from "react";

// export const metadata = {
//   metadataBase: new URL("http://localhost:3000"),
//   keywords: [
//     "Hey Blog User",
//     "Top Life Blogs",
//     "Top Health Blogs",
//     "Top Food Blogs",
//   ],
//   title: {
//     default: "Food Page",
//   },
//   openGraph: {
//     description: "Food Page description",
//   },
// };

const Food = () => {
  return (
    <div>
      <Navbar />
      <CategoryHero />
      <FoodBlogs />
      <Footer />
    </div>
  );
};

export default Food;
