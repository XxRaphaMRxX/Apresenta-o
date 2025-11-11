// Script para menu hambúrguer responsivo e transições

document.addEventListener('DOMContentLoaded', function() {
  // Criar botão do menu se não existir
  const nav = document.querySelector('nav');
  let menuToggle = document.querySelector('.menu-toggle');
  
  if (!menuToggle) {
    menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    nav.insertBefore(menuToggle, nav.firstChild);
  }
  
  const navUl = document.querySelector('nav ul');
  
  // Toggle do menu ao clicar
  menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
    
    // Mudar texto do botão
    if (navUl.classList.contains('active')) {
      this.textContent = '✕ Fechar';
    } else {
      this.textContent = '';
    }
  });
  
  // Fechar menu ao clicar em um link (em mobile)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 600) {
        navUl.classList.remove('active');
        menuToggle.textContent = '';
      }
      
      // Efeito de transição suave ao clicar
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#')) {
        e.preventDefault();
        
        // Adiciona efeito de fade out
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        // Navega após a animação
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
  
  // Fechar menu ao redimensionar para desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
      navUl.classList.remove('active');
      menuToggle.textContent = '';
    }
  });
  
  // Efeito de entrada suave ao carregar a página
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 10);
  
  // Adiciona animação staggered aos itens do menu
  const menuItems = document.querySelectorAll('nav li');
  menuItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `slideUp 0.5s ease-out forwards`;
    item.style.animationDelay = `${0.1 + (index * 0.05)}s`;
  });
});
