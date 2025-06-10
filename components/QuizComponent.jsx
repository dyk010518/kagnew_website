"use client";

import { useState, useEffect } from "react";
import ResultComponent from './ResultComponent';
import { Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import Title from './Title';

// Initialize Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
  variable: '--font-montserrat',
});

const QuizComponent = ({ data, openQuiz, setOpenQuiz, setOpen }) => {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const correctAnswer = data.correct_answer;

  useEffect(() => {
    if (openQuiz) {
      setAnswer('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openQuiz]);

  // Handle form submission
  const handleSubmit = (choice) => {
    setAnswer(choice);
    setShowResult(true);
  };

  // Framer Motion Variants for animations
  const quizModalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemFadeSlideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <AnimatePresence>
        {openQuiz && (
          <motion.div
            className={`fixed inset-0 z-[10] bg-gray-900 text-white ${montserrat.variable}`}
            variants={quizModalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="h-full overflow-y-auto overflow-x-hidden">
              <motion.div
                className="min-h-full flex flex-col items-center p-4"
                variants={containerStaggerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemFadeSlideVariants} className="w-full max-w-xs mt-6 mb-8">
                  <Title />
                </motion.div>

                {/* START: Animated Question Box with Prominent Glow */}
                <motion.div
                  variants={itemFadeSlideVariants}
                  className="w-full max-w-md px-6 py-8 mt-8 mb-8
                             bg-gradient-to-br from-[#021A30] to-[#010F18]
                             rounded-2xl shadow-xl border border-blue-400/20 // Using shadow-xl for base
                             text-center flex flex-col items-center justify-center min-h-[140px]"
                  style={{ // Added inline style for custom glow effect
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.4)', // Blue and Purple Glow
                  }}
                >
                  <p className="font-montserrat text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                    Question:
                  </p>
                  <h2 className="font-montserrat text-md font-light leading-tight text-white drop-shadow-lg">
                    {data.question}
                  </h2>
                </motion.div>
                {/* END: Animated Question Box with Prominent Glow */}


                {/* START: Animated Multiple Choice Options with lighter shadow */}
                <div className='space-y-4 w-full max-w-xs mb-8'>
                  {data.answer_choices.map((choice, index) => (
                    <motion.button
                      key={index}
                      variants={itemFadeSlideVariants}
                      onClick={() => {
                        handleSubmit(choice);
                      }}
                      className={`w-full px-4 py-3 rounded-lg border cursor-pointer transition-colors shadow-md ${ // shadow-md for a simple, lighter shadow
                        answer === choice ? 'bg-purple-600 border-purple-500' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="answer"
                        value={choice}
                        checked={answer === choice}
                        onChange={() => setAnswer(choice)}
                        className="hidden"
                      />
                      {choice}
                    </motion.button>
                  ))}
                </div>
                {/* END: Animated Multiple Choice Options */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showResult && (
        <ResultComponent
          data={data}
          answer={answer}
          correctAnswer={correctAnswer}
          setOpenQuiz={setOpenQuiz}
          setShowResult={setShowResult}
          setOpen={setOpen}
        />
      )}
    </>
  )
};

export default QuizComponent;