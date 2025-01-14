import { Navbar } from "@/components/Navbar";
import { TheoryOfChange } from "@/components/TheoryOfChange";

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
          <p className="text-lg text-white leading-relaxed mb-6 max-w-3xl mx-auto text-center">
            The Legacy Families of West Garfield Park is dedicated to increasing the length and quality of lives in our community. Through our comprehensive approach, we focus on providing hope, ensuring safety, and preventing displacement while bringing valuable resources to our neighborhood.
          </p>
          <p className="text-lg text-white leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            Our Theory of Change is actively demonstrated through our daily work in the community. From providing shelter and housing assistance to supporting mental health initiatives, each pillar of our approach is carefully implemented to create lasting positive change. Through financial literacy programs, wellness activities, and spiritual growth opportunities, we're building a stronger, more resilient West Garfield Park that honors both our heritage and our future.
          </p>
        </div>
        <TheoryOfChange />
        
        {/* Turkey Giveaway Images Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Community in Action: Turkey Giveaway Event</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/6861696e-582a-48fc-bab2-245cc63e17bb.png" 
                alt="Legacy Family Committee members distributing items at the turkey giveaway"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center">Legacy Family members organizing and distributing items at the community turkey giveaway event</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/d3434a79-b907-410a-9273-f0b71cd68b72.png" 
                alt="Community members receiving items at the turkey giveaway"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center">Community members participating in the turkey giveaway, demonstrating our commitment to food security initiatives</p>
            </div>
          </div>
          <p className="text-lg text-center mt-8 max-w-3xl mx-auto text-gray-700">
            Our turkey giveaway event is just one example of how we put our Theory of Change into action, addressing food security while building community connections and supporting our neighbors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;