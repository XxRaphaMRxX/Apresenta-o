// Script para menu hambúrguer responsivo e transições

document.addEventListener('DOMContentLoaded', function() {
  // Encontrar elementos do menu
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  
  // Verificar se os elementos existem
  if (!menuToggle || !navUl) {
    console.error('Menu elements not found');
    return;
  }
  
  console.log('Menu initialized', menuToggle, navUl);
  
  // Toggle do menu ao clicar
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Menu clicked!');
    navUl.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    console.log('Menu active?', navUl.classList.contains('active'));
    
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
      if (window.innerWidth <= 768) {
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
    if (window.innerWidth > 768) {
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
});
