import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          <img 
            src="/lovable-uploads/7f10ff44-2f86-4554-91e8-b1f232007f27.png" 
            alt="Legacy Families Logo" 
            className="w-48 h-48 mx-auto mb-8 object-contain"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            The Legacy Families of West Garfield Park
          </h1>
          <p className="text-xl text-secondary/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our mission is to increase the length and quality of lives in West Garfield Park by providing hope, prioritizing safety, and preventing displacement while adding valuable resources to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-primary px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors inline-flex items-center justify-center">
              Get Involved
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-md hover:bg-secondary/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};