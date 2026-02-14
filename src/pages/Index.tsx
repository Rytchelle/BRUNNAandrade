import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Footer from "@/components/landing/Footer";
import { useState, useEffect } from "react";
import { Star, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Estados do formulário de contato
  const [formData, setFormData] = useState({
    name: "",
    reason: "",
    message: ""
  });

  const whatsappNumber = "5511984873424"; // Número da Brunna

  const testimonials = [
    {
      text: "Simplesmente amei o resultado! Meu cabelo nunca esteve tão hidratado e brilhoso. Atendimento impecável!",
      author: "Ana Carolina",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "A melhor profissional da cidade! Fez exatamente o corte que eu queria e ainda me deu várias dicas de cuidados.",
      author: "Juliana Mendes",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Meu loiro ficou perfeito! Trabalho extremamente cuidadoso e produtos de alta qualidade.",
      author: "Fernanda Souza",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Ambiente aconchegante e atendimento maravilhoso. Já virei cliente fiel!",
      author: "Mariana Lima",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Progressiva ficou incrível! Durou muito mais tempo do que esperava. Super recomendo!",
      author: "Carla Santos",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Profissional excepcional! Transformou meu cabelo completamente. Estou apaixonada!",
      author: "Beatriz Costa",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCount(testimonials.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, testimonials.length]);

  // Autoplay effect
  useEffect(() => {
    if (!api || isHovered) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(intervalId);
  }, [api, isHovered]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.reason || !formData.message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n` +
      `Motivo do contato: ${formData.reason}\n\n` +
      `Mensagem: ${formData.message}`
    );
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        
        {/* Seção de Depoimentos */}
        <section id="depoimentos" className="py-16 px-5 bg-gray-50 overflow-hidden">
          <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                Depoimentos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6">
                O que minhas{" "}
                <span className="italic text-primary">clientes dizem</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                Cada cliente é especial e única. Veja o que elas falam sobre nosso trabalho.
              </p>
            </div>

            {/* Carousel de Depoimentos */}
            <div 
              className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)}
            >
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
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4 sm:pl-6 basis-[92%] sm:basis-[52%] lg:basis-[35%]">
                      <div 
                        className="group relative bg-gray-900 rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-primary/50 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 h-full transform hover:scale-[1.02] p-6 sm:p-8"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                        }}
                      >
                        {/* Estrelas */}
                        <div className="flex justify-center mb-4">
                          <div className="flex gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>

                        {/* Texto do Depoimento */}
                        <div className="text-center mb-6">
                          <p className="text-gray-200 italic leading-relaxed text-base sm:text-lg">
                            "{testimonial.text}"
                          </p>
                        </div>

                        {/* Perfil da Cliente */}
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-3 border-primary/30 shadow-lg shadow-primary/20">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-primary font-semibold text-lg">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-400 text-sm">Cliente</p>
                        </div>

                        {/* Shine Effect on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation Buttons */}
                <CarouselPrevious className="left-2 sm:left-4 md:left-6 lg:left-12 bg-white border-2 border-gray-200 hover:bg-primary hover:text-white hover:border-primary shadow-xl w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 text-gray-600" />
                <CarouselNext className="right-2 sm:right-4 md:right-6 lg:right-12 bg-white border-2 border-gray-200 hover:bg-primary hover:text-white hover:border-primary shadow-xl w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 text-gray-600" />
              </Carousel>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="flex-1 max-w-md h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 rounded-full"
                    style={{ width: count > 0 ? `${(current / count) * 100}%` : '0%' }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 min-w-[60px] text-right">
                  {current}/{count}
                </span>
              </div>

              {/* Autoplay Indicator */}
              {!isHovered && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Reprodução automática
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contato" className="py-16 px-5 bg-gray-900">
          <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                Contato
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-white mb-4 sm:mb-6">
                Vamos conversar sobre{" "}
                <span className="italic text-primary">seus cabelos</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-4">
                Entre em contato e vamos criar o visual dos seus sonhos juntas!
              </p>
            </div>

            {/* Card de Contato */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800 rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-gray-700">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Fale Comigo
                  </h3>
                  <p className="text-gray-300">
                    Preencha o formulário e envie direto para o WhatsApp
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Seu Nome *
                    </label>
                    <Input
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="h-12 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary rounded-xl"
                      required
                    />
                  </div>

                  {/* Motivo do Contato */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Motivo do Contato *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('reason', value)} required>
                      <SelectTrigger className="h-12 bg-gray-700 border-gray-600 text-white focus:border-primary focus:ring-primary rounded-xl">
                        <SelectValue placeholder="Selecione o motivo do seu contato" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="agendamento" className="text-white hover:bg-gray-600">
                          Agendamento de Serviço
                        </SelectItem>
                        <SelectItem value="orcamento" className="text-white hover:bg-gray-600">
                          Solicitar Orçamento
                        </SelectItem>
                        <SelectItem value="duvidas" className="text-white hover:bg-gray-600">
                          Tirar Dúvidas
                        </SelectItem>
                        <SelectItem value="produtos" className="text-white hover:bg-gray-600">
                          Informações sobre Produtos
                        </SelectItem>
                        <SelectItem value="outros" className="text-white hover:bg-gray-600">
                          Outros Assuntos
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Sua Mensagem *
                    </label>
                    <Textarea
                      placeholder="Conte-me mais sobre o que você precisa... Qual serviço tem interesse? Tem alguma data preferida? Seu cabelo tem alguma química?"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary rounded-xl resize-none"
                      required
                    />
                  </div>

                  {/* Botão de Envio */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 rounded-xl"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Enviar pelo WhatsApp
                  </Button>
                </form>

                {/* Informação adicional */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-400">
                    Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
