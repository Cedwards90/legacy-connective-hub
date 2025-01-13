import { Navbar } from "@/components/Navbar";
import { TheoryOfChange } from "@/components/TheoryOfChange";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative">
        <div 
          className="pt-20"
          style={{
            backgroundImage: "url('/lovable-uploads/b8fa80c3-ec59-4d2d-9a11-be8dae597136.png')",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "100%"
          }}
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-playfair tracking-tight text-center">
              About The Legacy Families
            </h1>
            <p className="text-lg text-white leading-relaxed mb-12 max-w-3xl mx-auto text-center">
              The Legacy Families of West Garfield Park is dedicated to increasing the length and quality of lives in our community. Through our comprehensive approach, we focus on providing hope, ensuring safety, and preventing displacement while bringing valuable resources to our neighborhood.
            </p>
          </div>
        </div>
        <TheoryOfChange />
      </div>
    </div>
  );
};

export default About;