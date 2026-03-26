const toggles = document.querySelectorAll('.nav-toggle');

for (const toggle of toggles) {
  toggle.addEventListener('click', () => {
    const nav = toggle.parentElement.querySelector('.site-nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  });
}

const revealTargets = document.querySelectorAll('section, .card, .hero-card, .highlight, .area-item, .contact-form');
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach((el) => revealObserver.observe(el));
