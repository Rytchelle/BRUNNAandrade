import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const animatedImages = [
  "/ddsdsd.png",
  "/download.png"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % animatedImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Estúdio Brunna Andrade.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/625954328_17933927025168963_6200012453283884317_n.jpeg")'
        }}
      >
        {/* Dark Overlay for better text contrast - mais escuro que no loading */}
        <div className="absolute inset-0 bg-gray-900/80" />
        
        {/* Div gradiente que fica atrás do background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-gray-900 via-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 relative z-10 pt-24 sm:pt-28 md:pt-32">
        {/* Text Content - Centralizado */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Small Text */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-3 sm:mb-4 tracking-wide uppercase">
            Estúdio Brunna Andrade
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8 sm:mb-12 md:mb-16">
            Elevando a sua{" "}
            <span className="text-primary italic">autoestima</span>
          </h1>

          {/* PNG Image - ENTRE o título e a descrição */}
          <div className="mb-0 animate-fade-in relative z-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative inline-block">
              {animatedImages.map((img, index) => (
                <div key={img} className={`${index > 0 ? 'absolute inset-0' : ''}`}>
                  <img
                    src={img}
                    alt="Brunna Andrade"
                    className={`w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(224, 64, 151, 0.4))"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Div de apoio - por cima do PNG, completamente escura no início */}
          <div className="w-full h-40 sm:h-48 md:h-56 -mt-2 rounded-t-[3rem] shadow-2xl bg-gradient-to-b from-gray-900 via-gray-900 via-gray-900/80 to-transparent relative z-10">
          </div>

          {/* Content dentro da div escura */}
          <div className="px-6 sm:px-8 md:px-12 pb-8 sm:pb-10 md:pb-12 -mt-32 sm:-mt-36 md:-mt-40 relative z-20">
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto text-center pt-4 sm:pt-6 md:pt-8">
              Especializada em cabelos, unhas e estética. Transforme seu visual com profissionalismo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 md:mb-16">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold text-base sm:text-lg py-6 sm:py-7 px-8 sm:px-10 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Agendar Horário
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/70 font-medium text-base sm:text-lg py-6 sm:py-7 px-8 sm:px-10 transition-all hover:scale-105"
                asChild
              >
                <a href="#servicos">
                  Ver Serviços
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 pt-6 sm:pt-8 border-t border-white/20 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">8+</p>
                <p className="text-xs sm:text-sm text-white/80">Anos</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">2k+</p>
                <p className="text-xs sm:text-sm text-white/80">Clientes</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">★ 5.0</p>
                <p className="text-xs sm:text-sm text-white/80">Nota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
