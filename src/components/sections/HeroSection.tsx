'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ContentCard } from '../ui/ContentCard';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// Define types
interface Tab {
  id: string;
  label: string;
}

// --- Static Data for Tabs ---
const TABS: Tab[] = [
  { id: 'about', label: 'About' },
  { id: 'bio', label: 'Bio' }
];

// --- Animated Circuit Line Component ---
const CircuitLine = ({ isActive, index }: { isActive: boolean; index: number }) => (
  <div className="relative overflow-hidden">
    <span
      className={`block h-px transition-all duration-500 ease-out relative ${isActive ? 'w-20 bg-gradient-to-r from-[#FBC308] via-yellow-400 to-[#FBC308]' : 'w-10 bg-gray-600'
        }`}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      {isActive && (
        <>
          {/* Glowing effect */}
          <span className="absolute inset-0 bg-[#FBC308] blur-sm animate-pulse" />
          {/* Moving particle effect */}
          <span className="absolute top-0 left-0 w-1 h-px bg-white animate-ping"
            style={{ animationDuration: '2s', animationDelay: `${index * 0.3}s` }} />
        </>
      )}
    </span>
  </div>
);

// --- Profile Image Component ---
const ProfileImage = () => (
  <div className="relative mb-6 group">
    <div className="w-48 h-48 rounded-2xl  p-0.5 ">
      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
        {/* Placeholder for actual image */}
        {/* <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-[#FBC308] font-bold text-lg">
          KK
        </div> */}
        <Image
          src="/images/pfp.jpg"
          alt="Profile Image"
          width={150}
          height={150}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
    {/* Floating particles around profile */}
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FBC308] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
    <div className="absolute top-1/2 -left-1 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
    <div className="absolute -bottom-1 right-1/3 w-1.5 h-1.5 bg-[#FBC308] rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
  </div>
);

// --- Clean Social Links Component ---
const SocialLinks = () => (
  <div className="flex items-center space-x-6 mt-8">
    {[
      {
        href: "https://github.com/KenChiri",
        icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
        label: "GitHub"
      },
      {
        href: "mailto:kennethkipchiri@gmail.com",
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        label: "Email",
        stroke: true
      },
      {
        href: "tel:+254705346371",
        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
        label: "Phone",
        stroke: true
      },
      {
        href: "https://www.linkedin.com/in/kenneth-kipchirchir-67953427b/",
        icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
        label: "LinkedIn",
        stroke: true
      }
    ].map((social, index) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="group relative p-2 hover:scale-125 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-gray-500 group-hover:text-[#FBC308] transition-colors duration-300"
          fill={social.stroke ? "none" : "currentColor"}
          stroke={social.stroke ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path
            fillRule={social.stroke ? undefined : "evenodd"}
            strokeLinecap={social.stroke ? "round" : undefined}
            strokeLinejoin={social.stroke ? "round" : undefined}
            strokeWidth={social.stroke ? "2" : undefined}
            d={social.icon}
            clipRule={social.stroke ? undefined : "evenodd"}
          />
        </svg>
        {/* Simple glow effect */}
        <div className="absolute inset-0 bg-[#FBC308]/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </a>
    ))}

  </div>
);

//--REsume section--
const ResumeButton = () => (
  <a
    href="/Kenneth_Kipchirchir_Resume.pdf" // The path to your CV in the public folder
    target="_blank" // Opens the CV in a new tab
    rel="noopener noreferrer"
    // download // Uncomment this line if you want the file to download directly instead of opening
    className="group relative mt-8 inline-block px-6 py-3 bg-transparent text-[#FBC308] font-bold border-2 border-[#FBC308] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#FBC308]/30"
  >
    <span className="relative z-10">View My Resume</span>
    {/* Animated hover effect */}
    <div className="absolute inset-0 bg-[#FBC308] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    <span className="absolute inset-0 z-10 text-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left flex items-center justify-center font-bold">
      View My Resume
    </span>
  </a>
);


// --- Clean Content Components ---
const AboutContent = () => (
  <div className="space-y-8 max-w-2xl">
    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
      <p className="text-xl font-medium text-white/90">
        With over <span className="text-[#FBC308] font-bold">five years</span> of hands-on experience in the tech industry, I bring a comprehensive understanding of the full software development lifecycle.
      </p>
      <p>
        My expertise allows me to transform a concept into a fully deployed product, using widely adopted programming languages and frameworks.
      </p>
      <p>
        My goal is to re-engineer business processes, creating systems that solve complex problems and automate redundant tasks through thoughtful, scalable software solutions.
      </p>
      <div className="mt-8 p-6 bg-gradient-to-r from-[#FBC308]/10 to-transparent border-l-4 border-[#FBC308] rounded-r-xl">
        <p className="text-white font-semibold text-lg">
          Currently: <span className="text-[#FBC308]">Backend Web Developer</span>
        </p>
        <p className="text-gray-400 mt-1">Building APIs for E-Commerce platforms at Bestworlds IT Solutions</p>
      </div>
    </div>
    <ResumeButton />
  </div>
);


