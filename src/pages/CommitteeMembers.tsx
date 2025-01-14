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
          
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative">
              {/* Decorative border using site's color scheme */}
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-secondary via-accent to-secondary opacity-20 rounded-2xl blur-sm"></div>
              
              {/* Image container with border */}
              <div className="relative rounded-xl overflow-hidden border-4 border-accent/20 shadow-xl">
                <img
                  src="/lovable-uploads/307440c7-195c-4389-aba2-1cb0e3f64c09.png"
                  alt="Legacy Families Committee Event"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Caption */}
              <p className="text-center mt-4 text-gray-600 italic">
                The Legacy Families Committee serving our community through outreach and engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;