'use client';

import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Decorative circles */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-[#033D54]/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-[#033D54]/30"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative flex flex-col items-center gap-4 p-8"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative w-20 h-20"
          >
            <div className="absolute inset-0 border-4 border-[#033D54] border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-4 border-[#033D54]/50 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
          </motion.div>

          {/* Logo and text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaCode className="w-8 h-8 text-[#033D54]" />
            </motion.div>
            <motion.p
              className="text-[#033D54] font-medium text-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 