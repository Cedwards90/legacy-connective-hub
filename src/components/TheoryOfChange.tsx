import { PillarCard } from "./theory-of-change/PillarCard";
import { TheoryOfChangeHeader } from "./theory-of-change/TheoryOfChangeHeader";
import { pillars } from "./theory-of-change/pillarData";

export const TheoryOfChange = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TheoryOfChangeHeader 
          title="Theory of Change"
          description="The Legacy Families' mission is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community."
        />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              actions={pillar.actions}
              icon={pillar.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};