import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fly Nepal",
  description: "Future Aviation Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-[#07111f] text-white">

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}