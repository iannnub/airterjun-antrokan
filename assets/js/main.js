import { navbarScroll } from "./navbar-effect.js";
import { animateHero } from "./animation/hero-animation.js";
import { textAnimation } from "./animation/text-animation.js";
import { animateCards } from "./animation/card-animation.js";
import { galleryFilter } from './animation/gallery-filter.js';
import { galleryModal } from './animation/gallery-modal.js';
import { mobileMenu } from './mobile-menu.js';
import { backToTop } from './back-to-top.js';
import { activeNavOnScroll } from './active-nav-on-scroll.js';
import { heroMedia } from './hero-media.js';
import { infoFilter } from "./animation/info-filter.js";
import { faqAccordion } from "./faq.js";
import { toastWarning } from './toast-warning.js';
import { safetyToast } from './safety-toast.js';

document.addEventListener("DOMContentLoaded", () => {
  navbarScroll();
  animateHero();
  textAnimation();
  animateCards();
  galleryFilter();
  galleryModal();
  mobileMenu();
  backToTop();
  activeNavOnScroll();
  heroMedia();
  infoFilter();
  faqAccordion();
  toastWarning();
  safetyToast();

  // Efek kursor hanya berjalan di layar desktop
  if (window.innerWidth >= 768) {
    import("./cursor.js").then(({ cursorEffect }) => {
      cursorEffect();
    });
  }
});