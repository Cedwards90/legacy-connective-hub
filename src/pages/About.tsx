import { Navbar } from "@/components/Navbar";
import { TheoryOfChange } from "@/components/TheoryOfChange";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-8 font-playfair tracking-tight">
            About The Legacy Families
          </h1>
          <p className="text-lg text-[#221F26] leading-relaxed mb-12 max-w-3xl">
            The Legacy Families of West Garfield Park is dedicated to increasing the length and quality of lives in our community. Through our comprehensive approach, we focus on providing hope, ensuring safety, and preventing displacement while bringing valuable resources to our neighborhood.
          </p>
        </div>
        <TheoryOfChange />
      </div>
    </div>
  );
};

export default About;