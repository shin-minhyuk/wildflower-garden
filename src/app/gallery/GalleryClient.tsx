"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, X, ZoomIn } from "lucide-react";

type GalleryCategory = "experience" | "field" | "garden" | "rest";

const galleryData: Record<
  GalleryCategory,
  { src: string; alt: string; caption: string }[]
> = {
  experience: [
    {
      src: "/image/gallary_2.webp",
      alt: "체험 1",
      caption: "흙을 만지며 느끼는 자연의 숨결",
    },
    {
      src: "/image/gallary_3.webp",
      alt: "체험 2",
      caption: "고사리 손으로 심는 희망",
    },
    {
      src: "/image/gallary_4.webp",
      alt: "체험 3",
      caption: "친구들과 함께하는 즐거운 시간",
    },
    {
      src: "/image/gallary_5.webp",
      alt: "체험 4",
      caption: "오감으로 배우는 생태 학습",
    },
    {
      src: "/image/gallary_6.webp",
      alt: "체험 5",
      caption: "자연 재료로 만드는 작품",
    },
    {
      src: "/image/gallary_7.webp",
      alt: "체험 6",
      caption: "웃음꽃 피어나는 체험장",
    },
  ],
  field: [
    {
      src: "/image/gallary_6.webp",
      alt: "텃밭 1",
      caption: "계절마다 달라지는 텃밭 풍경",
    },
    {
      src: "/image/gallary_5.webp",
      alt: "텃밭 2",
      caption: "직접 기른 작물의 기쁨",
    },
    {
      src: "/image/gallary_4.webp",
      alt: "텃밭 3",
      caption: "생명의 신비를 배우는 곳",
    },
    {
      src: "/image/gallary_2.webp",
      alt: "텃밭 4",
      caption: "땀방울로 일구는 결실",
    },
  ],
  garden: [
    {
      src: "/image/gallary_3.webp",
      alt: "정원 1",
      caption: "사계절 아름다운 들꽃 정원",
    },
    {
      src: "/image/gallary_2.webp",
      alt: "정원 2",
      caption: "꽃향기 가득한 산책로",
    },
    {
      src: "/image/gallary_7.webp",
      alt: "정원 3",
      caption: "자연이 그린 한 폭의 그림",
    },
    {
      src: "/image/gallary_6.webp",
      alt: "정원 4",
      caption: "바람이 머무는 곳",
    },
    {
      src: "/image/gallary_5.webp",
      alt: "정원 5",
      caption: "나비와 벌이 춤추는 화단",
    },
  ],
  rest: [
    {
      src: "/image/gallary_4.webp",
      alt: "쉼터 1",
      caption: "나무 그늘 아래 편안한 휴식",
    },
    {
      src: "/image/gallary_7.webp",
      alt: "쉼터 2",
      caption: "일상의 짐을 내려놓는 시간",
    },
    {
      src: "/image/gallary_3.webp",
      alt: "쉼터 3",
      caption: "가족과 함께하는 소풍",
    },
    {
      src: "/image/gallary_2.webp",
      alt: "쉼터 4",
      caption: "새소리 들으며 멍때리기",
    },
  ],
};

const tabLabels: Record<GalleryCategory, { label: string; sub: string }> = {
  experience: { label: "체험장", sub: "손으로 느끼고, 몸으로 배우는 자연" },
  field: { label: "텃밭", sub: "씨앗을 심고, 시간을 키우다" },
  garden: { label: "정원", sub: "그저 바라보는 것만으로도 충분한 치유" },
  rest: { label: "쉼터", sub: "아무것도 하지 않아도 되는 시간" },
};

const GalleryHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/image/gallary_6.webp"
        alt="Gallery Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-marcellus font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Gallery
        </h1>
        <p className="text-lg md:text-2xl font-gowun-batang opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          &quot;자연 속에서 웃고,
          <br className="md:hidden" /> 흙을 만지며 자라는 시간&quot;
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-80">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("experience");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = galleryData[activeTab];

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5]">
      <GalleryHero />

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#5D7B6F]/20">
        <div className="max-w-3xl mx-auto flex overflow-x-auto no-scrollbar">
          {(Object.keys(tabLabels) as GalleryCategory[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 min-w-[100px] py-5 text-center transition-colors relative group whitespace-nowrap px-4 ${
                activeTab === key
                  ? "text-[#2E5C3C]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <span className="text-lg font-bold block mb-1">
                {tabLabels[key].label}
              </span>
              {activeTab === key && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2E5C3C]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-[60vh]">
        {/* Section Description */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-2 duration-500 key={activeTab}">
          <p className="text-xl md:text-2xl font-gowun-batang font-bold text-[#5D7B6F]">
            {tabLabels[activeTab].sub}
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer group animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-gowun-batang text-lg font-bold mb-2">
                    {img.alt}
                  </p>
                  <p className="text-sm opacity-90">{img.caption}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs border border-white/50 px-3 py-1 rounded-full">
                    <ZoomIn className="w-3 h-3" /> 크게 보기
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={selectedImage}
              alt="Full View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
