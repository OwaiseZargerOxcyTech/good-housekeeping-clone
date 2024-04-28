import CategoryBlogs from "@/components/category/CategoryBlogs";
import CategoryHero from "@/components/category/CategoryHero";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbar";
import React from "react";

// export async function generateMetadata({ params }) {
//   const { categoryslug } = params;
//   try {
//     const baseUrl = "https://good-housekeeping-clone-red.vercel.app";
//     const response = await fetch(baseUrl + "/api/combinedapi", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ apiName: "getcategory", categoryslug }),
//     });

//     const { result } = await response.json();
//     if (!result) {
//       return {
//         title: "Not Found",
//         description: "The page you are looking for does not exist",
//       };
//     }
//     return {
//       title: result?.title,
//       openGraph: {
//         description: result?.description,
//         images: [result?.image],
//       },
//     };
//   } catch (error) {
//     console.log("error", error);
//     return {
//       title: "Not Found",
//       description: "The page you are looking for does not exist",
//     };
//   }
// }

const SlugPage = ({ params }) => {
  return (
    <div>
      <CategoryHero />
      <CategoryBlogs params={params} />
    </div>
  );
};

export default SlugPage;
