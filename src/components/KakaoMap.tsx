"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  // Default coordinates for "경기도 양평군 양평읍 경강로 1698"
  const latitude = 37.493976;
  const longitude = 127.487449;
  const markerTitle = "들꽃치유정원";

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // API 키 확인 (NEXT_PUBLIC_KAKAO_APP_KEY 사용)
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    if (!apiKey) {
      console.error("Kakao Maps API 키가 설정되지 않았습니다.");
      setError("API 키가 설정되지 않았습니다.");
      return;
    }

    // Kakao Maps API 로드
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;

    const onLoadError = () => {
      console.error("Kakao Maps API 로딩 실패");
      setError("지도를 불러오는데 실패했습니다.");
    };

    mapScript.onerror = onLoadError;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      try {
        window.kakao.maps.load(() => {
          if (mapRef.current) {
            // 지도 생성
            const mapOptions = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
              level: 3,
            };

            const map = new window.kakao.maps.Map(mapRef.current, mapOptions);

            // 마커 생성
            const markerPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude,
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);

            // 커스텀 오버레이 컨텐츠 생성
            const content = document.createElement("div");
            content.className =
              "relative bg-[#2b2b2b]/95 backdrop-blur-sm text-white rounded-xl shadow-2xl w-[280px] p-5 font-gowun-batang translate-y-[-10px]";
            content.style.cssText = "box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);";

            content.innerHTML = `
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-[#ee9ca7] font-bold text-lg tracking-wide">${markerTitle}</h3>
                <button id="close-overlay" class="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <p class="text-xs text-gray-300 mb-5 leading-relaxed opacity-90">경기도 양평군 양평읍 경강로 1698</p>
              <div class="flex gap-2">
                <a href="https://map.kakao.com/link/map/${markerTitle},${latitude},${longitude}" target="_blank" class="flex-1 bg-[#ee9ca7] text-white text-center py-2.5 rounded-lg text-xs font-bold hover:bg-[#ff8a9a] transition-colors shadow-md">큰지도보기</a>
                <a href="https://map.kakao.com/link/to/${markerTitle},${latitude},${longitude}" target="_blank" class="flex-1 bg-[#4a4a4a] text-white text-center py-2.5 rounded-lg text-xs font-bold hover:bg-[#5a5a5a] transition-colors shadow-md">길찾기</a>
              </div>
              <!-- Arrow -->
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2b2b2b]/95 rotate-45"></div>
            `;

            // 커스텀 오버레이 생성
            const overlay = new window.kakao.maps.CustomOverlay({
              content: content,
              map: map,
              position: marker.getPosition(),
              yAnchor: 1.3, // 마커 위쪽에 표시되도록 위치 조정
            });

            // 닫기 버튼 이벤트 연결
            const closeBtn = content.querySelector("#close-overlay");
            if (closeBtn) {
              closeBtn.addEventListener("click", () => {
                overlay.setMap(null);
              });
            }

            // 마커 클릭 시 오버레이 표시
            window.kakao.maps.event.addListener(marker, "click", function () {
              overlay.setMap(map);
            });
          }
        });
      } catch (err) {
        console.error("Kakao Maps 초기화 중 오류 발생:", err);
        setError("지도를 초기화하는데 실패했습니다.");
      }
    };

    // 스크립트 로드 완료 시 지도 초기화
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => {
      mapScript.removeEventListener("load", onLoadKakaoMap);
      if (document.head.contains(mapScript)) {
        document.head.removeChild(mapScript);
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative bg-[#F4F1EA]">
      <div ref={mapRef} className="w-full h-full z-10 relative" id="map" />
      
      {/* Error State */}
      {error && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F4F1EA] z-0 text-[#2E5C3C]">
             <span className="text-sm text-red-500 font-bold bg-white/80 p-2 rounded">{error}</span>
         </div>
      )}
    </div>
  );
}
