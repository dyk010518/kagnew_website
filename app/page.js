import React from 'react';
import StartButton from '@/components/StartButton';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#011627] to-[#010f18] text-white px-6 py-12">
      <div className="flex flex-col items-center justify-center max-w-md mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-center tracking-wide mb-10 drop-shadow-md">
          Kagnew Time Capsule <br /> Scavenger Hunt
        </h1>

        {/* Image Placeholder */}
        <Image 
          src="/home_image.png"
          alt="home image"
          className="w-3/4 max-w-xs aspect-square rounded-2xl bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-700 shadow-lg flex items-center justify-center mb-12"
          // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
          width={400}
          height={400}
        />

        {/* Start Playing Button */}
        <StartButton />

      </div>
    </main>
  );
}
