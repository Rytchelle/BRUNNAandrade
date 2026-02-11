# 🎨 Paleta de Cores Profissional - Estúdio Brunna Andrade

## 🌙 Tema Escuro Sofisticado

### Filosofia do Design
- **Dark & Elegant**: Fundo escuro profissional
- **Neon Accents**: Rosa, roxo e magenta vibrantes
- **Glow Effects**: Sombras e brilhos sutis
- **High Contrast**: Textos brancos sobre fundo escuro
- **Premium Feel**: Gradientes e efeitos de luxo

---

## 🎨 Cores Principais

### Backgrounds (Fundos)
```css
--dark-bg: hsl(250, 20%, 12%)        /* #1a0f1f - Fundo principal */
--dark-surface: hsl(250, 15%, 16%)   /* #221828 - Cards e superfícies */
--dark-elevated: hsl(250, 15%, 20%)  /* #2a1f33 - Elementos elevados */
```

### Primary Colors (Cores Primárias)
```css
--primary-pink: hsl(320, 70%, 55%)    /* #E04097 - Rosa vibrante */
--primary-purple: hsl(280, 60%, 50%)  /* #A855F7 - Roxo médio */
--primary-magenta: hsl(340, 80%, 60%) /* #F43F5E - Magenta forte */
```

### Accent Colors (Cores de Destaque)
```css
--accent-gold: hsl(45, 90%, 60%)      /* #F5D547 - Dourado */
--accent-rose: hsl(350, 70%, 60%)     /* #F43F5E - Rosa forte */
```

### Neutral Colors (Cores Neutras)
```css
--neutral-100: hsl(0, 0%, 98%)        /* #FAFAFA - Branco quase puro */
--neutral-200: hsl(0, 0%, 90%)        /* #E5E5E5 - Cinza muito claro */
--neutral-300: hsl(0, 0%, 70%)        /* #B3B3B3 - Cinza claro */
--neutral-400: hsl(0, 0%, 50%)        /* #808080 - Cinza médio */
--neutral-500: hsl(0, 0%, 30%)        /* #4D4D4D - Cinza escuro */
```

---

## 🌈 Gradientes

### Hero Section
```css
background: linear-gradient(135deg, 
  hsl(250, 20%, 12%) 0%,    /* #1a0f1f */
  hsl(280, 25%, 15%) 50%,   /* #2a1a35 */
  hsl(320, 20%, 18%) 100%   /* #1f1428 */
);
```

### Primary Gradient (Botões e Destaques)
```css
background: linear-gradient(135deg,
  hsl(320, 70%, 55%) 0%,    /* Rosa */
  hsl(280, 60%, 50%) 100%   /* Roxo */
);
```

### Accent Gradient (Títulos e Efeitos)
```css
background: linear-gradient(135deg,
  hsl(340, 80%, 60%) 0%,    /* Magenta */
  hsl(320, 70%, 55%) 100%   /* Rosa */
);
```

### Card Gradient
```css
background: linear-gradient(135deg,
  hsl(250, 15%, 16%) 0%,    /* Escuro */
  hsl(250, 15%, 20%) 100%   /* Mais claro */
);
```

---

## ✨ Efeitos de Glow (Brilho)

### Sombras com Glow
```css
/* Soft Glow */
box-shadow: 0 4px 20px -4px rgba(224, 64, 151, 0.1);

/* Card Glow */
box-shadow: 0 8px 30px -8px rgba(224, 64, 151, 0.2);

/* Elevated Glow */
box-shadow: 0 20px 50px -12px rgba(224, 64, 151, 0.3);

/* Strong Glow */
box-shadow: 0 0 60px -10px rgba(224, 64, 151, 0.4);
```

### Hover Glow
```css
/* Botões */
hover:shadow-[0_0_40px_rgba(224,64,151,0.5)]

/* Cards */
hover:shadow-[0_0_30px_rgba(224,64,151,0.2)]

/* Imagens */
filter: drop-shadow(0 30px 60px rgba(224, 64, 151, 0.4));
```

---

## 🎭 Aplicação por Seção

### Hero Section
```
- Background: Gradiente escuro (250° → 280° → 320°)
- Texto: Branco (#FAFAFA)
- Título destaque: Gradiente rosa → magenta
- Botão principal: Gradiente rosa → roxo com glow
- Fotos: Drop shadow rosa forte
- Stats: Gradiente rosa → magenta
```

### About Section
```
- Background: Gradiente escuro alternado
- Cards: Gradientes individuais (rosa, roxo, magenta)
- Ícones: Gradientes em círculos
- Imagem: Border rosa com glow
- Badge: Fundo escuro com border rosa
```

### Services Section
```
- Background: Gradiente escuro invertido
- Cards: Fundo escuro com border rosa
- Ícones: Gradiente rosa → roxo
- Preços: Gradiente rosa → magenta (text)
- Hover: Glow rosa forte
```

### Benefits Section
```
- Background: Gradiente escuro com variação
- Cards: Fundo escuro com borders coloridas
- Ícones: Gradientes variados
- Hover: Glow e scale
```

### CTA Section
```
- Background: Gradiente rosa → roxo → magenta
- Blobs: Brancos com opacity e blur
- Botões: Branco sólido + transparente
- Texto: Branco puro
```

### Contact Section
```
- Background: Gradiente escuro
- Cards: Gradientes coloridos por tipo
  - WhatsApp: Verde
  - Phone: Rosa/Roxo
  - Location: Roxo/Magenta
  - Hours: Amarelo/Laranja
- Form: Gradiente rosa/roxo com inputs brancos
```

### Footer
```
- Background: Cinza muito escuro (gray-900)
- Texto: Branco com opacity
- Links: Hover rosa
- Social: Hover rosa com scale
- Border: Branco com opacity baixa
```

---

## 🎯 Hierarquia Visual

### Níveis de Importância
```
1. Primário (Mais importante)
   - Gradiente rosa → roxo
   - Glow forte
   - Texto branco puro

2. Secundário
   - Gradiente roxo → magenta
   - Glow médio
   - Texto neutral-200

3. Terciário
   - Cores sólidas com opacity
   - Glow suave
   - Texto neutral-300

4. Background
   - Gradientes escuros
   - Sem glow
   - Texto neutral-400
```

---

## 📱 Responsividade

### Mobile
```
- Backgrounds mais escuros
- Glows mais sutis
- Borders mais finas
- Textos maiores e brancos
```

### Desktop
```
- Glows mais intensos
- Gradientes mais complexos
- Efeitos de hover completos
- Animações suaves
```

---

## ✅ Acessibilidade

### Contraste
```
- Texto branco (#FAFAFA) sobre fundo escuro (#1a0f1f)
- Ratio: 15.8:1 (WCAG AAA)
- Texto neutral-300 (#B3B3B3) sobre fundo escuro
- Ratio: 7.2:1 (WCAG AA)
```

### Legibilidade
```
- Tamanhos mínimos: 14px (mobile), 16px (desktop)
- Line-height: 1.5-1.6
- Letter-spacing: normal a wide
- Font-weight: 400-700
```

---

## 🚀 Performance

### Otimizações
```
- Gradientes via CSS (não imagens)
- Glows via box-shadow (GPU)
- Animações via transform/opacity
- Sem imagens de fundo pesadas
```

---

## 💡 Dicas de Uso

### Quando usar cada cor:

**Rosa (#E04097)**
- Botões principais
- Links importantes
- Ícones de destaque
- Borders de cards

**Roxo (#A855F7)**
- Gradientes secundários
- Ícones alternativos
- Backgrounds de cards
- Efeitos de hover

**Magenta (#F43F5E)**
- Acentos fortes
- CTAs secundários
- Badges importantes
- Efeitos especiais

**Branco (#FAFAFA)**
- Textos principais
- Títulos
- Botões secundários
- Ícones em fundos escuros

**Neutral-300 (#B3B3B3)**
- Textos secundários
- Descrições
- Placeholders
- Legendas

---

Site com paleta profissional escura e sofisticada! 🌙✨
