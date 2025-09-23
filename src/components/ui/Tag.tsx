import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'primary';
  className?: string;
}


export const Tag = ({ children, variant = 'default', className }: TagProps) => {
  const variants = {
    default: 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80',
    primary: 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};