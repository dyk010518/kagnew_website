import Link from 'next/link';
import QuizComponent from './QuizComponent';
import { useState, useEffect } from "react";

const TimeCapsureButton = ({ data, open, setCorrect}) => {

  return (
    <>
      {open ? (
        <Link href="/ending">
          <button 
            className="w-full py-4 mb-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition-colors"
          >
            {data.location}
          </button>
        </Link>
      ) : (
        <button
          className="w-full py-4 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
          disabled
        >
          🔒
        </button>
      )}

    </>
  )
};

export default TimeCapsureButton;
