import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function textAnimation() {
    const sectionTitles = gsap.utils.toArray(".section-title");
    sectionTitles.forEach((title) => {
        gsap.from(title, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    });
}