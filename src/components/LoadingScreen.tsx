import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mostra o texto após 800ms
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 800);

    // Inicia o fade out após 3 segundos
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Completa o loading após 3.5 segundos
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/625954328_17933927025168963_6200012453283884317_n.jpeg")'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 max-w-4xl mx-auto">
        {/* Foto da Brunna */}
        <div className="animate-fade-in">
          <div className="relative">
            <img
              src="/fotosobre.jpeg"
              alt="Brunna Andrade"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-full border-4 border-primary shadow-2xl"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(224, 64, 151, 0.4))",
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
          </div>
        </div>

        {/* Texto Fluido */}
        <div className={`text-center transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Estúdio
            </span>
            <span className="block text-primary animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Brunna Andrade
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Transformando sonhos em realidade
          </p>
        </div>

        {/* Loading indicator */}
        <div className={`transition-all duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
