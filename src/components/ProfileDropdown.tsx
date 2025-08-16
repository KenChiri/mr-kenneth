'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    UserCircleIcon, UserGroupIcon, BookOpenIcon, MegaphoneIcon, ComputerDesktopIcon, SparklesIcon, WalletIcon, DocumentTextIcon, ArrowTopRightOnSquareIcon, SunIcon, MoonIcon, Cog6ToothIcon, CreditCardIcon
} from '@heroicons/react/24/outline';



const ProfileDropdown = () => {
    const [isProfileExpanded, setProfileExpanded] = useState(false);
    return (
        <div className="absolute top-full right-0 mt-2 w-72 bg-zinc-900/80 backdrop-blur-xl rounded-md border border-gray-800 shadow-2xl text-gray-300 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                      <Image src="/images/IMG_0333.jpg" alt="ProfilePic" width={40} height={40} className="rounded-md"  />
                      <div>
                        <p className="font-semibold text-white">Kenneth Kipchirchir</p>
                        <Link className="text-sm text-gray-400" href={"https://github.com/KenChiri"}>KenChiri</Link>
                    </div>

                </div>
              <button className="w-full mt-4 py-2 px-4 bg-green-400 text-black font-bold rounded-lg flex items-center justify-center space-x-2 hover:bg-green-300 transition-colors">
          <SparklesIcon className="w-5 h-5"/>
          <span>My Bio</span>
        </button>
      </div>

      {/* Main Menu Items */}
      <nav className="p-2">
        {/* Profile Accordion */}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800 cursor-pointer" onClick={() => setProfileExpanded(!isProfileExpanded)}>
          <div className="flex items-center space-x-3"><UserCircleIcon className="w-5 h-5"/><span>Your profile</span></div>
        </div>
        {isProfileExpanded && (
          <div className="pl-8 py-2 text-sm space-y-2">
            <p><strong>Email:</strong> <a href='mailto:kennethkipchiri@gmail.com'> Kennethkipchiri@gmail.com </a></p>
            <p><strong>LinkedIn:</strong> <a href="linkedin.com/in/kenneth-kipchirchir-67953427b/" className="text-blue-400 hover:underline">Kenchiri -LinkenIn</a></p>
          </div>
        )}

        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800"><WalletIcon className="w-5 h-5"/><span>Core wallet</span></a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800"><DocumentTextIcon className="w-5 h-5"/><span>DevCard</span></a>
      </nav>

      <hr className="border-gray-700 mx-2"/>
      
      {/* Theme and Settings */}
      <div className="p-2">
        <div className="flex items-center justify-between p-2">
          <span className="text-sm">Theme</span>
          <div className="flex items-center space-x-1 bg-zinc-800 p-1 rounded-lg">
            <button className="p-1 rounded bg-zinc-700"><MoonIcon className="w-4 h-4 text-white"/></button>
            <button className="p-1 rounded"><SunIcon className="w-4 h-4"/></button>
            <button className="p-1 rounded"><ComputerDesktopIcon className="w-4 h-4"/></button>
          </div>
        </div>
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800"><Cog6ToothIcon className="w-5 h-5"/><span>Settings</span></a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800"><CreditCardIcon className="w-5 h-5"/><span>Subscriptions</span></a>
      </div>
      
      <hr className="border-gray-700 mx-2"/>

      {/* External Links */}
      <div className="p-2">
        <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800">
          <div className="flex items-center space-x-3"><BookOpenIcon className="w-5 h-5"/><span>Docs</span></div>
          <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-500"/>
        </a>
      </div>
    </div>

    );

}

export default ProfileDropdown;