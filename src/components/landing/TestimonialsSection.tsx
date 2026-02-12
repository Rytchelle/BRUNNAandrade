import { Star, Quote } from "lucide-react";
import { useScrollAnimation, useScrollAnimationList } from "@/hooks/use-scroll-animation";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Maria Silva",
    service: "Progressiva + Hidratação",
    rating: 5,
    comment: "Simplesmente perfeito! A Brunna é muito profissional e o resultado ficou incrível. Meu cabelo nunca esteve tão liso e saudável.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    service: "Botox Capilar",
    rating: 5,
    comment: "Atendimento excepcional! O ambiente é acolhedor e a Brunna explica todo o processo. Super recomendo!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Carla Santos",
    service: "Cronograma Capilar",
    rating: 5,
    comment: "Melhor investimento que fiz! Meu cabelo estava muito danificado e agora está completamente recuperado. Obrigada, Brunna!",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Juliana Lima",
    service: "Coloração + Tratamento",
    rating: 5,
    comment: "Profissional incrível! A cor ficou exatamente como eu queria e o tratamento deixou meu cabelo sedoso.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Patricia Oliveira",
    service: "Escova Modelada",
    rating: 5,
    comment: "Sempre saio de lá me sentindo uma nova mulher! A Brunna tem mãos de fada, super indico!",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Fernanda Rocha",
    service: "Selagem Térmica",
    rating: 5,
    comment: "Que resultado maravilhoso! Meu cabelo ficou com um brilho incrível e muito mais fácil de pentear.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialCard = ({ testimonial, index, isVisible, slideDirection }: { 
  testimonial: typeof testimonials[0], 
  index: number, 
  isVisible: boolean,
  slideDirection: 'left' | 'right'
}) => {
  const [showStars, setShowStars] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const { displayText, isTyping } = useTypewriter({
    text: testimonial.comment,
    speed: 30,
    delay: 0,
    startTyping
  });

  useEffect(() => {
    if (isVisible) {
      // Primeiro mostra o card
      setTimeout(() => {
        // Depois mostra as estrelas
        setShowStars(true);
        // Depois inicia a digitação
        setTimeout(() => {
          setStartTyping(true);
        }, 800);
      }, 500);
    }
  }, [isVisible]);

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 sm:p-6 border-2 border-gray-700 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 scale-95 ${slideDirection === 'right' ? 'translate-x-8 translate-y-8' : '-translate-x-8 translate-y-8'}`
      }`}
      style={{ 
        transitionDelay: `${index * 0.15}s`
      }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4 h-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 text-yellow-400 fill-yellow-400 transition-all duration-300 ${
              showStars ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ transitionDelay: showStars ? `${i * 0.1}s` : '0s' }}
          />
        ))}
      </div>

      {/* Comment with Typewriter Effect */}
      <div className="mb-5 h-[100px] sm:h-[120px] flex items-start">
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic font-medium">
          "{displayText}
          {isTyping && <span className="animate-pulse">|</span>}
          "
        </p>
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t-2 border-gray-700 group-hover:border-primary/30 transition-colors duration-300">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-gray-600">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback para iniciais se a imagem não carregar
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <span class="text-sm font-bold text-white">
                      ${testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                `;
              }
            }}
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
          <p className="text-xs text-gray-400 font-medium">{testimonial.service}</p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setElementRef, visibleItems } = useScrollAnimationList(testimonials.length, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section id="depoimentos" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header - Mobile First */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className={`inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 transition-all duration-800 delay-200 ${
            headerVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95'
          }`}>
            Depoimentos
          </span>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6 transition-all duration-800 delay-300 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            O que nossas clientes{" "}
            <span className="text-primary italic">estão dizendo</span>
          </h2>
          
          <p className={`text-sm sm:text-base text-gray-700 leading-relaxed transition-all duration-800 delay-500 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            A satisfação das nossas clientes é nossa maior conquista. 
            Veja o que elas têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid - Mobile First */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} ref={setElementRef(index)}>
              <TestimonialCard 
                testimonial={testimonial} 
                index={index} 
                isVisible={visibleItems[index]}
                slideDirection={index % 2 === 0 ? 'right' : 'left'}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Quer fazer parte dessas histórias de sucesso?
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;