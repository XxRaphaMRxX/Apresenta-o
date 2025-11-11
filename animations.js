// Animações dinâmicas para o Projeto Refrigerium
document.addEventListener('DOMContentLoaded', function() {
  
  // Animação de scroll reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observar cards e seções
  const animatedElements = document.querySelectorAll('.info-card, .ods-card, .pillar-card, .phase-card, .result-card, .team-member, .reference-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Contador animado para números na tabela comparativa
  const animateNumbers = () => {
    const numberElements = document.querySelectorAll('.comparison-table .positive');
    
    numberElements.forEach(el => {
      const text = el.textContent;
      const match = text.match(/(\d+)/);
      
      if (match) {
        const targetNumber = parseInt(match[1]);
        let currentNumber = 0;
        const increment = targetNumber / 50;
        const originalText = text;
        
        const counter = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(counter);
          }
          el.textContent = originalText.replace(/\d+/, Math.floor(currentNumber));
        }, 30);
      }
    });
  };
  
  // Observar tabela comparativa
  const table = document.querySelector('.comparison-table');
  if (table) {
    const tableObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          tableObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    tableObserver.observe(table);
  }
  
  // Efeito de parallax suave no hero
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  const updateParallax = () => {
    const hero = document.querySelector('.hero-section');
    if (hero) {
      const scrolled = window.scrollY;
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    ticking = false;
  };
  
  const requestParallaxUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', requestParallaxUpdate);
  
  // Animação de progresso das fases
  const phases = document.querySelectorAll('.phase-card');
  phases.forEach((phase, index) => {
    phase.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Adicionar efeito de hover nos cards ODS
  const odsCards = document.querySelectorAll('.ods-card');
  odsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Animação de digitação para o título principal (apenas na primeira visita)
  const mainTitle = document.querySelector('.hero-section h1');
  if (mainTitle && !sessionStorage.getItem('titleAnimated')) {
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    mainTitle.style.opacity = '1';
    
    let charIndex = 0;
    const typeSpeed = 100;
    
    const typeWriter = () => {
      if (charIndex < text.length) {
        mainTitle.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typeSpeed);
      } else {
        sessionStorage.setItem('titleAnimated', 'true');
      }
    };
    
    setTimeout(typeWriter, 500);
  }
  
  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Adicionar tooltip aos ícones
  const icons = document.querySelectorAll('.ods-icon, .pillar-icon, .result-icon');
  icons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
  
  // Animação de pulso nos números importantes
  const highlightNumbers = () => {
    const numbers = document.querySelectorAll('.result-card .result-icon, .ods-icon');
    
    numbers.forEach((num, index) => {
      setTimeout(() => {
        num.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
          num.style.animation = '';
        }, 500);
      }, index * 200);
    });
  };
  
  // Executar animação de pulso quando elementos ficarem visíveis
  const pulseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        highlightNumbers();
        pulseObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const resultsSection = document.querySelector('.results-grid');
  if (resultsSection) {
    pulseObserver.observe(resultsSection);
  }
});

// Adicionar animação de pulso ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
  
  .info-card, .phase-card, .result-card {
    will-change: transform, opacity;
  }
  
  .contact-form {
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(style);
