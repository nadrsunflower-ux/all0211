"use client";

import { motion } from "framer-motion";

export default function SlideTitle() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-50 via-white to-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute top-8 left-12 w-20 h-20 rounded-full bg-pink-200/40"
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-pink-300/20"
        animate={{ y: [0, 10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-24 w-12 h-12 rounded-full bg-pink-400/20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 left-20 w-16 h-16 rounded-full bg-pink-200/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />

      {/* Heart decorations */}
      <motion.div
        className="absolute top-[15%] left-[8%] text-pink-300 text-2xl"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        &#9829;
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[10%] text-pink-400 text-3xl"
        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        &#9829;
      </motion.div>

      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-pink-500 text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-5 shadow-lg shadow-pink-200"
      >
        2026. 02. 11
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold text-pink-900 mb-3 tracking-tight"
      >
        전체 회의
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="h-[1px] w-12 bg-pink-300" />
        <p className="text-lg text-pink-600 font-medium">
          이벤트 & 마케팅팀 전체회의록
        </p>
        <div className="h-[1px] w-12 bg-pink-300" />
      </motion.div>

      {/* Teams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4"
      >
        <div className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-2xl px-6 py-3 shadow-sm">
          <p className="text-pink-700 font-semibold text-sm">Event Team</p>
          <p className="text-pink-400 text-xs mt-0.5">이벤트팀</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-2xl px-6 py-3 shadow-sm">
          <p className="text-pink-700 font-semibold text-sm">Marketing Team</p>
          <p className="text-pink-400 text-xs mt-0.5">마케팅팀</p>
        </div>
      </motion.div>
    </div>
  );
}
