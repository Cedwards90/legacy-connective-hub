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
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-primary text-center mb-12">
          Legacy Family Committee Members
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member) => (
            <CommitteeMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;