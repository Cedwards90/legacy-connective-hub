import { Lightbulb, Heart, MessageCircle } from "lucide-react";

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
    },
    {
      title: "Clear Communication",
      description: "We stress the importance of maintaining transparent and effective communication among all stakeholders. This includes mapping out our plans, ensuring everyone is aligned with our goals, and keeping the community informed about our progress.",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Vision</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visionPillars.map((pillar) => (
            <div key={pillar.title} className="p-6 rounded-lg border border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <pillar.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary text-center">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-center">{pillar.description}</p>
              {pillar.image && (
                <div className="mt-4">
                  <img 
                    src={pillar.image} 
                    alt="Community members working together" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};