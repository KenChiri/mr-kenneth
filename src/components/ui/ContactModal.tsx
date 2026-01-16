'use client';
import { XMarkIcon, PaperAirplaneIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"; // Using react-icons for brand logos
import { motion } from 'framer-motion';

interface ContactModalProps {
    onClose: () => void;
}

export const ContactModal = ({ onClose }: ContactModalProps) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[700px]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2 bg-zinc-800/50 hover:bg-zinc-700 rounded-full text-white transition-all hover:rotate-90 duration-300"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* LEFT SIDE: Visual */}
                <div className="hidden md:flex w-5/12 relative bg-zinc-950 flex-col justify-end p-10 overflow-hidden border-r border-zinc-800">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full"></div>
                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">Let's build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">future</span> together.</h2>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                            I am currently available for new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>Typical response time: Within 2 hours</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Interactive Form */}
                <div className="w-full md:w-7/12 relative bg-zinc-900 flex flex-col overflow-y-auto">

                    {/* BACKGROUND ART ICONS (Rotated & Low Opacity) */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <EnvelopeIcon className="absolute top-10 right-10 w-32 h-32 text-zinc-800/30 rotate-12" />
                        <PhoneIcon className="absolute bottom-20 left-10 w-24 h-24 text-zinc-800/30 -rotate-12" />
                        <PaperAirplaneIcon className="absolute top-1/2 left-1/2 w-48 h-48 text-zinc-800/20 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                    </div>

                    <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">

                        {/* 1. HEADER WITH YELLOW GRADIENT UNDERLINE */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-white inline-block relative">
                                Contact Me
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></span>
                            </h3>
                        </div>

                        {/* 2. SOCIALS & WHATSAPP HEARTBEAT */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            {/* Email */}
                            <a href="mailto:kennethkipchiri@gmail.com" className="flex items-center space-x-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300 hover:text-red-400 hover:border-red-400 transition-all">
                                <EnvelopeIcon className="w-5 h-5" />
                                <span className="text-sm">Email</span>
                            </a>
                            {/* Phone */}
                            <a href="tel:+254705346371" className="flex items-center space-x-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
                                <PhoneIcon className="w-5 h-5" />
                                <span className="text-sm">Phone</span>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/kenneth-kipchirchir-67953427b/" target="_blank" className="flex items-center space-x-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                                <FaLinkedin className="w-5 h-5" />
                                <span className="text-sm">LinkedIn</span>
                            </a>

                            {/* WHATSAPP HEARTBEAT */}
                            <a href="https://wa.me/254705346371" target="_blank" className="relative group flex items-center space-x-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition-all cursor-pointer">
                                <div className="relative">
                                    <FaWhatsapp className="w-5 h-5 relative z-10" />
                                    {/* The Heartbeat Animation */}
                                    <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping group-hover:animate-none"></span>
                                </div>
                                <span className="text-sm font-bold">WhatsApp</span>
                            </a>
                        </div>

                        {/* 3. FORM WITH "INVISIBLE" TEXT AREA */}
                        <form className="flex-grow space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Your Name</label>
                                    <input type="text" className="w-full bg-zinc-800/50 border-b-2 border-zinc-700 text-white p-3 focus:outline-none focus:border-yellow-400 focus:bg-zinc-800 transition-all rounded-t-lg placeholder-zinc-600" placeholder="HR" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Your Email</label>
                                    <input type="email" className="w-full bg-zinc-800/50 border-b-2 border-zinc-700 text-white p-3 focus:outline-none focus:border-yellow-400 focus:bg-zinc-800 transition-all rounded-t-lg placeholder-zinc-600" placeholder="Robert" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                                {/* The Text Area that "Fits In" */}
                                <textarea
                                    className="w-full h-35 bg-zinc-800/30 border-l-2 border-zinc-700 text-white p-4 focus:outline-none focus:border-l-yellow-400 focus:bg-zinc-800/50 transition-all rounded-r-lg resize-none placeholder-zinc-600 text-lg leading-relaxed"
                                    placeholder="Hey Kenneth, I have an idea for a project..."
                                ></textarea>
                            </div>

                            <button className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 shadow-lg shadow-yellow-400/20">
                                <PaperAirplaneIcon className="w-5 h-5 -rotate-45 mt-1" />
                                <span>Send Message</span>
                            </button>
                        </form>

                        {/* COPYRIGHT FOOTER */}
                        <div className="mt-8 pt-6 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
                            <p>© {new Date().getFullYear()} KEN-X. All rights reserved.</p>
                            <div className="flex space-x-4 mt-2 md:mt-0">
                                <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
                                <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};