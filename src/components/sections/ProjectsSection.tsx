'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectModal } from '@/components/ui/ProjectModal'; // Import the new modal
import { Project } from '@/types';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // New State

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  const uniqueTags = ['all', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  // Modified handlers
  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBookmark = (projectId: string) => {
    console.log('Bookmarked project:', projectId);
  };

  const handleShare = async (project: Project) => {
    // ... your existing share logic ...
  };

  return (
    <section id="projects" className="min-h-screen p-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          description="Explore my latest work and technical achievements"
        />

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === tag
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
            >
              {tag === 'all' ? 'All Projects' : `#${tag}`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            // We wrap the card in a div to capture the click, 
            // OR pass an onCardClick prop to ProjectCard
            <div key={project.id} onClick={() => handleCardClick(project)} className="cursor-pointer">
              <ProjectCard
                project={project}
                onBookmark={handleBookmark}
                onShare={handleShare}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RENDER THE MODAL IF SELECTED */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};