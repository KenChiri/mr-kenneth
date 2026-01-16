'use client';
import { Project } from '@/types';
import { XMarkIcon, CalendarIcon, UserGroupIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Tag } from './Tag';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    // Prevent click inside modal from closing it
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                onClick={handleContentClick}
            >
                {/* Close Button (Mobile/Desktop) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-zinc-800 rounded-full text-white transition-colors"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* LEFT: Image Section (Landscape Figure Ground) */}
                <div className="w-full md:w-1/2 relative bg-zinc-950 h-64 md:h-auto">
                    {/* If using Next/Image, ensure width/height or layout fill are correct */}
                    <div className="relative w-full h-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>
                </div>

                {/* RIGHT: Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-zinc-900">

                    {/* Header Info */}
                    <div className="flex items-center space-x-3 mb-6">
                        <img src={project.author.avatar} alt={project.author.name} className="w-10 h-10 rounded-full border border-zinc-700" />
                        <div>
                            <p className="text-white font-medium">{project.author.name}</p>
                            <p className="text-sm text-zinc-500">@{project.author.username}</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h2>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 bg-white text-black px-6 py-2.5 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                <span>Visit Site</span>
                                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-2 bg-zinc-800 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-zinc-700 transition-colors"
                            >
                                <span>Source Code</span>
                            </a>
                        )}
                    </div>

                    {/* Detailed Info */}
                    <div className="space-y-6 text-zinc-300">
                        <div>
                            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">The Problem & Solution</h3>
                            <p className="leading-relaxed text-zinc-300">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Date */}
                            <div>
                                <h3 className="flex items-center text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                    <CalendarIcon className="w-4 h-4 mr-1" /> Date
                                </h3>
                                <p>{project.date || "2025"}</p>
                            </div>

                            {/* Contributors */}
                            <div>
                                <h3 className="flex items-center text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                    <UserGroupIcon className="w-4 h-4 mr-1" /> Contributors
                                </h3>
                                <div className="flex -space-x-2 overflow-hidden">
                                    {/* If contributors exist, map them. Otherwise show placeholder/self */}
                                    {Array.isArray(project.contributors) ? (
                                        project.contributors.map((c, i) => (
                                            <div key={i} title={c.name} className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-xs">
                                                {c.avatar ? <img src={c.avatar} className="w-full h-full rounded-full" /> : c.name[0]}
                                            </div>
                                        ))
                                    ) : project.contributors ? (
                                        <div title={project.contributors.name} className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-xs">
                                            {project.contributors.avatar ? <img src={project.contributors.avatar} className="w-full h-full rounded-full" /> : project.contributors.name[0]}
                                        </div>
                                    ) : (
                                        <span className="text-zinc-400 text-sm">Solo Project</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="pt-4 border-t border-zinc-800">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Tag key={tag}>#{tag}</Tag>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};