import { ArrowRight } from "lucide-react";
import { VisionCard } from "./VisionCard";

export const Vision = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-cream" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">Our Vision for Change</h2>
          <p className="text-xl text-[#221F26] max-w-3xl mx-auto leading-relaxed">
            We envision a West Garfield Park where every resident thrives, supported by strong community bonds and equitable resources.
          </p>
        </div>

        <div className="mb-20 max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary/10">
          <p className="text-lg text-[#221F26] leading-relaxed mb-6 animate-fade-up">
            Chicago's deep-seated segregation persists, echoing injustices from 62 years ago. Community action, driven by voices in decision-making, is crucial for change.
          </p>
          <p className="text-lg text-[#221F26] leading-relaxed mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Organizing locally in West Garfield Park, without waiting for government or policy shifts, empowers residents to create impact. Unity and engagement, fueled by connection and shared purpose, are key to sustaining efforts and fostering growth.
          </p>
          <div className="flex justify-center">
            <a 
              href="#join-us"
              className="group inline-flex items-center text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              Join our movement
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <VisionCard title="Empowerment" description="Fostering community leadership and engagement." />
          <VisionCard title="Equity" description="Ensuring fair access to resources and opportunities." />
          <VisionCard title="Unity" description="Building strong connections among residents." />
          <VisionCard title="Sustainability" description="Creating lasting change through collective action." />
          <VisionCard title="Advocacy" description="Championing the voices of our community." />
          <VisionCard title="Education" description="Providing knowledge and skills for empowerment." />
        </div>
      </div>
    </section>
  );
};
