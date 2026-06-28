import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="pt-20 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
