"use client";
import Link from 'next/link';
// QuizComponent is not used in this file based on the provided code, so it can be removed from imports if it's not needed elsewhere in this component.
// import QuizComponent from './QuizComponent';
import { useState, useEffect } from "react"; // useState is used, useEffect is not directly used but often helpful
import { motion } from 'framer-motion';

const TimeCapsuleButton = ({ data, open, settled, setOpen, setSettled }) => {
  // Common styles for the active/interactive button states (settled and transitioning)
  const activeBoxStyles = {
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.08)', // Subtle white shadow
    border: '1px solid rgba(255, 255, 255, 0.4)' // Light border
  };

  // State 1: Locked (not open) - Enhanced Look & No Hover
  if (!open) {
    return (
      <button
        className="relative w-full py-4 rounded-lg font-semibold cursor-not-allowed overflow-hidden" // Removed 'group' class
        style={{
          backgroundImage: `url(${data.image_path})`, // Use the actual image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: "grayscale(100%) brightness(0.4) blur(2px)", // Desaturate, darken, blur
          ...activeBoxStyles // Apply the subtle white shadow and border
        }}
        disabled
      >
        {/* Overlay for lock icon and text - No group-hover effects */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
          <span className="text-4xl text-gray-300 mb-2 transition-transform duration-300">🔒</span>
          <span className="text-lg text-gray-300 font-medium opacity-80">Locked</span>
        </div>
      </button>
    );
  }

  // State 3: Transitioning (open but not settled) - Added Border & Shadow
  if (open && !settled) {
    return (
      <Link href="/ending" className="w-full"> {/* Ensure Link covers the whole button width */}
        <motion.button
          className="w-full py-4 mb-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90 relative overflow-hidden"
          style={{ 
            backgroundImage: `url(${data.image_path})`,
            ...activeBoxStyles // Apply the subtle white shadow and border
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
            setSettled(true)} // Retain existing onClick logic
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
      </Link>
    );
  }

  // State 2: Open and settled (fully interactive) - Added Border & Shadow
  return (
    <Link href="/ending" className="w-full"> {/* Ensure Link covers the whole button width */}
      <button 
        className="w-full py-4 mb-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90"
        style={{ 
          backgroundImage: `url(${data.image_path})`,
          ...activeBoxStyles // Apply the subtle white shadow and border
        }}
        // Removed unnecessary onClick={setOpenQuiz(true)} as Link handles navigation
      >
        <div className="bg-black bg-opacity-50 p-2 rounded">{data.location}</div>
      </button>
    </Link>
  )
};

export default TimeCapsuleButton;