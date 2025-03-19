import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-300px)] container px-6 mx-auto mt-3">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
