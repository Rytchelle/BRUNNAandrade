# 📋 Instruções para Finalização do Site

## ✅ O que já foi feito

- ✅ Site completamente redesenhado para Estúdio Brunna Andrade
- ✅ Todas as cores atualizadas (rosa/roxo elegante)
- ✅ Imagens do Instagram integradas
- ✅ Textos personalizados
- ✅ Logo e branding atualizados
- ✅ Página especial para Instagram configurada
- ✅ Design responsivo e moderno

## 🔧 O que você precisa fazer

### 1. Atualizar Número do WhatsApp

Procure por `5511999999999` nos seguintes arquivos e substitua pelo número real da Brunna:

- `src/components/landing/Header.tsx` (linha ~30)
- `src/components/landing/HeroSection.tsx` (linha ~6)
- `src/components/landing/ServicesSection.tsx` (linha ~60)
- `src/components/landing/ContactSection.tsx` (linha ~35)

**Formato**: `55` + DDD + número (ex: `5511987654321`)

### 2. Adicionar Informações de Contato

Edite `src/components/landing/ContactSection.tsx` e `Footer.tsx`:

```typescript
// Procure por estas linhas e atualize:
"(11) 99999-9999"           // Telefone real
"Rua Exemplo, 123"          // Endereço real
"Centro - São Paulo, SP"    // Cidade/Estado
"Seg a Sáb: 9h às 19h"     // Horário real
```

### 3. Configurar Redes Sociais

Edite `src/components/landing/Footer.tsx`:

```typescript
// Procure pelos links do Instagram e Facebook:
<a href="#" ...>  // Substitua # pelos links reais
  <Instagram />
</a>
```

### 4. Adicionar Preços do PDF

Você tem o arquivo `Cópia de Catálogo Salão Beleza - cabelos.pdf.pdf` no `/public`.

**Opção A - Copiar preços manualmente:**
1. Abra o PDF
2. Copie os preços de cada serviço
3. Edite `src/components/landing/ServicesSection.tsx`
4. Atualize os valores em `price: "A partir de R$ XX"`

**Opção B - Me enviar os preços:**
Você pode copiar e colar aqui o conteúdo do PDF e eu atualizo automaticamente!

### 5. Adicionar Mais Fotos (Opcional)

Se tiver mais fotos do trabalho da Brunna:
1. Coloque as fotos na pasta `/public/`
2. Me avise que eu crio uma galeria de trabalhos

### 6. Testar o Site

```bash
# Rodar localmente
npm run dev

# Abrir no navegador
http://localhost:5173
```

Teste:
- ✅ Todos os links do WhatsApp
- ✅ Navegação entre seções
- ✅ Responsividade no celular
- ✅ Formulário de contato

### 7. Deploy

Quando tudo estiver pronto:

```bash
# Build de produção
npm run build

# Fazer deploy no Vercel/Netlify
```

## 📱 Testando no Instagram

1. Faça o deploy do site
2. Copie a URL: `seusite.vercel.app/instagram.html`
3. Poste no Instagram Stories ou Bio
4. Teste se abre corretamente

## 🎨 Personalizações Extras (Opcional)

### Mudar Cores
Edite `src/index.css` nas linhas de `--primary` e `--accent`

### Adicionar Mais Serviços
Edite `src/components/landing/ServicesSection.tsx` no array `services`

### Mudar Textos
Cada seção tem seus textos nos respectivos arquivos em `src/components/landing/`

## ❓ Precisa de Ajuda?

Se tiver dúvidas ou precisar de ajuda com qualquer etapa, é só me avisar!

**Próximos passos sugeridos:**
1. Me envie o conteúdo do PDF com os preços
2. Me passe o número do WhatsApp
3. Me envie endereço e horários
4. Links das redes sociais

Assim eu finalizo tudo para você! 🚀
