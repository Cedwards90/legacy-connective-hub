import { CommitteeMemberCard } from "@/components/CommitteeMemberCard";
import { committeeMembers } from "@/data/committeeMembers";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export const MemberGrid = () => {
  const [selectedMember, setSelectedMember] = useState<typeof committeeMembers[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
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
              <h2 className="text-2xl font-playfair font-bold text-[#1A1F2C]">
                {member.name}
              </h2>
              <p className="text-lg font-medium text-[#403E43]">
                {member.role}
              </p>
            </div>
          </button>
        </div>
      ))}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto bg-white shadow-xl border-l border-gray-200">
          {selectedMember && (
            <>
              <SheetHeader className="mb-6">
                <SheetTitle className="text-3xl font-playfair text-[#1A1F2C]">
                  {selectedMember.name}
                </SheetTitle>
                <SheetDescription className="text-lg font-medium text-[#403E43]">
                  {selectedMember.role}
                </SheetDescription>
              </SheetHeader>
              
              {selectedMember.education && (
                <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">Education</h3>
                  <ul className="list-disc list-inside text-[#221F26] space-y-2">
                    {selectedMember.education.map((edu, index) => (
                      <li key={index} className="text-base">{edu}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">Biography</h3>
                <p className="text-base text-[#221F26] leading-relaxed whitespace-pre-line">
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