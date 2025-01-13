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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Theory of Change</h2>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            "The Legacy Families' mission is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community."
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-cream p-6 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <pillar.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary text-center">{pillar.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.actions.map((action, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    {action}
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