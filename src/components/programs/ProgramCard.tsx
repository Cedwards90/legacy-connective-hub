import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ProgramCard = ({ title, description, icon: Icon }: ProgramCardProps) => {
  return (
    <div 
      className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-secondary/10"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-cream group-hover:bg-secondary/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-[#1A1F2C] group-hover:text-secondary transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C] text-center group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#221F26] leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};