import { education } from '@/data/education';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EducationCard } from '@/components/ui/EducationCard';

export const EducationSection = () => {
  return (
    <section id="education">
      <SectionHeader
        title="Education"
        description="My academic background and qualifications"
      />
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map(edu => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
};