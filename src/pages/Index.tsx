import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Contact } from "@/components/Contact";
import { LeadCapture } from "@/components/LeadCapture";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <LeadCapture />
      <Contact />
    </div>
  );
};

export default Index;