const BioContent = () => {

  const [isVideoOpen, setVideoOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/2HXAxx7Nrrs?si=NOcLYydJkRPp4gUG?autoplay=1";


  return (
    <>
      <ContentCard>
        <h3 className="text-3xl font-bold text-[#FBC308] mb-6">Elevator Pitch</h3>

        {/* This is now a BUTTON that opens the modal */}
        <button
          onClick={() => setVideoOpen(true)}
          className="group block relative aspect-video w-full bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden cursor-pointer text-left"
        >
          {/* 1. Video Thumbnail Image */}
          <Image
            src="/images/thumbnail.jpg" // Path to your video thumbnail
            alt="Video Elevator Pitch Thumbnail"
            layout="fill"
            objectFit="cover"
            className="opacity-40 group-hover:opacity-60 transition-opacity duration-300"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#FBC308]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-[#FBC308]/30 group-hover:bg-[#FBC308] group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <p className="text-white font-medium text-sm">My Technology Journey & Vision</p>
              <p className="text-gray-300 text-xs mt-1">Click to play video [0:45]</p>
            </div>
          </div>
        </button>

        <p className="text-gray-300 text-lg mt-6">
          Here, I share my passion for technology, my approach to problem-solving, and what drives me to create meaningful software.
        </p>
      </ContentCard>

      {/* --- VIDEO PLAYER MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)} // Close modal when clicking the background
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
          >
            {/* The phone-like container for the portrait video */}
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-black rounded-3xl border-4 border-gray-700 shadow-2xl"
            >
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[20px]">
                <iframe
                  src={videoUrl}
                  title="Elevator Pitch Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

            </motion.div>
            <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const scrollAccumulator = useRef<number>(0);

  // Scroll threshold to change tabs
  const SCROLL_THRESHOLD = 200;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;

      // Calculate which tab should be active based on scroll
      let targetTab = Math.floor(scrollAccumulator.current / SCROLL_THRESHOLD);

      // Clamp between 0 and max tabs
      targetTab = Math.max(0, Math.min(targetTab, TABS.length - 1));

      // If scrolling up past the first tab, allow negative values temporarily
      if (scrollAccumulator.current < 0) {
        scrollAccumulator.current = 0;
        targetTab = 0;
      }

      // If scrolling down past the last tab, don't go beyond
      if (targetTab >= TABS.length) {
        targetTab = TABS.length - 1;
        scrollAccumulator.current = targetTab * SCROLL_THRESHOLD;
      }

      setActiveTab(targetTab);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const nextTab = Math.min(activeTab + 1, TABS.length - 1);
        setActiveTab(nextTab);
        scrollAccumulator.current = nextTab * SCROLL_THRESHOLD;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prevTab = Math.max(activeTab - 1, 0);
        setActiveTab(prevTab);
        scrollAccumulator.current = prevTab * SCROLL_THRESHOLD;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    scrollAccumulator.current = index * SCROLL_THRESHOLD;
  };

  const renderActiveContent = () => {
    switch (activeTab) {
      case 0:
        return <AboutContent />;
      case 1:
        return <BioContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <section className="h-screen text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBC308]/10 via-transparent to-[#FBC308]/10" />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-10 h-full relative z-10">
        {/* Left Panel - Navigation */}
        <div className="px-8 py-16 lg:py-24 flex flex-col">
          <div className="flex-1">
            {/* Profile Section */}
            <ProfileImage />

            <h1 className="text-5xl lg:text-5xl  font-bold bg-clip-text ">
              Kenneth Kipchirchir
            </h1>
            <div className="absolute mt-2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full " />
            <h2 className="mt-4 text-2xl font-semibold text-white/90">IT Software Engineer</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-xs leading-relaxed">
              I transform concepts into deployed products, building scalable software solutions that automate and improve business processes.
            </p>

            {/* Enhanced Navigation with Socials immediately after */}
            <nav className="mt-16">
              <ul className="space-y-6">
                {TABS.map((tab, index) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => handleTabClick(index)}
                      className="flex items-center space-x-4 group w-full text-left focus:outline-none transition-all duration-300 hover:translate-x-2"
                    >
                      <CircuitLine isActive={activeTab === index} index={index} />
                      <span className={`font-bold uppercase tracking-widest text-sm transition-all duration-300 ${activeTab === index
                        ? 'text-[#FBC308] drop-shadow-[0_0_10px_#FBC308] scale-105'
                        : 'text-gray-500 hover:text-gray-300'
                        }`}>
                        {tab.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Social Links right after tabs */}
              <SocialLinks />

            </nav>


          </div>

          {/* Social Links positioned closer to tabs */}
          {/* <div className="mt-12">
            <SocialLinks />
          </div> */}
        </div>

        {/* Right Panel - Content */}
        <div className="px-8 lg:py-24 flex items-center overflow-hidden">
          <div className="w-full pr-8 transform transition-all duration-700 ease-out">
            {renderActiveContent()}
          </div>

        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
        <div className="text-xs text-[#FBC308] uppercase tracking-wider font-semibold">Scroll</div>
        <div className="flex flex-col space-y-2">
          {TABS.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTab === index
                ? 'bg-[#FBC308] shadow-lg shadow-[#FBC308]/50 scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;