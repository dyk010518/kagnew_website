"use client";

import Link from 'next/link';
import { useState } from "react";

const QuizComponent = ({ data, openQuiz, setOpenQuiz, setCorrect }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const correctAnswer = data.correct_answer; // use from data

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === correctAnswer) {
      setFeedback(data.reward);
      setCorrect();
    } else {
      setFeedback('Wrong!');
    }
  };

  return openQuiz ? (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-screen overflow-auto min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      {/* Logo */}
      <div className="w-full max-w-xs mt-6 mb-8">
        <div className="w-full aspect-[3/1] bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-300 text-lg">Logo Placeholder</span>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-semibold mt-8 text-center">
        {data.question}
      </h2>

      {/* Multiple Choice Options */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs mt-6 flex flex-col items-center space-y-4">
        {data.answer_choices.map((choice, index) => (
          <label
            key={index}
            className={`w-full px-4 py-2 rounded-lg border cursor-pointer ${
              answer === choice ? 'bg-purple-600 border-purple-500' : 'bg-gray-800 border-gray-700'
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
          </label>
        ))}

        <button
          type="submit"
          className="w-full px-6 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-pink-500 transition-colors duration-200"
        >
          Submit
        </button>
      </form>

      {/* Feedback Message */}
      {feedback && (
        <div className={`mt-6 text-xl ${feedback === 'Wrong!' ? 'text-red-500' : 'text-greend-500'}`}>
          {feedback}
        </div>
      )}

      <button
        className="w-full max-w-xs px-4 py-4 mb-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition-colors"
        onClick={() => setOpenQuiz(false)}
      >
        Go Back
      </button>
    </div>
  ) : null;
};

export default QuizComponent;
