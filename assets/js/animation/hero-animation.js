import gsap from "gsap";

export function animateHero() {
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroButtons = document.querySelectorAll("#home .btn");

    if(heroTitle) {
        gsap.from(heroTitle, { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.2 });
    }
    if(heroSubtitle) {
        gsap.from(heroSubtitle, { duration: 1, y: 40, opacity: 0, ease: "power3.out", delay: 0.4 });
    }
    if(heroButtons.length > 0) {
        gsap.from(heroButtons, { duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.6, stagger: 0.1 });
    }
}