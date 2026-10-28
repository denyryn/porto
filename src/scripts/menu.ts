import gsap from "gsap";

/**
 * The menu is a native <details>: without JS it opens and closes instantly and
 * still works. With JS we intercept the toggle so it can animate both ways, and
 * we keep the `menu-open` scroll lock in sync with the full-screen layout.
 */
const menu = document.querySelector<HTMLDetailsElement>("details.menu");
const summary = menu?.querySelector("summary");
const panel = menu?.querySelector<HTMLElement>(".menu-panel");

if (menu && summary && panel) {
  const links = panel.querySelectorAll<HTMLElement>(".menu-link");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* Row affordance: light parchment to ink, then the arrow slides in at the
     row's right edge. Same tween for pointer and keyboard focus. Colours come
     from the theme tokens, so the state cannot drift from the palette. */
  const root = getComputedStyle(document.documentElement);
  const ink = root.getPropertyValue("--color-ink-black").trim() || "#1d1d1b";
  const parchment = root.getPropertyValue("--color-parchment").trim() || "#e2dedb";

  const arrowOf = (link: HTMLElement) =>
    link.querySelector<HTMLElement>(".menu-arrow");

  const restRow = (link: HTMLElement) => {
    const arrow = arrowOf(link);
    gsap.to(link, {
      backgroundColor: "transparent",
      color: ink,
      duration: reduce.matches ? 0 : 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
    if (arrow) {
      /* Kill the pending reveal: a 100ms-delayed show would otherwise fire
         after a quick in/out and leave the arrow stranded at rest. */
      gsap.killTweensOf(arrow);
      gsap.to(arrow, {
        opacity: 0,
        x: -6,
        duration: reduce.matches ? 0 : 0.2,
        ease: "power2.in",
        overwrite: "auto",
      });
    }
  };

  const pickRow = (link: HTMLElement) => {
    const arrow = arrowOf(link);
    gsap.to(link, {
      backgroundColor: ink,
      color: parchment,
      duration: reduce.matches ? 0 : 0.32,
      ease: "power2.out",
      overwrite: "auto",
    });
    if (arrow) {
      gsap.killTweensOf(arrow);
      gsap.to(arrow, {
        opacity: 1,
        x: 0,
        duration: reduce.matches ? 0 : 0.26,
        delay: reduce.matches ? 0 : 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  links.forEach((link) => {
    const arrow = arrowOf(link);
    if (arrow) gsap.set(arrow, { opacity: 0, x: -6, yPercent: -50 });

    link.addEventListener("pointerenter", () => pickRow(link));
    link.addEventListener("pointerleave", () => {
      if (document.activeElement !== link) restRow(link);
    });
    link.addEventListener("focus", () => pickRow(link));
    link.addEventListener("blur", () => restRow(link));
  });

  let busy = false;

  /* CSS freeze alone is not enough: Lenis scrolls the page programmatically, so
     the wheel keeps working. Its opt-out attribute is the documented brake; it
     goes on <body> because Lenis stops walking the path at <html>. */
  const lockScroll = (locked: boolean) => {
    document.documentElement.classList.toggle("menu-open", locked);
    document.body.toggleAttribute("data-lenis-prevent", locked);
  };

  const resetRows = () => {
    links.forEach((link) => {
      const arrow = arrowOf(link);
      gsap.killTweensOf(arrow ? [link, arrow] : link);
      gsap.set(link, { clearProps: "backgroundColor,color" });
      if (arrow) gsap.set(arrow, { opacity: 0, x: -6 });
    });
  };

  const closedState = () => {
    menu.open = false;
    lockScroll(false);
    resetRows();
    busy = false;
  };

  const open = () => {
    menu.open = true;
    lockScroll(true);

    if (reduce.matches) {
      gsap.set(panel, { autoAlpha: 1, y: 0, clipPath: "none" });
      gsap.set(links, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.killTweensOf([panel, links]);
    gsap
      .timeline()
      .fromTo(
        panel,
        { autoAlpha: 0, clipPath: "inset(0% 0% 100% 0%)" },
        {
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.42,
          ease: "power3.out",
        },
      )
      .from(
        links,
        {
          autoAlpha: 0,
          y: 10,
          duration: 0.3,
          stagger: 0.04,
          ease: "power2.out",
        },
        0.05,
      );
  };

  const close = (immediate = false) => {
    if (immediate || reduce.matches) {
      gsap.killTweensOf([panel, links]);
      closedState();
      return;
    }

    busy = true;
    gsap.killTweensOf([panel, links]);
    gsap.to(panel, {
      autoAlpha: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.28,
      ease: "power2.in",
      onComplete: closedState,
    });
  };

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    if (busy) return;
    if (menu.open) close();
    else open();
  });

  menu.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      close();
      summary.focus();
    }
  });
}
