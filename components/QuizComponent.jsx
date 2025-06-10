"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";

const QuizComponent = ({ data, openQuiz, setOpenQuiz, setOpen }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [readyToOpen, setReadyToOpen] = useState(false);

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
  const handleSubmit = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback(data.reward);
      setReadyToOpen(true);
    } else {
      setFeedback('Wrong!');
    }
  };

  const handleGoBack = () => {
    setOpenQuiz(false);
    if (readyToOpen) {
      setOpen(true);
    }
  }

  return openQuiz ? (
    <div className="fixed inset-0 z-[9999] bg-gray-900 text-white">
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
                  setAnswer(choice);
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

          {/* Go Back Button - Fixed at bottom with proper spacing */}
          <div className="w-full max-w-xs mt-auto pb-6">
            <button
              className="w-full px-4 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition-colors"
              onClick={() => handleGoBack()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default QuizComponent;