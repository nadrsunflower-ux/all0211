"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideEventMonthly() {
  return (
    <div className="w-full h-full bg-white flex flex-col px-10 py-7 relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-pink-600" />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 mb-1"
      >
        <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          이벤트팀
        </span>
        <span className="text-pink-400 text-[10px]">[1] 월별 성과</span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl font-bold text-pink-900 mb-3 flex items-center gap-2"
      >
        <span className="text-pink-500">&#9733;</span>
        2025년 생일 이벤트 월별 매출
      </motion.h2>

      {/* Chart image - b1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative w-full max-w-[85%] h-full rounded-2xl overflow-hidden border border-pink-100 shadow-lg shadow-pink-100/50">
          <Image
            src="/images/b1.png"
            alt="2025년 생일 이벤트 월별 매출"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
