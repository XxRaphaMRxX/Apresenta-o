// Script para menu hambúrguer responsivo

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
    link.addEventListener('click', function() {
      if (window.innerWidth <= 600) {
        navUl.classList.remove('active');
        menuToggle.textContent = '';
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
});
