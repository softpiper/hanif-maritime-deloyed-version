import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Roboto } from "next/font/google";

const ubuntu = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${ubuntu.className} wrapper`}>
      <Header />
      <main className="mt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
