# 🎨 Guia de Estilos - Projeto Refrigerium

## Elementos Visuais Implementados

### 1. Cards Informativos

**Classes disponíveis:**
- `.info-card` - Card básico com borda azul
- `.info-card.primary` - Card com gradiente azul
- `.info-card.success` - Card com gradiente verde
- `.info-card.highlight` - Card com gradiente vermelho

**Uso:**
```html
<div class="info-card primary">
  <p>Conteúdo destacado em azul</p>
</div>
```

### 2. Caixas de Destaque

**Classes:**
- `.impact-box` - Caixa roxa para impactos
- `.proof-box` - Caixa para provas/evidências
- `.highlight-box` - Caixa de destaque especial
- `.results-box` - Caixa cinza para resultados

### 3. Grid de ODS

**Estrutura:**
```html
<div class="ods-grid">
  <div class="ods-card ods-3">
    <div class="ods-icon">🏥</div>
    <h3>ODS 3</h3>
    <h4>Saúde e Bem-Estar</h4>
    <p>Descrição...</p>
  </div>
</div>
```

**Classes de ODS:**
- `.ods-3` - Vermelho (#c5192d)
- `.ods-11` - Laranja (#fd9d24)
- `.ods-13` - Verde (#48773c)

### 4. Pilares do Projeto

```html
<div class="pillars-grid">
  <div class="pillar-card">
    <div class="pillar-icon">♻️</div>
    <h4>Título</h4>
    <p>Descrição</p>
  </div>
</div>
```

### 5. Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-icon">🔬</div>
    <h4>Título</h4>
    <p>Descrição</p>
  </div>
  <div class="timeline-arrow">→</div>
  <!-- mais itens... -->
</div>
```

### 6. Tabela Comparativa

```html
<div class="comparison-table-wrapper">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Característica</th>
        <th class="conventional">Convencional</th>
        <th class="refrigerium">Refrigerium</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Item</strong></td>
        <td class="negative">❌ Negativo</td>
        <td class="positive">✅ Positivo</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 7. Fases de Implementação

```html
<div class="phases-container">
  <div class="phase-card phase-1">
    <div class="phase-number">1</div>
    <h3>Título da Fase</h3>
    <div class="phase-content">
      <p>Descrição...</p>
      <ul>
        <li>Item 1</li>
      </ul>
    </div>
  </div>
</div>
```

**Classes de fases:**
- `.phase-1` - Azul
- `.phase-2` - Roxo
- `.phase-3` - Laranja
- `.phase-4` - Verde

### 8. Grid de Resultados/Benefícios

```html
<div class="results-grid">
  <div class="result-card">
    <div class="result-icon">🌡️</div>
    <h4>Título</h4>
    <p>Descrição</p>
  </div>
</div>
```

### 9. Equipe

```html
<div class="team-grid">
  <div class="team-member">
    <div class="member-icon">👤</div>
    <h4>Nome do Membro</h4>
  </div>
</div>
```

### 10. Formulário de Contato

```html
<div class="contact-card">
  <form class="contact-form">
    <div class="form-group">
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <!-- mais campos... -->
    <button type="submit" class="submit-btn">Enviar</button>
  </form>
</div>
```

## Paleta de Cores

### Cores Principais
- **Azul Principal**: `#3498db`
- **Roxo**: `#764ba2`
- **Gradiente Primário**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Cores de Estado
- **Sucesso**: `#27ae60`
- **Atenção**: `#e67e22`
- **Erro**: `#e74c3c`
- **Info**: `#3498db`

### Cores de Texto
- **Título**: `#2c3e50`
- **Subtítulo**: `#34495e`
- **Texto**: `#555`
- **Texto Claro**: `#666`

### Backgrounds
- **Fundo Página**: `#f4f4f4`
- **Card**: `#fff`
- **Hover**: `#f8f9fa`

## Ícones e Emojis Utilizados

### ODS
- 🏥 - Saúde (ODS 3)
- 🏙️ - Cidades (ODS 11)
- 🌡️ - Clima (ODS 13)

### Processo
- 🔬 - Pesquisa/Ciência
- 🚧 - Construção/Obra
- 📊 - Dados/Estatísticas
- 🎯 - Objetivo/Meta
- ✅ - Sucesso/Confirmação
- ❌ - Problema/Negação

### Conceitos
- ♻️ - Sustentabilidade
- 🌱 - Natureza/Crescimento
- 🌍 - Global/Mundo
- 💡 - Ideia/Inovação
- 🔒 - Segurança

## Animações

### Animações Automáticas
1. **Fade In** - Elementos aparecem suavemente ao carregar
2. **Slide Up** - Cards sobem suavemente ao entrar na viewport
3. **Hover Effects** - Transformações ao passar o mouse
4. **Parallax** - Hero section com efeito parallax sutil

### Animações JavaScript
- Scroll reveal para cards
- Contador animado para números
- Efeito de digitação no título (primeira visita)
- Pulso em ícones importantes
- Smooth scroll para links internos

## Responsividade

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 600px - 768px
- **Mobile**: 400px - 600px
- **Mobile Small**: 320px - 400px
- **Mobile Tiny**: < 320px

### Ajustes Principais
- Menu hambúrguer em mobile
- Grids se tornam coluna única
- Timeline vira vertical
- Tamanhos de fonte reduzidos
- Padding/margin ajustados

## Boas Práticas Implementadas

✅ Semântica HTML5  
✅ Acessibilidade (labels, aria-labels)  
✅ Performance (will-change, lazy animations)  
✅ SEO básico (meta tags, títulos descritivos)  
✅ Mobile-first approach  
✅ Graceful degradation  
✅ Cross-browser compatibility  

## Dicas de Uso

1. **Use os cards apropriados** - Escolha o tipo de card baseado no tipo de informação
2. **Mantenha consistência** - Use os mesmos ícones para conceitos similares
3. **Hierarquia visual** - Use h2 para seções, h3 para subseções
4. **Espaçamento** - Deixe o conteúdo "respirar" com margins adequadas
5. **Contraste** - Sempre teste a legibilidade do texto

---

**Desenvolvido com 💙 para o Projeto Refrigerium**
