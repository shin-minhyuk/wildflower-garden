import { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Heart, Activity, Smile, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "프로그램",
  description:
    "정말로 나리꽃, 텃밭 가꾸기 등 아이들의 정서 함양과 신체 발달을 돕는 다양한 치유 프로그램을 소개합니다.",
};

const ProgramsHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/image/gallary_4.webp"
        alt="Programs Hero Background"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-gowun-batang font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          마음과 몸이 함께 자라는 시간
        </h1>
        <p className="text-lg md:text-xl font-gowun-batang opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          &quot;자연과 교감하며 아이들의 숨겨진 힘을 깨웁니다&quot;
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-80">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

const ProgramIntroText = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-8 bg-[#FAF8F5]">
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold font-gowun-batang text-[#2E5C3C]">
          &quot;자연은 아이들을
          <br className="md:hidden" /> 단단하고 건강하게 만듭니다&quot;
        </h2>
        <div className="w-16 h-[2px] bg-[#5D7B6F] mx-auto" />
        <p className="text-gray-600 font-gowun-batang max-w-2xl mx-auto leading-relaxed">
          모든 프로그램은 아이들이 자연과 직접 교감하는 과정을 통해
          <br className="hidden md:block" />
          정서적 안정감과 신체적 건강함을 자연스럽게 키울 수 있도록
          설계되었습니다.
        </p>
      </div>
    </div>
  );
};

const ProgramCoreValues = () => {
  const values = [
    { icon: Heart, label: "정서적 공감", desc: "생명과 교감하며 배우는 배려" },
    { icon: Activity, label: "신체 활동", desc: "자연 속 건강한 움직임" },
    { icon: Smile, label: "정서적 안정", desc: "마음의 평화와 회복" },
    { icon: Sprout, label: "성장", desc: "스스로 해내는 힘" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-24 pt-8 bg-[#FAF8F5]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-gowun-batang">
        {values.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 bg-white border border-[#EBEBEB] rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f4f7f2] text-[#2E5C3C] mb-6">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#5D7B6F] mb-2">
              {item.label}
            </h3>
            <p className="text-sm text-gray-500 break-keep">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgramList = () => {
  const programs = [
    {
      title: "정말로 나리꽃",
      concept: "'있는 그대로의 나'를 받아들이는 시간",
      desc: "아이들은 나리꽃을 관찰하고 표현하며 자신의 감정과 생각을 자연스럽게 이야기합니다. 비교가 아닌 존중, 평가가 아닌 공감을 배웁니다.",
      effects: ["자존감 향상", "감정 표현", "정서적 공감"],
      image: "/image/program_2.jpg",
    },
    {
      title: "텃밭 가꾸기",
      concept: "흙을 만지고, 기다리고, 함께 키우는 경험",
      desc: "씨앗을 심고 작물이 자라는 과정을 직접 경험하며 아이들은 인내와 책임감을 몸으로 배웁니다. 자연스러운 신체 활동도 함께 이루어집니다.",
      effects: ["소근육·대근육 발달", "책임감", "성취감"],
      image: "/image/program_1.jpg",
    },
    {
      title: "식물 친구 관찰하기",
      concept: "식물을 '대상'이 아닌 '친구'로 만나는 시간",
      desc: "식물의 변화와 특징을 관찰하며 아이들은 타인의 감정과 상태를 이해하는 연습을 합니다. 차분한 집중과 공감의 시간이 흐릅니다.",
      effects: ["집중력 향상", "공감 능력", "감정 조절"],
      image: "/image/program_3.jpg",
    },
    {
      title: "반려화분 만들기",
      concept: "나만의 식물 친구를 키우는 일상 속 치유",
      desc: "아이들은 화분을 만들고 돌보며 하나의 생명과 함께하는 책임과 애정을 배웁니다. 일상 속에서도 자연과의 연결이 이어집니다.",
      effects: ["정서적 안정", "애착 형성", "자기 돌봄"],
      image: "/image/program_4.jpg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 font-gowun-batang">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {programs.map((prog, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
          >
            {/* Image Area */}
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={prog.image}
                alt={prog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{prog.title}</h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-1">
              <p className="text-sm font-bold text-[#5D7B6F] mb-4 bg-[#F4F1EA] inline-block px-3 py-1.5 rounded w-fit">
                {prog.concept}
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 flex-1 break-keep">
                {prog.desc}
              </p>

              {/* Effects Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {prog.effects.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProgramsPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF8F5]">
      <ProgramsHero />
      <ProgramIntroText />
      <ProgramList />
      <ProgramCoreValues />
    </main>
  );
}
