import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Building Stronger Communities,<br />One Family at a Time
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're dedicated to preserving family legacies and fostering meaningful connections within our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};