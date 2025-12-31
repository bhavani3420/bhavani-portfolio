import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <span className="text-gradient-neon">Portfolio</span>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

