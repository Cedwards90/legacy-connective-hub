import { Users, Heart, BookOpen } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      title: "Family Mentorship",
      description: "Connect with experienced families who can guide and support you through various life stages.",
      icon: Users,
    },
    {
      title: "Community Outreach",
      description: "Regular events and activities that bring families together and strengthen community bonds.",
      icon: Heart,
    },
    {
      title: "Legacy Education",
      description: "Learn about preserving family history, traditions, and values for future generations.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow border border-secondary/20">
              <program.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};