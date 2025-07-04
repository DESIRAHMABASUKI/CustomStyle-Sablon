// script.js

document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.getElementById('orderNow');

  orderBtn.addEventListener('click', () => {
    alert('Terima kasih! Tim kami akan segera menghubungi Anda untuk custom sablon.');
  });

  // Animasi scroll smooth
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Efek muncul pada scroll (basic)
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});
