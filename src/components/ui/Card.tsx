import {cn} from '@/lib/utils';
import React, {Children, ReactNode} from 'react';

interface CardProps {
    children: ReactNode;
    className?: String;
    hover?: boolean;
}

export const Card = ({children, className, hover = true}: CardProps) => {
    return (
        <div
            className= {cn(
                'bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-xl overflow-hidden',
                hover && 'hover:border-gray-700/70 hover:bg-gray-900/70 transition-all duration-200',
                className
            )}
        >
            {children}

        </div>
    );
};