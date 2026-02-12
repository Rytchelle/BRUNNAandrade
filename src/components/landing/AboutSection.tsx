import { Heart, Sparkles, Users, Award } from "lucide-react";
import { useScrollAnimation, useScrollAnimationList } from "@/hooks/use-scroll-animation";

// Usando imagem do Instagram da Brunna Andrade
const aboutImage = "/fotosobre.jpeg";

const AboutSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { setElementRef, visibleItems } = useScrollAnimationList(4, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className={`inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4 transition-all duration-800 delay-200 ${
            headerVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95'
          }`}>
            Sobre Mim
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6 drop-shadow-sm transition-all duration-800 delay-300 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Paixão por beleza e{" "}
            <span className="text-primary italic">cuidado especial</span>
          </h2>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 md:space-y-12">
          {/* Image - Full Width on Mobile */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-8 scale-95'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 transition-smooth hover:shadow-2xl hover:scale-[1.02]">
              <img 
                src={aboutImage} 
                alt="Brunna Andrade - Profissional de beleza"
                className="w-full h-auto object-contain transition-smooth"
              />
              
              {/* Floating Badge */}
              <div className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-gray-200 animate-float transition-all duration-1000 delay-500 ${
                imageVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-90'
              }`}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">+8 anos</p>
                    <p className="text-xs sm:text-sm text-gray-700">de dedicação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              contentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="text-center mb-8 sm:mb-10">
              <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed drop-shadow-sm transition-all duration-800 delay-200 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                O Estúdio Brunna Andrade nasceu do sonho de criar um espaço acolhedor 
                onde cada cliente se sinta única e especial. Com anos de experiência e 
                dedicação, transformo cabelos e elevo a autoestima.
              </p>
              
              <p className={`text-base sm:text-lg text-gray-600 leading-relaxed drop-shadow-sm transition-all duration-800 delay-400 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                Trabalho com produtos de alta qualidade e técnicas atualizadas, sempre 
                buscando o melhor resultado para você. Aqui, cada atendimento é personalizado 
                e feito com muito carinho e profissionalismo.
              </p>
            </div>

            {/* Features Grid - Mobile First */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div 
                ref={setElementRef(0)}
                className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 hover:shadow-md transition-bounce group ${
                  visibleItems[0]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDuration: '800ms', transitionDelay: '100ms' }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-bounce group-hover:scale-110">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 drop-shadow-sm">Paixão</h3>
                <p className="text-sm sm:text-base text-gray-600 drop-shadow-sm">Amor em cada serviço</p>
              </div>

              <div 
                ref={setElementRef(1)}
                className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 hover:shadow-md transition-bounce group ${
                  visibleItems[1]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDuration: '800ms', transitionDelay: '200ms' }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-bounce group-hover:scale-110">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 drop-shadow-sm">Qualidade</h3>
                <p className="text-sm sm:text-base text-gray-600 drop-shadow-sm">Produtos premium</p>
              </div>

              <div 
                ref={setElementRef(2)}
                className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 hover:shadow-md transition-bounce group ${
                  visibleItems[2]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDuration: '800ms', transitionDelay: '300ms' }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-bounce group-hover:scale-110">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 drop-shadow-sm">Confiança</h3>
                <p className="text-sm sm:text-base text-gray-600 drop-shadow-sm">Clientes fiéis</p>
              </div>

              <div 
                ref={setElementRef(3)}
                className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 hover:shadow-md transition-bounce group ${
                  visibleItems[3]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDuration: '800ms', transitionDelay: '400ms' }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-bounce group-hover:scale-110">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 drop-shadow-sm">Experiência</h3>
                <p className="text-sm sm:text-base text-gray-600 drop-shadow-sm">8+ anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;