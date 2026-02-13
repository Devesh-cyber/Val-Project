
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROMANTIC_QUOTES } from '../constants';

const QuotesCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROMANTIC_QUOTES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-24 flex items-center justify-center text-center px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-xs"
        >
          <p className="text-rose-600 font-medium italic text-lg md:text-xl">
            "{ROMANTIC_QUOTES[index].text}"
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuotesCarousel;
