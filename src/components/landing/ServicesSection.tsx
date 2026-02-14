import { useState } from "react";
import { Scissors, Paintbrush, Sparkles, Crown, MessageCircle, Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  // PACOTES PROMOCIONAIS
  {
    icon: Crown,
    title: "Liso dos Sonhos",
    description: "Progressiva + Hidratação Profunda + Limpeza de Pontas + Finalização. Alisamento completo com tratamento intensivo.",
    price: "R$ 280",
    image: "/liso.jfif",
    featured: true,
    category: "Pacote"
  },
  {
    icon: Sparkles,
    title: "Cabelo Liso e Saudável",
    description: "Redução de Volume + Nutrição + Detox + Limpeza de Pontas. Liso com brilho e leveza natural.",
    price: "R$ 250",
    image: "/selagemcabelo.jpg",
    featured: true,
    category: "Pacote"
  },
  {
    icon: Scissors,
    title: "Retoque Inteligente",
    description: "Retoque de raiz com progressiva ou selagem + Reconstrução. Para manter o liso perfeito.",
    price: "R$ 200",
    image: "/RETOQUES.jpg",
    featured: true,
    category: "Pacote"
  },
  {
    icon: Paintbrush,
    title: "Coloração Completa",
    description: "Coloração profissional + Tratamento protetor + Finalização com escova. Cor viva e cabelos saudáveis.",
    price: "R$ 120",
    image: "/coloração2.jpg",
    featured: true,
    category: "Pacote"
  },
  {
    icon: Scissors,
    title: "Corte Bordado + Tratamento",
    description: "Elimina pontas duplas sem perder comprimento + Tratamento profundo. Cabelo renovado e saudável.",
    price: "R$ 100",
    image: "/cortebordado.jpg",
    featured: true,
    category: "Pacote"
  },
  {
    icon: Sparkles,
    title: "Cronograma Express",
    description: "4 sessões mensais: Hidratação + Nutrição + Reconstrução + Ozônio. Tratamento completo para cabelos danificados.",
    price: "R$ 250/mês",
    image: "/cronogramacapilar.jpg",
    featured: true,
    category: "Pacote"
  },
  
  // ALISAMENTOS
  {
    icon: Crown,
    title: "Progressiva Tradicional",
    description: "Alisamento profissional duradouro. Reduz volume e elimina frizz com resultado natural.",
    price: "R$ 200",
    image: "/progresiva.jpg",
    featured: true,
    category: "Alisamento"
  },
  {
    icon: Sparkles,
    title: "Selagem Térmica",
    description: "Alinhamento dos fios com selagem profunda. Brilho intenso e maciez prolongada.",
    price: "R$ 180",
    image: "/selagemcabelo.jpg",
    featured: true,
    category: "Alisamento"
  },
  {
    icon: Crown,
    title: "Definitiva",
    description: "Alisamento permanente de alta performance. Para quem busca liso impecável e duradouro.",
    price: "R$ 220",
    image: "/definitiva.jfif",
    featured: true,
    category: "Alisamento"
  },
  {
    icon: Sparkles,
    title: "Retoque de Raiz Progressiva",
    description: "Manutenção de raiz com progressiva. Mantém o liso uniforme sem agredir o comprimento.",
    price: "R$ 150",
    image: "/RETOQUES.jpg",
    featured: false,
    category: "Alisamento"
  },
  {
    icon: Sparkles,
    title: "Retoque de Raiz Selagem",
    description: "Retoque de raiz com selagem capilar. Alinhamento suave e natural da raiz.",
    price: "R$ 130",
    image: "/retiquedeselagem.jpg",
    featured: false,
    category: "Alisamento"
  },
  
  // TRATAMENTOS INTENSIVOS
  {
    icon: Sparkles,
    title: "Hidratação Power",
    description: "Hidratação profunda com máscara profissional + massagem relaxante. Para cabelos ressecados e opacos.",
    price: "R$ 120",
    image: "/Hydration Loading…_.jfif",
    featured: true,
    category: "Tratamento"
  },
  {
    icon: Sparkles,
    title: "Nutrição e Brilho",
    description: "Nutrição profunda com vapor térmico. Devolve brilho e maciez aos fios porosos.",
    price: "R$ 140",
    image: "/nutriçãoebrilho.jpg",
    featured: true,
    category: "Tratamento"
  },
  {
    icon: Crown,
    title: "Reconstrução Intensiva",
    description: "Reconstrução com queratina + selagem. Para fios danificados por química ou calor excessivo.",
    price: "R$ 160",
    image: "/reconstruçãocapilar.jpg",
    featured: true,
    category: "Tratamento"
  },
  {
    icon: Crown,
    title: "Botox Capilar",
    description: "Alinhamento suave + redução de frizz + brilho intenso. Trata profundamente sem agredir os fios.",
    price: "R$ 150",
    image: "/botox capilar.jpg",
    featured: true,
    category: "Tratamento"
  },
  {
    icon: Sparkles,
    title: "Detox Capilar",
    description: "Limpeza profunda do couro cabeludo. Remove resíduos e equilibra a oleosidade.",
    price: "R$ 120",
    image: "/tratamento.jpg",
    featured: true,
    category: "Tratamento"
  },
  {
    icon: Sparkles,
    title: "Tratamento com Ozônio",
    description: "Terapia capilar com ozônio. Potencializa a absorção de ativos e revitaliza os fios.",
    price: "R$ 150",
    image: "/Tudo sobre Umectação Capilar.jfif",
    featured: false,
    category: "Tratamento"
  },
  
  // TRATAMENTOS BÁSICOS
  {
    icon: Sparkles,
    title: "Hidratação Básica",
    description: "Hidratação essencial para manutenção. Reposição de água e nutrientes nos fios.",
    price: "R$ 70",
    image: "/AGUA.jpg",
    featured: false,
    category: "Tratamento"
  },
  {
    icon: Sparkles,
    title: "Nutrição Básica",
    description: "Nutrição com óleos essenciais. Reposição de lipídios para fios macios e brilhosos.",
    price: "R$ 80",
    image: "/nutriçõcabelo.jpg",
    featured: false,
    category: "Tratamento"
  },
  {
    icon: Crown,
    title: "Reconstrução Básica",
    description: "Reconstrução com proteínas. Fortalece a estrutura capilar e reduz quebra.",
    price: "R$ 120",
    image: "/625650612_17933927016168963_4856427567242028863_n.jpeg",
    featured: false,
    category: "Tratamento"
  },
  {
    icon: Sparkles,
    title: "Cronograma Capilar Básico",
    description: "Cronograma mensal personalizado. Hidratação + Nutrição + Reconstrução programadas.",
    price: "R$ 180/mês",
    image: "/FEFFSA.jpg",
    featured: false,
    category: "Tratamento"
  },
  
  // COLORAÇÃO
  {
    icon: Paintbrush,
    title: "Coloração com Tinta do Salão",
    description: "Aplicação de coloração profissional. Cobertura perfeita e cor vibrante.",
    price: "R$ 80",
    image: "/coloraçaõ.jpg",
    featured: false,
    category: "Coloração"
  },
  {
    icon: Paintbrush,
    title: "Coloração com Tinta da Cliente",
    description: "Aplicação profissional da sua tinta. Técnica especializada para melhor resultado.",
    price: "R$ 50",
    image: "/tintadacliente.jpg",
    featured: false,
    category: "Coloração"
  },
  {
    icon: Paintbrush,
    title: "Tonalização",
    description: "Tonalização para neutralizar tons indesejados. Matiza e realça a cor.",
    price: "R$ 80",
    image: "/tonalização.jpg",
    featured: false,
    category: "Coloração"
  },
  {
    icon: Sparkles,
    title: "Banho de Brilho",
    description: "Tratamento de brilho intenso. Revitaliza a cor e sela as cutículas.",
    price: "R$ 130",
    image: "/nutriçãoebrilho.jpg",
    featured: false,
    category: "Coloração"
  },
  
  // FINALIZAÇÕES
  {
    icon: Crown,
    title: "Escova Lisa",
    description: "Escova profissional com fios alinhados. Controla frizz e dá movimento natural.",
    price: "R$ 50",
    image: "/escovalisa.jfif",
    featured: false,
    category: "Finalização"
  },
  {
    icon: Crown,
    title: "Escova Modelada",
    description: "Escova com pontas modeladas. Acabamento elegante e leveza nos fios.",
    price: "R$ 70",
    image: "/escovamodelada.jpg",
    featured: false,
    category: "Finalização"
  },
  {
    icon: Crown,
    title: "Finalização com Prancha/Babyliss",
    description: "Finalização profissional com prancha ou babyliss. Inclui lavagem capilar.",
    price: "R$ 70",
    image: "/babyliseprancha.jpg",
    featured: false,
    category: "Finalização"
  },
];

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const whatsappNumber = "5511984873424"; // Número da Brunna
  
  const getWhatsAppLink = (serviceName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço: ${serviceName}`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // Filtrar serviços em tempo real - busca no título E descrição
  const filteredServices = searchTerm 
    ? services.filter(service => {
        const search = searchTerm.toLowerCase();
        const titleMatch = service.title.toLowerCase().includes(search);
        const descMatch = service.description.toLowerCase().includes(search);
        
        return titleMatch || descMatch;
      }).sort((a, b) => {
        const search = searchTerm.toLowerCase();
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        
        // Prioriza match no título
        if (aTitle.includes(search) && !bTitle.includes(search)) return -1;
        if (!aTitle.includes(search) && bTitle.includes(search)) return 1;
        
        return 0;
      })
    : services;

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!api) return;

    // Conta o número real de serviços filtrados
    setCount(filteredServices.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, filteredServices]);

  // Autoplay effect
  useEffect(() => {
    if (!api || isHovered) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(intervalId);
  }, [api, isHovered]);

  return (
    <section id="servicos" className="section-padding bg-gray-900 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header - Mobile First */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-white mb-4 sm:mb-6">
            Serviços completos para{" "}
            <span className="italic text-primary">cuidar dos seus cabelos</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-4">
            No Estúdio Brunna Andrade, cada atendimento é único e personalizado. 
            Trabalhamos com produtos de alta qualidade e técnicas atualizadas.
          </p>
        </div>

        {/* Barra de Pesquisa Simples */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar serviço... (ex: escova, liso, hidratação)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-12 h-14 text-base border-2 border-gray-700 focus:border-primary rounded-2xl bg-gray-800 text-white placeholder:text-gray-400 shadow-md"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {searchTerm && (
            <div className="flex items-center justify-center mt-3 px-2">
              <p className="text-sm text-gray-400">
                {filteredServices.length} serviço(s) encontrado(s)
              </p>
            </div>
          )}
        </div>

        {/* Modern Carousel with Autoplay */}
        <div 
          className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)}
        >
          {filteredServices.length > 0 ? (
            <>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  skipSnaps: false,
                }}
                className="w-full overflow-visible"
              >
            <CarouselContent className="ml-0 px-4 sm:px-6 md:px-8 lg:px-16">
              {filteredServices.map((service, index) => (
                <CarouselItem key={`${service.title}-${index}`} className="pl-4 sm:pl-6 basis-[92%] sm:basis-[52%] lg:basis-[35%]">
                  <div 
                    onClick={() => handleServiceClick(service)}
                    className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-700 h-full transform hover:scale-[1.02] cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: 'center center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-primary shadow-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white shadow-xl border-2 border-gray-100">
                        <p className="text-base font-bold text-gray-900">{service.price}</p>
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 bg-white">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-5 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-primary hover:bg-primary/80 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 rounded-xl py-7 border-2 border-primary hover:border-white ring-2 ring-primary/20 hover:ring-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service);
                        }}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Ver Detalhes
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
            
            {/* Minimal Navigation Buttons - Mais para o canto */}
            <CarouselPrevious className="left-2 sm:left-4 md:left-6 lg:left-12 bg-gray-800 border-2 border-gray-700 hover:bg-primary hover:text-white hover:border-primary shadow-xl w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 text-white" />
            <CarouselNext className="right-2 sm:right-4 md:right-6 lg:right-12 bg-gray-800 border-2 border-gray-700 hover:bg-primary hover:text-white hover:border-primary shadow-xl w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 text-white" />
          </Carousel>

          {/* Modern Progress Indicator - Barra de Progresso */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex-1 max-w-md h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300 rounded-full"
                style={{ width: count > 0 ? `${(current / count) * 100}%` : '0%' }}
              />
            </div>
            <span className="text-sm font-medium text-gray-300 min-w-[60px] text-right">
              {current}/{count}
            </span>
          </div>

          {/* Autoplay Indicator */}
          {!isHovered && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Reprodução automática
              </p>
            </div>
          )}
            </>
          ) : (
            /* Mensagem quando não encontra resultados */
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-700">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3 leading-tight">
                  Serviço não encontrado
                </h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Procurando um serviço específico? Entre em contato e receba seu atendimento personalizado!
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  asChild
                >
                  <a href={getWhatsAppLink("Consulta Personalizada")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Modal de Detalhes do Serviço */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto p-0 gap-0">
            {selectedService && (
              <div className="relative">
                {/* Botão Fechar Customizado */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Imagem do Serviço */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                          <selectedService.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                            {selectedService.title}
                          </h2>
                          <p className="text-white/90 text-sm drop-shadow">
                            {selectedService.category}
                          </p>
                        </div>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                        <p className="text-xl font-bold text-primary">{selectedService.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-6">
                  {/* Descrição */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Sobre este serviço</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Informações Importantes - Collapsible */}
                  <Collapsible open={isInfoOpen} onOpenChange={setIsInfoOpen} className="mb-6">
                    <CollapsibleTrigger asChild>
                      <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-primary" />
                          <span className="font-bold text-gray-900">Informações Importantes</span>
                        </div>
                        {isInfoOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>Produtos profissionais de alta qualidade</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>Atendimento personalizado e exclusivo</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>Duração e valor podem variar conforme o comprimento e estado do cabelo</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>Agende com antecedência para garantir seu horário</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>Consulta prévia gratuita via WhatsApp</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Botão de Agendar - Maior e Mais Bonito */}
                  <Button 
                    size="lg"
                    className="w-full h-16 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 rounded-xl"
                    asChild
                  >
                    <a href={getWhatsAppLink(selectedService.title)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-6 h-6 mr-3" />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA - Mobile First */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 px-4">
          <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6">
            Não encontrou o que procura? Entre em contato e personalizamos seu atendimento.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105" 
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
