'use client';
import Image from "next/image";
import Link from "next/link";
import {
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // You might need to install react-icons: npm install react-icons

interface ProfileDropdownProps {
  onOpenContact: () => void;
  onOpenBio: () => void;
}

const ProfileDropdown = ({ onOpenContact, onOpenBio }: ProfileDropdownProps) => {
  return (
    <div className="absolute top-full right-0 mt-3 w-80 bg-gray-950/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl text-gray-300 overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">

      {/* Identity Header with Online Status */}
      <div className="p-5 border-b border-zinc-800 bg-zinc-950/30 relative">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image src="/images/IMG_0333.jpg" alt="ProfilePic" width={56} height={56} className="rounded-full border-2 border-zinc-700 shadow-lg" />
            {/* Green Online Dot with Ping Animation */}
            <span className="absolute bottom-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-zinc-900"></span>
            </span>
          </div>
          <div>
            <p className="font-bold text-white text-lg">Kenneth Kipchirchir</p>
            <p className="text-xs text-green-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              Available for work
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="p-3 space-y-1">
        <button
          onClick={onOpenBio}
          className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-zinc-800/80 transition-all text-left group">
          <UserCircleIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-sm group-hover:text-white">My Bio & Experience</span>
        </button>

        <button
          onClick={onOpenContact}
          className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-zinc-800/80 transition-all text-left group"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
          <span className="font-medium text-sm group-hover:text-white">Contact Me</span>
        </button>
      </div>

      <div className="px-5 py-2">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Connect</p>
        {/* Socials Grid */}
        <div className="grid grid-cols-4 gap-2">
          <Link href="https://github.com/KenChiri" target="_blank" className="flex items-center justify-center h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/kenneth-kipchirchir-67953427b/" target="_blank" className="flex items-center justify-center h-10 rounded-lg bg-zinc-800 hover:bg-blue-600 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="flex items-center justify-center h-10 rounded-lg bg-zinc-800 hover:bg-pink-600 hover:text-white transition-colors">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/KenChirii" className="flex items-center justify-center h-10 rounded-lg bg-zinc-800 hover:bg-sky-500 hover:text-white transition-colors">
            <FaTwitter className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-zinc-800 bg-zinc-950/30">
        <button className="w-full flex items-center justify-center space-x-2 p-2 text-xs text-zinc-500 hover:text-red-400 transition-colors">
          <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileDropdown;