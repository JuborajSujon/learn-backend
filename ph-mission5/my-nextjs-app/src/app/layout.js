import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className}  antialiased`}
        data-new-gr-c-s-check-loaded="14.1226.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
