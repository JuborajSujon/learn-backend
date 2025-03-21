"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between container px-6 mx-auto py-7 border-b">
      <div>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-blue-500"
              : "cursor-pointer hover:underline"
          }>
          Logo
        </Link>
      </div>

      <div>
        <ul className="flex gap-5">
          <li>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-blue-500"
                  : "cursor-pointer hover:underline"
              }>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "text-blue-500"
                  : "cursor-pointer hover:underline"
              }>
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/counter"
              className={
                pathname === "/counter"
                  ? "text-blue-500"
                  : "cursor-pointer hover:underline"
              }>
              Counter
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                pathname === "/products"
                  ? "text-blue-500"
                  : "cursor-pointer hover:underline"
              }>
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={
                pathname === "/posts"
                  ? "text-blue-500"
                  : "cursor-pointer hover:underline"
              }>
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={
                pathname === "/gallery"
                  ? "text-blue-500"
                  : "cursor-pointer hover:underline"
              }>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
