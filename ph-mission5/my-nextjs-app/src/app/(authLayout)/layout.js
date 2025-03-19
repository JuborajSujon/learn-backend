import Footer from "@/components/Footer";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="h-[calc(100vh-210px)] container px-6 mx-auto mt-3">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
