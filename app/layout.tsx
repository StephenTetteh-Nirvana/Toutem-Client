import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Toutem",
  description: "A landing page for an e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
      >
        <main className="flex flex-col m-0 p-0">
          {children}
          <Navbar/>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
