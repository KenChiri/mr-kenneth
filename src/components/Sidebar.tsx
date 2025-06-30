'use client';
import Link from "next/link";
import {
    HomeIcon, 
    UserIcon, 
    CodeBracketIcon, 
    EnvelopeIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    AcademicCapIcon
} from '@heroicons/react/24/solid';


interface SidebarProps {
    isExpanded: boolean;
    setIsExpanded: (expanded: boolean) => void;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {

    const menuItems = [
        { id: 'home', icon: HomeIcon, label: 'Home' },
        { id: 'projects', icon: CodeBracketIcon, label: 'Projects' },
        { id: 'Experiences', icon: UserIcon, label: 'Experience' },
        { id: 'Education', icon: AcademicCapIcon, label: 'Education' },
        { id: 'Certification', icon: EnvelopeIcon, label: 'Certifications' },
    ];

    return (
       <aside 
         className={`
           fixed top-0 left-0 h-screen bg-gray-950 text-gray-300 z-40 
           border-r border-gray-800 mt-20 
           transition-all duration-300 ease-in-out hidden md:block
           ${isExpanded ? 'w-80' : 'w-20'}  
         `}
       >
        {/* === NEW HEADER SECTION === */}
        <div className={`flex items-center h-16 px-4 border-b border-gray-800 ${isExpanded ? 'justify-between': 'justify-center'}`}>
          <span 
            className={`
              font-bold text-lg text-white 
              transition-opacity duration-200 
              ${isExpanded ? "opacity-100" : "opacity-0"}
            `}
          >
            Menu
          </span>
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            {/* The icon changes based on the state */}
            {isExpanded ? <ChevronLeftIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6" />}
          </button>
        </div>
        {/* === END NEW HEADER SECTION === */}

        {/* --- The rest of the menu --- */}
        <nav className="mt-4">
            <ul className="flex flex-col space-y-1">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <li key={item.id} className="px-2">
                            <Link
                                href={`#${item.id}`}
                                className="flex items-center p-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition-colors group"
                            >
                                <IconComponent className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-yellow-400" />
                                <span 
                                  className={`
                                    ml-4 whitespace-nowrap 
                                    transition-opacity duration-200 
                                    ${isExpanded ? 'opacity-100' : 'opacity-0'}
                                  `}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

        {isExpanded && (
            <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs text-gray-500">© {new Date().getFullYear()} Mr. Kenneth</p>
            </div>
        )}
       </aside>
    );
};

export default Sidebar;