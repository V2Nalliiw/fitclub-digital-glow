
import { Link } from 'react-router-dom';
import { Mail, Phone, Shield } from 'lucide-react';

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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </a>
              
              <a
                href="mailto:contato@fitclub.app.br"
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                <span>(11) 99627-0671</span>
              </a>
              
              <a
                href="mailto:contato@fitclub.app.br"
                className="flex items-center space-x-3 text-gray-300 hover:text-fitclub-secondary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contato@fitclub.app.br</span>
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
