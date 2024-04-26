import CategoryBlogs from "@/components/category/CategoryBlogs";
import CategoryHero from "@/components/category/CategoryHero";
import Footer from "@/components/footer/Footer";
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
    default: "Life Page",
  },
  openGraph: {
    description: "Life Page description",
  },
};

const SlugPage = ({ params }) => {
  return (
    <div>
      <Navbar />
      <CategoryHero />
      <CategoryBlogs params={params} />
      <Footer />
    </div>
  );
};

export default SlugPage;
