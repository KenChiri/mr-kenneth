import { Certification } from '@/types';
import { Card } from './Card';
import { CheckBadgeIcon, ArrowTopRightOnSquareIcon, CalendarIcon, IdentificationIcon } from '@heroicons/react/24/outline';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
        {certification.verificationUrl && certification.verificationUrl !== 'none' && (
          <a href={certification.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 flex-shrink-0 ml-4">
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        )}
      </div>
      <p className="text-yellow-400 font-medium mb-4">{certification.issuer}</p>
      <div className="space-y-2 text-sm text-gray-400 border-t border-gray-800/50 pt-4">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-4 h-4" />
          <span>Issued: {certification.issueDate}</span>
        </div>
        {certification.credentialId && certification.credentialId !== 'none' && (
          <div className="flex items-center space-x-2">
            <IdentificationIcon className="w-4 h-4" />
            <span>ID: {certification.credentialId}</span>
          </div>
        )}
      </div>
    </Card>
  );
};