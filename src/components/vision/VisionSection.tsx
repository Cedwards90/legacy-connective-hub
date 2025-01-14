import { Lightbulb, Heart, MessageCircle } from "lucide-react";
import { VisionCard } from "./VisionCard";

export const Vision = () => {
  const visionPillars = [
    {
      title: "Build Power",
      description: "We aim to empower the Legacy Family and community members to have a direct influence on the development of our neighborhood.",
      icon: Lightbulb,
      image: "/lovable-uploads/dc2a4ac6-b8d8-4b8d-9986-afbb8613299e.png",
    },
    {
      title: "Preserve the Collaborative's Vision",
      description: "Our mission is to ensure that the Wellness Collaborative remains true to its original purpose: creating a better, resource-rich community for the people living in West Garfield Park.",
      icon: Heart,
      image: "/lovable-uploads/e3067d29-0b5f-4f8e-bfcc-1c64b5ff6be2.png",
    },
    {
      title: "Clear Communication",
      description: "We stress the importance of maintaining transparent and effective communication among all stakeholders. This includes mapping out our plans, ensuring everyone is aligned with our goals, and keeping the community informed about our progress.",
      icon: MessageCircle,
      image: "/lovable-uploads/8d6efd13-aa0b-4b12-8679-3fb761f60795.png",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 tracking-tight">
          Our Vision
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visionPillars.map((pillar, index) => (
            <VisionCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              image={pillar.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};