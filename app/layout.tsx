import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReadexProMedium } from "./fonts";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "NEXUS | Leading Launches",
  description: "With a seamless and secure Web3 platform, Nexus has perfectly crafted tools and it is redefining the excellence of community backed launches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ReadexProMedium.className} style={{minHeight:"100vh"}}>
        <div className="relative">
          <div className="absolute top-0 left-0 h-full">
            <img src="/Images/masktopleft.png" className="h-full hidden lg:block"></img>
          </div>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
