import gsap from "gsap";

/**
 * Media plates with more than one image cycle in place: the buttons cross-fade
 * the slides and the counter announces the position. A single-image plate
 * renders no controls, so this does nothing there.
 */
for (const plate of document.querySelectorAll<HTMLElement>("[data-carousel]")) {
  const slides = [
    ...plate.querySelectorAll<HTMLImageElement>("[data-slide]"),
  ];
  const status = plate.querySelector<HTMLElement>("[data-carousel-status]");
  const buttons = plate.querySelectorAll<HTMLButtonElement>(
    "[data-carousel-step]",
  );

  if (slides.length < 2 || !status) continue;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  let index = 0;
  let run = 0;

  /**
   * `hidden` on the markup keeps the cover correct without JS. Here autoAlpha
   * takes over: it fades and parks the other slides at visibility:hidden, so
   * they stay out of the a11y tree instead of being removed from the layout.
   */
  for (const [i, slide] of slides.entries()) {
    slide.hidden = false;
    gsap.set(slide, { autoAlpha: i === 0 ? 1 : 0, x: 0 });
  }

  /** Exactly one slide visible: the current one. */
  const park = () => {
    for (const [i, slide] of slides.entries()) {
      if (i !== index) gsap.set(slide, { autoAlpha: 0, x: 0 });
    }
  };

  const step = (delta: number) => {
    // Position is tracked synchronously so a click during a tween never reads
    // a stale slide and leaves the plate half-faded.
    const fromIndex = index;
    index = (index + delta + slides.length) % slides.length;

    if (fromIndex === index) return;

    const from = slides[fromIndex];
    const to = slides[index];
    const token = ++run;

    status.textContent = `${index + 1} / ${slides.length}`;

    // Killing first and setting the target opacity here means an interrupted
    // slide always restarts from a known state instead of mid-fade.
    gsap.killTweensOf(slides);
    gsap.set(to, { autoAlpha: 0, x: 12 * delta });

    if (reduce.matches) {
      gsap.set(to, { autoAlpha: 1, x: 0 });
      park();
      return;
    }

    // A lazy alternate may not be decoded yet; fading it in early shows matte.
    const ready = to.complete
      ? Promise.resolve()
      : to.decode().catch(() => {});

    ready.then(() => {
      if (token !== run) return;

      // The outgoing slide leaves toward the side the step came from, the
      // incoming arrives from the other side, both under 260ms.
      gsap.to(from, {
        autoAlpha: 0,
        x: -12 * delta,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(to, {
        autoAlpha: 1,
        x: 0,
        duration: 0.26,
        ease: "power3.out",
        onComplete: park,
      });
    });
  };

  for (const button of buttons) {
    button.addEventListener("click", () => {
      step(Number(button.dataset.carouselStep));
    });
  }
}
