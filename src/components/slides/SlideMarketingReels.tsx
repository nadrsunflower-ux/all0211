"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function SlideMarketingReels() {
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
        <span className="text-pink-400 text-[10px]">[2] 진행사항</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl font-bold text-pink-900 mb-3 flex items-center gap-2"
      >
        <span className="text-pink-500">&#9733;</span>
        덕질일기 릴스 기획 및 제작
      </motion.h2>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-[35%] flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-pink-100 shadow-lg shadow-pink-100/50 bg-gray-50">
            <Image
              src="/images/m3.jpg"
              alt="덕질일기 위츄 피규어 디퓨저 만들기"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 flex flex-col justify-center gap-4"
        >
          <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-base font-bold text-pink-800">위츄 피규어 디퓨저 만들기 편</h3>
              <Badge className="bg-pink-500 text-white text-[10px] hover:bg-pink-600">릴스</Badge>
            </div>
            <p className="text-sm text-pink-700 leading-relaxed">
              &apos;덕질일기&apos; 시리즈의 새 에피소드로, 위츄 피규어 디퓨저 만들기 과정을 담은 릴스를 기획 및 제작하였습니다.
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
            <h3 className="text-sm font-bold text-pink-800 mb-2">콘텐츠 포인트</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-pink-600 text-xs px-3 py-1.5 rounded-full border border-pink-200">
                K-POP 오타쿠 직원 J의 덕질일기
              </span>
              <span className="bg-white text-pink-600 text-xs px-3 py-1.5 rounded-full border border-pink-200">
                위츄 피규어 디퓨저
              </span>
              <span className="bg-white text-pink-600 text-xs px-3 py-1.5 rounded-full border border-pink-200">
                홍보 핑계 삼아 덕질하기
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
