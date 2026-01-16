'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { useNavigation } from "./NavigationContext";
import { menuItems } from "@/data/navigation";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {
  const { activeSection, setActiveSection } = useNavigation();

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-screen
        bg-gray-950/80 backdrop-blur
        text-gray-300
        transition-[width] duration-300 ease-in-out
        hidden md:flex flex-col
        mt-16
        ${isExpanded ? 'w-64' : 'w-20'}
      `}
    >
      {/* === HEADER (LOGO + TOGGLE) === */}
      <div className="h-16 flex items-center justify-end px-4 border-b border-gray-800">
        {/* Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
      w-10 h-10 rounded-sm flex items-center justify-center hover:bg-gray-800 transition cursor-pointer
      relative z-50 
      [&>svg]:pointer-events-none
    `}
        >
          {isExpanded
            ? <ChevronLeftIcon className="w-4 h-4" />
            : <ChevronRightIcon className="w-4 h-4" />
          }
        </button>
      </div>

      {/* === MENU === */}
      <nav className="mt-4 flex-1">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    group flex items-center w-full h-11 px-3 rounded-lg
                    transition-colors duration-200
                    ${isActive
                      ? 'bg-gray-800 text-white'
                      : 'hover:bg-gray-800/60'
                    }
                  `}
                >
                  <Icon
                    className={`
                      w-5 h-5 flex-shrink-0
                      ${isActive ? 'text-white' : 'text-gray-400'}
                    `}
                  />

                  {isExpanded && (
                    <span className="ml-3 text-sm">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* === FOOTER === */}
      {isExpanded && (
        <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} Mr. Kenneth
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
