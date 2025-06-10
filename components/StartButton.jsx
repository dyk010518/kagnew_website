"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const StartButton = ({ data, open, setCorrect}) => {

  return (
    <motion.div
      whileTap={{ scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ maxWidth: '220px', width: '100%' }}
    >
      <Link 
        href="/places" 
        className="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:from-tertiary-700 hover:via-primary-700 hover:to-secondary-700 text-white text-center transition duration-300"
      >
          Start Playing
      </Link>
    </motion.div>
  )
};

export default StartButton;
