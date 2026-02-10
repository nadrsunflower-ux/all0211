"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SlideMarketingPhotozone() {
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
        악센트 아이디 매장 포토존 리뉴얼
      </motion.h2>

      <div className="flex-1 flex gap-4 min-h-0">
        {/* Card 1 - 악센트 VER */}
        <div className="flex-1 min-h-0">
          <Card className="h-full border-pink-200 bg-white flex flex-col overflow-hidden">
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/acscent_ver.png"
                alt="악센트 VER 포토존"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm font-bold text-pink-800 mb-1">악센트 VER</h3>
              <div className="flex flex-wrap justify-center gap-1">
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">숲 컨셉</span>
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">둥지</span>
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">악센트 아이디 간판</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Card 2 - 봄 VER */}
        <div className="flex-1 min-h-0">
          <Card className="h-full border-pink-200 bg-white flex flex-col overflow-hidden">
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/spring_ver.png"
                alt="봄 VER 포토존"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm font-bold text-pink-800 mb-1">봄 VER</h3>
              <div className="flex flex-wrap justify-center gap-1">
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">벚꽃</span>
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">열기구</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Card 3 - 화이트 포토존 */}
        <div className="flex-1 min-h-0">
          <Card className="h-full border-pink-200 bg-white flex flex-col overflow-hidden">
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/white_ver.png"
                alt="화이트 포토존"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-sm font-bold text-pink-800 mb-1">화이트 포토존</h3>
              <div className="flex flex-wrap justify-center gap-1">
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">다양한 덕질용품</span>
                <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-0.5 rounded-full">화이트 배경</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-center"
      >
        <span className="bg-pink-500 text-white text-xs px-4 py-1.5 rounded-full font-medium">
          2월 말 설치 예정
        </span>
      </motion.div>
    </div>
  );
}
