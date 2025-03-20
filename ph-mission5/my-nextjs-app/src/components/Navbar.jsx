import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between container px-6 mx-auto py-7 border-b">
      <Link href="/">Logo</Link>

      <div className="flex gap-5">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  );
};

export default Navbar;
