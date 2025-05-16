'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <FaExclamationTriangle className="w-16 h-16 text-[#033D54] mx-auto" />
        </motion.div>
        <h2 className="text-2xl font-bold text-[#033D54] mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <Button
          onClick={reset}
          className="bg-[#033D54] hover:bg-[#033D54]/90 text-white"
        >
          Try again
        </Button>
      </motion.div>
    </div>
  );
} 