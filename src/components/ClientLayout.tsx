'use client';

import { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // You can keep the mobile menu logic here for future use
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuClick = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <Navbar  />
      <Sidebar
        isExpanded={sidebarExpanded}
        setIsExpanded={setSidebarExpanded}
      />
      <main className={`
        pt-16 h-screen overflow-y-auto
        transition-all duration-300 ease-in-out
        ${sidebarExpanded ? 'md:ml-64' : 'md:ml-20'}`
      }>
        {children}
      </main>
    </>
  );
}