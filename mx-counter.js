document.addEventListener('DOMContentLoaded', function () {
  function animateCounter(element, duration = 2000) {
    const start = parseInt(element.getAttribute('mx-data-start'), 10);
    const end = parseInt(element.getAttribute('mx-data-end'), 10);
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + range * progress);
      element.textContent = currentValue;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const mxCounterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target); // anima apenas uma vez
      }
    });
  }, { threshold: 0.8 });

  document.querySelectorAll('[mx-data-counter="number"]').forEach(el => {
    mxCounterObserver.observe(el); // <- corrigido aqui
  });
});
