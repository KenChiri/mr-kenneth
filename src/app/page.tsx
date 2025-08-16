'use client';

import { useNavigation } from '@/components/NavigationContext';
import { CertificationSection } from '@/components/sections/CertificationSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection';

const PlaceholderSection = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center p-8">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 mt-2">This section is under construction.</p>
    </div>
  </div>
);


export default function Home() {
  const { activeSection } = useNavigation();
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experiences':
        return <ExperienceSection />; // Assuming you have this component
      case 'education':
        return <EducationSection />; // Assuming you have this component
      case 'certifications':
        return <CertificationSection />; // Assuming you have this component
      default:
        return <HeroSection />; // Fallback to home
    }
  };

  return <div className="p-4 md:p-8">{renderSection()}</div>;
}