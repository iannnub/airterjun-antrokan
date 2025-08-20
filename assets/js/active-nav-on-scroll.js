export function activeNavOnScroll() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("#navbar .nav-item");
    const mobileNavLinks = document.querySelectorAll("#mobileMenu .nav-item");

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                // Update Navigasi Desktop
                navLinks.forEach(link => {
                    link.classList.remove("active-nav");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active-nav");
                    }
                });

                // Update Navigasi Mobile
                 mobileNavLinks.forEach(link => {
                    link.classList.remove("active-nav");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active-nav");
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" }); // Opsi agar section di tengah layar yang terdeteksi

    sections.forEach(section => {
        observer.observe(section);
    });
}