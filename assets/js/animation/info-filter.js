// assets/js/animation/info-filter.js
export function infoFilter() {
  const section = document.getElementById('info');
  if (!section) return;

  const buttons = section.querySelectorAll('[data-info-filter]');
  const cards = section.querySelectorAll('#info-grid [data-category]');

  const apply = (key) => {
    cards.forEach(card => {
      const cats = (card.getAttribute('data-category') || '').split(/\s+/);
      const show = key === 'all' || cats.includes(key);
      card.style.display = show ? '' : 'none';
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // ubah style tombol
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // filter kartu
      const filterKey = btn.getAttribute('data-info-filter');
      console.log('[infoFilter] filter:', filterKey);
      apply(filterKey);
    });
  });

  // init awal
  apply('all');
  if (buttons[0]) buttons[0].setAttribute('aria-pressed', 'true');
}
