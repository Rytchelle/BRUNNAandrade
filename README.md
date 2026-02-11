# 💇‍♀️ Estúdio Brunna Andrade

Site profissional para o Estúdio Brunna Andrade - Especializado em cabelos, unhas e estética.

## ✨ Sobre o Projeto

Site moderno e responsivo desenvolvido para apresentar os serviços do Estúdio Brunna Andrade, com foco em:
- Design elegante e profissional
- Experiência mobile-first
- Integração com WhatsApp para agendamentos
- Otimizado para compartilhamento no Instagram

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilização moderna
- **Shadcn/ui** - Componentes de UI
- **React Router** - Navegação
- **Lucide React** - Ícones

## 📱 Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Seção Hero com imagens do Instagram
- ✅ Catálogo completo de serviços
- ✅ Seção Sobre personalizada
- ✅ Formulário de contato integrado com WhatsApp
- ✅ Página especial para Instagram (`instagram.html`)
- ✅ Animações suaves e modernas
- ✅ SEO otimizado

## 🎨 Paleta de Cores

- **Primary**: Rosa/Roxo elegante (#8B4789)
- **Accent**: Champagne/Dourado
- **Background**: Tons neutros claros
- **Gradientes**: Suaves e sofisticados

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📝 Configurações Importantes

### WhatsApp
Atualize o número do WhatsApp nos seguintes arquivos:
- `src/components/landing/Header.tsx`
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/ServicesSection.tsx`
- `src/components/landing/ContactSection.tsx`

Procure por: `5511999999999` e substitua pelo número real.

### Imagens
As imagens do Instagram estão em `/public/`:
- `625954328_17933927025168963_6200012453283884317_n.jpg` (Hero)
- `625650612_17933927016168963_4856427567242028863_n.jpg` (Serviços)
- `626847815_17933923086168963_5914284234108068810_n.jpg` (Galeria)

### Informações de Contato
Atualize em `src/components/landing/ContactSection.tsx` e `Footer.tsx`:
- Endereço
- Telefone
- Horário de funcionamento
- Redes sociais

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático via GitHub
```

### Netlify
```bash
npm run build
# Arraste a pasta dist para o Netlify
```

## 📄 Estrutura de Arquivos

```
src/
├── components/
│   ├── landing/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/ (Shadcn components)
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx
└── main.tsx

public/
├── instagram.html (Página especial para Instagram)
└── [imagens do Instagram]
```

## 🎯 Próximos Passos

1. ✅ Atualizar número do WhatsApp
2. ✅ Adicionar informações de endereço e horário
3. ✅ Configurar links de redes sociais
4. ⏳ Adicionar mais fotos do trabalho
5. ⏳ Implementar galeria de trabalhos
6. ⏳ Adicionar depoimentos de clientes
7. ⏳ Integrar sistema de agendamento online

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do WhatsApp.

---

Desenvolvido com 💜 para o Estúdio Brunna Andrade
