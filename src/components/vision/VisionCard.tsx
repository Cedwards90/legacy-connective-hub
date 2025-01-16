import { LucideIcon } from "lucide-react";

interface VisionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export const VisionCard = ({ title, description, icon: Icon, image }: VisionCardProps) => {
  return (
    <div 
      className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
    >
      {image && (
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-primary group-hover:bg-secondary/5 transition-colors duration-300">
          <Icon className="w-8 h-8 text-secondary group-hover:text-accent transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-secondary text-center group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-secondary/80 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};