import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import DearGuestsSection from "@/components/DearGuestsSection";
import CalendarSection from "@/components/CalendarSection";
import LocationSection from "@/components/LocationSection";
import ProgramSection from "@/components/ProgramSection";
import DressCodeSection from "@/components/DressCodeSection";
import DetailsSection from "@/components/DetailsSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <HeroSection />
        <CoupleSection />
        <DearGuestsSection />
        <CalendarSection />
        <LocationSection />
        <ProgramSection />
        <DressCodeSection />
        <DetailsSection />
        <div id="rsvp-section">
          <RSVPSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
