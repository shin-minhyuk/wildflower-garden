# 🌸 들꽃치유정원 (Wildflower Garden)

> 경기도 양평에 위치한 들꽃치유정원의 공식 웹사이트입니다.

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://wildflowergarden.co.kr)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

## 🔗 Links

- **라이브 사이트**: [https://wildflowergarden.co.kr](https://wildflowergarden.co.kr)
- **이전 사이트**: [https://www.wildflower-garden.com](https://www.wildflower-garden.com)

## 📖 프로젝트 소개

### 배경
기존 웹사이트([wildflower-garden.com](https://www.wildflower-garden.com))가 매우 단순하고 초라한 디자인이라 전면적인 리뉴얼을 진행하게 되었습니다.

새로운 웹사이트는 모던하고 세련된 디자인으로 방문자들에게 들꽃치유정원의 아름다움을 제대로 전달하고자 합니다.

### 주요 성과
- ✅ **Vercel**을 통한 배포 완료
- ✅ **가비아**에서 도메인 구매 후 리다이렉트 설정
- ✅ **SEO 최적화** 작업 완료
- ✅ **구글 검색 결과 최상단 노출** 달성 🎉

## ✨ 주요 기능

- **히어로 섹션**: 매력적인 메인 비주얼
- **힐링 프로그램 안내**: 다양한 치유 프로그램 소개
- **갤러리**: 정원의 아름다운 사진들
- **오시는 길**: 카카오맵 연동 위치 안내
- **SNS 콘텐츠**: 소셜 미디어 연동

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|------|
| **프레임워크** | Next.js 16 (App Router) |
| **언어** | TypeScript |
| **스타일링** | Tailwind CSS 4 |
| **아이콘** | Lucide React |
| **슬라이더** | Swiper |
| **지도** | Kakao Map API |
| **배포** | Vercel |
| **도메인** | 가비아 |

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── about/           # 소개 페이지
│   ├── gallery/         # 갤러리 페이지
│   ├── programs/        # 프로그램 페이지
│   ├── layout.tsx       # 루트 레이아웃 (SEO 메타데이터 포함)
│   ├── page.tsx         # 메인 페이지
│   ├── robots.ts        # robots.txt 생성
│   └── sitemap.ts       # sitemap.xml 생성
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── HeroSection.tsx
    ├── HealingProgramSection.tsx
    ├── GardenPreviewSection.tsx
    ├── SnsContentsSection.tsx
    ├── LocationGuideSection.tsx
    ├── KakaoMap.tsx
    └── ...
```

## 🔍 SEO 최적화

이 프로젝트에는 다음과 같은 SEO 최적화가 적용되어 있습니다:

- **메타데이터 최적화**: title, description, keywords
- **Open Graph 태그**: SNS 공유 최적화
- **Twitter Card**: 트위터 공유 최적화
- **Sitemap 자동 생성**: `/sitemap.xml`
- **Robots.txt 생성**: `/robots.txt`
- **JSON-LD 구조화 데이터**: LocalBusiness 스키마
- **네이버 사이트 인증**: 네이버 검색 등록

## 🚀 시작하기

### 사전 요구사항

- Node.js 18+ 
- Yarn (권장) 또는 npm

### 설치 및 실행

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 환경 변수

`.env` 파일에 카카오맵 API 키를 설정해주세요:

```env
NEXT_PUBLIC_KAKAO_MAP_API_KEY=your_kakao_map_api_key
```

## 📝 라이선스

이 프로젝트는 들꽃치유정원의 소유입니다.

---

<p align="center">
  Made with 💚 for 들꽃치유정원
</p>
