import { Inter } from "next/font/google";
import "./globals.css";
import NavComp from "@/components/NavComp/NavComp";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paddle Bike Sharing Web Application",
  description:
    "Paddle is a bike sharing website where you can rent a bike on hourly basis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavComp></NavComp>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
