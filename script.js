const toggles = document.querySelectorAll('.nav-toggle');

for (const toggle of toggles) {
  toggle.addEventListener('click', () => {
    const nav = toggle.parentElement.querySelector('.site-nav');
    if (nav) {
      nav.classList.toggle('open');
    }
  });
}
