"use client";

// Faithful port of the Claude Design DCLogic (componentDidMount) for the TEXX
// home page. Sections are pure server markup carrying data-* hooks; this client
// component owns the interactive overlays and wires every effect via
// querySelectorAll + event delegation, exactly like the original vanilla class.

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import TexxLogo from "@/components/TexxLogo";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function MotionRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const introLogoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion = !reduce;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const cleanups: (() => void)[] = [];

    // ---- applyImages: swap gradient placeholder for real photo only if it loads
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

    // ---- Intro curtain
    const intro = introRef.current;
    const introLogo = introLogoRef.current;
    if (intro) {
      if (!motion) {
        intro.style.display = "none";
      } else {
        requestAnimationFrame(() => {
          if (introLogo) {
            introLogo.style.opacity = "1";
            introLogo.style.transform = "translateY(0) scale(1)";
          }
        });
        timers.push(
          setTimeout(() => {
            intro.style.transform = "translateY(-101%)";
          }, 1150),
        );
        timers.push(
          setTimeout(() => {
            intro.style.display = "none";
          }, 2150),
        );
      }
    }

    // ---- Reveal on scroll (fade + rise + blur, line-mask, image curtain)
    const revealTargets = () =>
      root.querySelectorAll<HTMLElement>(
        "[data-reveal],[data-reveal-line],[data-curtain]",
      );

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

    let io: IntersectionObserver | null = null;

    if (motion) {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const d = parseFloat(el.getAttribute("data-delay") || "0");
        el.style.opacity = "0";
        el.style.transform = "translateY(34px)";
        el.style.filter = "blur(7px)";
        el.style.transition = `opacity 1000ms ${EASE} ${d}ms, transform 1050ms ${EASE} ${d}ms, filter 1000ms ${EASE} ${d}ms`;
      });
      root.querySelectorAll<HTMLElement>("[data-reveal-line]").forEach((el) => {
        const d = parseFloat(el.getAttribute("data-delay") || "0");
        el.style.transform = "translateY(112%)";
        el.style.transition = `transform 1100ms ${EASE} ${d}ms`;
      });
      root.querySelectorAll<HTMLElement>("[data-curtain]").forEach((c) => {
        const z = c.parentElement?.querySelector<HTMLElement>("[data-zoom]");
        if (z) z.style.transform = "scale(1.12)";
      });

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement);
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      const els = revealTargets();
      const vh = window.innerHeight || 800;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) reveal(el); // in view at mount
        else io?.observe(el);
      });
      timers.push(setTimeout(() => els.forEach(reveal), 2600)); // safety net
    } else {
      root.querySelectorAll<HTMLElement>("[data-curtain]").forEach((el) => {
        el.style.transform = "scaleX(0)";
      });
    }

    // ---- Counters
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
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
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
    root
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((el) => cio.observe(el));

    // ---- Nav bar reference (menu links stay visible; only the bar background
    // drops in on scroll — see onScroll below).
    const nav = root.querySelector<HTMLElement>("[data-nav]");

    // ---- Scroll: progress + nav bg + hero parallax
    const heroBg = root.querySelector<HTMLElement>("[data-herobg]");
    const heroContent = root.querySelector<HTMLElement>("[data-herocontent]");
    const progress = progressRef.current;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (progress)
          progress.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
        if (nav) {
          if (y > 40) {
            nav.style.background = "rgba(38,40,30,.82)";
            nav.style.backdropFilter = "blur(12px)";
            (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter =
              "blur(12px)";
            nav.style.borderBottomColor = "rgba(234,232,221,.12)";
          } else {
            nav.style.background = "transparent";
            nav.style.backdropFilter = "none";
            (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter =
              "none";
            nav.style.borderBottomColor = "transparent";
          }
        }
        if (heroBg && motion) heroBg.style.transform = `translateY(${y * 0.22}px)`;
        if (heroContent && motion) {
          const v = window.innerHeight || 1;
          const p = Math.min(y / v, 1);
          heroContent.style.transform = `translateY(${y * 0.12}px)`;
          heroContent.style.opacity = `${Math.max(1 - p * 1.1, 0)}`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
    onScroll();

    // ---- Hover delegation: underline / card zoom / arrow / magnet glow
    const onOverDeleg = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const c = target.closest<HTMLElement>("[data-cursor]");
      if (c) {
        const u = c.querySelector<HTMLElement>("[data-underline]");
        if (u) u.style.transform = "scaleX(1)";
        if (motion) {
          const z = c.querySelector<HTMLElement>("[data-zoom]");
          if (z) z.style.transform = "scale(1.06)";
          // Card lift (data-reveal sets inline transform:none, so the CSS
          // :hover lift is overridden — drive it inline here instead).
          if (c.classList.contains("texx-card") || c.classList.contains("texx-card-work")) {
            c.style.transition = `transform 700ms ${EASE}, box-shadow 700ms ${EASE}`;
            c.style.transform = "translateY(-6px)";
            c.style.boxShadow = c.classList.contains("texx-card-work")
              ? "0 30px 60px -26px rgba(0,0,0,.6)"
              : "0 28px 55px -24px rgba(0,0,0,.6)";
          }
        }
      }
      const m = target.closest<HTMLElement>("[data-magnet]");
      if (m) {
        const s = m.querySelector<HTMLElement>("[data-sheen]");
        if (s) s.style.transform = "translateX(120%)";
        const a = m.querySelector<HTMLElement>("[data-arrow]");
        if (a) a.style.transform = "translateX(5px)";
      }
    };
    const onOutDeleg = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;
      const c = target.closest<HTMLElement>("[data-cursor]");
      if (c && !c.contains(related)) {
        const u = c.querySelector<HTMLElement>("[data-underline]");
        if (u) u.style.transform = c.hasAttribute("data-active") ? "scaleX(1)" : "scaleX(0)";
        const z = c.querySelector<HTMLElement>("[data-zoom]");
        if (z) z.style.transform = "scale(1)";
        if (c.classList.contains("texx-card") || c.classList.contains("texx-card-work")) {
          c.style.transform = "none";
          c.style.boxShadow = "none";
        }
      }
      const m = target.closest<HTMLElement>("[data-magnet]");
      if (m && !m.contains(related)) {
        const a = m.querySelector<HTMLElement>("[data-arrow]");
        if (a) a.style.transform = "translateX(0)";
        const s = m.querySelector<HTMLElement>("[data-sheen]");
        if (s) {
          s.style.transition = "none";
          s.style.transform = "translateX(-120%)";
          requestAnimationFrame(() => {
            s.style.transition = `transform 750ms ${EASE}`;
          });
        }
      }
    };
    document.addEventListener("mouseover", onOverDeleg);
    document.addEventListener("mouseout", onOutDeleg);
    cleanups.push(() => document.removeEventListener("mouseover", onOverDeleg));
    cleanups.push(() => document.removeEventListener("mouseout", onOutDeleg));

    // ---- One-shot sheen sweep on load
    if (motion) {
      timers.push(
        setTimeout(() => {
          root.querySelectorAll<HTMLElement>("[data-sheen]").forEach((s) => {
            s.style.transform = "translateX(120%)";
            setTimeout(() => {
              s.style.transition = "none";
              s.style.transform = "translateX(-120%)";
              requestAnimationFrame(() => {
                s.style.transition = `transform 750ms ${EASE}`;
              });
            }, 850);
          });
        }, 1650),
      );
    }

    return () => {
      cleanups.forEach((fn) => fn());
      if (io) io.disconnect();
      cio.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div
      ref={rootRef}
      id="top"
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
      {/* Intro curtain */}
      <div
        ref={introRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 11000,
          background: "#1E2016",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 950ms cubic-bezier(0.76,0,0.24,1)",
        }}
      >
        <div
          ref={introLogoRef}
          style={{
            color: "#F5F4EE",
            opacity: 0,
            transform: "translateY(14px) scale(.97)",
            transition:
              "opacity 750ms cubic-bezier(0.16,1,0.3,1), transform 950ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <TexxLogo height={120} />
        </div>
      </div>

      {/* Scroll progress */}
      <div
        ref={progressRef}
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
