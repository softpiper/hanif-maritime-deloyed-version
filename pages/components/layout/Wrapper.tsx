import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="mt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
