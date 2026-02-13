
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { NO_BUTTON_TEXTS } from '../constants';

interface ProposalSectionProps {
  onYes: () => void;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({ onYes }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  const moveNoButton = useCallback(() => {
    // Generate random movement within a reasonable range to avoid going off screen
    const rangeX = window.innerWidth < 640 ? 100 : 200;
    const rangeY = 100;
    
    const newX = (Math.random() - 0.5) * rangeX;
    const newY = (Math.random() - 0.5) * rangeY;
    
    setNoButtonPos({ x: newX, y: newY });
    setNoCount((prev) => (prev + 1) % NO_BUTTON_TEXTS.length);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-10 w-full px-4">
      <h1 className="text-4xl md:text-5xl font-romantic text-rose-600 text-center drop-shadow-sm">
        Jahnvi,<br />will you be my Valentine?
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-sm">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onYes}
          className="w-full sm:w-40 py-4 bg-rose-500 text-white rounded-full font-bold text-xl shadow-xl hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
        >
          YES 💖
        </motion.button>

        <div className="relative w-full sm:w-40 flex justify-center">
          <motion.button
            animate={{ x: noButtonPos.x, y: noButtonPos.y }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="w-full py-4 bg-white text-rose-400 border-2 border-rose-200 rounded-full font-bold text-xl shadow-md whitespace-nowrap px-4"
          >
            {NO_BUTTON_TEXTS[noCount]}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProposalSection;
