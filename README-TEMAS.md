# 🎨 Temas de Cores - Guia de Uso

## O que foi criado?

2 arquivos principais:

1. **theme-colors.css** - Arquivo com 12 paletas de cores reutilizáveis
2. **demo-themes.html** - Página interativa para visualizar e testar todos os temas

## 🎯 12 Temas Disponíveis

| Tema | Descrição |
|------|-----------|
| **Azul** | Profissional, confiável |
| **Verde** | Natural, calmo |
| **Roxo** | Moderno, criativo |
| **Laranja** | Energético, vibrante |
| **Rosa** | Elegante, delicado |
| **Cinza** | Minimalista, neutro |
| **Ciano** | Fresco, refrescante |
| **Vermelho** | Vibrante, ousado |
| **Amarelo** | Quente, otimista |
| **Indigo** | Profundo, sofisticado |
| **Escuro** | Dark mode, moderno |
| **Teal** | Vibrante, equilibrado |
| **Black** | Elegante, sofisticado |

## 🚀 Como Usar

### Opção 1: No seu HTML
```html
<!DOCTYPE html>
<html data-theme="azul">
<head>
    <link rel="stylesheet" href="theme-colors.css">
</head>
<body>
    <button class="btn-tema">Botão</button>
    <div class="card-tema">
        <h3>Meu Card</h3>
        <p>Conteúdo aqui</p>
    </div>
</body>
</html>
```

### Opção 2: Alternar com JavaScript
```javascript
// Mudar para tema roxo
document.documentElement.setAttribute('data-theme', 'roxo');

// Mudar para tema verde
document.documentElement.setAttribute('data-theme', 'verde');
```

### Opção 3: Com localStorage (Salvar preferência)
```javascript
function mudarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema-preferido', tema);
}

// Carregar ao iniciar
const temaSalvo = localStorage.getItem('tema-preferido');
if (temaSalvo) {
    document.documentElement.setAttribute('data-theme', temaSalvo);
}
```

## 🎨 Variáveis CSS Disponíveis

Cada tema tem essas variáveis:

```css
--cor-primaria      /* Cor principal do tema */
--cor-secundaria    /* Cor secundária */
--cor-destaque      /* Cores de destaque/hover */
--cor-fundo         /* Cor de fundo */
--cor-texto         /* Cor do texto */
--cor-borda         /* Cor das bordas */
--cor-sucesso       /* Verde para sucesso */
--cor-aviso         /* Laranja para avisos */
--cor-erro          /* Vermelho para erros */
```

## 📦 Classes Prontas para Usar

### Botões
```html
<button class="btn-tema">Botão Primário</button>
<button class="btn-secundario">Botão Secundário</button>
```

### Cards e Boxes
```html
<div class="card-tema">
    <h3>Meu Card</h3>
    <p>Conteúdo</p>
</div>

<div class="box-tema">
    <p>Box com tema</p>
</div>
```

### Inputs
```html
<input type="text" class="input-tema" placeholder="Digite...">
```

### Alertas
```html
<div class="alert-tema alert-sucesso">✓ Sucesso!</div>
<div class="alert-tema alert-aviso">⚠ Aviso!</div>
<div class="alert-tema alert-erro">✕ Erro!</div>
```

### Badges
```html
<span class="badge-tema">Novo</span>
<span class="badge-tema">Premium</span>
```

### Barra de Progresso
```html
<div class="progress-bar-tema"></div>
```

## 📝 Exemplo Completo

```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="verde">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Projeto</title>
    <link rel="stylesheet" href="theme-colors.css">
</head>
<body>
    <button class="btn-tema" onclick="mudarTema('roxo')">
        Trocar para Roxo
    </button>
    
    <div class="card-tema">
        <h2>Bem-vindo!</h2>
        <p>Este é um exemplo com o tema ativo.</p>
    </div>

    <script>
        function mudarTema(tema) {
            document.documentElement.setAttribute('data-theme', tema);
        }
    </script>
</body>
</html>
```

## 🔗 Ver Demonstração

Abra `demo-themes.html` no navegador para ver:
- Todos os 12 temas funcionando
- Botões para alternar entre temas
- Exemplos de componentes
- Paleta de cores do tema atual

## ✨ Personalizar

Para criar seu próprio tema, adicione ao `theme-colors.css`:

```css
:root[data-theme="meu-tema"] {
  --cor-primaria: #seu-valor;
  --cor-secundaria: #seu-valor;
  --cor-destaque: #seu-valor;
  --cor-fundo: #seu-valor;
  --cor-texto: #seu-valor;
  --cor-borda: #seu-valor;
  --cor-sucesso: #seu-valor;
  --cor-aviso: #seu-valor;
  --cor-erro: #seu-valor;
}
```

Depois use no HTML:
```html
<html data-theme="meu-tema">
```

---

**Pronto para usar! 🎉**
