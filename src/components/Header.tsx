
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511996270671";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/fad17cd0-bacd-42a3-8286-51342779c504.png" 
                alt="FitClub Logo" 
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* WhatsApp Button */}
          <div className="flex items-center space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fitclub-primary hover:bg-fitclub-dark text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Fale Conosco</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-fitclub-primary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-2xl">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium px-4 py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium px-4 py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium px-4 py-2"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-fitclub-primary transition-colors duration-300 font-medium px-4 py-2"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
