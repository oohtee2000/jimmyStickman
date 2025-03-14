import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";
import Footer from '@/components/footer/Footer'
import "./globals.css"; // Ensure you import your global styles

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "An awesome Next.js application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
