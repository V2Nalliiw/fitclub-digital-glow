
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, Shield } from 'lucide-react';

const Footer = () => {
  const whatsappLink = "https://wa.me/5511996270671";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fitclub-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fitclub-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/fad17cd0-bacd-42a3-8286-51342779c504.png" 
                alt="FitClub Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Revolucionando a comunicação entre profissionais de saúde e pacientes 
              através de automação inteligente via WhatsApp.
            </p>

            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fitclub-primary hover:bg-fitclub-dark text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              
              <a
                href="mailto:contato@fitclub.com.br"
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              <a
                href="tel:+5511996270671"
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-fitclub-secondary">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-fitclub-secondary transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-fitclub-secondary transition-colors duration-300"
                >
                  Sobre o FitClub
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-fitclub-secondary transition-colors duration-300"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-gray-300 hover:text-fitclub-secondary transition-colors duration-300 flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Política de Privacidade</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-fitclub-secondary">Contato</h4>
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-fitclub-secondary transition-colors duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>(11) 99627-0671</span>
              </a>
              
              <a
                href="mailto:contato@fitclub.com.br"
                className="flex items-center space-x-3 text-gray-300 hover:text-fitclub-secondary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contato@fitclub.com.br</span>
              </a>
            </div>

            <div className="bg-fitclub-primary/20 p-4 rounded-2xl">
              <p className="text-sm text-gray-300 mb-2">Suporte 24/7</p>
              <p className="text-fitclub-secondary font-semibold">Resposta em até 5 minutos</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} FitClub. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                to="/politica-de-privacidade"
                className="hover:text-fitclub-secondary transition-colors duration-300"
              >
                Privacidade
              </Link>
              <span>•</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fitclub-secondary transition-colors duration-300"
              >
                WhatsApp
              </a>
              <span>•</span>
              <span>LGPD Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
