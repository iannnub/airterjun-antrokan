export function heroMedia() {
    // Ambil semua elemen yang kita butuhkan
    const introVideo = document.getElementById("hero-intro-video");
    const imageSlider = document.getElementById("hero-image-slider");
    const prevBtn = document.getElementById("slider-prev-btn");
    const nextBtn = document.getElementById("slider-next-btn");

    // Lakukan pengecekan awal
    if (!introVideo || !imageSlider || !prevBtn || !nextBtn) return;

    const images = imageSlider.querySelectorAll(".slider-image");
    if (images.length === 0) return;

    // Variabel untuk melacak state
    let currentIndex = 0;
    let autoSlideInterval = null;
    let backToVideoTimeout = null;
    let isSliderActive = false; // false = video, true = slider
    let hasListener = false; // kontrol listener supaya tidak double
    const slideDuration = 4000; // 4 detik

    // --- FUNGSI-FUNGSI UTAMA ---

    const showSlide = (index) => {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    };

    const startAutoSlide = () => {
        stopAutoSlide(); // safety
        autoSlideInterval = setInterval(nextSlide, slideDuration);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    };

    // Timer balik ke video: DISET SEKALI di awal slider, JANGAN direset tiap klik
    const startBackTimer = () => {
        stopBackTimer(); // safety
        backToVideoTimeout = setTimeout(() => {
            // saat waktunya tiba, balik ke video
            startVideo();
        }, images.length * slideDuration);
    };

    const stopBackTimer = () => {
        if (backToVideoTimeout) {
            clearTimeout(backToVideoTimeout);
            backToVideoTimeout = null;
        }
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
        // hanya reset auto slide agar user interaction terasa responsif,
        // TAPI jangan reset back-to-video timer
        startAutoSlide();
    };

    // Fungsi untuk memulai mode SLIDER
    const startSlider = () => {
        isSliderActive = true;

        // Saat pindah ke slider, hentikan video 'ended' agar tidak double trigger
        if (hasListener) {
            introVideo.removeEventListener("ended", startSlider);
            hasListener = false;
        }

        // Visual
        introVideo.classList.add("opacity-0");
        imageSlider.classList.remove("opacity-0");
        imageSlider.classList.add("opacity-100");
        prevBtn.classList.add("visible");
        nextBtn.classList.add("visible");

        // Setup slide
        currentIndex = 0;
        showSlide(currentIndex);

        // Mulai auto slide & sekali set timer balik ke video
        startAutoSlide();
        startBackTimer();
    };

    // Fungsi untuk memulai mode VIDEO
    const startVideo = () => {
        isSliderActive = false;

        // Bersihkan semua timer/interval slider
        stopAutoSlide();
        stopBackTimer();

        // Aktifkan kembali listener 'ended' (untuk siklus berikutnya)
        if (!hasListener) {
            introVideo.addEventListener("ended", startSlider);
            hasListener = true;
        }

        // Visual
        imageSlider.classList.remove("opacity-100");
        imageSlider.classList.add("opacity-0"); // pastikan tersembunyi
        prevBtn.classList.remove("visible");
        nextBtn.classList.add("visible");
        introVideo.classList.remove("opacity-0");

        // Putar video dari awal
        introVideo.currentTime = 0;
        introVideo.play();
    };

    // --- EVENT LISTENERS ---

    // Saat video selesai, mulai slider
    introVideo.addEventListener("ended", startSlider);
    hasListener = true;

    // Tombol Next
    nextBtn.addEventListener("click", () => {
        if (isSliderActive) {
            // Mode slider: next slide dan refresh autoSlide DOANG
            nextSlide();
            startAutoSlide();
        } else {
            // Mode video: skip langsung ke slider
            introVideo.pause();
            startSlider();
        }
    });

    // Tombol Prev
    prevBtn.addEventListener("click", () => {
        if (isSliderActive) {
            prevSlide();
        }
        // kalau sedang video, tombol prev tidak melakukan apa-apa (bisa di-disable kalau mau)
    });

    // --- INISIALISASI ---
    startVideo();
}
