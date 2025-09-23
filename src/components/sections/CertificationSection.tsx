'use client';
import { useState } from 'react';
import { certification as certifications } from '@/data/certification'; 
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CertificationCard } from '@/components/ui/CertificationCard';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Certification } from '@/types';
const CertificationModal = ({ cert, onClose }: { cert: Certification; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
  >
    <motion.div
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      className="relative w-full max-w-4xl"
    >
      <Image
        src={cert.imageUrl || ""}
        alt={`${cert.name} Certificate`}
        width={1123} // Example dimensions, adjust to your cert's aspect ratio
        height={794}
        className="rounded-lg shadow-2xl"
      />
      <button onClick={onClose} className="absolute -top-10 right-0 text-white text-3xl font-bold">&times;</button>
    </motion.div>
  </motion.div>
);

export const CertificationSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications">
      <SectionHeader
        title="Certifications & Licenses"
        description="My professional qualifications and credentials"
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map(cert => (
          <CertificationCard 
            key={cert.id} 
            certification={cert} 
            onCardClick={() => setSelectedCert(cert)} 
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};