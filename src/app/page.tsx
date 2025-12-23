import HeroSection from "@/components/HeroSection";
import HealingProgramSection from "@/components/HealingProgramSection";
import GardenPreviewSection from "@/components/GardenPreviewSection";
import SnsContentsSection from "@/components/SnsContentsSection";
import LocationGuideSection from "@/components/LocationGuideSection";
import FixedBookingButton from "@/components/FixedBookingButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />
      <HealingProgramSection />
      <GardenPreviewSection />
      <SnsContentsSection />
      <LocationGuideSection />
      <FixedBookingButton />
    </div>
  );
}
