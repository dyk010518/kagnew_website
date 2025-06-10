// This is your ending page (e.g., app/end/page.js)
"use client"; // This component needs to be a Client Component due to framer-motion and useState

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import Title from '@/components/Title'; // Assuming your Title component
import { Montserrat } from 'next/font/google'; // Import Montserrat for consistent styling
import { motion } from 'framer-motion'; // Import motion for animations

// Initialize Montserrat font for consistent styling
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
  variable: '--font-montserrat',
});

export default function Page() {
  // Define animation variants for fade-in and slight upward movement
  const fadeInRise = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className={`flex min-h-screen flex-col items-center bg-[#010f18] ${montserrat.variable}`}>
      {/* Main content container with consistent styling and animation */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 min-h-screen space-y-8 max-w-2xl w-full">

        {/* Title with animation */}
        <motion.div variants={fadeInRise} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
          <Title />
        </motion.div>

        {/* Time Capsule Image with animation and glow */}
        <motion.div
          variants={fadeInRise}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }} // Animation starts after the title
          className="relative w-3/4 max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center rounded-2xl overflow-hidden border border-blue-400/20"
          style={{
            // Add a subtle blue/purple glow effect to the image container
            boxShadow: '0 0 50px rgba(59, 130, 246, 0.5), 0 0 25px rgba(139, 92, 246, 0.4)',
          }}
        >
          <Image
            src="/time_capsule.png" // <--- IMPORTANT: Replace with the actual path to your time capsule image (e.g., /time-capsule.png if directly in public folder)
            alt="Found Time Capsule"
            width={400} // Adjust width and height based on your image's aspect ratio and desired display size
            height={400}
            className="w-full h-full object-cover" // Ensures the image fills its container
          />
        </motion.div>

        {/* Congratulatory Caption with animation */}
        <motion.p
          variants={fadeInRise}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.9 }} // Animation starts after the image
          className="text-white text-center text-lg font-bold max-w-lg leading-relaxed px-4" // Added px-4 for smaller screens
        >
          Congratulations, Adventurer! You've successfully located the Time Capsule! Your journey has uncovered a hidden treasure.
        </motion.p>

        {/* Go Home Button with animation */}
        <motion.div
          variants={fadeInRise}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }} // Animation starts after the caption
          className="w-full max-w-xs px-4" // Added px-4 for consistent side padding
        >
          <Link href="/">
            <button className="w-full py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-pink-500 transition-colors duration-200">
              Go Home
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}