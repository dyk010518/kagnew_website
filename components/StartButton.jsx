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
    }, 1000);
  };

  return (
    <motion.button
      onClick={handleClick}
      animate={isClicked ? { scale: 0.9 } : { scale: 1 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      style={{ maxWidth: '220px', width: '100%' }}
      className="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:from-tertiary-700 hover:via-primary-700 hover:to-secondary-700 text-white text-center transition duration-300"
    >
      Start Playing
    </motion.button>
  );
};

export default StartButton;