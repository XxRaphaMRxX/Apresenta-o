// Script para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Obter valores do formulário
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validação simples
      if (!name || !email || !subject || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
      }
      
      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
      }
      
      // Simulação de envio (você pode substituir por uma chamada real de API)
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Simular envio
      setTimeout(() => {
        alert('Mensagem enviada com sucesso!\n\nObrigado por entrar em contato com o Projeto Refrigerium.');
        
        // Limpar formulário
        contactForm.reset();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Animação de sucesso
        contactForm.style.transform = 'scale(0.98)';
        setTimeout(() => {
          contactForm.style.transform = 'scale(1)';
        }, 200);
      }, 1500);
    });
  }
});
