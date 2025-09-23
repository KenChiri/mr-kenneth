import { cn } from '@/lib/utils';
import React from 'react';


type CardProps<T extends React.ElementType> = {
    as?: T;
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
};


export const Card = <T extends React.ElementType = 'div'>({
    as,
    children,
    className,
    hover = true,
    ...rest
}: CardProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof CardProps<T>>) => {


    const Component = as || 'div';

    return (

        <Component
            className={cn(
                'bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-xl overflow-hidden',
                hover && 'hover:border-gray-700/70 hover:bg-gray-900/70 transition-all duration-200',
                className
            )}
            {...rest}
        >
            {children}
        </Component>
    );
};