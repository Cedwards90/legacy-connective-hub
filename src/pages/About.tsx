import { Navbar } from "@/components/Navbar";
import { TheoryOfChange } from "@/components/TheoryOfChange";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <TheoryOfChange />
      </div>
    </div>
  );
};

export default About;