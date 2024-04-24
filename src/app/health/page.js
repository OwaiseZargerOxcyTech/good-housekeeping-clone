import CategoryHero from "@/components/category/CategoryHero";
import Footer from "@/components/footer/Footer";
import HealthBlogs from "@/components/health/HealthBlogs";
import Navbar from "@/components/navbars/Navbar";
import React from "react";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  keywords: [
    "Hey Blog User",
    "Top Life Blogs",
    "Top Health Blogs",
    "Top Food Blogs",
  ],
  title: {
    default: "Health Page",
  },
  openGraph: {
    description: "Health Page description",
  },
};

const Health = () => {
  return (
    <div>
      <Navbar />
      <CategoryHero />
      <HealthBlogs />
      <Footer />
    </div>
  );
};

export default Health;
