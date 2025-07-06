
import { useEffect, useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = "https://wa.me/5511996270671";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Implementação em 24 horas",
    "Suporte técnico completo",
    "Treinamento personalizado",
    "Sem compromisso de permanência"
  ];

  return (
    <>
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fitclub-primary via-fitclub-dark to-fitclub-primary">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fitclub-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full animate-rotate-3d"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center text-white ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Main headline */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Pronto para
                <br />
                <span className="text-fitclub-secondary bg-clip-text bg-gradient-to-r from-fitclub-secondary to-yellow-300">
                  revolucionar
                </span>
                <br />
                sua clínica?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Transforme a experiência dos seus pacientes e otimize seus resultados 
                com a automação mais avançada do mercado da saúde.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-fitclub-secondary flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-fitclub-primary hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-4"
                >
                  <MessageSquare className="w-8 h-8 group-hover:animate-bounce" />
                  <span>Começar Agora</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                <div className="text-center">
                  <div className="text-fitclub-secondary font-bold text-lg">WhatsApp direto</div>
                  <div className="text-white/80">Resposta em até 5 minutos</div>
                </div>
              </div>

              {/* Social proof */}
              <div className="pt-12 border-t border-white/20">
                <p className="text-white/80 mb-6">Mais de 100 profissionais já confiam no FitClub</p>
                
                <div className="flex justify-center items-center space-x-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fitclub-secondary">98%</div>
                    <div className="text-white/80 text-sm">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fitclub-secondary">40%</div>
                    <div className="text-white/80 text-sm">+ Engajamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fitclub-secondary">24h</div>
                    <div className="text-white/80 text-sm">Implementação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fitclub-secondary">24/7</div>
                    <div className="text-white/80 text-sm">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button - moved outside the section */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        >
          <MessageSquare className="w-7 h-7 group-hover:animate-pulse" />
        </a>
      </div>
    </>
  );
};

export default CTASection;
