import { Users, Heart, BookOpen } from "lucide-react";
import { ProgramCard } from "./ProgramCard";

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
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};