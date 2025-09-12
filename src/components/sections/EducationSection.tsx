import { education } from '@/data/education';
import { SectionHeader } from '@/components/ui/SectionHeader';
import EducationTimeline from '@/components/ui/EducationTimeline';

export const EducationSection = () => {
  return (
    <section id="education">
      <SectionHeader
        title="Education"
        description="My academic background and qualifications"
      />
      <EducationTimeline  />
    </section>
  );
};