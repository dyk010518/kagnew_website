import Link from 'next/link';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#010f18]">
      <div className=" text-white flex flex-col items-center justify-between p-4">
        <h1 className="text-2xl font-bold mt-12 text-center">
          Kagnew Scavenger Hunt
        </h1>

        {/* Image Placeholder */}
        <div className="w-full max-w-xs mt-8">
          <div className="w-full aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>

        {/* Start Playing Button */}
        <Link href="/places">
          <button className="w-full max-w-xs mt-10 mb-4 px-6 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-pink-500 transition-colors duration-200">
            Start Playing
          </button>
        </Link>
      </div>
    </main>
  );
}
