import Advertisement from "@/components/home/Advertisement";
import BeautyLab from "@/components/home/BeautyLab";
import BestLuggage from "@/components/home/BestLuggage";
import ExpertAdvice from "@/components/home/ExpertAdvice";
import Latest from "@/components/home/Latest";
import MembershipPortal from "@/components/home/MembershipPortal";
import Products from "@/components/home/Products";
import SpringBreak from "@/components/home/SpringBreak";
import SustainableLiving from "@/components/home/SustainableLiving";
import ThinkGreen from "@/components/home/ThinkGreen";

// export const metadata = {
//   metadataBase: new URL("https://good-housekeeping-clone-red.vercel.app"),
//   keywords: [
//     "Hey Blog User",
//     "Top Life Blogs",
//     "Top Health Blogs",
//     "Top Food Blogs",
//   ],
//   title: {
//     default: "Blog Home Page",
//   },
//   openGraph: {
//     description: "Blog Home Page description",
//   },
// };

export default function Home() {
  return (
    <main>
      <div className="hidden sm:flex justify-center py-4 bg-slate-100">
        <img
          src="https://tpc.googlesyndication.com/simgad/14571752723877178338"
          alt="ad"
        />
      </div>
      <div className="bg-[#F8F3F4]">
        <SustainableLiving />
      </div>
      <ThinkGreen />
      <div className="bg-[#F8F3F4]">
        <ExpertAdvice />
      </div>
      <div className="divider text-xs">
        Advertisement - Continue Reading Below
      </div>
      <Advertisement />
      <div className="border-t mt-8 border-black sm:mx-[7%]"></div>
      <div className="border-t mt-1 border-black sm:mx-[7%]"></div>
      <BestLuggage />
      <div className="border-t border-black sm:mx-[7%]"></div>
      <div className="border-t mt-1 border-black sm:mx-[7%]"></div>
      <Products />
      <SpringBreak />
      <BeautyLab />
      <MembershipPortal />
      <Latest />
    </main>
  );
}
