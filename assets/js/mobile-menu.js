export function mobileMenu() {
  const hamburgerBtn = document.getElementById("hamburger");
  const mobileMenuEl = document.getElementById("mobileMenu");
  
  // Ambil semua link di dalam menu mobile
  const menuLinks = mobileMenuEl.querySelectorAll("a");

  if (!hamburgerBtn || !mobileMenuEl) {
    return; // Hentikan jika tombol atau menu tidak ditemukan
  }

  // Fungsi untuk membuka/menutup menu
  const toggleMenu = () => {
    mobileMenuEl.classList.toggle("hidden");
  };

  // Tambahkan event listener ke tombol hamburger
  hamburgerBtn.addEventListener("click", toggleMenu);

  // Tambahkan event listener ke setiap link di dalam menu
  // agar menu otomatis tertutup saat salah satu link diklik
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Cek dulu apakah menu sedang terbuka sebelum menutupnya
        if (!mobileMenuEl.classList.contains("hidden")) {
            toggleMenu();
        }
    });
  });
}