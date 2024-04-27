// import "./globals.css";
import "../globals.css";
import { inter } from "@/components/common/fonts";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbars/Navbar";
import AuthProviders from "@/components/providers/AuthProviders";

// export const metadata = {
//   title: "Blog User App",
//   description: "Generated by create next app",
// };

export const metadata = {
  icons: {
    icon: "/favicon/favicon.ico", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProviders>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </AuthProviders>
      </body>
    </html>
  );
}

// drawer

// <div className="drawer">
// <input
//   id="my-drawer"
//   type="checkbox"
//   className="drawer-toggle" //uncomment to use drawer
// />
// <div className="drawer-content">
//   {/* Page content here */}
//   {/* navbar */}
//   <Navbar />
//   {/* body */}
//   <div className="flex min-h-screen flex-col items-center justify-between p-2">
//     {children}
//   </div>
//   <Footer />
// </div>
// <div className="drawer-side">
//   <label
//     htmlFor="my-drawer"
//     aria-label="close sidebar"
//     className="drawer-overlay"
//   ></label>
//   <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//     Sidebar content here
//     <li>
//       <a>Sidebar Item 1</a>
//     </li>
//     <li>
//       <a>Sidebar Item 2</a>
//     </li>
//   </ul>
// </div>
// </div>
