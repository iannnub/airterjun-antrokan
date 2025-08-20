// assets/js/safety-toast.js
export function safetyToast() {
  const toast = document.getElementById('safety-toast');
  const btnClose = document.getElementById('safety-toast-close');
  if (!toast || !btnClose) return;

  const show = () => {
    toast.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
    toast.classList.add('opacity-100', 'scale-100');
  };

  const hide = () => {
    toast.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
    toast.classList.remove('opacity-100', 'scale-100');
  };

  // Global trigger manual
  window.showSafetyToast = () => {
    show();
  };

  // Auto tampil sekali per sesi
  const DISMISS_KEY = 'safetyToastDismissed';
  if (sessionStorage.getItem(DISMISS_KEY) !== '1') {
    setTimeout(() => { show(); }, 700);
  }

  btnClose.addEventListener('click', () => {
    sessionStorage.setItem(DISMISS_KEY, '1');
    hide();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sessionStorage.setItem(DISMISS_KEY, '1');
      hide();
    }
  });
}
