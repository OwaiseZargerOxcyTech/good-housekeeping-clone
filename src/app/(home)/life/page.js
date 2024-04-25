import CategoryHero from "@/components/category/CategoryHero";
import Footer from "@/components/footer/Footer";
import LifeBlogs from "@/components/life/LifeBlogs";
import Navbar from "@/components/navbars/Navbar";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://good-housekeeping-clone-red.vercel.app"),
  keywords: [
    "Hey Blog User",
    "Top Life Blogs",
    "Top Health Blogs",
    "Top Food Blogs",
  ],
  title: {
    default: "Life Page",
  },
  openGraph: {
    description: "Life Page description",
  },
};

const Life = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CategoryHero />
      <LifeBlogs />
      {/* <Footer /> */}
    </div>
  );
};

export default Life;
