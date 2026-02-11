import { Shield, Clock, Award, Heart, Star, Zap } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Atendimento Personalizado",
    description: "Cada cliente é única e recebe atenção especial conforme suas necessidades.",
  },
  {
    icon: Award,
    title: "Produtos Premium",
    description: "Trabalhamos apenas com marcas reconhecidas e produtos de alta qualidade.",
  },
  {
    icon: Shield,
    title: "Profissional Qualificada",
    description: "Formação técnica e constante atualização em tendências e técnicas.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Respeitamos seu tempo com agendamentos organizados e sem atrasos.",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Espaço pensado para seu conforto, com decoração moderna e climatização.",
  },
  {
    icon: Zap,
    title: "Resultados Incríveis",
    description: "Técnicas modernas para garantir resultados que superam expectativas.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header - Mobile First */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
            Diferenciais
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6">
            Por que escolher o{" "}
            <span className="text-primary italic">Estúdio Brunna Andrade</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Nosso compromisso vai além da estética. Buscamos proporcionar uma 
            experiência completa de cuidado e bem-estar.
          </p>
        </div>

        {/* Benefits Grid - Mobile First */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{benefit.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
