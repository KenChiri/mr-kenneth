import { experiences } from '@/data/experiences';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceCard } from '@/components/ui/ExperienceCard';


export const ExperienceSection = () => {
  return (
    <section id="experiences">
      <SectionHeader
        title="Work Experience"
        description="My professional journey and key accomplishments"
      />
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};