import { Navbar } from "@/components/Navbar";
import { MemberGrid } from "@/components/committee/MemberGrid";
import { useEffect } from "react";

export const CommitteeMembers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-playfair font-bold text-center mb-8 text-[#1A1F2C]">
            Our Committee Members
          </h1>
          <p className="text-xl text-center text-[#221F26] mb-16 max-w-3xl mx-auto">
            Meet the dedicated individuals who are working to preserve and enhance the West Garfield Park community.
          </p>
          <MemberGrid />
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;