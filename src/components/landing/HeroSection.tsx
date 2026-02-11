import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const animatedImages = [
  "/625954328_17933927025168963_6200012453283884317_n-removebg-preview.png",
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 relative z-10 pt-24 sm:pt-28 md:pt-32">
        {/* Grid Layout - Lado a lado */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text Content - Esquerda */}
          <div className="col-span-2 sm:col-span-1 animate-fade-in-up">
            {/* Small Text */}
            <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-600 mb-2 sm:mb-3 tracking-wide uppercase">
              Estúdio Brunna Andrade
            </p>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Elevando a sua{" "}
              <span className="text-primary italic">autoestima</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Especializada em cabelos, unhas e estética. Transforme seu visual com profissionalismo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Button 
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-xs sm:text-sm md:text-base py-4 sm:py-5 md:py-6 shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Agendar Horário
                </a>
              </Button>
              
              <Button 
                size="sm"
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-medium text-xs sm:text-sm md:text-base py-4 sm:py-5 md:py-6 transition-all"
                asChild
              >
                <a href="#servicos">
                  Ver Serviços
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">8+</p>
                <p className="text-[10px] sm:text-xs text-gray-600">Anos</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">2k+</p>
                <p className="text-[10px] sm:text-xs text-gray-600">Clientes</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">★ 5.0</p>
                <p className="text-[10px] sm:text-xs text-gray-600">Nota</p>
              </div>
            </div>
          </div>

          {/* Image - Direita */}
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              {animatedImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="Brunna Andrade"
                  className={`w-full h-auto object-contain transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  } ${index > 0 ? 'absolute inset-0' : ''}`}
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(224, 64, 151, 0.2))"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
