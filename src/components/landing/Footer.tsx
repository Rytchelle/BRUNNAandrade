import { Heart, Instagram, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer - Mobile First */}
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-14 md:py-16">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Estúdio <span className="text-primary italic">Brunna Andrade</span>
              </span>
            </a>
            <p className="text-sm sm:text-base text-white/70 max-w-md mb-6 leading-relaxed">
              Especializada em tratamentos capilares. Transformando cabelos e 
              elevando autoestima com profissionalismo e dedicação há mais de 8 anos.
            </p>
            
            {/* Social Links - Mobile Optimized */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/studiobrunnasandradeh?igsh=OWRkNTc5ejcycGUz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm sm:text-base text-white/70">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span>(11) 98487-3424</span>
                  <a 
                    href="https://wa.me/5511984873424?text=Olá! Gostaria de agendar um horário no Estúdio Brunna Andrade."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    Clique para enviar WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-white/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Rua Waldemar Mancini, 67<br />Itaquera - São Paulo, SP<br />CEP: 08295-290</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-white/70">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Somente com hora marcada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Mobile First */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-white/50">
              © {currentYear} Estúdio Brunna Andrade. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5">
              <p className="text-xs sm:text-sm text-white/50 flex items-center gap-1.5">
                Desenvolvido com <Heart className="w-4 h-4 text-primary fill-primary" /> por
              </p>
              <a 
                href="https://www.instagram.com/vytrini.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-green-500 hover:text-green-400 transition-colors font-semibold flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                Vytrini Digital
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
