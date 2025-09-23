'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Project } from '@/types'; // Import the Project type

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  // Create a unique list of tags for filtering
  const uniqueTags = ['all', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  // Handlers for card interactions
  const handleBookmark = (projectId: string) => {
    console.log('Bookmarked project:', projectId);
    // Here you would typically update the state or make an API call
  };

  const handleShare = async (project: Project) => {
    console.log('Sharing project:', project.title);
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: project.liveUrl || project.githubUrl || window.location.href,
        });
      } catch (error) {
        console.error('Error sharing project:', error);
      }
    } else {
      alert('Share functionality is not supported in this browser.');
    }
  };

  return (
    <section id="projects" className="min-h-screen p-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects."
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
            <ProjectCard
              key={project.id}
              project={project}
              onBookmark={handleBookmark}
              onShare={handleShare}
            />
          ))}
        </div>
      </div>
    </section>
  );
};