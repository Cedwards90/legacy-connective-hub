import { Navbar } from "@/components/Navbar";
import { committeeMembers } from "@/data/committeeMembers";
import { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const CommitteeMembers = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  useEffect(() => {
    // Log when images start loading
    committeeMembers.forEach(member => {
      console.log(`Attempting to load image for ${member.name}:`, member.image);
      const img = new Image();
      img.onload = () => console.log(`Successfully loaded image for ${member.name}`);
      img.onerror = (e) => console.error(`Failed to load image for ${member.name}:`, e);
      img.src = member.image;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold text-center mb-8 text-secondary">
            Our Committee Members
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Meet the dedicated individuals who are working to preserve and enhance the West Garfield Park community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member) => (
              <Collapsible 
                key={member.name}
                open={expandedMember === member.name}
                onOpenChange={(isOpen) => setExpandedMember(isOpen ? member.name : null)}
              >
                <div className="flex flex-col gap-6">
                  <CollapsibleTrigger className="w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          console.error(`Error loading image for ${member.name}`);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-playfair font-bold text-secondary">
                      {member.name}
                    </h2>
                    <p className="text-lg font-medium text-accent">
                      {member.role}
                    </p>
                    <CollapsibleContent className="space-y-6">
                      {member.education && (
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-secondary">Education</h3>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {member.education.map((edu, index) => (
                              <li key={index} className="text-base">{edu}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-secondary">Biography</h3>
                        <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                          {member.bio}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </div>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;
