'use client';

import React, { useState, useEffect, useRef } from 'react';

// --- Type Definition for our path data ---
interface PathData {
    d: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    animationDuration: string;
    animationDelay: string;
}

// --- Helper function to generate a single random circuit path ---
const generateCircuitPath = (
    canvasWidth: number,
    canvasHeight: number
): PathData => {
    const startX = Math.random() * canvasWidth;
    const startY = Math.random() * canvasHeight;
    let currentX = startX;
    let currentY = startY;

    let d = `M ${startX} ${startY}`;
    const numSegments = Math.floor(Math.random() * 5) + 3;
    let isHorizontal = Math.random() > 0.5;

    for (let i = 0; i < numSegments; i++) {
        const segmentLength = Math.random() * 150 + 50;
        if (isHorizontal) {
            currentX += segmentLength * (Math.random() > 0.5 ? 1 : -1);
            currentX = Math.max(10, Math.min(canvasWidth - 10, currentX));
        } else {
            currentY += segmentLength * (Math.random() > 0.5 ? 1 : -1);
            currentY = Math.max(10, Math.min(canvasHeight - 10, currentY));
        }
        d += ` L ${currentX} ${currentY}`;
        isHorizontal = !isHorizontal;
    }

    return {
        d,
        startX,
        startY,
        endX: currentX,
        endY: currentY,
        animationDuration: `${(Math.random() * 4 + 3).toFixed(2)}s`,
        animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
    };
};

// --- The CircuitPath Sub-Component ---
interface CircuitPathProps {
    data: PathData;
}

const CircuitPath: React.FC<CircuitPathProps> = ({ data }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
        }
    }, [data.d]);

    return (
        <>
            {/* Embedded CSS for this specific component */}
            <style jsx>{`
        @keyframes trace-path {
          0% {
            stroke-dashoffset: ${pathLength};
            stroke: #374151; /* gray-700 - inactive state */
          }
          5% {
            stroke: #FBC308; /* yellow - active state */
          }
          100% {
            stroke-dashoffset: 0;
            stroke: #FBC308;
          }
        }
        
        .circuit-trace {
          stroke-width: 3;
          fill: none;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: ${pathLength};
          stroke-dashoffset: ${pathLength};
          animation: trace-path ${data.animationDuration} ease-in infinite;
          animation-delay: ${data.animationDelay};
          filter: drop-shadow(0 0 4px #FBC308);
        }
        
        @keyframes pulse-connection {
          0%, 100% {
            fill: #374151;
            r: 3;
          }
          50% {
            fill: #FBC308;
            r: 5;
          }
        }
        
        .connection-point {
          animation: pulse-connection calc(${data.animationDuration} * 2) ease-in-out infinite;
          animation-delay: ${data.animationDelay};
        }
      `}</style>

            <g>
                {/* Base inactive path */}
                <path
                    d={data.d}
                    stroke="#374151"
                    strokeWidth="2"
                    fill="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />

                {/* Animated active path */}
                {pathLength > 0 && (
                    <path
                        ref={pathRef}
                        d={data.d}
                        className="circuit-trace"
                    />
                )}

                {/* Connection points */}
                <circle
                    cx={data.startX}
                    cy={data.startY}
                    r="3"
                    fill="#374151"
                    className="connection-point"
                />
                <circle
                    cx={data.endX}
                    cy={data.endY}
                    r="3"
                    fill="#374151"
                    className="connection-point"
                />
            </g>
        </>
    );
};

// --- The Main Background Component ---
const AnimatedMotherboardBackground = () => {
    const [paths, setPaths] = useState<PathData[]>([]);

    useEffect(() => {
        const generatePaths = () => {
            const { innerWidth, innerHeight } = window;
            const numPaths = Math.floor((innerWidth * innerHeight) / 50000);
            const newPaths = Array.from({ length: numPaths }, () =>
                generateCircuitPath(innerWidth, innerHeight)
            );
            setPaths(newPaths);
        };

        generatePaths();

        window.addEventListener('resize', generatePaths);
        return () => window.removeEventListener('resize', generatePaths);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950">
            <svg width="100%" height="100%" className="opacity-40">
                {paths.map((pathData, index) => (
                    <CircuitPath key={index} data={pathData} />
                ))}
            </svg>

            {/* Optional: Add subtle gradient overlay for more depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-950/20 to-zinc-900/40 pointer-events-none" />
        </div>
    );
};

export default AnimatedMotherboardBackground;