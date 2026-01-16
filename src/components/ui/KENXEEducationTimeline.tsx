import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "2017",
        title: "Completed my KCSE exams",
        description: "This is whehere my journey began with a mean grade of C- what awaits is my decesion to be in the tech field.",
    },
    {
        year: "2018- January",
        title: "Joined a TVET institution",
        description: "Pursued a diploma in Information Technology, focusing on software development and networking.",
    },
    {
        year: "2021- January- March",
        title: "Internship",
        description: "I interened an a textile industry called Rivatex, where I did IT work like setting up a POS system, regular computer maintenance, and most importanty archive management of fabrics.",
    },
    {
        year: "2021 - April - December",
        title: "Self Learning",
        description: "I worked to learn web development and mobile app development through online courses and personal projects. I also did a C++ course to solidify my programming skills.",
    },
    {
        year: "2021 -December",
        title: "Graduation Day",
        description: "I completed my diploma studies and graduated from the TVET institution with a solid foundation in IT.",
    },
    {
        year: "2022 - May",
        title: "Joined Kabarak University.",
        description: "I joined  Kabarak University to Pursue a Bachelor's degree in Information Technology, specializing in software Engineering..",
    },
    {
        year: "2025 - December",
        title: "Graduated from Kabarak University.",
        description: "I successfully completed my Bachelor's degree in Information Technology, graduating with First Class Honors.",
    },
];

// Define types for TronPath component props
interface TronPathProps {
    path: string;
    activeIndex: number;
    totalItems: number;
}

const TronPath: React.FC<TronPathProps> = ({ path, activeIndex, totalItems }) => {
    const controls = useAnimation();
    const pathRef = useRef<SVGPathElement | null>(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
        }
    }, [path]);

    useEffect(() => {
        if (pathLength > 0 && totalItems > 1) { // Ensure totalItems is > 1 to avoid division by zero
            const progress = activeIndex / (totalItems - 1);
            controls.start({
                pathLength: progress,
                transition: { duration: 0.7, ease: "easeInOut" },
            });
        } else if (totalItems <= 1) { // If only one item, show no progress or full line
            controls.start({ pathLength: 1 }); // Or 0, depending on desired initial state
        }
    }, [activeIndex, pathLength, totalItems, controls]);

    return (
        <>
            {/* Base track - dark gray, always visible */}
            <path
                d={path}
                fill="none"
                stroke="rgba(100, 116, 139, 0.4)" // Dark gray base line
                strokeWidth="6" // Set to a visually appealing thickness, similar to your image. Change to "20" for thicker.
                strokeLinejoin="miter" // Sharp corners
                strokeMiterlimit="10" // Default miter limit, can be adjusted
            />
            {/* Glowing, animated line - yellow, grows on scroll */}
            <motion.path
                ref={pathRef}
                d={path}
                fill="none"
                stroke="#FDB813" // Your desired yellow color
                strokeWidth="6" // Set to a visually appealing thickness. Change to "20" for thicker.
                strokeLinejoin="miter" // Sharp corners
                strokeMiterlimit="10" // Default miter limit, can be adjusted
                strokeDasharray={pathLength} // This makes the line animated
                initial={{ pathLength: 0 }}
                animate={controls}
                style={{
                    filter: "drop-shadow(0 0 8px #FDB813)", // Glow effect with updated color
                }}
            />
        </>
    );
};

