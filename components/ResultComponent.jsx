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
        className="absolute bg-[#010f18] border-2 border-primary-500 w-3/4 top-32 bottom-32 overflow-y-auto overflow-x-hidden flex flex-col"
        variants={cardVariants}
        initial="initial"
        animate={isExiting ? 'exit' : 'animate'}
        transition={{ duration: 1 }}
      >
        <div className="p-6 flex flex-col min-h-full">
        {/* Content area - grows to fill available space */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Result Message */}
          {answer === correctAnswer ? (
            <div className="mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-green-400 mb-6">Correct!</h2>
              <div className="text-xl text-white bg-green-600 bg-opacity-20 border border-green-400 rounded-lg p-6 max-w-md">
                {data.reward}
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <div className="text-6xl mb-4">❌</div>
              <h2 className="text-3xl font-bold text-red-400 mb-6">Incorrect!</h2>
              <div className="text-lg text-white bg-red-600 bg-opacity-20 border border-red-400 rounded-lg p-6 max-w-md">
                <p>Try again!</p>
              </div>
            </div>
          )}
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResultComponent;