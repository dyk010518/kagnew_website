import Link from 'next/link';
import QuizComponent from './QuizComponent';
import { useState } from "react";

const PlaceButton = ({ data, open, setCorrect }) => {
  const [openQuiz, setOpenQuiz] = useState(false);

  return (
    <>
      {open ? (
        <button 
          className="w-full py-4 mb-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90"
          style={{ backgroundImage: `url(${data.image_path})` }}
          onClick={() => setOpenQuiz(true)}
        >
          <div className="bg-black bg-opacity-50 p-2 rounded">{data.location}</div>
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
  );
};

export default PlaceButton;
