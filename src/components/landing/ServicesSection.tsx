import { useState } from "react";
import { Scissors, Paintbrush, Sparkles, Flower2, Hand, Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect } from "react";

// Imagens dos serviços
const services = [
  {
    icon: Scissors,
    title: "Cortes Femininos",
    description: "Cortes modernos e personalizados para valorizar seu estilo único. Do clássico ao ousado, encontre o corte perfeito para você.",
    price: "R$ 60",
    image: "/625650612_17933927016168963_4856427567242028863_n.jpg",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Hidratação Profunda",
    description: "Tratamentos capilares intensivos que devolvem vida, brilho e maciez aos seus cabelos. Produtos premium para resultados incríveis.",
    price: "R$ 80",
    image: "/AGUA.jpg",
    featured: true,
  },
  {
    icon: Paintbrush,
    title: "Coloração & Mechas",
    description: "Coloração completa, mechas, luzes e técnicas modernas como balayage e ombré hair para transformar seu visual.",
    price: "R$ 120",
    image: "/DASDASD.jpg",
    featured: true,
  },
  {
    icon: Crown,
    title: "Tratamentos Especiais",
    description: "Botox capilar, reconstrução e cronograma capilar personalizado. Cuidados especiais para cabelos danificados.",
    price: "R$ 100",
    image: "/DFEFEG.jpg",
    featured: true,
  },
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    description: "Cuidados completos para suas unhas com esmaltação tradicional, em gel e nail art. Suas mãos e pés merecem carinho.",
    price: "R$ 40",
    image: "/626847815_17933923086168963_5914284234108068810_n.jpg",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Umectação Capilar",
    description: "Tratamento de umectação para cabelos ressecados. Recupere a hidratação natural e o brilho dos seus fios.",
    price: "R$ 70",
    image: "/FEFFSA.jpg",
    featured: true,
  },
  {
    icon: Flower2,
    title: "Design de Sobrancelhas",
    description: "Modelagem perfeita, design com henna, micropigmentação e laminação de sobrancelhas para realçar seu olhar.",
    price: "R$ 35",
    image: "/ASD.jpg",
    featured: true,
  },
  {
    icon: Crown,
    title: "Penteados & Escova",
    description: "Penteados elegantes para festas, casamentos e eventos especiais. Escova modelada e babyliss profissional.",
    price: "R$ 50",
    image: "/625954328_17933927025168963_6200012453283884317_n.jpg",
    featured: true,
  },
];

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "5511999999999"; // ALTERAR PARA O NÚMERO DA BRUNNA
  
  const getWhatsAppLink = (serviceName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço: ${serviceName}`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay effect
  useEffect(() => {
    if (!api || isHovered) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(intervalId);
  }, [api, isHovered]);

  return (
    <section id="servicos" className="section-padding bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header - Mobile First */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6">
            Serviços completos para{" "}
            <span className="italic text-primary">realçar sua beleza</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-4">
            No Estúdio Brunna Andrade, cada atendimento é único e personalizado. 
            Trabalhamos com produtos de alta qualidade e técnicas atualizadas.
          </p>
        </div>

        {/* Modern Carousel with Autoplay */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="pl-2 sm:pl-4 basis-[85%] sm:basis-[70%] md:basis-[45%] lg:basis-[32%]">
                  <div 
                    className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-700 h-full transform hover:scale-[1.02]"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-primary shadow-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-white/20">
                        <p className="text-base font-bold text-primary">{service.price}</p>
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {service.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl py-6"
                        asChild
                      >
                        <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5" />
                          Saber Mais
                        </a>
                      </Button>
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Minimal Navigation Buttons */}
            <CarouselPrevious className="left-0 sm:-left-4 lg:-left-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-primary hover:text-white hover:border-primary shadow-xl w-12 h-12 transition-all duration-300 hover:scale-110" />
            <CarouselNext className="right-0 sm:-right-4 lg:-right-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-primary hover:text-white hover:border-primary shadow-xl w-12 h-12 transition-all duration-300 hover:scale-110" />
          </Carousel>

          {/* Modern Progress Indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === current - 1
                      ? "w-12 bg-primary shadow-lg shadow-primary/50"
                      : "w-2 bg-gray-300 hover:bg-gray-400 hover:w-4"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600 ml-2">
              {current}/{count}
            </span>
          </div>

          {/* Autoplay Indicator */}
          {!isHovered && (
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Reprodução automática
              </p>
            </div>
          )}
        </div>

        {/* CTA - Mobile First */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 px-4">
          <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6">
            Não encontrou o que procura? Entre em contato e personalizamos seu atendimento.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105" 
            asChild
          >
            <a href={getWhatsAppLink("Consulta Geral")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
