'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  type?: 'image' | 'text' | 'circle';
}

export function Skeleton({ className = '', type = 'text' }: SkeletonProps) {
  const baseClasses = 'bg-gray-200 animate-pulse';
  
  const typeClasses = {
    image: 'aspect-video w-full rounded-lg',
    text: 'h-4 w-3/4 rounded',
    circle: 'h-12 w-12 rounded-full'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
    />
  );
} 