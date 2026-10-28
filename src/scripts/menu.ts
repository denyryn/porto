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
  const portrait = window.matchMedia(
    "(max-width: 1023.98px) and (orientation: portrait)",
  );

  let busy = false;

  const closedState = () => {
    menu.open = false;
    document.documentElement.classList.remove("menu-open");
    busy = false;
  };

  const open = () => {
    menu.open = true;
    document.documentElement.classList.toggle("menu-open", portrait.matches);

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
        {
          autoAlpha: 0,
          y: portrait.matches ? 0 : -6,
          clipPath: portrait.matches
            ? "inset(0% 0% 100% 0%)"
            : "inset(0% 0% 0% 0%)",
        },
        {
          autoAlpha: 1,
          y: 0,
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
