import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="bg-primary text-secondary-foreground fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" onClick={handleHomeClick}>
              <img 
                src="/lovable-uploads/09e2e5ca-1223-4ed9-9cba-52ac8db02a0b.png" 
                alt="Legacy Families Logo" 
                className="h-12 w-12"
              />
            </Link>
            <h1 className="text-xl font-playfair font-bold text-secondary">The Legacy Families of West Garfield Park</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={handleHomeClick} className="text-secondary hover:text-secondary/80 transition-colors">Home</Link>
            <Link to="/committee-members" className="text-secondary hover:text-secondary/80 transition-colors">Committee Members</Link>
            <Link to="/about" className="text-secondary hover:text-secondary/80 transition-colors">About</Link>
            <button onClick={handleContactClick} className="text-secondary hover:text-secondary/80 transition-colors">Contact</button>
            <a 
              href="#join-us" 
              className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Get Involved
            </a>
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
            <Link to="/" onClick={handleHomeClick} className="block px-3 py-2 text-secondary hover:text-secondary/80">Home</Link>
            <Link to="/committee-members" className="block px-3 py-2 text-secondary hover:text-secondary/80">Committee Members</Link>
            <Link to="/about" className="block px-3 py-2 text-secondary hover:text-secondary/80">About</Link>
            <button onClick={handleContactClick} className="block w-full text-left px-3 py-2 text-secondary hover:text-secondary/80">Contact</button>
            <a 
              href="#join-us" 
              className="block px-3 py-2 text-primary bg-secondary rounded-md"
            >
              Get Involved
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};