
import { MessageSquare, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = "https://wa.me/5511996270671";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-fitclub-light via-white to-green-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fitclub-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fitclub-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-fitclub-primary to-fitclub-secondary rounded-full blur-2xl animate-rotate-3d"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Transforme a</span>
                <br />
                <span className="text-fitclub-primary bg-clip-text bg-gradient-to-r from-fitclub-primary to-fitclub-secondary">
                  saúde
                </span>
                <br />
                <span className="text-gray-900">dos seus pacientes</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Revolucione sua clínica com automação via WhatsApp, formulários inteligentes e acompanhamento personalizado de pacientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fitclub-primary hover:bg-fitclub-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 group"
              >
                <MessageSquare className="w-6 h-6 group-hover:animate-bounce" />
                <span>Quero saber mais</span>
              </a>
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-fitclub-primary text-fitclub-primary hover:bg-fitclub-primary hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span>Saiba mais</span>
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-fitclub-primary">100+</div>
                <div className="text-gray-600">Clínicas ativas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fitclub-primary">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fitclub-primary">24/7</div>
                <div className="text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gradient-to-br from-fitclub-primary to-fitclub-secondary p-1 rounded-3xl shadow-2xl">
                <div className="bg-white p-8 rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Profissional de saúde usando tecnologia"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-fitclub-secondary rounded-full flex items-center justify-center shadow-lg animate-float">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-fitclub-primary rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-fitclub-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-fitclub-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
