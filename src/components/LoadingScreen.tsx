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
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/625954328_17933927025168963_6200012453283884317_n.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 max-w-4xl mx-auto">
        {/* PNG Image */}
        <div className="animate-scale-in">
          <img
            src="/625954328_17933927025168963_6200012453283884317_n-removebg-preview.png"
            alt="Brunna Andrade"
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(224, 64, 151, 0.2))"
            }}
          />
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
