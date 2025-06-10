"use client";
import Link from 'next/link';
import QuizComponent from './QuizComponent';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const PlaceButton = ({ data, open, settled, setOpen, setSettled }) => {
  const [openQuiz, setOpenQuiz] = useState(false);

  // Common styles for the active/interactive button states (settled and transitioning)
  const activeBoxStyles = {
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.08)', // Subtle white shadow
    border: '1px solid rgba(255, 255, 255, 0.4)' // Light border
  };

  // State 1: Locked (not open) - Hover effects removed
  if (!open) {
    return (
      <button
        // Removed 'group' class here
        className="relative w-full py-4 rounded-lg font-semibold cursor-not-allowed overflow-hidden" 
        style={{
          backgroundImage: `url(${data.image_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: "grayscale(100%) brightness(0.4) blur(2px)",
          ...activeBoxStyles
        }}
        disabled
      >
        {/* Removed group-hover classes */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
          <span className="text-4xl text-gray-300 mb-2 transition-transform duration-300">🔒</span>
          <span className="text-lg text-gray-300 font-medium opacity-80">Locked</span>
        </div>
      </button>
    );
  }

  // State 3: Transitioning (open but not settled)
  if (open && !settled) {
    return (
      <>
        <motion.button
          className="w-full py-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90 relative overflow-hidden"
          style={{ 
            backgroundImage: `url(${data.image_path})`,
            ...activeBoxStyles
          }}
          initial={{ 
            scale: 0.95,
            opacity: 0.7,
            filter: "brightness(0.5) blur(2px)"
          }}
          animate={{ 
            scale: 1,
            opacity: 1,
            filter: "brightness(1) blur(0px)"
          }}
          transition={{ 
            duration: 1.0,
            ease: "easeOut"
          }}
          onClick={() => {
            setOpenQuiz(true)
            setSettled(true)}
          }
        >
          <motion.div 
            className="bg-black bg-opacity-50 p-2 rounded"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {data.location}
          </motion.div>
        </motion.button>

        <QuizComponent 
          data={data} 
          openQuiz={openQuiz} 
          setOpenQuiz={setOpenQuiz} 
          setOpen={setOpen} 
        />
      </>
    );
  }

  // State 2: Open and settled (fully interactive)
  return (
    <>
      <button 
        className="w-full py-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90"
        style={{ 
          backgroundImage: `url(${data.image_path})`,
          ...activeBoxStyles
        }}
        onClick={() => setOpenQuiz(true)}
      >
        <div className="bg-black bg-opacity-50 p-2 rounded">{data.location}</div>
      </button>

      <QuizComponent 
        data={data} 
        openQuiz={openQuiz} 
        setOpenQuiz={setOpenQuiz} 
        setOpen={setOpen} 
      />
    </>
  );
};

export default PlaceButton;