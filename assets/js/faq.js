// assets/js/faq.js
export function faqAccordion() {
  const toggles = document.querySelectorAll('.faq-toggle');
  const panels = document.querySelectorAll('.faq-panel');

  if (!toggles.length) return;

  toggles.forEach((btn, i) => {
    const panel = panels[i];
    const icon = btn.querySelector('[data-icon]');

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // tutup semua
      toggles.forEach(t => t.setAttribute('aria-expanded', 'false'));
      panels.forEach(p => {
        p.style.maxHeight = '0px';
        p.style.opacity = '0';
      });
      document.querySelectorAll('.faq-toggle .iconify').forEach(ic => ic.style.transform = 'rotate(0deg)');

      // buka jika sebelumnya tertutup
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.style.opacity = '1';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}
