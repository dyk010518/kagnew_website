import React from 'react';
import StartButton from '@/components/StartButton';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#011627] to-[#010f18] text-white px-6 py-12">
      <div className="flex flex-col items-center justify-center max-w-md mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-center tracking-wide mb-10 drop-shadow-md">
          Kagnew Time Capsule <br /> Scavenger Hunt
        </h1>

        {/* Image Placeholder */}
        <div className="w-full max-w-xs aspect-square rounded-2xl bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-700 shadow-lg flex items-center justify-center mb-12">
          <span className="text-gray-400 text-lg font-light select-none">
            Image Placeholder
          </span>
        </div>

        {/* Start Playing Button */}
        <StartButton />
        
      </div>
    </main>
  );
}
