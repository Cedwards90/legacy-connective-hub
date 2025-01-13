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
      className="group bg-white p-8 rounded-2xl border border-primary/10 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
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
        <div className="p-4 rounded-full bg-cream group-hover:bg-secondary/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-black group-hover:text-secondary transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-black text-center group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-black leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};