
import { useEffect, useState } from 'react';
import { FileText, Upload, BarChart, Calendar, Shield, Users, Bell } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

    const element = document.getElementById('features');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automação de Formulários",
      description: "Crie e envie formulários personalizados automaticamente, coletando informações importantes dos pacientes de forma eficiente.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Mensagens Diárias",
      description: "Envio automatizado de lembretes, dicas de saúde e motivação personalizada para manter seus pacientes engajados.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload de Conteúdo",
      description: "Compartilhe facilmente eBooks, vídeos educativos e PDFs diretamente via WhatsApp com seus pacientes.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Relatórios Detalhados",
      description: "Acompanhe o progresso dos pacientes com relatórios completos sobre engajamento e resultados obtidos.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado de lembretes de consultas e reagendamentos via WhatsApp.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Máxima",
      description: "Todos os dados protegidos com criptografia de ponta e total conformidade com a LGPD.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão de Equipe",
      description: "Gerencie múltiples profissionais e administradores em uma única plataforma integrada.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      ),
      title: "WhatsApp Business",
      description: "Integração completa with WhatsApp Business API para comunicação profissional e confiável.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-fitclub-light/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-fitclub-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fitclub-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Funcionalidades <span className="text-fitclub-primary">Poderosas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra todas as ferramentas que o FitClub oferece para revolucionar 
            o atendimento e acompanhamento dos seus pacientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 cursor-pointer ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              } ${activeFeature === index ? 'ring-2 ring-fitclub-primary ring-offset-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveFeature(index)}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-fitclub-primary transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-fitclub-primary hover:text-fitclub-dark font-semibold transition-colors duration-300 group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Fale com a gente</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </a>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-fitclub-primary/5 to-fitclub-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Featured showcase */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${features[activeFeature].color} rounded-2xl flex items-center justify-center text-white`}>
                  {features[activeFeature].icon}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">
                  {features[activeFeature].title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeFeature === index ? 'bg-fitclub-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-fitclub-primary hover:bg-fitclub-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                  <span>Experimentar agora</span>
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className={`${features[activeFeature].bgColor} p-8 md:p-12 flex items-center justify-center`}>
              <div className="relative">
                <div className="w-64 h-64 bg-white rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className={`w-32 h-32 bg-gradient-to-r ${features[activeFeature].color} rounded-2xl flex items-center justify-center text-white text-6xl`}>
                    {features[activeFeature].icon}
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-fitclub-secondary rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-fitclub-primary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
