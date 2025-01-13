import { Home, Wallet, Heart, Activity, Compass } from "lucide-react";

export const TheoryOfChange = () => {
  const pillars = [
    {
      icon: Home,
      title: "Shelter & Housing",
      description: "Preventing displacement by assisting with housing needs, property acquisition, and estate planning to secure generational wealth and community stability.",
      actions: [
        "Locate affordable housing",
        "Assist with property purchase",
        "Estate planning support",
        "Property tax assistance"
      ]
    },
    {
      icon: Wallet,
      title: "Financial Stability",
      description: "Building financial literacy and security through education, employment assistance, and resource connection.",
      actions: [
        "Financial literacy workshops",
        "Employment assistance",
        "Credit repair guidance",
        "Investment education"
      ]
    },
    {
      icon: Heart,
      title: "Mental & Emotional Health",
      description: "Supporting mental and emotional wellbeing through professional services and community support networks.",
      actions: [
        "Mental health screenings",
        "Support groups",
        "Meditation classes",
        "Professional counseling"
      ]
    },
    {
      icon: Activity,
      title: "Physical Wellness",
      description: "Promoting physical health through accessible healthcare, nutrition, and fitness programs.",
      actions: [
        "Health screenings",
        "Nutrition programs",
        "Exercise classes",
        "Food security initiatives"
      ]
    },
    {
      icon: Compass,
      title: "Spiritual Growth",
      description: "Fostering spiritual wellbeing and community connection through mindful practices and support.",
      actions: [
        "Mindful meditation",
        "Community gatherings",
        "Spiritual guidance",
        "Wellness activities"
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6 tracking-tight">Theory of Change</h2>
          <p className="text-xl text-[#221F26] max-w-3xl mx-auto leading-relaxed">
            "The Legacy Families' mission is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community."
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className="group bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-cream group-hover:bg-secondary/10 transition-colors duration-300">
                  <pillar.icon className="w-8 h-8 text-[#1A1F2C] group-hover:text-secondary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C] text-center group-hover:text-secondary transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-[#221F26] leading-relaxed text-center">
                {pillar.description}
              </p>
              <ul className="space-y-3 mt-6">
                {pillar.actions.map((action, index) => (
                  <li key={index} className="flex items-center text-[#403E43] group-hover:text-[#221F26] transition-colors duration-300">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
