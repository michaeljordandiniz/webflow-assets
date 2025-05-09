function animateCounter(element, duration = 2000) {
  const start = parseInt(element.getAttribute('data-start'), 10);
  const end = parseInt(element.getAttribute('data-end'), 10);
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

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el);
      obs.unobserve(el); // só anima uma vez
    }
  });
}, {
  threshold: 0.6 // só dispara quando 60% do elemento estiver visível
});

document.querySelectorAll('[data-counter]').forEach(el => {
  observer.observe(el);
});
