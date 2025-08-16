import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";



import AnimatedBackground from "@/components/AnimatedBackground";
import { NavigationProvider } from "@/components/NavigationContext";
import ClientLayout from "@/components/ClientLayout";

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

  

  

  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotMono.variable} antialiased`}
      >
        <AnimatedBackground />
        <NavigationProvider>
        
          <ClientLayout> {children} </ClientLayout>

        </NavigationProvider>
        
      
      </body>
    </html>
  );
}