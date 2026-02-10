"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const rankingData = [
  { rank: 1, name: "밍직임", views: 21.8, date: "12/21" },
  { rank: 2, name: "정구루", views: 20.7, date: "01/10" },
  { rank: 3, name: "앙글", views: 6.9, date: "01/26" },
  { rank: 4, name: "염묭", views: 5.3, date: "01/25" },
  { rank: 5, name: "무이치로외길인생", views: 5.0, date: "01/01" },
  { rank: 6, name: "오앤블", views: 4.7, date: "01/18" },
  { rank: 7, name: "공루아", views: 4.6, date: "02/08" },
  { rank: 8, name: "하부작", views: 3.4, date: "12/23" },
  { rank: 9, name: "제이뿌", views: 2.5, date: "01/19" },
  { rank: 10, name: "떠디터", views: 2.1, date: "01/31" },
  { rank: 11, name: "트렌드하이", views: 2.0, date: "01/26" },
];

const maxViews = Math.max(...rankingData.map((d) => d.views));

const recentData = [
  { name: "트렌드하이", followers: "5,015", views: "2만", date: "1/26" },
  { name: "쏘sso", followers: "308", views: "2,116", date: "1/30" },
  { name: "떠디터", followers: "1.8만", views: "2.1만", date: "1/31" },
  { name: "공루아", followers: "1,025", views: "4.6만", date: "2/8" },
  { name: "제로콕", followers: "1,347", views: "2,615", date: "2/5" },
];

export default function SlideMarketingInfluencer() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
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
        <span className="bg-pink-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
          마케팅팀
        </span>
        <span className="text-pink-400 text-xs">[2] 진행사항</span>
      </motion.div>

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Left: 인플루언서 협업 + 바이럴 순위 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-[42%] flex flex-col min-h-0"
        >
          <motion.h2
            variants={item}
            className="text-xl font-bold text-pink-900 mb-2 flex items-center gap-2"
          >
            <span className="text-pink-500">&#9733;</span>
            인플루언서 협업
          </motion.h2>

          <motion.div variants={item}>
            <Card className="p-3 border-pink-200 bg-pink-50/50 mb-2">
              <h3 className="text-base font-bold text-pink-800 mb-1.5">메시지 체계화</h3>
              <div className="flex flex-wrap gap-1">
                {["뿌리는덕질 디퓨저용", "뿌리는덕질 향수용", "일반 향수용", "온라인 향수용", "온라인 디퓨저용"].map((t) => (
                  <span key={t} className="bg-white text-pink-600 text-xs px-2 py-0.5 rounded-full border border-pink-200">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-pink-500 mt-1.5">
                각 분류별로 지정 양식을 체계화하여 다양한 인플루언서들에게 송부 예정
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="p-3 border-pink-200 bg-pink-50/50 mb-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-pink-800">업로드 완료</span>
                <span className="text-3xl font-bold text-pink-600">29<span className="text-base font-normal text-pink-400 ml-0.5">건</span></span>
              </div>
            </Card>
          </motion.div>

          {/* 바이럴 순위 TOP 10 */}
          <motion.h3
            variants={item}
            className="text-base font-bold text-pink-900 mb-1 flex items-center gap-1.5 mt-1"
          >
            <span className="text-pink-500 text-sm">&#9733;</span>
            바이럴 순위 TOP 10
          </motion.h3>

          <div className="flex-1 flex flex-col gap-[2px] min-h-0 overflow-hidden">
            {rankingData.map((d) => (
              <motion.div
                key={d.rank}
                variants={item}
                className="flex items-center gap-1.5"
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    d.rank <= 3
                      ? "bg-pink-500 text-white"
                      : "bg-pink-100 text-pink-600"
                  }`}
                >
                  {d.rank}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-pink-900 truncate">
                      {d.name}
                    </span>
                    <span className="text-xs font-bold text-pink-600 shrink-0 ml-1">
                      {d.views}만
                    </span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-1.5">
                    <motion.div
                      className={`h-full rounded-full ${
                        d.rank <= 3
                          ? "bg-gradient-to-r from-pink-500 to-pink-400"
                          : "bg-pink-300"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(d.views / maxViews) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.3 + d.rank * 0.04 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px bg-pink-200" />

        {/* Right: 인플루언서 데이터 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col min-h-0"
        >
          <motion.h2
            variants={item}
            className="text-xl font-bold text-pink-900 mb-2 flex items-center gap-2"
          >
            <span className="text-pink-500">&#9733;</span>
            인플루언서 데이터
          </motion.h2>

          <motion.div variants={item}>
            <Card className="p-3 border-pink-200 bg-pink-50/50 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-pink-800">최근 2주간 업로드된 협업</span>
                <span className="text-3xl font-bold text-pink-600">5<span className="text-base font-normal text-pink-400 ml-0.5">건</span></span>
              </div>
            </Card>
          </motion.div>

          <div className="flex-1 flex flex-col gap-2 min-h-0 overflow-hidden">
            {recentData.map((d) => (
              <motion.div key={d.name} variants={item}>
                <Card className="p-3 border-pink-200 bg-white hover:bg-pink-50/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {d.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-bold text-pink-900">{d.name}</p>
                        <p className="text-xs text-pink-400">팔로워 {d.followers}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-bold text-pink-600">조회수 {d.views}</p>
                      <p className="text-xs text-pink-400">{d.date} 업로드</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
