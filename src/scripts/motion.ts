import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * Motion is supporting, not decorative: one entrance for the masthead, one
 * reveal for editorial blocks, one press-roll for the display banners.
 * Everything is skipped under prefers-reduced-motion — native scroll, no
 * hidden content, no animation.
 */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reduced.matches) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 0;

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      const target = hash && hash.length > 1 ? document.querySelector(hash) : null;
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -headerHeight });
      history.pushState(null, "", hash);
      target.setAttribute("tabindex", "-1");
      (target as HTMLElement).focus({ preventScroll: true });
    });
  });

  const intro = document.querySelectorAll("[data-intro] > *");
  if (intro.length) {
    gsap.from(intro, {
      y: 26,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.1,
    });
  }

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      y: 18,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 90%", once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-banner]").forEach((element) => {
    gsap.from(element, {
      yPercent: 10,
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: { trigger: element, start: "top 95%", once: true },
    });
  });

  reduced.addEventListener("change", () => window.location.reload());
}
