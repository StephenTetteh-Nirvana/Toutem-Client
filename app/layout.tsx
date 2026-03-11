import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100","300", "400", "700", "900"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "EliteFits",
  description: "A landing page for an e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body
      >
        <main className="flex flex-col m-0 p-0">
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
