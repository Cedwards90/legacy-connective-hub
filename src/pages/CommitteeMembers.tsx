import { Navbar } from "@/components/Navbar";
import { CommitteeMemberCard } from "@/components/CommitteeMemberCard";
import { committeeMembers } from "@/data/committeeMembers";
import { useEffect } from "react";

export const CommitteeMembers = () => {
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
          <div className="space-y-24">
            {committeeMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Error loading image for ${member.name}`);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-4xl font-playfair font-bold text-secondary">
                    {member.name}
                  </h2>
                  <p className="text-xl font-medium text-accent">
                    {member.role}
                  </p>
                  {member.education && (
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-secondary">Education</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {member.education.map((edu, index) => (
                          <li key={index} className="text-lg">{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-secondary">Biography</h3>
                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;