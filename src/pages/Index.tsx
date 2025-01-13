import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Contact />
    </div>
  );
};

export default Index;