"use client";

// Port of texx-motion.js — the motion module the inner mobile pages share
// (TEXX Contact/About/Products/Portfolio Mobile.dc.html all call wireMotion +
// wireDrawer rather than carrying their own script the way Home Mobile does).
//
// Sections stay pure server markup carrying data-* hooks; this owns the
// progress bar and wires reveals, the nav ground and the sheen sweep. Scoped
// to its own #m-top root.

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function MobileShell({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const cleanups: (() => void)[] = [];

    // ---- Swap the gradient placeholder for the real photo once it loads
    root.querySelectorAll<HTMLElement>("[data-bg]").forEach((el) => {
      const u = el.getAttribute("data-bg");
      if (!u) return;
      const img = new Image();
      img.onload = () => {
        el.style.backgroundImage = `url('${u}')`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = el.getAttribute("data-pos") || "center";
        el.style.backgroundRepeat = "no-repeat";
      };
      img.src = u;
    });

    // ---- Drawer (wireDrawer)
    const drawer = root.querySelector<HTMLElement>("[data-drawer]");
    const openBtn = root.querySelector<HTMLElement>("[data-menu-open]");
    const closeBtn = root.querySelector<HTMLElement>("[data-menu-close]");
    let closeTimer: ReturnType<typeof setTimeout> | undefined;
    const openDrawer = () => {
      if (!drawer) return;
      if (closeTimer) clearTimeout(closeTimer);
      drawer.style.visibility = "visible";
      requestAnimationFrame(() => { drawer.style.transform = "translateY(0)"; });
    };
    const closeDrawer = () => {
      if (!drawer) return;
      drawer.style.transform = "translateY(-100%)";
      closeTimer = setTimeout(() => { drawer.style.visibility = "hidden"; }, 700);
      timers.push(closeTimer);
    };
    openBtn?.addEventListener("click", openDrawer);
    closeBtn?.addEventListener("click", closeDrawer);
    const drawerLinks = Array.from(root.querySelectorAll<HTMLElement>("[data-drawer-link]"));
    drawerLinks.forEach((a) => a.addEventListener("click", closeDrawer));
    cleanups.push(() => {
      openBtn?.removeEventListener("click", openDrawer);
      closeBtn?.removeEventListener("click", closeDrawer);
      drawerLinks.forEach((a) => a.removeEventListener("click", closeDrawer));
    });

    // ---- Scroll reveals
    const reveal = (t: HTMLElement) => {
      if (t.hasAttribute("data-curtain")) {
        t.style.transform = "scaleX(0)";
        const z = t.parentElement?.querySelector<HTMLElement>("[data-zoom]");
        if (z) z.style.transform = "scale(1)";
      } else if (t.hasAttribute("data-reveal-line")) {
        t.style.transform = "translateY(0)";
      } else {
        t.style.opacity = "1";
        t.style.transform = "none";
        t.style.filter = "none";
      }
    };

    if (motion) {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const d = parseFloat(el.getAttribute("data-delay") || "0");
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.filter = "blur(6px)";
        el.style.transition = `opacity 950ms ${EASE} ${d}ms, transform 1000ms ${EASE} ${d}ms, filter 950ms ${EASE} ${d}ms`;
      });
      root.querySelectorAll<HTMLElement>("[data-reveal-line]").forEach((el) => {
        const d = parseFloat(el.getAttribute("data-delay") || "0");
        el.style.transform = "translateY(112%)";
        el.style.transition = `transform 1050ms ${EASE} ${d}ms`;
      });
      root.querySelectorAll<HTMLElement>("[data-curtain]").forEach((c) => {
        const z = c.parentElement?.querySelector<HTMLElement>("[data-zoom]");
        if (z) z.style.transform = "scale(1.12)";
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      const els = Array.from(
        root.querySelectorAll<HTMLElement>("[data-reveal],[data-reveal-line],[data-curtain]"),
      );
      const vh = window.innerHeight || 800;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) reveal(el);
        else io.observe(el);
      });
      // Safety net: nothing stays invisible if an observer never fires.
      timers.push(setTimeout(() => els.forEach(reveal), 2600));
      cleanups.push(() => io.disconnect());
    } else {
      root.querySelectorAll<HTMLElement>("[data-curtain]").forEach((el) => {
        el.style.transform = "scaleX(0)";
      });
    }

    // ---- Stat counters
    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      if (!motion) {
        el.textContent = target.toLocaleString();
        return;
      }
      const dur = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))).toLocaleString();
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    // ---- Card rail: dots track the snapped card (wireRail)
    const rail = root.querySelector<HTMLElement>("[data-rail]");
    const dots = Array.from(root.querySelectorAll<HTMLElement>("[data-dot]"));
    const paintDots = () => {
      if (!rail || !dots.length) return;
      const card = rail.children[0] as HTMLElement | undefined;
      const step = card ? card.getBoundingClientRect().width + 16 : 1;
      const i = Math.min(dots.length - 1, Math.round(rail.scrollLeft / step));
      dots.forEach((d, n) => {
        d.style.background = n === i ? "#B99A6B" : "rgba(234,232,221,.16)";
      });
    };
    if (rail) {
      rail.addEventListener("scroll", paintDots, { passive: true });
      cleanups.push(() => rail.removeEventListener("scroll", paintDots));
      paintDots();
    }

    // ---- Scroll: progress, nav ground, hero parallax, sticky CTA
    const nav = root.querySelector<HTMLElement>("[data-nav]");
    const progress = root.querySelector<HTMLElement>("[data-progress]");
    const heroBg = root.querySelector<HTMLElement>("[data-herobg]");
    const heroContent = root.querySelector<HTMLElement>("[data-herocontent]");
    const ctaBar = root.querySelector<HTMLElement>("[data-cta-bar]");
    // The bar stands down once the page's own CTA section is close enough to
    // read — two calls to action competing on one screen is the thing to avoid.
    const hideSelector = ctaBar?.getAttribute("data-cta-hide-target");
    const hideTarget = hideSelector ? root.querySelector<HTMLElement>(hideSelector) : null;
    const scroller = document.scrollingElement || document.documentElement;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || scroller.scrollTop || 0;
        const vh = window.innerHeight || 1;
        const h = scroller.scrollHeight - vh;
        if (progress) progress.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
        if (nav) {
          const on = y > 40;
          nav.style.background = on ? "rgba(38,40,30,.86)" : "transparent";
          nav.style.backdropFilter = on ? "blur(12px)" : "none";
          // Safari still needs the prefix; it is not in the typed CSS surface.
          nav.style.setProperty("-webkit-backdrop-filter", on ? "blur(12px)" : "none");
          nav.style.borderBottomColor = on ? "rgba(234,232,221,.12)" : "transparent";
        }
        if (heroBg && motion) heroBg.style.transform = `translateY(${y * 0.16}px)`;
        if (heroContent && motion) {
          const p = Math.min(y / vh, 1);
          heroContent.style.transform = `translateY(${y * 0.08}px)`;
          heroContent.style.opacity = `${Math.max(1 - p * 1.15, 0)}`;
        }
        if (ctaBar) {
          const nearTarget = hideTarget
            ? hideTarget.getBoundingClientRect().top < vh * 0.9
            : false;
          const show = y > vh * 0.9 && !nearTarget;
          ctaBar.style.transform = show ? "translateY(0)" : "translateY(120%)";
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    // ---- One sheen sweep across the primary buttons
    if (motion) {
      timers.push(
        setTimeout(() => {
          root.querySelectorAll<HTMLElement>("[data-sheen]").forEach((s) => {
            s.style.transform = "translateX(120%)";
            timers.push(
              setTimeout(() => {
                s.style.transition = "none";
                s.style.transform = "translateX(-120%)";
                requestAnimationFrame(() => {
                  s.style.transition = `transform 750ms ${EASE}`;
                });
              }, 850),
            );
          });
        }, 900),
      );
    }

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div
      id="m-top"
      ref={rootRef}
      style={{
        background: "#34372A",
        color: "#EAE8DD",
        fontFamily: "var(--font-body)",
        lineHeight: 1.7,
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <div
        data-progress
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: "100%",
          background: "#B99A6B",
          transform: "scaleX(0)",
          transformOrigin: "left",
          zIndex: 10000,
        }}
      />
      {children}
    </div>
  );
}
