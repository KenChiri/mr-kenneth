'use client';

import { motion } from 'framer-motion';
import React from 'react';


interface ContentCardProps {
  children: React.ReactNode;
}

export const ContentCard = ({ children }: ContentCardProps) => {
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-lg rounded-2xl"
    >
      {/* 
        These are the decorative "TRON" lines that give the card its unique theme.
        They are positioned absolutely within the card.
      */}
      <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-[#FBC308] to-transparent" />
      <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-[#FBC308] to-transparent" />

     
      {children}
    </motion.div>
  );
};