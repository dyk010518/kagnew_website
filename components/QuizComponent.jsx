"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";
import ResultComponent from './ResultComponent';

const QuizComponent = ({ data, openQuiz, setOpenQuiz, setOpen }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [readyToOpen, setReadyToOpen] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const correctAnswer = data.correct_answer; // use from data

  useEffect(() => {
    if (openQuiz) {
      setAnswer('');
      setFeedback('');
      // Prevent body scroll when quiz is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when quiz is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openQuiz]);

  // Handle form submission
  const handleSubmit = (choice) => {
    setAnswer(choice);
    setShowResult(true);
  };

  const handleGoBack = () => {
    setOpenQuiz(false);
    if (readyToOpen) {
      setOpen(true);
    }
  }

  return (
    <>
      {openQuiz && (
        <div className="fixed inset-0 z-[10] bg-gray-900 text-white">
          {/* Scrollable content container */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <div className="min-h-full flex flex-col items-center p-4">
              {/* Logo */}
              <div className="w-full max-w-xs mt-6 mb-8">
                <div className="w-full aspect-[3/1] bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-lg">Logo Placeholder</span>
                </div>
              </div>

              {/* Question */}
              <h2 className="text-xl font-semibold mt-8 mb-8 text-center max-w-md">
                {data.question}
              </h2>

              {/* Multiple Choice Options */}
              <div className='space-y-4 w-full max-w-xs mb-8'>
                {data.answer_choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleSubmit(choice);
                    }}
                    className={`w-full px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                      answer === choice ? 'bg-purple-600 border-purple-500' : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    }`}
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
                  </button>
                ))}
              </div>

              {/* Feedback Message */}
              {feedback && (
                <div className={`mb-8 text-xl text-center ${feedback === 'Wrong!' ? 'text-red-500' : 'text-green-500'}`}>
                  {feedback}
                </div>
              )}

            </div>
          </div>
        </div>
      )}

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