import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/54e2169e-c661-47bb-96e2-524a2923a054.png')",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="relative mb-12">
            <img 
              src="/lovable-uploads/09e2e5ca-1223-4ed9-9cba-52ac8db02a0b.png" 
              alt="Legacy Families Logo" 
              className="w-72 h-72 md:w-96 md:h-96 mx-auto object-contain mix-blend-screen animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-[#1A1F2C] mb-6 tracking-tight animate-fade-up">
            The Legacy Families of
            <span className="block mt-2 bg-gradient-to-r from-[#1A1F2C] via-[#403E43] to-accent bg-clip-text text-transparent">
              West Garfield Park
            </span>
          </h1>
          <p className="text-xl text-[#221F26] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
            Our mission is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <a 
              href="#join-us" 
              className="group bg-[#1A1F2C] text-white px-8 py-4 rounded-md hover:bg-[#403E43] transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
            >
              Get Involved
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>
            <button className="group border-2 border-[#1A1F2C] text-[#1A1F2C] px-8 py-4 rounded-md hover:bg-[#1A1F2C]/10 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};