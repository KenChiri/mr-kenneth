'use client';
import {
  HomeIcon,
  CodeBracketIcon,
  UserIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { useNavigation } from "@/components/NavigationContext";

interface MobileMenuProps {
  onClose: () => void;
  onOpenContact: () => void;
}

export const MobileMenu = ({ onClose, onOpenContact }: MobileMenuProps) => {
  const { activeSection, setActiveSection } = useNavigation();

  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'projects', icon: CodeBracketIcon, label: 'Projects' },
    { id: 'experiences', icon: UserIcon, label: 'Experience' },
    { id: 'education', icon: AcademicCapIcon, label: 'Education' },
    { id: 'certifications', icon: EnvelopeIcon, label: 'Certifications' },
  ];

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    onClose();
    // Optional: If you aren't using a single-page scroll library, 
    // you might want to manually scroll here:
    // document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col py-2 bg-zinc-950/50 backdrop-blur">
      {/* Navigation Links */}
      <nav className="space-y-1 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive
                  ? 'bg-yellow-400/10 text-yellow-400 font-medium'
                  : 'text-zinc-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-400' : 'text-zinc-500'}`} />
              <span>{item.label}</span>

              {/* Active Indicator Dot */}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="my-2 border-t border-zinc-800 mx-4"></div>

      {/* Contact Action */}
      <div className="px-2 pb-2">
        <button
          onClick={onOpenContact}
          className="w-full flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white p-3 rounded-xl transition-all duration-300 font-medium group"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" />
          <span>Contact Me</span>
        </button>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-2 text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          Ken-X Portfolio © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};