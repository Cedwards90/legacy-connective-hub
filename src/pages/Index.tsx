import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { LeadCapture } from "@/components/LeadCapture";
import { TheoryOfChange } from "@/components/TheoryOfChange";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <TheoryOfChange />
      <Programs />
      <LeadCapture />
      <Contact />
    </div>
  );
};

export default Index;