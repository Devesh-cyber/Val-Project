
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Celebration: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center text-center space-y-6 bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white/50"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-rose-500"
      >
        <Heart size={80} fill="currentColor" />
      </motion.div>

      <h2 className="text-5xl md:text-6xl font-romantic text-rose-600">
        Yayyyy Bhondu! 💕
      </h2>
      
      <p className="text-xl md:text-2xl text-rose-500 font-medium">
        I love you so much! You've made me the happiest person ever.
      </p>

      <div className="pt-4 flex gap-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center"
          >
            <Heart size={24} className="text-rose-500" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-6 italic text-rose-400"
      >
        See you on our date! 🌹
      </motion.div>
    </motion.div>
  );
};

export default Celebration;
