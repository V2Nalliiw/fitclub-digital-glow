
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
                  <svg className="w-8 h-8 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
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

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        >
          <svg className="w-7 h-7 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default CTASection;
