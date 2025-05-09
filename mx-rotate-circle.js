document.addEventListener('DOMContentLoaded', function () {
  // Injeta @keyframes no <head>
  const style = document.createElement('style');
  style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;
  document.head.appendChild(style);

  // Converte valor numérico para milissegundos válidos (string com 'ms')
  function toMs(value, fallback = '0ms') {
    const num = parseInt(value, 10);
    return isNaN(num) ? fallback : `${num}ms`;
  }

  // Aplica animação ao elemento com base nos atributos mx-*
  function applyRotation(el) {
    const duration = toMs(el.getAttribute('mx-data-rotate-duration'), '12000ms');
    const delay = toMs(el.getAttribute('mx-data-rotate-delay'), '0ms');
    const easing = el.getAttribute('mx-data-rotate-ease') || 'linear';
    const direction = el.getAttribute('mx-data-rotate-direction') || 'normal';

    el.style.animation = `spin ${duration} ${easing} ${delay} infinite ${direction}`;
  }

  // Observer para ativar rotação quando o elemento entrar na tela
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        applyRotation(entry.target);
        obs.unobserve(entry.target); // Só ativa uma vez
      }
    });
  }, { threshold: 0.5 });

  // Ativa observer para todos os elementos com atributo mx-data-rotate="circle"
  document.querySelectorAll('[mx-data-rotate="circle"]').forEach(el => {
    observer.observe(el);
  });
});
