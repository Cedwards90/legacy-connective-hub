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
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/09e2e5ca-1223-4ed9-9cba-52ac8db02a0b.png" 
              alt="Legacy Families Logo" 
              className="w-96 h-96 mx-auto mb-8 object-contain mix-blend-screen animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-secondary mb-6 tracking-tight">
            The Legacy Families of
            <span className="block mt-2">West Garfield Park</span>
          </h1>
          <p className="text-xl text-secondary/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Our mission is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-secondary text-primary px-8 py-4 rounded-md hover:bg-secondary/90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105">
              Get Involved
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </button>
            <button className="group border-2 border-secondary text-secondary px-8 py-4 rounded-md hover:bg-secondary/10 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};