
import { useEffect, useState } from 'react';
import { MessageSquare, Users, Shield, Bell } from 'lucide-react';

const AboutSection = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Fluxos Automatizados",
      description: "Envio automático de lembretes, formulários e acompanhamentos personalizados para cada paciente."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Integrado",
      description: "Utilize o canal mais popular do Brasil para se comunicar diretamente com seus pacientes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão Completa",
      description: "Suporte para clínicas, pacientes e administradores em uma única plataforma integrada."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dados Seguros",
      description: "Toda informação protegida com criptografia de ponta e conformidade com a LGPD."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-fitclub-light/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o <span className="text-fitclub-primary">FitClub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma plataforma revolucionária que conecta profissionais de saúde aos seus pacientes através 
            de automação inteligente e comunicação eficiente via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Transformação Digital na Saúde
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                O FitClub nasceu da necessidade de modernizar a comunicação entre profissionais de saúde 
                e pacientes, oferecendo uma solução completa que automatiza processos, melhora o engajamento 
                e otimiza resultados clínicos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-fitclub-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong className="text-fitclub-primary">Envio automatizado</strong> de dicas personalizadas e formulários de acompanhamento
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-fitclub-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong className="text-fitclub-primary">Upload fácil</strong> de eBooks, vídeos e PDFs educativos
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-fitclub-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong className="text-fitclub-primary">Relatórios detalhados</strong> do progresso e engajamento dos pacientes
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-fitclub-primary hover:bg-fitclub-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Fale com a gente</span>
            </a>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-fitclub-primary mb-4 transform hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`bg-gradient-to-r from-fitclub-primary to-fitclub-secondary rounded-3xl p-8 md:p-12 text-white ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">5000+</div>
              <div className="text-white/80">Mensagens Enviadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-white/80">Taxa de Abertura</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">40%</div>
              <div className="text-white/80">Mais Engajamento</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24h</div>
              <div className="text-white/80">Tempo de Resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
