'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";




//My New components 
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto-mono',
});
// export const metadata: Metadata = {
//   title: "Mr. Kenneth",
//   description: "A portfolio build with Next.js and Tailwind CSS",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotMono.variable} antialiased`}
      >
        <Navbar />
        <Sidebar 
          isExpanded={sidebarExpanded}
          setIsExpanded={setSidebarExpanded}
        />
        <main className={`pt-16 transition-all duration-900 ease-in-out ${
          sidebarExpanded ? 'ml-80' : 'ml-20' 
          }`}>
        {children}
      </main>
      </body>
    </html>
  );
}
