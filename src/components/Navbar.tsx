import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
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

  const handleGetInvolvedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const joinSection = document.getElementById('join-us');
        if (joinSection) {
          joinSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const joinSection = document.getElementById('join-us');
      if (joinSection) {
        joinSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-primary'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" onClick={handleHomeClick} aria-label="Home">
              <img 
                src="/lovable-uploads/09e2e5ca-1223-4ed9-9cba-52ac8db02a0b.png" 
                alt="Legacy Families Logo" 
                className="h-12 w-12"
              />
            </Link>
            <h1 className="text-lg sm:text-xl font-playfair font-bold text-secondary hidden sm:block">
              The Legacy Families of West Garfield Park
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={handleHomeClick} 
              className="text-secondary hover:text-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Home
            </Link>
            <Link 
              to="/committee-members" 
              className="text-secondary hover:text-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Committee Members
            </Link>
            <Link 
              to="/about" 
              onClick={handleAboutClick} 
              className="text-secondary hover:text-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              About
            </Link>
            <button 
              onClick={handleContactClick} 
              className="text-secondary hover:text-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact
            </button>
            <button 
              onClick={handleGetInvolvedClick}
              className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Get Involved
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-secondary p-2 rounded-md hover:bg-secondary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={() => {
                handleHomeClick();
                setIsOpen(false);
              }} 
              className="block px-3 py-2 text-secondary hover:text-secondary/80 hover:bg-secondary/10 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/committee-members" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-secondary hover:text-secondary/80 hover:bg-secondary/10 rounded-md transition-colors"
            >
              Committee Members
            </Link>
            <Link 
              to="/about" 
              onClick={() => {
                handleAboutClick();
                setIsOpen(false);
              }} 
              className="block px-3 py-2 text-secondary hover:text-secondary/80 hover:bg-secondary/10 rounded-md transition-colors"
            >
              About
            </Link>
            <button 
              onClick={(e) => {
                handleContactClick(e);
                setIsOpen(false);
              }} 
              className="block w-full text-left px-3 py-2 text-secondary hover:text-secondary/80 hover:bg-secondary/10 rounded-md transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={(e) => {
                handleGetInvolvedClick(e);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-primary bg-secondary hover:bg-secondary/90 rounded-md transition-colors"
            >
              Get Involved
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};