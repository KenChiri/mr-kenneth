import { certification as certifications } from '@/data/certification';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CertificationCard } from '@/components/ui/CertificationCard';

export const CertificationSection = () => {
  return (
    <section id="certifications">
      <SectionHeader
        title="Certifications"
        description="My professional licenses and certificates"
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map(cert => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </section>
  );
};