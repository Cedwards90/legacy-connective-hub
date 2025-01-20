import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/vision/VisionSection";
import { Contact } from "@/components/Contact";
import { LeadCapture } from "@/components/LeadCapture";
import { ChicagoHistory } from "@/components/ChicagoHistory";
import { CommunityStatement } from "@/components/CommunityStatement";
import { VideoSection } from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-cream to-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <CommunityStatement />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <Vision />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/10 to-transparent pointer-events-none" />
        <ChicagoHistory />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <LeadCapture />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/10 to-transparent pointer-events-none" />
        <Contact />
      </div>
    </div>
  );
};

export default Index;