import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexaBlog",
  description:
    "Welcome to NexaBlog – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={roboto.className}
        data-new-gr-c-s-check-loaded="14.1226.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true">
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
