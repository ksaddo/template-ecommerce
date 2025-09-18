import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import MobileBottomNav from "./components/MobileBottomNav";

const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce",
  description: "Template Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={redHat.variable}>
      <body className="antialiased font-sans">
        <Marquee />
        <NavBar />
        {children}
        <MobileBottomNav />
        <Footer />
      </body>
    </html>
  );
}
