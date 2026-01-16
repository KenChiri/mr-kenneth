'use client'
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MobileMenu } from "./ui/MobileMenu";
import { ContactModal } from "./ui/ContactModal"; // Import the new modal
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { AnimatePresence } from "framer-motion"; // Optional if you want animation
import { BioModal } from "./ui/BioModal";

const Navbar = () => {

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false); // New State
  const menuRef = useRef<HTMLDivElement>(null);
  const [isBioOpen, setBioOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProfileOpen(false); // Close profile specifically
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-gray-950/50 backdrop-blur-lg z-50 border-b border-white/5">
        <div className="flex items-center justify-between h-full px-6">
          <Image
            src={"/favicon/yellow-logo.png"}
            alt="Mr Kenneth"
            height={120} // Adjusted size for navbar
            width={120}
            className="object-contain"
          />

          <div className="flex items-center space-x-4 relative" ref={menuRef}>
            {/* Profile Picture Trigger */}
            <button className={`rounded-full overflow-hidden border-2 transition-all duration-200 ${isProfileOpen ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-transparent hover:border-yellow-400'}`}
              onClick={() => {
                setProfileOpen(!isProfileOpen);
                setMenuOpen(false);
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMenuOpen(!isMenuOpen);
                setProfileOpen(false);
              }}
              className="rounded-md border-2 border-transparent text-yellow-400 hover:border-yellow-400 p-1 transition-colors md:hidden"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 mr-4 bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 animate-in slide-in-from-top-2 duration-200">
                <MobileMenu
                  onClose={() => setMenuOpen(false)}
                  onOpenContact={() => {
                    setContactOpen(true);
                    setMenuOpen(false);
                  }}
                />
              </div>
            )}

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <ProfileDropdown
                onOpenContact={() => {
                  setContactOpen(true);
                  setProfileOpen(false); // Close dropdown when opening modal
                }}
                onOpenBio={() => {
                  setBioOpen(true);
                  setProfileOpen(false);
                }}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Render Contact Modal Globaly */}
      <AnimatePresence>
        {isContactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
        {isBioOpen && <BioModal onClose={() => setBioOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar