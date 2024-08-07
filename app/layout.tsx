import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMAC - Africa Mega Agricultural Corporation",
  description:
    "An export and import company that specializes in delivering effective, tailored farming solutions to drive agricultural productivity and success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <footer className="bg-green-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Amac Foods. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
