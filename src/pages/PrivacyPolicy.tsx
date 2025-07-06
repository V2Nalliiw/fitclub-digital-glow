
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, MessageSquare, Calendar, User, Lock, FileText, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = "https://wa.me/5511996270671";
  const lastUpdated = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <User className="w-6 h-6" />,
      title: "1. Coleta de Dados",
      content: [
        "O FitClub coleta apenas as informações essenciais para o funcionamento adequado de nossos serviços:",
        "• Nome completo e informações de contato (email, telefone)",
        "• Respostas a formulários de saúde e acompanhamento",
        "• Histórico de interações via WhatsApp",
        "• Dados de progresso e evolução do paciente",
        "• Informações técnicas básicas (dispositivo, IP) para suporte"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "2. Uso dos Dados",
      content: [
        "Utilizamos as informações coletadas exclusivamente para:",
        "• Comunicação personalizada via WhatsApp",
        "• Acompanhamento do progresso dos pacientes",
        "• Envio de lembretes e orientações de saúde",
        "• Geração de relatórios para profissionais de saúde",
        "• Melhoria contínua de nossos serviços",
        "• Suporte técnico quando necessário"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "3. Compartilhamento de Dados",
      content: [
        "Seus dados são tratados com máxima confidencialidade:",
        "• Não compartilhamos informações com terceiros para fins comerciais",
        "• Dados são acessíveis apenas ao profissional responsável pelo seu atendimento",
        "• Compartilhamento ocorre apenas quando exigido por lei ou ordem judicial",
        "• Utilizamos fornecedores confiáveis que seguem rigorosos padrões de segurança",
        "• Qualquer compartilhamento técnico é realizado com contratos de confidencialidade"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "4. Segurança dos Dados",
      content: [
        "Implementamos as melhores práticas de segurança:",
        "• Armazenamento seguro na plataforma Supabase com criptografia avançada",
        "• Transmissão de dados protegida por protocolos SSL/TLS",
        "• Acesso restrito apenas a pessoal autorizado",
        "• Backups regulares e seguros",
        "• Monitoramento contínuo contra ameaças",
        "• Conformidade com padrões internacionais de segurança"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "5. Direitos do Usuário",
      content: [
        "Você possui os seguintes direitos sobre seus dados:",
        "• Acesso: solicitar uma cópia de todos os seus dados",
        "• Correção: solicitar correção de informações incorretas",
        "• Exclusão: solicitar a remoção completa de seus dados",
        "• Portabilidade: solicitar transferência de dados para outro serviço",
        "• Restrição: limitar o processamento de seus dados",
        "• Oposição: opor-se ao processamento de dados específicos"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "6. Como Exercer Seus Direitos",
      content: [
        "Para exercer qualquer um de seus direitos:",
        "• Entre em contato via WhatsApp através do link oficial",
        "• Envie um email para nosso canal de suporte",
        "• Identifique-se adequadamente para proteção de seus dados",
        "• Especifique claramente qual direito deseja exercer",
        "• Aguarde nossa resposta em até 72 horas",
        "• Não cobramos taxas para o exercício de direitos básicos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitclub-light/30 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-fitclub-primary hover:text-fitclub-dark transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar ao início</span>
            </Link>
            
            <img 
              src="/lovable-uploads/fad17cd0-bacd-42a3-8286-51342779c504.png" 
              alt="FitClub Logo" 
              className="h-8 w-auto"
            />
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fitclub-primary hover:bg-fitclub-dark text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contato</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          {/* Hero section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-fitclub-primary rounded-3xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Política de <span className="text-fitclub-primary">Privacidade</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Transparência total sobre como protegemos e utilizamos suas informações pessoais 
              de acordo com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-fitclub-light px-4 py-2 rounded-xl text-fitclub-primary font-medium">
              <Calendar className="w-4 h-4" />
              <span>Última atualização: {lastUpdated}</span>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-fitclub-primary text-white p-3 rounded-2xl flex-shrink-0">
                    {section.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    
                    <div className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className={`leading-relaxed ${
                            paragraph.startsWith('•') 
                              ? 'text-gray-600 ml-4' 
                              : 'text-gray-700 font-medium'
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact section */}
          <div className={`mt-16 bg-gradient-to-r from-fitclub-primary to-fitclub-secondary rounded-3xl p-8 md:p-12 text-white text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-fitclub-secondary" />
            
            <h3 className="text-3xl font-bold mb-4">
              Dúvidas sobre Privacidade?
            </h3>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nossa equipe está sempre disponível para esclarecer qualquer questão 
              sobre o tratamento de seus dados pessoais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-fitclub-primary hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Falar no WhatsApp</span>
              </a>
              
              <div className="text-center">
                <div className="text-fitclub-secondary font-bold">Resposta em até 24h</div>
                <div className="text-white/80 text-sm">Suporte especializado em LGPD</div>
              </div>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Nota Legal:</strong> Esta Política de Privacidade está em conformidade com a 
              Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e demais regulamentações 
              aplicáveis. O FitClub se compromete a manter esta política sempre atualizada e acessível, 
              notificando os usuários sobre quaisquer alterações significativas.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/fad17cd0-bacd-42a3-8286-51342779c504.png" 
                alt="FitClub Logo" 
                className="h-6 w-auto"
              />
            </div>
            
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FitClub. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-fitclub-secondary transition-colors duration-300 text-sm"
              >
                Voltar ao início
              </Link>
              <span className="text-gray-600">•</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-fitclub-secondary transition-colors duration-300 text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
