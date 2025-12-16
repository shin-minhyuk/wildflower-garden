"use client";

import Image from "next/image";
import Link from "next/link";

export default function HealingProgramSection() {
  return (
    <section className="relative w-full py-10 bg-background overflow-hidden">
      {/* Container for the split concept */}
      <div className="relative min-h-[800px] md:min-h-[700px] gap-44 md:gap-1 flex flex-col md:flex-row items-stretch w-full overflow-visible">
        
        {/* Left Card - Healing Program 1 */}
        <div className="flex-1 relative group overflow-hidden shadow-2xl md:-translate-y-2 md:[clip-path:polygon(0_0,100%_0,95%_100%,0%_100%)]">
          <div className="absolute inset-0">
            <Image
              src="/image/gallary_2.avif"
              alt="Forest Healing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center p-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 font-gowun-batang">산림 치유</h3>
            <p className="text-lg opacity-90 mb-2 font-gowun-batang">피톤치드 가득한 숲속 명상</p>
            <p className="text-accent text-3xl font-marcellus mb-8">Forest Healing</p>
            
            <Link 
              href="/program/forest"
              className="px-8 py-3 rounded-full border border-white/80 hover:bg-white hover:text-black transition-all duration-300 font-gowun-batang text-sm tracking-widest"
            >
              자세히 보기
            </Link>
          </div>
        </div>

        {/* Right Card - Healing Program 2 */}
        <div className="flex-1 relative group overflow-hidden shadow-2xl md:translate-y-2 md:[clip-path:polygon(5%_0,100%_0,100%_100%,0%_100%)]">
          <div className="absolute inset-0">
            <Image
              src="/image/gallary_3.avif"
              alt="Tea Therapy"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center p-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 font-gowun-batang">다도 치유</h3>
            <p className="text-lg opacity-90 mb-2 font-gowun-batang">향긋한 꽃차와 함께하는 시간</p>
            <p className="text-accent text-3xl font-marcellus mb-8">Tea Therapy</p>
            
            <Link 
              href="/program/tea"
              className="px-8 py-3 rounded-full border border-white/80 hover:bg-white hover:text-black transition-all duration-300 font-gowun-batang text-sm tracking-widest"
            >
              자세히 보기
            </Link>
          </div>
        </div>

        {/* Center Circle Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-56 h-56 md:w-80 md:h-80 bg-white/95 backdrop-blur-sm rounded-full shadow-[0_0_30px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center text-center p-6 border-4 border-double border-primary/20">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground font-gowun-batang mb-2 md:mb-4 tracking-tight">
              치.유.정.원
            </h2>
            <div className="w-12 h-1 bg-primary/30 mb-2 md:mb-4" />
            <p className="text-gray-600 font-gowun-batang leading-relaxed text-xs md:text-base">
              오직 들꽃치유정원에서만<br/>
              느낄 수 있는<br/>
              자연의 숨결
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
