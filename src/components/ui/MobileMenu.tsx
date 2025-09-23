'use client';
import { useNavigation } from '@/components/NavigationContext';
import { menuItems } from '@/data/navigation';

interface MobileMenuProps {
    onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const { activeSection, setActiveSection } = useNavigation();

  const handleItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onClose(); // Close the menu after an item is clicked
  };

  return (
    <div className="absolute top-14 right-4 w-56 bg-gray-950/80 backdrop-blur-lg border border-gray-800/50 rounded-lg shadow-2xl z-50">
      <ul className="p-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center w-full text-left p-3 rounded-md transition-colors ${
                  isActive ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <IconComponent className={`w-5 h-5 mr-3 ${isActive ? 'text-yellow-400' : 'text-gray-400'}`} />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};