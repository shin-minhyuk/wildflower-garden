"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function GardenPreviewSection() {
  const images = [
    "/image/gallary_2.webp",
    "/image/gallary_3.webp",
    "/image/gallary_4.webp",
    "/image/gallary_5.webp",
    "/image/gallary_6.webp",
    "/image/gallary_7.webp",
  ];

  return (
    <section className="w-full py-20 bg-background overflow-hidden font-gowun-batang">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row items-baseline mb-12 gap-4">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {/* Diamond Icon */}
            <div className="w-3 h-3 bg-accent rotate-45" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent uppercase tracking-wider font-marcellus">
              Garden Preview
            </h2>
          </div>
          
          {/* Horizontal Line */}
          <div className="h-px bg-gray-300 grow w-full md:w-auto" />
          
          {/* Subtitle */}
          <div className="whitespace-nowrap text-gray-500 text-sm md:text-base">
            고객의 마음도 치유하는, 들꽃 치유 정원
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 40,
              },
            }}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="w-auto! h-full overflow-hidden shadow-md group">
                <div className="relative h-full">
                  <Image
                    src={src}
                    alt={`Garden Preview ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-auto h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
