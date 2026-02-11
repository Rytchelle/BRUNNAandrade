import { MessageCircle, Calendar, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Entre em Contato",
    description: "Envie uma mensagem pelo WhatsApp ou ligue para conhecer os serviços.",
  },
  {
    number: "2",
    icon: Calendar,
    title: "Agende seu Horário",
    description: "Escolha o melhor dia e horário. Flexibilidade para sua rotina.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Receba o Atendimento",
    description: "Venha ao estúdio e aproveite um atendimento personalizado.",
  },
  {
    number: "4",
    icon: Heart,
    title: "Saia Encantada",
    description: "Saia renovada e satisfeita. Você vai se sentir incrível!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header - Mobile First */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
            Como Funciona
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6">
            Simples e{" "}
            <span className="text-primary italic">prático</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Agendar um horário é fácil. Siga os passos abaixo e venha 
            viver uma experiência especial de cuidado e beleza.
          </p>
        </div>

        {/* Steps - Mobile First */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line - Desktop Only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border border-gray-200">
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm sm:text-base font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-[250px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
