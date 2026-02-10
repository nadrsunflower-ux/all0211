"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideMarketingSite() {
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
        악센트 아이디 온라인 사이트 기획
      </motion.h2>

      <div className="flex gap-8 flex-1 min-h-0">
        {/* Left: Site screenshot */}
        <div className="w-[38%] flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-pink-100 shadow-lg shadow-pink-100/50 bg-gray-50">
            <Image
              src="/images/m1.jpg"
              alt="악센트 아이디 온라인 사이트"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Description */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 flex flex-col justify-center gap-4"
        >
          <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
            <h3 className="text-sm font-bold text-pink-800 mb-2">UI/UX 기획</h3>
            <p className="text-sm text-pink-700 leading-relaxed">
              개발팀과 함께 악센트 아이디 온라인 사이트의 UI와 UX를 기획하고 있습니다.
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100">
            <h3 className="text-sm font-bold text-pink-800 mb-2">피드백 안내</h3>
            <p className="text-sm text-pink-700 leading-relaxed">
              피드백이 있으신 경우
            </p>
            <div className="mt-2 bg-white rounded-lg p-3 border border-pink-200">
              <p className="text-xs text-pink-600 font-mono">
                NEANDER &gt; 개발팀 &gt; 악센트 아이디 온라인 사이트
              </p>
            </div>
            <p className="text-xs text-pink-500 mt-2">
              양식에 맞춰 업로드 부탁드립니다
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
