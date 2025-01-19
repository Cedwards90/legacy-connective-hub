import { ScrollArea } from "@/components/ui/scroll-area";

export const CommunityStatement = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-8 tracking-tight">
          Our Foundation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 animate-fade-up">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Executive Summary</h3>
              <p className="text-[#221F26] leading-relaxed">
                We are just miles from downtown Chicago, but West Garfield Park residents have lifespans that are typically 13 years shorter than people who live in the Loop. We know that this life expectancy gap is driven by disinvestment, institutional racism and historical inequities that result in chronic stress and shortens our lives.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">The Sankofa Wellness Village</h3>
              <p className="text-[#221F26] leading-relaxed">
                The Sankofa Wellness Village is a series of interconnected capital projects and social enterprises along the Madison-Pulaski commercial corridor that will create safe, comfortable, community informed and owned, culturally empowering services that provide residents with access to trusted spaces and services aimed to improve community well-being, wealth and, over time, elevate life expectancy.
              </p>
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Key Projects</h3>
                <ul className="list-disc list-inside space-y-3 text-[#221F26]">
                  <li><span className="font-semibold">Sankofa Village Wellness Center (SVWC)</span> - A 60,000 sq foot facility housing health, recreation, and wealth building programs</li>
                  <li><span className="font-semibold">The MAAFA Center for Arts and Activism (The MAC)</span> - A residential leadership and workforce development program and arts center</li>
                  <li><span className="font-semibold">The K Entrepreneurship Development Hub</span> - A business incubator and accelerator</li>
                  <li><span className="font-semibold">Community Grocer Initiative</span> - A community-led effort to bring new grocers and healthy food</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Partner Organizations</h3>
                <ul className="list-disc list-inside space-y-2 text-[#221F26]">
                  <li>The Community Builders Inc</li>
                  <li>Erie Family Health Centers</li>
                  <li>The GPRWC</li>
                  <li>The Leaders Network</li>
                  <li>The MAAFA Redemption Project</li>
                  <li>New Mount Pilgrim Church</li>
                  <li>Nation Builders</li>
                  <li>Project Forward</li>
                  <li>Rush University Medical Center</li>
                  <li>West Side United</li>
                  <li>YMCA of Metro Chicago</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Expected Impact</h3>
                <p className="text-[#221F26] leading-relaxed">
                  This nearly $50M investment in the community with these interconnected capital and social investments will:
                </p>
                <ul className="list-disc list-inside space-y-3 mt-4 text-[#221F26]">
                  <li>Improve health and well-being for West Garfield Park's over 17,000 residents</li>
                  <li>Stimulate greater investments and economic development</li>
                  <li>Enhance community engagement and wealth building opportunities</li>
                  <li>Improve community wealth equity through land and building ownership</li>
                  <li>Re-invest profits from annual operating income in West Garfield Park enterprises</li>
                  <li>Increase self and collective efficacy throughout the entire community</li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};