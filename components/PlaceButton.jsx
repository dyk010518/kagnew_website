import Link from 'next/link';
import QuizComponent from './QuizComponent';
import { useState, useEffect } from "react";

const PlaceButton = ({ data, open, setCorrect}) => {
  const [openQuiz, setOpenQuiz] = useState(false);

  return (
    <>
      {open ? (
        <button 
          className="w-full py-4 mb-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition-colors"
          onClick={() => setOpenQuiz(true)}
        >
          {data.location}
        </button>
      ) : (
        <button
          key={data.location}
          className="w-full py-4 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
          disabled
        >
          🔒
        </button>
      )}

      <QuizComponent data={data} openQuiz={openQuiz} setOpenQuiz={setOpenQuiz} setCorrect={setCorrect} />
    </>
  )
};

export default PlaceButton;
