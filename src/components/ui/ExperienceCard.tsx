import { Experience } from "@/types";
import { Card } from "./Card";

interface ExperienceCardProps {
  experience: Experience;
}


export const ExperienceCard = ({experience}: ExperienceCardProps) => {
    return (
    <Card className="flex flex-col overflow-hidden group">
                <img
                    src={experience.logo} 
                    alt={'${experience.company} logo'}
                    className="w-14 h-14 rounded-lg object-cover bg-white mt-1"
                />
                 <div>
                    <h3 className="text-xl font-semibold text-white"> {experience.position}</h3>
                    <a href={experience.site_url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-medium hover:underline">{experience.company}</a>
                    <p className="text-gray-400 text-sm mb-3">{experience.duration}</p>
                    <p className="text-gray-300 whitespace-pre-line">{experience.description}</p>
                </div>
    
    </Card>
    );
};