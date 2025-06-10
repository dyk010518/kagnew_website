// components/Title.js
import { Montserrat } from 'next/font/google'; // Import Montserrat for styling

// Initialize Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
  variable: '--font-montserrat',
});

const Title = () => {

  return (
    <h1
      className={`font-montserrat text-4xl font-extrabold text-center tracking-tight mb-4
                  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                  animate-pulse-slow title-subtle-glow leading-normal`} /* Added leading-normal here */
    >
      Kagnew <br/>
      Scavenger Hunt
    </h1>
  )
};

export default Title;