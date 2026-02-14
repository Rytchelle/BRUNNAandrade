import { Phone, ArrowRight, Sparkles, Clock, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  const whatsappNumber = "5511984873424";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Estúdio Brunna Andrade.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={elementRef}
      className="section-padding bg-gray-900 relative overflow-hidden"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rotate-45" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-primary/50 rotate-12" />
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-primary/30 -rotate-12" />
          <div className="absolute bottom-10 right-10 w-28 h-28 border-2 border-primary/40 rotate-45" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Agende Agora
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-white mb-6">
              Transforme seu{" "}
              <span className="text-primary italic">visual hoje</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Não espere mais para cuidar de você! Agende seu horário e venha viver 
              uma experiência única de beleza e bem-estar.
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Horário</p>
                  <p className="text-xs text-gray-400">Somente com hora marcada</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Localização</p>
                  <p className="text-xs text-gray-400">Itaquera, São Paulo</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Agendar pelo WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Side - Visual Card */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    Estúdio Brunna Andrade
                  </h3>
                  <p className="text-gray-400">Elevando sua autoestima</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 rounded-xl bg-gray-700/50">
                    <p className="text-2xl font-bold text-primary">5+</p>
                    <p className="text-xs text-gray-400">Anos</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-700/50">
                    <p className="text-2xl font-bold text-primary">1K+</p>
                    <p className="text-xs text-gray-400">Clientes</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-700/50">
                    <p className="text-2xl font-bold text-primary">28</p>
                    <p className="text-xs text-gray-400">Serviços</p>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="text-center">
                  <div className="flex justify-center items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    "Profissional incrível! Sempre saio de lá me sentindo renovada."
                  </p>
                  
                  {/* Instagram Link */}
                  <a 
                    href="https://www.instagram.com/studiobrunnasandradeh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    <Instagram className="w-4 h-4" />
                    @studiobrunnasandradeh
                  </a>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
