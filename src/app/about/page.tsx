"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, Quote, History, Sprout, Heart, Users, Leaf } from "lucide-react";

// Components
const IntroHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/image/background_1.webp"
        alt="about Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-6xl font-marcellus font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
           자연이 주는 온전한 휴식
        </h1>
        <p className="text-lg md:text-xl font-gowun-batang opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          들꽃 체험 학습장 소개
        </p>
      </div>

       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-80">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

const PhilosophyTab = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20 font-gowun-batang animate-in fade-in duration-500">
      
      {/* Main Message */}
      <div className="text-center space-y-8">
        <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
          <Quote className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-[#2E5C3C]">
          “이름 모를 들꽃도, 잘 알려진 꽃도<br />
          모두 꽃이기에 아름답습니다.<br />
          당신은 당신 그대로 아름답습니다.”
        </h2>
        <div className="w-16 h-[1px] bg-primary/30 mx-auto" />
      </div>

      {/* Philosophy Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-gray-700 leading-loose">
           <h3 className="text-xl font-bold text-primary mb-4">들꽃치유정원 창립 철학</h3>
           <p className="text-2xl font-bold text-[#5D7B6F]">
             “자연은 스스로 치유하고,<br />
             사람은 그 안에서 회복됩니다.”
           </p>
           <p>
             들꽃치유정원은 17년 이상 축적된 생태적 경험과<br />
             수많은 식물과 함께해 온 삶의 지혜를 바탕으로,<br />
             자연과 사람이 서로를 돌보고<br />
             서로를 회복시키는 치유의 공간을 지향합니다.
           </p>
           <p className="font-bold text-[#2E5C3C]">
             이곳에서 자연은 가르치고,<br />
             사람은 느끼며,<br />
             아이들은 자라납니다.
           </p>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
           <Image
            src="/image/gallary_3.webp"
            alt="Philosophy Image"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: Heart, label: "존중", desc: "생명에 대한 존중" },
          { icon: Leaf, label: "회복", desc: "자연 속의 치유" },
          { icon: Users, label: "공존", desc: "함께하는 삶" },
          { icon: Sprout, label: "성장", desc: "아이들의 미래" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-[#FAF8F5] rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary shadow-sm mb-4">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#2E5C3C] mb-2">{item.label}</h4>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HistoryTab = () => {
    const historyData = [
        {
            year: "Start",
            title: "시작",
            desc: "강변의 정취와 들꽃의 아름다움이 함께하는 곳에서 들꽃수목원은 식물의 수집과 보존, 연구를 목적으로 시작되었습니다. 다양한 수종의 생육 환경을 관찰하고 생태적 가치를 지키며 자연의 중요성을 알리는 교육의 장이었습니다.",
            sub: "“식물의 과학적 보존소”이자 “생태 교육의 공간”",
            image: "/image/gallary_5.webp"
        },
        {
            year: "Change",
            title: "변화",
            desc: "사회가 여가와 체험을 중시하게 되면서 수목원은 단순한 관람 공간을 넘어 정원 체험, 식물 교육, 자연 학습 프로그램을 운영하기 시작했습니다. 방문객은 자연을 ‘보는 것’에서 ‘만지고, 가꾸고, 배우는 경험’으로 확장해 나갔습니다.",
            sub: "“체험하는 자연, 배우는 즐거움”",
            image: "/image/gallary_6.webp"
        },
        {
            year: "Now & Future",
            title: "현재와 미래",
            desc: "현대 사회의 스트레스와 정서적 피로가 커지며 자연을 통한 회복의 필요성도 함께 커졌습니다. 이에 따라 들꽃수목원은 치유농업 개념을 도입한 ‘들꽃치유정원’으로 진화했습니다. 이곳은 교육, 복지, 관광, 치유가 어우러진 6차 산업형 치유 공간으로 지금도 성장 중입니다.",
            sub: "“치유와 회복의 공간, 들꽃치유정원”",
             image: "/image/gallary_7.webp"
        }
    ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24 font-gowun-batang animate-in fade-in duration-500">
       <div className="space-y-16 md:space-y-24">
         {historyData.map((item, index) => (
             <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                 {/* Image */}
                 <div className="flex-1 w-full relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                    <Image
                     src={item.image}
                     alt={item.title}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
                 
                 {/* Text */}
                 <div className="flex-1 space-y-4 text-center md:text-left">
                    <span className="text-sm font-bold tracking-widest text-accent uppercase">{item.year}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2E5C3C]">{item.title}</h3>
                    <p className="text-lg font-bold text-[#5D7B6F]">{item.sub}</p>
                    <p className="text-gray-600 leading-relaxed text-justify md:text-left">
                        {item.desc}
                    </p>
                 </div>
             </div>
         ))}
       </div>
    </div>
  );
};


export default function IntroPage() {
  const [activeTab, setActiveTab] = useState<"philosophy" | "history">("philosophy");

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5]">
      <IntroHero />

      {/* Tab Navigation - Sticky */}
      <div className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#5D7B6F]/20">
         <div className="max-w-md mx-auto flex">
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`flex-1 py-4 text-lg font-bold transition-colors relative ${
                activeTab === "philosophy" ? "text-[#2E5C3C]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
                철학
                {activeTab === "philosophy" && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2E5C3C]" />
                )}
            </button>
            <button
               onClick={() => setActiveTab("history")}
               className={`flex-1 py-4 text-lg font-bold transition-colors relative ${
                 activeTab === "history" ? "text-[#2E5C3C]" : "text-gray-400 hover:text-gray-600"
               }`}
             >
                역사
                {activeTab === "history" && (
                     <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2E5C3C]" />
                 )}
             </button>
         </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[50vh]">
         {activeTab === "philosophy" ? <PhilosophyTab /> : <HistoryTab />}
      </div>
    </main>
  );
}
