"use client";

import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import KakaoMap from "./KakaoMap";

export default function LocationGuideSection() {
  const address = "경기도 양평군 양평읍 경강로 1698";
  const kakaoMapUrl = `https://map.kakao.com/link/search/${address}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="w-full py-24 bg-white font-gowun-batang text-[#2E5C3C]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-sm font-bold tracking-widest uppercase text-[#5D7B6F]">
                LOCATION GUIDE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-marcellus text-[#2E5C3C]">
                오시는 길
              </h2>
              <p className="text-lg text-[#5D7B6F] opacity-80 leading-relaxed">
                자연과 함께하는 쉼터,<br className="md:hidden" /> 들꽃치유정원으로 오시는 길을 안내해 드립니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-3 text-xl font-medium justify-center md:justify-start">
                <MapPin className="w-6 h-6 text-[#2E5C3C]" />
                <span>{address}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href={kakaoMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#FEE500] text-black font-marcellus font-bold rounded-full hover:bg-[#FEE500]/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  카카오맵으로 보기
                </Link>
                <Link
                  href={googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border border-gray-200 font-marcellus text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  구글맵으로 보기
                </Link>
              </div>
            </div>
          </div>

          {/* Map Visual / Minimap */}
          <div className="flex-1 w-full h-[500px] border rounded-[20px] overflow-hidden shadow-2xl relative bg-[#F4F1EA] group">
             <KakaoMap />
          </div>
        </div>
      </div>
    </section>
  );
}
