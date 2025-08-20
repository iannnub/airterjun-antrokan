// assets/js/toast-warning.js
const KEY = 'antrokan_toast_dismissed_until';

/**
 * Tampilkan toast peringatan:
 * - Auto muncul 1.2 detik setelah halaman siap.
 * - Jika user menutup, sembunyikan dan jangan tampilkan lagi selama 6 jam.
 * - Bisa dipaksa tampil via window.showSafetyToast().
 */
export function toastWarning() {
  const toast = document.getElementById('safety-toast');
  const closeBtn = document.getElementById('toast-close');
  if (!toast || !closeBtn) return;

  const now = Date.now();
  const dismissedUntil = parseInt(localStorage.getItem(KEY) || '0', 10);
  const canShow = now > dismissedUntil;

  // util show/hide
  const show = () => {
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');
  };
  const hide = () => {
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  };

  // auto tampil setelah delay, jika belum di-dismiss
  if (canShow) {
    setTimeout(show, 1200);
  }

  // tombol close: simpan cooldown 6 jam
  closeBtn.addEventListener('click', () => {
    hide();
    const sixHours = 6 * 60 * 60 * 1000;
    localStorage.setItem(KEY, String(Date.now() + sixHours));
  });

  // API manual (opsional): window.showSafetyToast()
  window.showSafetyToast = () => show();
}
