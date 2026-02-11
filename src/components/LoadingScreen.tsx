import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background Image - Same as HeroSection */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/625954328_17933927025168963_6200012453283884317_n.jpg")'
        }}
      >
        {/* Light Overlay for Loading */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 max-w-4xl mx-auto">
        {/* PNG Image with Natural Cut */}
        <div className="animate-scale-in">
          <div className="relative">
            <img
              src="/625954328_17933927025168963_6200012453283884317_n-removebg-preview.png"
              alt="Brunna Andrade"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(224, 64, 151, 0.3))",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 85%)" // Corte natural na cintura
              }}
            />
          </div>
        </div>

        {/* Typing Text */}
        <div className="text-center">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 ${!typingComplete ? 'animate-typing inline-block' : ''}`}>
            Eleve sua autoestima
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
