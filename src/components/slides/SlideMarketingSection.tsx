"use client";

import { motion } from "framer-motion";

export default function SlideMarketingSection() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-100 via-pink-50 to-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full border-2 border-pink-200"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3.5, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          &#128640;
        </motion.div>
        <h2 className="text-5xl font-bold text-pink-700 mb-3 tracking-tight">
          마케팅팀
        </h2>
        <p className="text-pink-400 text-lg font-light">Marketing Team Report</p>
        <div className="mt-6 flex gap-6 justify-center">
          <div className="bg-pink-500 rounded-xl px-4 py-2 text-white text-sm">
            [1] 월별 성과
          </div>
          <div className="bg-pink-500 rounded-xl px-4 py-2 text-white text-sm">
            [2] 진행사항
          </div>
          <div className="bg-pink-500 rounded-xl px-4 py-2 text-white text-sm">
            [3] KPI
          </div>
        </div>
      </motion.div>
    </div>
  );
}
