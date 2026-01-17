import { Certification } from '@/types';
import { Card } from './Card';
import { CalendarIcon, IdentificationIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface CertificationCardProps {
  certification: Certification;
  onCardClick: () => void;
}

export const CertificationCard = ({ certification, onCardClick }: CertificationCardProps) => {
  return (
    <Card
      as="button"
      onClick={onCardClick}
      className="p-6 text-left w-full group transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/5"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
        {/* Verification link */}
        {certification.verificationUrl && (
          <a href={certification.verificationUrl} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Don't trigger card click
            className="text-gray-400 hover:text-yellow-300 transition-colors z-10">
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        )}
      </div>
      <p className="text-yellow-400 font-medium mb-4">{certification.issuer}</p>

    </Card>
  );
};