"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideTitle from "@/components/slides/SlideTitle";
import SlideEventSection from "@/components/slides/SlideEventSection";
import SlideEventMonthly from "@/components/slides/SlideEventMonthly";
import SlideEventJanuary from "@/components/slides/SlideEventJanuary";
import SlideEventKPI from "@/components/slides/SlideEventKPI";
import SlideMarketingSection from "@/components/slides/SlideMarketingSection";
import SlideMarketingMonthly from "@/components/slides/SlideMarketingMonthly";
import SlideMarketingSite from "@/components/slides/SlideMarketingSite";
import SlideMarketingPromo from "@/components/slides/SlideMarketingPromo";
import SlideMarketingReels from "@/components/slides/SlideMarketingReels";
import SlideMarketingInfluencer from "@/components/slides/SlideMarketingInfluencer";
import SlideMarketingPhotozone from "@/components/slides/SlideMarketingPhotozone";
import SlideMarketingKPI1 from "@/components/slides/SlideMarketingKPI1";
import SlideMarketingKPI2 from "@/components/slides/SlideMarketingKPI2";
import SlideMarketingKPI3 from "@/components/slides/SlideMarketingKPI3";
import SlideMarketingKPI4 from "@/components/slides/SlideMarketingKPI4";
import SlideEnd from "@/components/slides/SlideEnd";

const slides = [
  SlideTitle,
  SlideEventSection,
  SlideEventMonthly,
  SlideEventJanuary,
  SlideEventKPI,
  SlideMarketingSection,
  SlideMarketingMonthly,
  SlideMarketingSite,
  SlideMarketingPromo,
  SlideMarketingReels,
  SlideMarketingInfluencer,
  SlideMarketingPhotozone,
  SlideMarketingKPI1,
  SlideMarketingKPI2,
  SlideMarketingKPI3,
  SlideMarketingKPI4,
  SlideEnd,
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const CurrentSlide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-screen h-screen bg-[#fff5f9] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-7 h-7 rounded-full bg-pink-400/80 text-white flex items-center justify-center hover:bg-pink-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs"
          >
            &#9664;
          </button>

          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-pink-500 w-5"
                    : "bg-pink-300/50 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="w-7 h-7 rounded-full bg-pink-400/80 text-white flex items-center justify-center hover:bg-pink-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs"
          >
            &#9654;
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute top-3 right-4 text-pink-400 text-xs font-medium z-50">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
