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

export default function Home() {
  return (
    <main>
      <SustainableLiving />
      <ThinkGreen />
      <ExpertAdvice />
      <div className="divider text-xs">
        Advertisement - Continue Reading Below
      </div>
      <Advertisement />
      <BestLuggage />
      <div className="border-t border-black"></div>
      <div className="border-t mt-1 border-black"></div>
      <Products />
      <SpringBreak />
      <BeautyLab />
      <MembershipPortal />
      <Latest />
    </main>
  );
}
