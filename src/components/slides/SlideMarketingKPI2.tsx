"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideMarketingKPI2() {
  return (
    <div className="w-full h-full bg-white flex flex-col px-10 py-7 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-pink-600" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 mb-1"
      >
        <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          마케팅팀
        </span>
        <span className="text-pink-400 text-[10px]">[3] KPI - 유튜브</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl font-bold text-pink-900 mb-3 flex items-center gap-2"
      >
        <span className="text-pink-500">&#9733;</span>
        유튜브 KPI
      </motion.h2>

      <div className="flex-1 flex items-center justify-center min-h-0">
        <div className="relative w-full max-w-[90%] h-full rounded-2xl overflow-hidden border border-pink-100 shadow-lg shadow-pink-100/50 bg-white">
          <Image
            src="/images/m_2.png"
            alt="유튜브 KPI"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
