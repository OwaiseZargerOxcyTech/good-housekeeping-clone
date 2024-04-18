import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbar";

export default function DetailsPageLayout({ children }) {
  return (
    <div className="bg-zinc-100 flex min-h-screen flex-col items-center justify-between sm:p-2">
      {children}
    </div>
  );
}
