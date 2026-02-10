"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function SlideMarketingPromo() {
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
        홍보 기획 &amp; 진행
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
              src="/images/m2.jpg"
              alt="최애 향기를 찾아라 이벤트"
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
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-base font-bold text-pink-800">
                &apos;최애 향기를 찾아라&apos; 이벤트
              </h3>
              <Badge className="bg-pink-500 text-white text-[10px] hover:bg-pink-600">진행 중</Badge>
            </div>
            <p className="text-sm text-pink-700 leading-relaxed mb-3">
              인스타그램, X(트위터)에서 동시 진행 중인 이벤트입니다.
            </p>
            <div className="flex gap-3">
              <div className="bg-white rounded-xl px-4 py-3 border border-pink-200 text-center flex-1">
                <p className="text-xs text-pink-400 mb-0.5">인스타그램</p>
                <p className="text-xl font-bold text-pink-600">6<span className="text-xs font-normal ml-0.5">명</span></p>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 border border-pink-200 text-center flex-1">
                <p className="text-xs text-pink-400 mb-0.5">X (트위터)</p>
                <p className="text-xl font-bold text-pink-600">4<span className="text-xs font-normal ml-0.5">명</span></p>
              </div>
            </div>
            <p className="text-[10px] text-pink-400 mt-2">* 2월 10일 기준 참여 현황</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
