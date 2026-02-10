"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function SlideEventJanuary() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
          이벤트팀
        </span>
        <span className="text-pink-400 text-[10px]">[1] 월별 성과 & [2] 진행사항</span>
      </motion.div>

      <div className="flex gap-8 flex-1">
        {/* Left: January sales */}
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
            2026년 1월 생일 이벤트 매출
          </motion.h2>

          <div className="flex flex-col gap-3">
            <motion.div variants={item}>
              <Card className="p-4 border-pink-200 bg-gradient-to-r from-pink-50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold">W</div>
                    <span className="text-sm font-medium text-pink-900">와우 매장</span>
                  </div>
                  <span className="text-2xl font-bold text-pink-600">1,359<span className="text-sm font-normal text-pink-400 ml-0.5">만 원</span></span>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="p-4 border-pink-200 bg-gradient-to-r from-pink-50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs font-bold">ID</div>
                    <span className="text-sm font-medium text-pink-900">아이디 매장</span>
                  </div>
                  <span className="text-2xl font-bold text-pink-600">221<span className="text-sm font-normal text-pink-400 ml-0.5">만 원</span></span>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="p-4 border-pink-200 bg-gradient-to-r from-pink-50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white text-xs font-bold">T</div>
                    <span className="text-sm font-medium text-pink-900">총 합계</span>
                  </div>
                  <span className="text-2xl font-bold text-pink-600">1,580<span className="text-sm font-normal text-pink-400 ml-0.5">만 원</span></span>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px bg-pink-200" />

        {/* Right: Progress */}
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
            2월 진행사항
          </motion.h2>

          <motion.div variants={item}>
            <Card className="p-5 border-pink-200 bg-pink-50/50 mb-4">
              <h3 className="text-sm font-bold text-pink-800 mb-2">2월 생일 이벤트</h3>
              <div className="flex items-center gap-3">
                <div className="bg-pink-500 text-white rounded-xl px-4 py-2 text-center">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-[10px]">개 이벤트</div>
                </div>
                <p className="text-sm text-pink-700">주최 예정</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="p-5 border-pink-200 bg-pink-50/50">
              <h3 className="text-sm font-bold text-pink-800 mb-2">이벤트 최소 기준 설정</h3>
              <p className="text-xs text-pink-600 mb-2">매장 운영 활성화를 위해 이벤트 최소 기준 설정</p>
              <div className="bg-white rounded-lg p-3 border border-pink-200">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-pink-600">38</span>
                  <span className="text-sm text-pink-400">만 원</span>
                </div>
                <span className="text-[10px] text-pink-400">(1~2일 운영 기준)</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
