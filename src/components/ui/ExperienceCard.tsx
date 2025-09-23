import { Experience } from "@/types";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { BriefcaseIcon } from '@heroicons/react/24/solid'; // A great default icon
import { FaCheckCircle } from "react-icons/fa";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {

  const tasks = experience.description.split("-").filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-start space-x-6"
    >
      {/* Icon and Timeline Vertical Line */}
      <div className="flex flex-col items-center">
        <div className="p-3 bg-gray-800 border border-gray-700 rounded-full">
          <BriefcaseIcon className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="flex-grow w-px bg-gray-700 my-2" />
      </div>

      {/* Card Content */}
      <div className="flex-1 pb-16">
        <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
        <a href={experience.site_url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-medium hover:underline">
          {experience.company}
        </a>
        <p className="text-gray-400 text-sm mt-1">{experience.duration}</p>

        <ul className="space-y-2 mt-4">
          {tasks.map((task, i) => (
            <li key={i} className="flex items-start space-x-3 text-gray-300">
              <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
              <span>{task.trim()}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};