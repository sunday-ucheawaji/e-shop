import React, { Suspense } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";
import SuspenseLoader from "./components/SuspenseLoader";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./components/nav/NavBar"));

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const DynamicMain = dynamic(() => import("../app/components/DynamicMain"));

export const metadata: Metadata = {
  title: "E~Shop",
  description: "Generated by create next app",
};

export const dynamics = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <Suspense fallback={<SuspenseLoader />}>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <NavBar />
              <DynamicMain>{children}</DynamicMain>
              <Footer />
            </div>
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
