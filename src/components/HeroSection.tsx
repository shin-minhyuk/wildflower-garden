"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  /* New Nav Items matching Header */
  const navItems = [
    { name: "소개", href: "/intro", external: false },
    { name: "갤러리", href: "/gallery", external: false },
    { name: "프로그램 보기", href: "/#programs", external: false },
    { name: "예약하기", href: "/reservation", external: false },
    { name: "인스타그램", href: "https://www.instagram.com/wildflowergarden_yp", external: true },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
         <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2664&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/5502663/5502663-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails or blocked */}
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2664&auto=format&fit=crop" 
            alt="Wildflower Garden" 
            className="object-cover w-full h-full"
          />
        </video>
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent z-0" />
      </div>

      {/* Embedded Navigation (Hero Nav) */}
      <div className="hidden md:flex relative z-10 w-full pt-16 flex-col items-center animate-in fade-in slide-in-from-top-5 duration-1000">
        <Link href="/" className="mb-8 hover:opacity-90 transition-opacity">
          <Image 
            src="/image/garden_logo4.webp" 
            alt="Wildflower Garden Logo" 
            width={256} 
            height={155} 
            priority
            className="w-auto h-auto" // Maintain aspect ratio
          />
        </Link>
        <nav className="flex items-center space-x-10 font-gowun-batang">
           {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative group flex items-center text-xl px-2 py-2 font-bold text-white/90 transition-colors duration-300"
            >
              <span className="relative z-10">{item.name}</span>
              {/* Hover Glow/Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#ee9ca7]"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Center Content */}
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 px-5 text-white z-10">
        <p className="text-2xl font-semibold tracking-wide opacity-90 font-marcellus">The Beauty in Nature</p>
        <div className="relative w-[538px] h-[20px]">
             <Image
              alt="line"
              src="/image/line.webp"
              fill
              className="object-contain"
              priority
             />
        </div>
        <p className="text-xl font-semibold tracking-widest opacity-90 font-gowun-batang">
             자연이 주는 온전한 휴식
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <div className="flex flex-col items-center gap-2">
           <span className="text-xs text-white/70 tracking-widest uppercase">Scroll</span>
           <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
