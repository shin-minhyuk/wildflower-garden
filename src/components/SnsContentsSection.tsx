import Image from "next/image";
import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";

export default function SnsContentsSection() {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden font-gowun-batang">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background_1.webp"
          alt="SNS Background"
          fill
          className="object-cover blur-[2px] opacity-60"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container relative mx-auto px-4 max-w-7xl z-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm md:text-base text-white font-medium tracking-widest uppercase">
            Wildflower Garden
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-marcellus text-white">
            SNS CONTENTS
          </h2>
          <p className="text-white text-sm md:text-base">
            인스타그램에서 더 많은 사진들을 만나보세요
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          
          {/* Left Phone (phone_1) */}
          <Link
            href="https://www.instagram.com/wildflowergarden_yp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="INSTAGRAM"
            className="group relative block aspect-9/19 w-full max-w-[300px] md:max-w-[320px] overflow-hidden rounded-[40px] border-8 border-[#1f1f1f] bg-[#1f1f1f] shadow-2xl ring-1 ring-white/10"
          >
            {/* Phone Notion/Top Bar */}
            <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-black/90"></div>
            
            {/* Screen Content */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-gray-900">
               <Image
                src="/image/phone_1.webp"
                alt="Instagram Content 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

               {/* Label */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/20">
                    <Instagram className="w-5 h-5 text-white" />
                    <span className="text-xs font-bold tracking-wider text-white">INSTAGRAM</span>
                 </div>
              </div>
            </div>
          </Link>

          {/* Right Phone (phone_2) */}
          <Link
            href="https://www.instagram.com/wildflowergarden_yp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="INSTAGRAM"
            className="group relative block aspect-9/19 w-full max-w-[300px] md:max-w-[320px] overflow-hidden rounded-[40px] border-8 border-[#1f1f1f] bg-[#1f1f1f] shadow-2xl ring-1 ring-white/10"
          >
             {/* Phone Notion/Top Bar */}
            <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-black/90"></div>

            {/* Screen Content */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-white">
              <Image
                src="/image/phone_2.webp"
                alt="Instagram Content 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Label */}
               <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/20">
                     <Instagram className="w-5 h-5 text-white" />
                     <span className="text-xs font-bold tracking-wider text-white">INSTAGRAM</span>
                  </div>
               </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
