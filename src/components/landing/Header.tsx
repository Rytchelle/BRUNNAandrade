import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu quando clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  const whatsappNumber = "5511984873424"; // Número da Brunna
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Estúdio Brunna Andrade.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={handleLinkClick}>
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Estúdio <span className="text-primary italic">Brunna Andrade</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="default" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-3 border-t border-gray-200 bg-white shadow-xl animate-fade-in rounded-b-2xl">
            <div className="flex flex-col space-y-1 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-all px-4 py-3.5 rounded-xl active:scale-95"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Separador */}
              <div className="h-px bg-gray-200 my-2 mx-2"></div>
              
              {/* Botão Agendar */}
              <div className="px-2 pt-2 pb-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg" 
                  size="lg"
                  asChild
                >
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    <Phone className="w-4 h-4" />
                    Agendar Horário
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
