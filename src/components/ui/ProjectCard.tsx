'use client';
import { useState } from 'react';
import { Project } from '@/types';
import { Card } from './Card';
import { Tag } from './Tag';
import {
  BookmarkIcon,
  ShareIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolid } from '@heroicons/react/24/solid';

interface ProjectCardProps {
  project: Project;
  onBookmark: (id: string) => void;
  onShare: (project: Project) => void;
}

export const ProjectCard = ({ project, onBookmark, onShare }: ProjectCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(project.bookmarked || false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal
    setIsBookmarked(!isBookmarked);
    onBookmark(project.id);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal
    onShare(project);
  }

  return (

    <Card className="overflow-hidden group flex flex-col h-full bg-gray-950/50 backdrop-blur border-zinc-800 p-5">

      {/* Header */}
      {/* <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center space-x-3">
          <img
            src={project.author.avatar}
            alt={project.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-medium text-white">{project.author.name}</h4>
            <p className="text-xs text-gray-400">@{project.author.username}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button onClick={handleBookmark} className="p-2 rounded-lg hover:bg-gray-900/50 transition-colors">
            {isBookmarked ? <BookmarkSolid className="w-4 h-4 text-yellow-400" /> : <BookmarkIcon className="w-4 h-4 text-gray-400 hover:text-yellow-400" />}
          </button>
          <button onClick={handleShareClick} className="p-2 rounded-lg hover:bg-gray-900/50 transition-colors">
            <ShareIcon className="w-4 h-4 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div> */}

      {/* Content */}
      {/* CHANGE 2: Added 'flex-grow' to push the footer down */}
      <div className="px-4 flex-grow">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Image (Fixed height is good here) */}
      <div className="relative overflow-hidden mx-2 rounded-md shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Footer */}
      {/* CHANGE 3: This will now stick to the bottom because of flex-grow above */}
      <div className="p-4 pt-4 mt-auto">
        <div className="flex flex-wrap gap-2 mb-4 h-16 overflow-hidden content-start"> {/* Fixed height for tags prevents jumping */}
          {project.tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </div>

        <div className="flex items-center justify-end space-x-4 border-t border-gray-800/50 pt-3">
          {project.githubUrl && (
            <a href={project.githubUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
              <CodeBracketIcon className="w-5 h-5" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== 'none' && (
            <a href={project.liveUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 transition-colors">
              <span>Live Demo</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};