import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto min-h-screen">{children}</div>

      <Footer />
    </div>
  );
};

export default CommonLayout;
