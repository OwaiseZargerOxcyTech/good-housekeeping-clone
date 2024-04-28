import GetBlogBySlug from "@/components/blog/GetBlogBySlug";

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   try {
//     const baseUrl = "https://good-housekeeping-clone-red.vercel.app";
//     const response = await fetch(baseUrl + "/api/getblog", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ slug }),
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
    <>
      <GetBlogBySlug params={params} />
    </>
  );
};

export default SlugPage;
