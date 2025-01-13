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
    <section className="py-32 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16 tracking-tight">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title} 
              className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-secondary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-cream group-hover:bg-secondary/10 transition-colors duration-300">
                  <program.icon className="w-8 h-8 text-[#1A1F2C] group-hover:text-secondary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C] text-center group-hover:text-secondary transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-[#221F26] leading-relaxed text-center">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};