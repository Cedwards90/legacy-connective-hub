import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { LeadCapture } from "@/components/LeadCapture";
import { TheoryOfChange } from "@/components/TheoryOfChange";
import { ChicagoHistory } from "@/components/ChicagoHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Vision />
      <TheoryOfChange />
      <ChicagoHistory />
      <Programs />
      <LeadCapture />
      <Contact />
    </div>
  );
};

export default Index;