export default function EducationTimeline() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [path, setPath] = useState("");

    useEffect(() => {
        const calculatePath = () => {
            const dotCenters: { x: number; y: number }[] = [];
            // Target the specific container for accurate SVG coordinate calculation
            const svgContainer = document.querySelector('.timeline-container') as HTMLElement;
            if (!svgContainer) {
                setPath("");
                return;
            }
            const svgContainerRect = svgContainer.getBoundingClientRect();

            itemRefs.current.forEach((el, index) => {
                if (!el) return;
                const cardRect = el.getBoundingClientRect();

                // Calculate y-coordinate for dot center relative to SVG container's top
                const dotY = (cardRect.top + cardRect.height / 2) - svgContainerRect.top;

                let dotX: number;
                // The dot's container is w-6 h-6, so 24px diameter. Radius is 12px.
                const dotRadius = 12;

                if (index % 2 === 0) { // Card is right-aligned, dot is on its left
                    dotX = (cardRect.left - svgContainerRect.left) - dotRadius;
                } else { // Card is left-aligned, dot is on its right
                    dotX = (cardRect.right - svgContainerRect.left) + dotRadius;
                }
                dotCenters.push({ x: dotX, y: dotY });
            });

            if (dotCenters.length < 2) {
                setPath("");
                return;
            }

            let pathData = `M ${dotCenters[0]!.x} ${dotCenters[0]!.y}`;
            const horizontalExtension = 60; // How far the line extends horizontally from the dot before turning (adjust as needed for visual appeal)

            for (let i = 1; i < dotCenters.length; i++) {
                const prevDot = dotCenters[i - 1]!;
                const currDot = dotCenters[i]!;

                const prevCardIsRightAligned = (i - 1) % 2 === 0;

                // This creates an angular path resembling a 'Z' or 'S' bend for alternating cards.
                // 1. Extend horizontally from the previous dot.
                const bendPointX = prevDot.x + (prevCardIsRightAligned ? -horizontalExtension : horizontalExtension);
                pathData += ` L ${bendPointX} ${prevDot.y}`;

                // 2. Move vertically to the current dot's Y level.
                pathData += ` L ${bendPointX} ${currDot.y}`;

                // 3. Move horizontally to the current dot's X.
                pathData += ` L ${currDot.x} ${currDot.y}`;
            }
            setPath(pathData);
        };

        // Delay calculation to ensure DOM is fully rendered and elements have settled into their final positions.
        const timeoutId = setTimeout(calculatePath, 500);
        window.addEventListener('resize', calculatePath);

        // Use ResizeObserver for more robust recalculation if the timeline container's size changes dynamically.
        const timelineContainerElement = document.querySelector('.timeline-container');
        const observer = new ResizeObserver(() => calculatePath());
        if (timelineContainerElement) {
            observer.observe(timelineContainerElement);
        }

        return () => {
            window.removeEventListener('resize', calculatePath);
            clearTimeout(timeoutId);
            if (timelineContainerElement) {
                observer.unobserve(timelineContainerElement);
            }
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        itemRefs.current.forEach((el, index) => {
            if (!el) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    });
                },
                { threshold: 0.7 } // Adjust this value to control when an item becomes "active" during scroll
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((observer) => observer.disconnect());
    }, []); // Empty dependency array as itemRefs won't change after initial render

    return (
        <div className="relative w-full min-h-screen text-white py-20 px-4 md:px-10">
            {/* Added a specific class "timeline-container" for easier and more reliable targeting by JS */}
            <div className="relative max-w-5xl mx-auto timeline-container">
                {/* SVG Container for the lines. `overflow-visible` is crucial for glowing effects/thick lines */}
                <svg width="100%" height="100%" className="absolute top-0 left-0 z-0 overflow-visible">
                    {path && <TronPath path={path} activeIndex={activeIndex} totalItems={timelineData.length} />}
                </svg>

                {/* Timeline Items Container */}
                <div className="relative">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            // Styling for the timeline cards, alternating sides
                            className={`relative z-10 p-6 my-24 rounded-xl transition-all duration-500 shadow-lg border w-full md:w-5/12
                                        ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}
                                        ${index === activeIndex ? "border-[#FDB813] bg-white/10 shadow-[#FDB813]/20" : "border-gray-600 bg-white/5"}`}
                        >
                            {/* Dot which connects to the SVG path */}
                            {/* Adjusted border and inner dot colors for consistency with the new yellow */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-900 border-2 flex items-center justify-center group
                                ${index % 2 === 0 ? ' -left-3 ' : ' -right-3 '}
                                ${index <= activeIndex ? "border-[#FDB813]" : "border-gray-500"}`}
                            >
                                {/* Inner dot */}
                                <span className={`w-3 h-3 rounded-full ${index <= activeIndex ? "bg-[#FDB813]" : "bg-gray-500"}`} />
                                {/* Pulse animation for the active dot */}
                                {index === activeIndex && (
                                    <span className="absolute w-8 h-8 rounded-full border-2 border-[#FDB813] animate-ping" />
                                )}
                            </div>

                            <h2 className="text-2xl font-bold text-[#FDB813]">{item.year}</h2>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-300 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}