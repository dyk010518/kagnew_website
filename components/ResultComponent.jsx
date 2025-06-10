import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const cardVariants = {
  initial: { y: 500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 500, opacity: 0 },
};

const ResultComponent = ({ data, answer, correctAnswer, setOpenQuiz, setShowResult, setOpen }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleAnimationComplete = () => {
    if (isExiting) setFocusedIndex(-1);
  };

  const handleGoBack = () => {
    setOpenQuiz(false);
    setShowResult(false);
    if (answer === correctAnswer) {
      setOpen(true);
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-20 flex justify-center bg-[#010f18] bg-opacity-70"
      variants={backdropVariants}
      initial="initial"
      animate={isExiting ? 'exit' : 'animate'}
      onAnimationComplete={handleAnimationComplete}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <motion.div
        className="absolute bg-[#010f18] border-2 border-primary-500 p-6 w-3/4 top-32 bottom-32 overflow-hidden flex flex-col"
        variants={cardVariants}
        initial="initial"
        animate={isExiting ? 'exit' : 'animate'}
        transition={{ duration: 1 }}
      >
        {/* Content area - grows to fill available space */}
        <div className="flex-1">
          {/* Your content goes here */}
        </div>

        {/* Bottom center button */}
        <div className="flex justify-center pb-0">
          <button
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition-colors"
            onClick={() => handleGoBack()}
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResultComponent;