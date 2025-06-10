import Link from 'next/link';
import QuizComponent from './QuizComponent';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const TimeCapsureButton = ({ data, open, settled, setOpen, setSettled }) => {
  // State 1: Locked (not open)
  if (!open) {
    return (
      <>
        <button
          className="w-full py-4 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
          disabled
        >
          🔒
        </button>
      </>
    );
  }

  // State 3: Transitioning (open but not settled)
  if (open && !settled) {
    return (
      <Link href="/ending">
        <motion.button
          className="w-full py-4 mb-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90 relative overflow-hidden"
          style={{ backgroundImage: `url(${data.image_path})` }}
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

      </Link>
    );
  }

  return (
    <Link href="/ending">
      <button 
        className="w-full py-4 mb-4 text-white rounded-lg font-semibold bg-cover bg-center transition-colors hover:opacity-90"
        style={{ backgroundImage: `url(${data.image_path})` }}
        onClick={() => setOpenQuiz(true)}
      >
        <div className="bg-black bg-opacity-50 p-2 rounded">{data.location}</div>
      </button>
    </Link>
  )
};

export default TimeCapsureButton;





