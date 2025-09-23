'use client';
import React, {useState, useEffect, useRef} from "react";
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
import {Education} from '@/types';
import {education as educationData} from '@/data/education';

interface TimelineItemProps {
  education: Education;
  index: number;
  isVisible: boolean;
  isActive: boolean;
  position: { x: number; y: number };
}


const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg ${className}`}>
    {children}
  </div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  education, 
  index, 
  isVisible, 
  isActive,
  position 
}) => {
  const isLeft = index % 2 === 0;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: isLeft ? -100 : 100,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      filter: "url()",
      transition: { duration: 0.4 }
    },
    active: {
      scale: [1, 1.3, 1],
      filter: "url(#geometricGlow)", 
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <>
      {/* Timeline Dot */}
      <motion.div
        className="absolute w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 z-20"
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
        variants={dotVariants}
        initial="hidden"
        animate={isVisible ? (isActive ? "active" : "visible") : "hidden"}
      />
      
      {/* Education Card */}
      <motion.div
        className={`absolute w-80 z-10 ${isLeft ? 'pr-16' : 'pl-16'}`}
        style={{
          left: isLeft ? position.x - 320 - 32 : position.x + 32,
          top: position.y - 120,
        }}
        variants={cardVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <Card className="p-6 shadow-2xl">
          <div className="text-yellow-400 text-sm mb-2 font-medium">
            {education.duration}
          </div>
          <h3 className="text-white text-lg font-bold mb-2 leading-tight">
            {education.degree}
          </h3>
          <div className="text-yellow-300 font-semibold mb-3">
            {education.institution}
          </div>
          {education.grade && (
            <div className="text-green-400 text-sm font-medium mb-4">
              Grade: {education.grade}
            </div>
          )}
          <p className="text-gray-300 text-sm leading-relaxed">
            {education.description}
          </p>
        </Card>
      </motion.div>
    </>
  );
};

const GeometricTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null); // 1. Ref for the path to measure it
  const [pathLength, setPathLength] = useState(0); // 2. State to store the measured path length
  const [activeItem, setActiveItem] = useState<number>(-1);

  const { scrollYProgress } = useScroll();

   useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []); // Runs only once after initial render

    
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    console.log("Scroll Progress:", latestValue);
    const currentItemIndex = Math.floor(latestValue * educationData.length);
    const newActiveItem = Math.min(currentItemIndex, educationData.length - 1);
    
    if (newActiveItem !== activeItem) {
        setActiveItem(newActiveItem);
    }
  });




  // Create geometric path coordinates
  const createGeometricPath = () => {
    const segments: Array<{ x: number; y: number; type: 'start' | 'line' | 'turn' }> = [];
    const centerX = 500;
    const segmentHeight = 200;
    const turnDistance = 150;
    
    // Start point
    segments.push({ x: centerX, y: 100, type: 'start' });
    
    educationData.forEach((_, index) => {
      const baseY = 100 + (index + 1) * segmentHeight * 2;
      const isLeft = index % 2 === 0;
      
      // Diagonal segment
      const diagonalY = baseY - segmentHeight;
      const diagonalX = isLeft ? centerX - turnDistance : centerX + turnDistance;
      segments.push({ x: diagonalX, y: diagonalY, type: 'turn' });
      
      // Horizontal segment
      segments.push({ x: diagonalX, y: baseY, type: 'line' });
      
      // Back to center
      segments.push({ x: centerX, y: baseY, type: 'turn' });
    });
    
    return segments;
  };

  const pathSegments = createGeometricPath();
  
  // Calculate dot positions (at turn points)
  const dotPositions = educationData.map((_, index) => {
    const baseY = 100 + (index + 1) * 400;
    const isLeft = index % 2 === 0;
    return {
      x: isLeft ? 500 - 150 : 500 + 150,
      y: baseY - 200
    };
  });

  // Create SVG path string
  const createPathString = (segments: typeof pathSegments) => {
    if (segments.length === 0) return '';
    
    let pathData = `M ${segments[0].x} ${segments[0].y}`;
    for (let i = 1; i < segments.length; i++) {
      pathData += ` L ${segments[i].x} ${segments[i].y}`;
    }
    return pathData;
  };

  const fullPath = createPathString(pathSegments);
  // 4. Transform scrollYProgress to control the strokeDashoffset
  // It will now animate from the full measured pathLength to 0
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);

  // Handle scroll-based visibility
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  //     const currentItemIndex = Math.floor(scrollPercent * educationData.length);
      
  //     // Add visible items progressively
  //     const newVisibleItems = new Set<number>();
  //     for (let i = 0; i <= currentItemIndex && i < educationData.length; i++) {
  //       newVisibleItems.add(i);
  //     }
  //     setVisibleItems(newVisibleItems);
  //     setActiveItem(currentItemIndex);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial check

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const containerHeight = educationData.length * 400 + 200;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        <div 
          ref={containerRef}
          className="relative w-full mx-auto"
          style={{ height: `${containerHeight}px`, maxWidth: '1200px' }}
        >
          {/* SVG Path Container */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            {/* Static background path */}
            <path
              d={fullPath}
              stroke="rgb(75, 85, 99, 0.3)"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Animated glowing path */}
            <motion.path
              d={fullPath}
              stroke="url(#geometricGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray={pathLength} // 3. Use the measured path length
              style={{strokeDashoffset, willChange: 'stroke-dashoffset'}} // Bind to the transformed value
              filter="url(#geometricGlow)"
            />
            
            {/* Gradient and filter definitions */}
            <defs>
              <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>
              <filter id="geometricGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Timeline Items */}
          {educationData.map((education, index) => (
            <TimelineItem
              key={education.id}
              education={education}
              index={index}
              isVisible={index <= activeItem}
              isActive={activeItem === index}
              position={dotPositions[index]}
            />
          ))}

          {/* Completion indicator */}
          {activeItem === educationData.length -1 && (
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl">
                🎓 Journey Complete!
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeometricTimeline;