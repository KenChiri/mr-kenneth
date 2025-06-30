import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Navbar = ({onMenuClick}: {onMenuClick: () => void}) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-gray-950/50 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="text-yellow-300 text-2xl font-mono">Kenneth.com</div>
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="rounded-md overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-colors">
            <Image
              src="/images/IMG_0333.jpg" // Make sure this path is correct
              alt="User Avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </button>
          {isDropdownOpen && <ProfileDropdown />}
        </div>
      </div>
    </nav>

    );
};

export default Navbar