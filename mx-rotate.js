document.addEventListener('DOMContentLoaded', function () {
  const style = document.createElement('style');
  style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;
  document.head.appendChild(style);

  function toMs(value, fallback = '0ms') {
    const num = parseInt(value, 10);
    return isNaN(num) ? fallback : `${num}ms`;
  }

  function applyRotation(el) {
    const duration = toMs(el.getAttribute('mx-data-rotate-duration'), '12000ms');
    const delay = toMs(el.getAttribute('mx-data-rotate-delay'), '0ms');
    const easing = el.getAttribute('mx-data-rotate-ease') || 'linear';
    const direction = el.getAttribute('mx-data-rotate-direction') || 'normal';
    el.style.animation = `spin ${duration} ${easing} ${delay} infinite ${direction}`;
  }

  const mxRotateObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        applyRotation(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[mx-data-rotate="circle"]').forEach(el => {
    mxRotateObserver.observe(el); // <- corrigido aqui
  });
});
