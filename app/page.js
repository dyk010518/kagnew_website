"use client";

import React from 'react';
import StartButton from '@/components/StartButton';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-montserrat',
});

export default function Page() {
  // Define animation variants for framer-motion
  const fadeInRise = {
    initial: { opacity: 0, y: 0 }, // Starts invisible and slightly below its final position
    animate: { opacity: 1, y: 0 },  // Fades in and moves to its final position
  };

  const imageFadeInRise = {
    initial: { opacity: 0, y: 30 }, // Starts invisible and further below for a more pronounced rise
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Starry Background Layer */}
      <div className="absolute inset-0 z-0 stars-background"></div>

      {/* Main content, layered above the stars */}
      <main className={`relative z-10 flex min-h-screen flex-col bg-gradient-to-b from-[#011627]/80 to-[#010f18]/80 text-white px-6 py-12 ${montserrat.variable}`}>
        <div className="flex flex-col items-center justify-center max-w-md mx-auto w-full mt-16">

          {/* Title with fade-in and slight upward movement */}
          <motion.h1
            variants={fadeInRise}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Animation duration, ease, and initial delay
            className={`font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse-slow title-subtle-glow`}
          >
            Kagnew <br/> Scavenger Hunt
          </motion.h1>

          {/* Start Button with fade-in and slight upward movement */}
          {/* Wrap StartButton in a motion.div to apply shared animation logic */}
          <motion.div
            variants={fadeInRise}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} // Slightly later delay for button
          >
            <StartButton />
          </motion.div>

          {/* Image wrapper with fade-in and upward movement */}
          <motion.div
            variants={imageFadeInRise}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }} // Animation starts after title/button are mostly done
            className="relative w-3/4 max-w-xs aspect-square rounded-2xl flex items-center justify-center mb-12 transform hover:scale-105 transition-transform duration-500 ease-in-out"
            style={{
              perspective: '800px',
            }}
          >
            <Image
              src="/home.png"
              alt="home image"
              className="w-4/5 h-4/5 object-cover rounded-2xl"
              style={{
                transform: 'rotateX(15deg)',
                transformOrigin: 'bottom center',
                boxShadow: '0 3px 10px rgba(0, 200, 255, 0.4), 0 0 30px rgba(0, 200, 255, 0.2)',
                animation: 'float 3s ease-in-out infinite', // Keep the existing floating animation
              }}
              width={400}
              height={400}
            />
          </motion.div>

        </div>
      </main>

      {/* --- Keyframe Animations and Custom Styles --- */}
      <style jsx>{`
        .title-subtle-glow {
          text-shadow:
            0 0 15px rgba(255, 255, 255, 0.2),
            0 0 30px rgba(255, 255, 255, 0.1);
        }

        .stars-background {
          background-color: #010f18;
          background-image:
            radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 0),
            radial-gradient(rgba(255, 255, 255, 0.7) 2px, transparent 0),
            radial-gradient(rgba(255, 255, 255, 0.5) 3px, transparent 0);
          background-size:
            50px 50px,
            75px 75px,
            100px 100px;
          background-position:
            0 0,
            0 0,
            0 0;
          animation:
            animateStars1 50s linear infinite,
            animateStars2 100s linear infinite reverse,
            animateStars3 150s linear infinite;
        }

        @keyframes animateStars1 {
          from { background-position: 0 0; }
          to { background-position: 100% 100%; }
        }
        @keyframes animateStars2 {
          from { background-position: 0 0; }
          to { background-position: -100% -100%; }
        }
        @keyframes animateStars3 {
          from { background-position: 0 0; }
          to { background-position: 50% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotateX(15deg); }
          50% { transform: translateY(-10px) rotateX(15deg); }
          100% { transform: translateY(0px) rotateX(15deg); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .font-montserrat {
          font-family: var(--font-montserrat);
        }
      `}</style>
    </div>
  );
}