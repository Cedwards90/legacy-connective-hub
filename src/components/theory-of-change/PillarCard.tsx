import { LucideIcon } from "lucide-react";

interface PillarAction {
  text: string;
}

interface PillarCardProps {
  title: string;
  description: string;
  actions: string[];
  icon: LucideIcon;
  index: number;
}

export const PillarCard = ({ title, description, actions, icon: Icon, index }: PillarCardProps) => {
  return (
    <div 
      className="group bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
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
      <ul className="space-y-3 mt-6">
        {actions.map((action, index) => (
          <li key={index} className="flex items-center text-[#403E43] group-hover:text-[#221F26] transition-colors duration-300">
            <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></span>
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};