import { Heart, Sparkles, Users, Award } from "lucide-react";

// Usando imagem do Instagram da Brunna Andrade
const aboutImage = "/625954328_17933927025168963_6200012453283884317_n.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Sobre Mim
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6">
              Paixão por beleza e{" "}
              <span className="text-primary italic">cuidado especial</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              O Estúdio Brunna Andrade nasceu do sonho de criar um espaço acolhedor 
              onde cada cliente se sinta única e especial. Com anos de experiência e 
              dedicação, transformo cabelos e elevo a autoestima.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Trabalho com produtos de alta qualidade e técnicas atualizadas, sempre 
              buscando o melhor resultado para você. Aqui, cada atendimento é personalizado 
              e feito com muito carinho e profissionalismo.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col p-5 rounded-xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Paixão</h3>
                <p className="text-sm text-gray-700">Amor em cada serviço</p>
              </div>

              <div className="flex flex-col p-5 rounded-xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Qualidade</h3>
                <p className="text-sm text-gray-700">Produtos premium</p>
              </div>

              <div className="flex flex-col p-5 rounded-xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Confiança</h3>
                <p className="text-sm text-gray-700">Clientes fiéis</p>
              </div>

              <div className="flex flex-col p-5 rounded-xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Experiência</h3>
                <p className="text-sm text-gray-700">8+ anos</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={aboutImage} 
                  alt="Brunna Andrade - Profissional de beleza"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">+8 anos</p>
                    <p className="text-sm text-gray-700">de dedicação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
