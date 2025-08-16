import { Education } from '@/types';
import { Card } from './Card';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-yellow-400/20 rounded-lg mt-1">
          <AcademicCapIcon className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">
            {education.degree} in {education.field}
          </h3>
          <p className="text-yellow-400 font-medium">{education.institution}</p>
          <p className="text-gray-400 text-sm mb-2">{education.duration}</p>
          {education.grade && <p className="text-green-400 text-sm font-medium mb-3">{education.grade}</p>}
          {education.description && <p className="text-gray-300">{education.description}</p>}
        </div>
      </div>
    </Card>
  );
};