import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/vision/VisionSection";
import { Contact } from "@/components/Contact";
import { LeadCapture } from "@/components/LeadCapture";
import { ChicagoHistory } from "@/components/ChicagoHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Vision />
      <ChicagoHistory />
      <LeadCapture />
      <Contact />
    </div>
  );
};

export default Index;