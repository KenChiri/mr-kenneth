'use client';
import { XMarkIcon, SparklesIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BioModalProps {
    onClose: () => void;
}

export const BioModal = ({ onClose }: BioModalProps) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-zinc-800 rounded-full text-white transition-all hover:rotate-90 duration-300"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* LEFT: Scrollable Content (Bio, Vision, Hobbies) */}
                <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                    <div className="mb-2 flex items-center space-x-2">
                        <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider border border-yellow-400/20">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Kenneth Kipchirchir</h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        I am a passionate Software Engineer based in Nairobi, dedicated to building scalable and innovative solutions. With a First Class Honors in IT, I specialize in full-stack development, blending technical expertise with creative problem-solving.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {/* Vision Card */}
                        <div className="p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 hover:border-yellow-400/30 transition-colors">
                            <h3 className="text-white font-bold   text-xl mb-2">My Vision</h3>

                            <p className="text-zinc-400 text-sm leading-relaxed">
                                To revolutionize the African tech landscape by creating software solutions, "KEN-X", that empower businesses and simplify daily life through automation and AI.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 hover:border-green-400/30 transition-colors">
                            <h3 className="text-white font-bold text-xl mb-2">My Mission</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                To deliver high-quality, user-centric applications while continuously learning and mentoring the next generation of developers in Kenya.
                            </p>
                        </div>
                    </div>

                    {/* Hobbies Section */}
                    <div>
                        <h3 className="flex items-center text-zinc-200 font-bold text-lg mb-4">

                            Hobbies & Interests
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['Football (Chelsea Fan)', 'Reading Manga', 'AI Research', 'Traveling', 'Swimming', 'Practicing my Daily 3'].map((hobby) => (
                                <span key={hobby} className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 text-sm hover:text-white hover:border-zinc-600 transition-colors">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Photo Section */}
                <div className="w-full md:w-5/12 relative h-64 md:h-auto bg-zinc-950 border-l border-zinc-800">
                    <Image
                        src="/images/IMG_0333.jpg"
                        alt="Kenneth Kipchirchir"
                        fill
                        className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-l opacity-80"></div>

                    {/* Decorative Quote */}
                    <div className="absolute bottom-10 right-10 left-10 text-right">
                        <p className="text-white/80 font-serif italic text-2xl">
                            "Code is like humor. When you have to explain it, it’s bad."
                        </p>
                        <p className="text-yellow-400 text-sm mt-2 font-bold">— Cory House</p>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};