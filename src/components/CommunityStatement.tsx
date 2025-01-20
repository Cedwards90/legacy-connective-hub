import { ScrollArea } from "@/components/ui/scroll-area";

export const CommunityStatement = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-8 tracking-tight">
          The Catalyst for Change
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 animate-fade-up">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Our Call to Action</h3>
              <p className="text-[#221F26] leading-relaxed">
                The stark reality that West Garfield Park residents have lifespans 13 years shorter than those living in the Loop, just miles away, became the driving force behind the formation of the Legacy Families Committee. This devastating life expectancy gap, rooted in decades of disinvestment, institutional racism, and historical inequities, creates chronic stress that literally shortens the lives of our community members.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Our Response: The Sankofa Wellness Village</h3>
              <p className="text-[#221F26] leading-relaxed">
                The Legacy Families Committee, working alongside the Garfield Park Rite to Wellness Collaborative, envisioned the Sankofa Wellness Village as our answer to a profound question: "What would we do if we were granted 13 more years of life?" This vision has evolved into a series of interconnected projects along the Madison-Pulaski commercial corridor, designed to create safe, community-owned spaces that honor our cultural heritage while building pathways to wellness and prosperity.
              </p>
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Our Vision in Action</h3>
                <ul className="list-disc list-inside space-y-3 text-[#221F26]">
                  <li><span className="font-semibold">Sankofa Village Wellness Center (SVWC)</span> - A 60,000 sq foot facility where our legacy families can access health, recreation, and wealth building programs</li>
                  <li><span className="font-semibold">The MAAFA Center for Arts and Activism (The MAC)</span> - Nurturing our next generation through residential leadership, workforce development, and cultural arts</li>
                  <li><span className="font-semibold">The K Entrepreneurship Development Hub</span> - Supporting our community's entrepreneurs and business leaders</li>
                  <li><span className="font-semibold">Community Grocer Initiative</span> - Ensuring our families have access to healthy, nutritious food</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Our Coalition Partners</h3>
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
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Our Commitment to Legacy</h3>
                <p className="text-[#221F26] leading-relaxed">
                  Through this $50M investment in our community, we are committed to:
                </p>
                <ul className="list-disc list-inside space-y-3 mt-4 text-[#221F26]">
                  <li>Improving health and well-being for over 17,000 residents through culturally-informed wellness services</li>
                  <li>Creating economic opportunities that keep legacy families in our community</li>
                  <li>Building community wealth through land and building ownership</li>
                  <li>Reinvesting profits back into West Garfield Park enterprises</li>
                  <li>Strengthening our community's self-determination and collective power</li>
                  <li>Preserving our cultural heritage while building a healthier future</li>
                </ul>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};