"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "experience1", name: "체험장1" },
  { id: "experience2", name: "체험장2" },
  { id: "experience3", name: "체험장3" },
  { id: "outdoor-garden", name: "야외텃밭" },
  { id: "garden", name: "야외정원" },
  { id: "maze", name: "미로원" },
  { id: "rest-area", name: "야외쉼터" },
];

const galleryImages: Record<string, string[]> = {
  experience1: [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=3500&auto=format&fit=crop",
  ],
  experience2: [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469259943454-aa100abba749?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3540&auto=format&fit=crop",
  ],
  experience3: [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=3574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3540&auto=format&fit=crop",
  ],
  "outdoor-garden": [
    "https://images.unsplash.com/photo-1416879115533-19602a04accd?q=80&w=3500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=3432&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=3540&auto=format&fit=crop",
  ],
  garden: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=3432&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=3500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=3540&auto=format&fit=crop",
  ],
  maze: [
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=3574&auto=format&fit=crop",
  ],
  "rest-area": [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=3024&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469259943454-aa100abba749?q=80&w=3540&auto=format&fit=crop",
  ],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("experience1");

  return (
    <div className="min-h-screen pt-24 pb-32 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          갤러리
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-foreground hover:bg-secondary hover:text-primary shadow-sm"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages[activeTab].map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image}
                alt={`${tabs.find((t) => t.id === activeTab)?.name} ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
