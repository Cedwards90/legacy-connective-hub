import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary-foreground fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="/lovable-uploads/7f10ff44-2f86-4554-91e8-b1f232007f27.png" 
              alt="Legacy Families Logo" 
              className="h-12 w-12"
            />
            <h1 className="text-xl font-playfair font-bold text-secondary">The Legacy Families of West Garfield Park</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-secondary hover:text-secondary/80 transition-colors">About</a>
            <a href="#programs" className="text-secondary hover:text-secondary/80 transition-colors">Programs</a>
            <a href="#contact" className="text-secondary hover:text-secondary/80 transition-colors">Contact</a>
            <button className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
              Get Involved
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-secondary hover:text-secondary/80">About</a>
            <a href="#programs" className="block px-3 py-2 text-secondary hover:text-secondary/80">Programs</a>
            <a href="#contact" className="block px-3 py-2 text-secondary hover:text-secondary/80">Contact</a>
            <button className="w-full text-left px-3 py-2 text-primary bg-secondary rounded-md">
              Get Involved
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};