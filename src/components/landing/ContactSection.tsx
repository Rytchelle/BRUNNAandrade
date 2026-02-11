import { useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone inválido"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(500, "Mensagem muito longa"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "5511999999999"; // ALTERAR PARA O NÚMERO DA BRUNNA
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      const message = encodeURIComponent(
        `Olá! Meu nome é ${validatedData.name}.\n\nTelefone: ${validatedData.phone}\n\nMensagem: ${validatedData.message}`
      );
      
      window.open(`${whatsappLink}?text=${message}`, "_blank");
      toast.success("Redirecionando para o WhatsApp...");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Ocorreu um erro. Tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header - Mobile First */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
            Contato
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight text-gray-900 mb-4 sm:mb-6">
            Vamos conversar?{" "}
            <span className="text-primary italic">Fale comigo!</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Estou pronta para atendê-la! Entre em contato pelo WhatsApp para 
            agendar seu horário ou tirar suas dúvidas sobre os serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Cards - Mobile First */}
          <div className="lg:col-span-2 space-y-4">
            {/* WhatsApp Card */}
            <div className="group bg-green-50 rounded-2xl p-5 sm:p-6 border border-green-200 hover:border-green-300 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">(11) 99999-9999</p>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">Resposta rápida</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    asChild
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Abrir WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">(11) 99999-9999</p>
                  <p className="text-xs sm:text-sm text-gray-700">Seg a Sáb, 9h às 19h</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">Localização</h3>
                  <p className="text-sm sm:text-base text-gray-900 mb-1">Rua Exemplo, 123</p>
                  <p className="text-xs sm:text-sm text-gray-700">Centro - São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-1">Horário</h3>
                  <p className="text-sm sm:text-base text-gray-900 mb-1">Segunda a Sábado</p>
                  <p className="text-xs sm:text-sm text-gray-700">9h às 19h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile First */}
          <div className="lg:col-span-3 bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900">Envie uma mensagem</h3>
                <p className="text-xs sm:text-sm text-gray-700">Preencha e entraremos em contato</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-bold text-gray-900 mb-2 block">
                  Seu nome *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-white border-gray-200 focus:border-primary rounded-xl"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-bold text-gray-900 mb-2 block">
                  Telefone / WhatsApp *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-white border-gray-200 focus:border-primary rounded-xl"
                  maxLength={20}
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-bold text-gray-900 mb-2 block">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  placeholder="Como posso ajudar você?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  maxLength={500}
                  className="bg-white border-gray-200 focus:border-primary resize-none rounded-xl"
                />
                <p className="text-xs text-gray-700 mt-1">{formData.message.length}/500 caracteres</p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all" 
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>

              <p className="text-xs sm:text-sm text-gray-700 text-center">
                Ao enviar, você será redirecionada para o WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
