"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProgramSection() {
  const programs = [
    {
      id: 1,
      title: "숲 치유 명상",
      description: "피톤치드 가득한 편백나무 숲에서 진행되는 깊은 호흡과 명상으로 스트레스를 해소하세요.",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2525&auto=format&fit=crop",
      tags: ["스트레스 해소", "명상", "90분"]
    },
    {
      id: 2,
      title: "들꽃 차(Tea) 테라피",
      description: "계절마다 피어나는 들꽃을 직접 채취하여 차를 만들고 시음하는 오감 만족 프로그램입니다.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2521&auto=format&fit=crop",
      tags: ["다도", "체험", "60분"]
    },
    {
      id: 3,
      title: "아로마 향기 치유",
      description: "허브 정원에서 자란 천연 아로마 오일을 활용하여 나만의 향수를 만들고 힐링하는 시간.",
      image: "https://images.unsplash.com/photo-1608555855762-2b657eb1c348?q=80&w=2670&auto=format&fit=crop",
      tags: ["조향", "아로마", "120분"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">치유 프로그램</h2>
          <p className="text-gray-600 leading-relaxed">
            자연과 교감하며 몸과 마음의 균형을 되찾는 특별한 치유 프로그램을 경험해보세요.
            전문가와 함께하는 체계적인 프로그램이 준비되어 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-primary text-xs font-medium rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {program.description}
                </p>
                <Link 
                  href={`/programs/${program.id}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Link
                href="/programs"
                className="inline-block px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
                전체 프로그램 보기
            </Link>
        </div>
      </div>
    </section>
  );
}
