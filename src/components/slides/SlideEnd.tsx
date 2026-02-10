"use client";

import { motion } from "framer-motion";

export default function SlideEnd() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-50 via-white to-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-16 w-24 h-24 rounded-full bg-pink-200/30"
        animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-36 h-36 rounded-full bg-pink-300/15"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[25%] right-[15%] w-14 h-14 rounded-full bg-pink-400/15"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[12%] w-20 h-20 rounded-full bg-pink-200/25"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />

      {/* Hearts */}
      {[
        { top: "12%", left: "15%", size: "text-xl", delay: 0 },
        { top: "18%", right: "20%", size: "text-2xl", delay: 0.5 },
        { bottom: "25%", left: "20%", size: "text-lg", delay: 1 },
        { bottom: "15%", right: "15%", size: "text-2xl", delay: 0.3 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute text-pink-300 ${pos.size}`}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: pos.delay, repeat: Infinity }}
        >
          &#9829;
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <motion.div
          className="text-5xl mb-5"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          &#128150;
        </motion.div>
        <h2 className="text-4xl font-bold text-pink-800 mb-3">감사합니다</h2>
        <p className="text-lg text-pink-500 font-light">Thank You</p>
        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-10 bg-pink-300" />
          <p className="text-sm text-pink-400">이벤트 & 마케팅팀</p>
          <div className="h-px w-10 bg-pink-300" />
        </div>
      </motion.div>
    </div>
  );
}
