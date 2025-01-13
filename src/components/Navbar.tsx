import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-playfair font-bold text-primary">Legacy Families Committee</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-gray-600 hover:text-primary transition-colors">Programs</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
              Get Involved
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">About</a>
            <a href="#programs" className="block px-3 py-2 text-gray-600 hover:text-primary">Programs</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact</a>
            <button className="w-full text-left px-3 py-2 text-white bg-secondary rounded-md">
              Get Involved
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};