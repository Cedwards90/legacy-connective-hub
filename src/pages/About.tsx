import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div 
        className="pt-20 bg-cover bg-center min-h-[50vh]"
        style={{
          backgroundImage: "url('/lovable-uploads/b8fa80c3-ec59-4d2d-9a11-be8dae597136.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "600px"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black/60">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-playfair tracking-tight text-center">
            About The Legacy Families
          </h1>
          <p className="text-lg text-white leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            The Legacy Families of West Garfield Park is dedicated to increasing the length and quality of lives in our community. Through our comprehensive approach, we focus on providing hope, ensuring safety, and preventing displacement while bringing valuable resources to our neighborhood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;