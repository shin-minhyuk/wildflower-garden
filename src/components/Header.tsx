"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "갤러리", href: "/gallery", icon: <ImageIcon className="w-4 h-4 mr-1" /> },
    { name: "인스타그램", href: "https://www.instagram.com/wildflowergarden_yp", icon: <Instagram className="w-4 h-4 mr-1" />, external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 font-gowun-batang z-50 transition-all duration-500 transform ${
        isScrolled || isMobileMenuOpen
          ? "translate-y-0 bg-black/30 backdrop-blur-md shadow-sm py-4"
          : "-translate-y-full py-5 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? "text-primary" : "text-primary"
          }`}
        >
          <Image src="/image/garden_logo5.png" alt="logo" width={200} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-white hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              {item.icon}
              <span className="ml-1.5">{item.name}</span>
            </Link>
          ))}
          <Link 
             href="/reservation"
             className="px-5 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            예약하기
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center p-3 text-gray-700 hover:bg-secondary/50 hover:text-primary rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-3 font-medium">{item.name}</span>
              </Link>
            ))}
             <Link
                href="/reservation"
                className="flex items-center justify-center p-3 mt-2 text-white bg-primary rounded-lg font-medium shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                예약하기
              </Link>
          </div>
        </div>
      )}
    </header>
  );
}
