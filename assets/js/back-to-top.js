export function backToTop() {
    const backToTopButton = document.getElementById("back-to-top");

    if (!backToTopButton) {
        return;
    }

    // Fungsi untuk menampilkan atau menyembunyikan tombol
    const toggleButton = () => {
        // Jika user scroll lebih dari 400px ke bawah
        if (window.scrollY > 400) {
            // Tampilkan tombol
            backToTopButton.classList.add("opacity-100", "visible", "translate-y-0");
            backToTopButton.classList.remove("opacity-0", "invisible", "translate-y-4");
        } else {
            // Sembunyikan tombol
            backToTopButton.classList.remove("opacity-100", "visible", "translate-y-0");
            backToTopButton.classList.add("opacity-0", "invisible", "translate-y-4");
        }
    };

    // "Dengarkan" event scroll pada halaman
    window.addEventListener("scroll", toggleButton);
}