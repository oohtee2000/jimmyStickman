import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";
import Footer from '@/components/footer/Footer'
import "./globals.css"; // Ensure you import your global styles

export const metadata: Metadata = {
  title: "JimmyStickman",
  description: "Best Shopping Experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 overflow-x-hidden">
        <Navbar />
        <main className="w-full relative z-10 pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
