import { Inter } from "next/font/google";
import "./globals.css";
import NavComp from "@/components/NavComp/NavComp";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { ReactQueryClientProvider } from "@/components/ReactQuery/ReactQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paddle Bike Sharing Web Application",
  description:
    "Paddle is a bike sharing website where you can rent a bike on hourly basis.",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <AuthProvider>
          <body className={inter.className}>
            <NavComp></NavComp>
            {children}
            <Footer></Footer>
          </body>
        </AuthProvider>
      </html>
    </ReactQueryClientProvider>
  );
}
