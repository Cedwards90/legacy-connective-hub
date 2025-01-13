import { Navbar } from "@/components/Navbar";
import { committeeMembers } from "@/data/committeeMembers";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export const CommitteeMembers = () => {
  const [selectedMember, setSelectedMember] = useState<typeof committeeMembers[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold text-center mb-8 text-secondary">
            Our Committee Members
          </h1>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Meet the dedicated individuals who are working to preserve and enhance the West Garfield Park community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member) => (
              <div key={member.name} className="flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setSelectedMember(member);
                    setIsOpen(true);
                  }}
                  className="w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02] bg-white rounded-xl shadow-md p-4"
                >
                  <div className="relative aspect-[4/5] w-full max-w-[300px] mx-auto overflow-hidden rounded-2xl">
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
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-playfair font-bold text-secondary">
                      {member.name}
                    </h2>
                    <p className="text-lg font-medium text-accent">
                      {member.role}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto bg-white shadow-xl border-l border-gray-200">
          {selectedMember && (
            <>
              <SheetHeader className="mb-6">
                <SheetTitle className="text-3xl font-playfair text-secondary">
                  {selectedMember.name}
                </SheetTitle>
                <SheetDescription className="text-lg font-medium text-accent">
                  {selectedMember.role}
                </SheetDescription>
              </SheetHeader>
              
              {selectedMember.education && (
                <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Education</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {selectedMember.education.map((edu, index) => (
                      <li key={index} className="text-base">{edu}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-secondary mb-3">Biography</h3>
                <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedMember.bio}
                </p>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CommitteeMembers;