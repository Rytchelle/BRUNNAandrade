import { Phone, Clock, MapPin, Star, ArrowRight, CheckCircle, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorksSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  const whatsappNumber = "5511984873424";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Estúdio Brunna Andrade.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full" />
      </div>

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-800 delay-200 ${
            headerVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95'
          }`}>
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Agende Agora
            </span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-6 transition-all duration-800 delay-300 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Seu horário em{" "}
            <span className="text-primary relative">
              3 passos simples
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full" />
            </span>
          </h2>
          
          <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-800 delay-500 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Rápido, fácil e sem complicação. Agende seu momento de cuidado e beleza.
          </p>
        </div>

        {/* Main Content */}
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Step 1 */}
            <div className={`text-center group transition-all duration-800 delay-100 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Envie uma Mensagem</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Clique no botão do WhatsApp e conte o que você precisa. Respondo rapidinho!
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                <Phone className="w-4 h-4" />
                Resposta em minutos
              </div>
            </div>

            {/* Step 2 */}
            <div className={`text-center group transition-all duration-800 delay-300 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Escolha o Horário</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vamos encontrar o melhor dia e horário que funciona para você.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                <Clock className="w-4 h-4" />
                Flexibilidade total
              </div>
            </div>

            {/* Step 3 */}
            <div className={`text-center group transition-all duration-800 delay-500 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Venha se Cuidar</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chegue no estúdio e aproveite seu momento especial de cuidado e beleza.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                <CheckCircle className="w-4 h-4" />
                Resultado garantido
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl transition-all duration-800 delay-700 ${
            contentVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pronta para se sentir incrível?
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Não perca tempo! Agende agora mesmo e garante seu horário.
              </p>
              
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">Localização</p>
                    <p className="text-xs text-gray-300">Itaquera, São Paulo</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">Atendimento</p>
                    <p className="text-xs text-gray-300">Somente com hora marcada</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-10 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-6 h-6 group-hover:animate-bounce" />
                  Agendar pelo WhatsApp
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
