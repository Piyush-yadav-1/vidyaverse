"use client";

import { motion } from "framer-motion";

const quotes = [
  // ACADEMIC MOTIVATION
  "🚀 Success is the sum of small efforts repeated day in and day out.",
  "📚 Invest in your mind, it pays the best interest. — Benjamin Franklin",
  "💡 The beautiful thing about learning is that no one can take it away from you.",
  "🔥 Arise, awake, and stop not till the goal is reached. — Swami Vivekananda",
  "🎓 Education is not the filling of a pail, but the lighting of a fire.",

  // SPIRITUAL WISDOM
  "🌿 Quiet the mind, and the soul will speak.",
  "🧘‍♂️ Peace comes from within. Do not seek it without. — Buddha",
  "✨ You are the universe expressing itself as a human for a little while.",
  "🌊 You cannot stop the waves, but you can learn to surf.",
  "🕊️ Happiness is not out there, it’s in you."
];

export default function Ticker() {
  return (
    <div className="bg-indigo-900 text-white py-3 overflow-hidden relative z-50">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex space-x-20" // Increased space between quotes for readability
          animate={{ x: ["0%", "-100%"] }} // Changed to start from 0 for smoother loop
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }} // Slower duration (40s) so people can read
        >
          {/* We repeat the array twice to create a seamless infinite loop */}
          {[...quotes, ...quotes].map((quote, index) => (
            <span key={index} className="text-sm font-medium tracking-wide flex items-center gap-2">
              {quote}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}