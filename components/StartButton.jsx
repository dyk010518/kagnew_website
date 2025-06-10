"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const StartButton = ({ data, open, setCorrect }) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true); // Trigger the scaling animation
    
    setTimeout(() => {
      router.push('/places');
    }, 300);
  };

  return (
    <motion.button
      onClick={handleClick}
      animate={isClicked ? { scale: 0.9 } : { scale: 1 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      // --- MODIFICATIONS FOR SMALLER BUTTON START ---
      style={{ maxWidth: '80px', width: '100%' }} // Reduced maxWidth
      className="inline-block px-5 py-2 mb-8 rounded-lg bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:from-tertiary-700 hover:via-primary-700 hover:to-secondary-700 text-white text-center text-sm transition duration-300" // Reduced padding (py-2), added text-sm for smaller font
      // --- MODIFICATIONS FOR SMALLER BUTTON END ---
    >
      Start
    </motion.button>
  );
};

export default StartButton;