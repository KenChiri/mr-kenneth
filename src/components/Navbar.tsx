'use client'
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MobileMenu } from "./ui/MobileMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Navbar = () => {

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);



   useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-gray-950/50 backdrop-blur-lg z-50">
            <div className="flex items-center justify-between h-full px-6">
                <div className="text-yellow-300 text-2xl font-mono">Kenneth.com</div>
                <div className="flex items-center space-x-4 relative" ref={menuRef}>
                    {/* Profile Picture (visible on all screens) */}
                    <button className="rounded-full overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-colors"
                      onClick={() => {
                            setProfileOpen(!isProfileOpen);
                            setMenuOpen(false); // Close mobile menu when profile dropdown opens
                        }}
                    >
                        <Image
                            src="/images/IMG_0333.jpg"
                            alt="User Avatar"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </button>
                      {/* Menu Button for Mobile */}
                    <button 
                        onClick={() => {
                          setMenuOpen(!isMenuOpen);
                          setProfileOpen(false);
                          }
                        } 
                        className="rounded-md border-2 border-transparent text-yellow-400 hover:border-yellow-400 p-1 transition-colors md:hidden"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                    
                    {/* Conditionally render the Mobile Menu */}
                    {isMenuOpen && (
                         <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-lg">
                            <MobileMenu onClose={() => setMenuOpen(false)} />
                        </div>
                    )}
                    {/* Conditionally render the Profile Dropdown */}
                    {isProfileOpen && (
                         <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-lg">
                            <ProfileDropdown />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar