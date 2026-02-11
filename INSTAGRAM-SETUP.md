# 📱 Página para Instagram - Studio Beleza

## 🎯 Como usar no Instagram

### 1. **Para desenvolvimento local:**
   - Acesse: `http://localhost:5173/instagram.html` (Vite dev server)
   - Ou: `http://localhost:8080/instagram.html` (servidor estático)

### 2. **Para produção (CORRIGIDO):**
   - Vercel: `seusite.vercel.app/instagram.html`
   - Netlify: `seusite.netlify.app/instagram.html`
   - Domínio próprio: `seudominio.com/instagram.html`

### 3. **Link para Instagram:**
   - ✅ Use a URL completa nos posts e stories
   - ✅ **FORÇA abertura no navegador externo** automaticamente
   - ✅ Funciona perfeitamente no Instagram
   - ✅ Cache busting automático para sempre mostrar versão mais recente

## ✅ **Problemas CORRIGIDOS**

### 🖼️ **Imagens e Favicon**
- ✅ Removidas todas as referências ao Lovable
- ✅ Usando favicon próprio (`./public/favicon.ico`)
- ✅ Imagens locais (`./src/assets/hero-salon.jpg`)

### 🔗 **Redirecionamento no Deploy**
- ✅ Detecta automaticamente Vercel, Netlify, GitHub Pages
- ✅ Mantém estrutura de pastas corretamente
- ✅ Cache busting automático (`?v=timestamp`)
- ✅ Funciona em desenvolvimento E produção

### 🚀 **Cache do Vercel/Netlify**
- ✅ Arquivo `vercel.json` configurado
- ✅ Arquivo `_headers` para Netlify
- ✅ Meta tags de cache no HTML
- ✅ Timestamp automático nas URLs

## 🌐 **Abertura no Navegador Externo**

### 📱 **Android:**
- Tenta abrir no Google Chrome primeiro
- Usa Intent para forçar navegador externo
- Fallback para abertura normal

### 🍎 **iOS:**
- Tenta abrir no Safari
- Usa esquemas de URL específicos
- Fallback para window.open

### 📋 **Instruções Visuais:**
Quando detecta Instagram, mostra:
```
📱 Para melhor experiência:
1. Toque nos 3 pontinhos (⋯) no canto superior
2. Selecione "Abrir no navegador"
3. Ou copie o link e cole no seu navegador
```

## 🛠️ **Arquivos de Configuração**

### `vercel.json`
```json
{
  "headers": [
    {
      "source": "/instagram.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate"
        }
      ]
    }
  ]
}
```

### `_headers` (Netlify)
```
/instagram.html
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
```

## 🔧 **Deploy no Vercel**

1. **Conecte seu repositório** no Vercel
2. **Configure o build:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy automático** a cada push
4. **Cache limpo** automaticamente

## 📊 **Como testar**

### Desenvolvimento:
```bash
npm run dev
# Acesse: http://localhost:5173/instagram.html
```

### Produção:
1. Faça push para o repositório
2. Vercel/Netlify faz deploy automático
3. Teste: `seusite.vercel.app/instagram.html`
4. Cache é limpo automaticamente

## ✨ **Funcionalidades**

- ✅ **Detecção automática** de Instagram vs outros navegadores
- ✅ **Força abertura** no navegador externo
- ✅ **Cache busting** automático
- ✅ **Redirecionamento inteligente** por ambiente
- ✅ **Instruções visuais** para usuários
- ✅ **Design profissional** e responsivo
- ✅ **Sem dependências** do Lovable