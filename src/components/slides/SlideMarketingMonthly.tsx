"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function SlideMarketingMonthly() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

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
        <span className="text-pink-400 text-[10px]">[1] 월별 성과</span>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col"
      >
        <motion.h2
          variants={item}
          className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2"
        >
          <span className="text-pink-500">&#9733;</span>
          2025년 1월 뿌리는덕질 성과
        </motion.h2>

        <div className="flex gap-4">
          <motion.div variants={item} className="flex-1">
            <Card className="p-4 border-pink-200 bg-gradient-to-r from-pink-50 to-white h-full">
              <p className="text-xs text-pink-400 mb-1">확정 매출</p>
              <p className="text-2xl font-bold text-pink-600">1,864<span className="text-sm font-normal text-pink-400 ml-0.5">만 원</span></p>
            </Card>
          </motion.div>

          <motion.div variants={item} className="flex-1">
            <Card className="p-4 border-pink-200 bg-gradient-to-r from-pink-50 to-white h-full">
              <p className="text-xs text-pink-400 mb-1">신청 매출</p>
              <p className="text-2xl font-bold text-pink-600">2,690<span className="text-sm font-normal text-pink-400 ml-0.5">만 원</span></p>
            </Card>
          </motion.div>

          <motion.div variants={item} className="flex-1">
            <Card className="p-4 border-pink-200 bg-gradient-to-r from-pink-50 to-white h-full">
              <p className="text-xs text-pink-400 mb-1">유입량</p>
              <p className="text-2xl font-bold text-pink-600">9,462<span className="text-sm font-normal text-pink-400 ml-0.5">회</span></p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
