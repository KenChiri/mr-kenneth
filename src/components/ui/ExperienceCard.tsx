import { Experience } from "@/types";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {

  const tasks = experience.description.split("-").filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="relative flex flex-col overflow-hidden group bg-black/40 border border-yellow-400/40 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition-shadow duration-500">
        {/* Neon glow border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/80 rounded-2xl transition-all duration-500" />

        <div className="flex items-center space-x-4 p-4">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-14 h-14 rounded-lg object-cover bg-white shadow-md transform group-hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h3 className="text-xl font-semibold text-white">
              {experience.position}
            </h3>
            <a
              href={experience.site_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-medium hover:underline"
            >
              {experience.company}
            </a>
            <p className="text-gray-400 text-sm">{experience.duration}</p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <ul className="space-y-2 mt-3">
            {tasks.map((task, i) => (
              <li
                key={i}
                className="flex items-start space-x-2 text-gray-300 text-sm"
              >
                <FaCheckCircle className="text-yellow-400 mt-0.5" />
                <span>{task.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
};
