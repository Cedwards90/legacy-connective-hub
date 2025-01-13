import { ArrowRight } from "lucide-react";

export const TheoryOfChange = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 tracking-tight">
          Theory of Change
        </h2>
        <div className="grid md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
            <p className="text-gray-600">Active participation and input from West Garfield Park residents</p>
          </div>
          <ArrowRight className="hidden md:block mx-auto text-primary" size={32} />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Resource Development</h3>
            <p className="text-gray-600">Creating and securing resources that benefit the community</p>
          </div>
          <ArrowRight className="hidden md:block mx-auto text-primary" size={32} />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Sustainable Growth</h3>
            <p className="text-gray-600">Long-term community development and prosperity</p>
          </div>
          <ArrowRight className="hidden md:block mx-auto text-primary" size={32} />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Thriving Community</h3>
            <p className="text-gray-600">A stronger, more resilient West Garfield Park</p>
          </div>
        </div>
      </div>
    </section>
  );
};