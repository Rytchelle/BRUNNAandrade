import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappNumber = "5511999999999"; // ALTERAR PARA O NÚMERO DA BRUNNA
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Estúdio Brunna Andrade.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 sm:mb-8">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Heading - Mobile First */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-white mb-4 sm:mb-6">
            Pronta para uma{" "}
            <span className="italic">transformação</span>?
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende seu horário agora mesmo e venha viver uma experiência única de 
            cuidado e beleza. Estou pronta para atendê-la com todo carinho!
          </p>
          
          {/* CTA Buttons - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg py-6 sm:py-7 px-8 shadow-2xl hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-medium text-base sm:text-lg py-6 sm:py-7 px-8 transition-all"
              asChild
            >
              <a href="#contato">
                Ver Contato
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 text-white/80 text-xs sm:text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40" />
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40" />
              <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40" />
            </div>
            <span>+2000 clientes satisfeitas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
