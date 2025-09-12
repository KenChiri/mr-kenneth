'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';


const storySlides = [

  {
    id: 1,
    tagline: "Full-Stack Developer & Business Strategist",
    title: "I Build Digital Solutions That Drive Growth.",
    description: "I merge elegant code with a deep understanding of business process re-engineering to create web applications that are foundational to success.",
    backgroundImage: "/images/hero/code.jpg",
    cta1: { text: "View My Work", href: "#projects" },
    cta2: { text: "Download CV", href: "/kenneth-cv.pdf" },
    detailedContent: {
      title: "From Business Logic to Scalable Code",
      image: "/images/blog/business-process.jpg", 
      paragraphs: [
        "My journey into development wasn't just about learning to code; it was about learning to solve problems. I specialize in analyzing complex business workflows and re-engineering them into efficient, scalable digital systems. I believe the best software is built on a foundation of clear logic and a relentless focus on the end-user's needs.",
        "Whether it's a complex e-commerce platform or a streamlined internal tool, I thrive under pressure to deliver robust and maintainable code. If you have a challenge that requires more than just a website, but a true digital partner, let's talk."
      ]
    }
  },
  {
    id: 2,
    tagline: "Guardian of the Wild",
    title: "My Code Has a Purpose: To Protect Our Planet.",
    description: "My goal is to leverage technology to support conservation efforts, from wildlife tracking systems to platforms that fight pollution.",
    backgroundImage: "/images/hero/ocean.jpg",
    cta1: { text: "Learn About My Mission", href: "#" },
    cta2: { text: "Support a Cause", href: "#" },

    detailedContent: {
      title: "Technology for a Greener Tomorrow",
      image: "/images/blog/turtle.jpg", 
      paragraphs: [
        "Traveling has opened my eyes to the fragile beauty of our world and the urgent threats it faces. Seeing a sea turtle navigate a plastic-choked ocean isn't an abstract problem—it's a call to action. I am actively seeking opportunities to apply my skills in software development to conservation.",
        "Imagine real-time dashboards for anti-poaching units, mobile apps for citizen-led clean-up drives, or data platforms that model the impact of deforestation. These are the projects that drive me. My love for the ocean and wildlife is not just a hobby; it's the 'why' behind my work."
      ]
    }
  },

  {
    id: 4,
    tagline: "Dreamer & Explorer",
    title: "Inspired by Stories, Stars, and Culture.",
    description: "Beyond the code, I find inspiration in anime, Kenyan culture, and the beauty of the night sky. These passions fuel my creativity.",
    backgroundImage: "/images/hero/sky.jpg",
    cta1: { text: "Get In Touch", href: "#" },
    cta2: { text: "Follow My Journey", href: "#" },

    detailedContent: {
      title: "The Art of Creation",
      image: "/images/blog/kenyan-art.jpg",
      paragraphs: [
        "Creativity is the common thread in everything I love. The masterful storytelling in an anime series, the vibrant and resilient spirit of Kenyan culture, the humbling vastness of a star-filled sky—they all remind me that we are here to create and connect.",
        "This philosophy infuses my development work. I strive to build interfaces that are not just functional but also beautiful and intuitive. I believe technology should feel less like a machine and more like a natural extension of our own creativity."
      ]
    }
  },
];

type StorySlide = typeof storySlides[number];

const StoryContent = ({ slide }: { slide: StorySlide }) => {
  if (!slide.detailedContent) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        className="max-w-4xl mx-auto py-16 md:py-24 px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert prose-lg text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-4">{slide.detailedContent.title}</h2>
            {slide.detailedContent.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <Image
              src={slide.detailedContent.image}
              alt={slide.detailedContent.title}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % storySlides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + storySlides.length) % storySlides.length);
  };

  const activeSlide = storySlides[activeIndex];

  return (
    <section id="home">
      {/* Part 1: The Visual Hero Rotator */}
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Left Arrow button*/}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white"/>
        </button>

        <button 
          onClick={nextSlide} 
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-white"/>
        </button>
        
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Image
              src={activeSlide.backgroundImage}
              alt={activeSlide.title}
              layout="fill"
              objectFit="cover"
              className="brightness-[0.4]"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <p className="font-bold text-yellow-400 uppercase tracking-wider mb-2">{activeSlide.tagline}</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{activeSlide.title}</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">{activeSlide.description}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a href={activeSlide.cta1.href} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  {activeSlide.cta1.text}
              </a>
              <a href={activeSlide.cta2.href} className="px-8 py-4 border-2 border-gray-600 font-semibold rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
                  {activeSlide.cta2.text}
              </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {storySlides.map((_, index) => (
            <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'}`} />
          ))}
        </div>
        
        {/* The new "Scroll Down" indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <ArrowDownIcon className="w-6 h-6 text-white/50"/>
        </div>
      </div>

      {/* Part 2: The Detailed Story Content */}
      <div className="relative bg-gray-950">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />
        <StoryContent slide={activeSlide} />
      </div>
    </section>
  );
};

export default HeroSection;