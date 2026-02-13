
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Stars, Music, Music2 } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import QuotesCarousel from './components/QuotesCarousel';
import ProposalSection from './components/ProposalSection';
import Celebration from './components/Celebration';
import { AppState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('proposing');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleYes = () => {
    setState('celebrating');
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Layer */}
      <FloatingHearts />
      
      {/* Decorative Stars */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 text-rose-300 opacity-50"
      >
        <Stars size={48} />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-10 text-rose-300 opacity-50"
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      {/* Music Toggle (Visual only, as auto-audio is restricted by browsers) */}
      <button 
        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        className="fixed top-6 left-6 z-50 p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg text-rose-500 hover:bg-rose-100 transition-colors"
      >
        {isMusicPlaying ? <Music size={24} /> : <Music2 size={24} />}
      </button>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-lg">
        <AnimatePresence mode="wait">
          {state === 'proposing' ? (
            <motion.div
              key="proposing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center space-y-8"
            >
              {/* Cute Teddy Section */}
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <motion.img 
                  src="https://picsum.photos/seed/teddy/400/400" 
                  alt="Cute Teddy"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-rose-500 p-3 rounded-full shadow-lg text-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <Heart fill="white" size={24} />
                </motion.div>
              </div>

              {/* Quotes Section */}
              <div className="w-full">
                <QuotesCarousel />
              </div>

              {/* Proposal Interaction */}
              <ProposalSection onYes={handleYes} />
            </motion.div>
          ) : (
            <Celebration key="celebrating" />
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="fixed bottom-4 text-rose-400 text-sm font-medium opacity-70">
        Made with ❤️ for Jahnvi
      </footer>
    </div>
  );
};

export default App;
