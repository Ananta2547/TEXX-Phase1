"use client";

// Material Families carousel — ported from the Products.dc.html DCLogic slider:
// responsive perView (1/2/3/4), autoplay 4s, pause on hover, looping arrows +
// progress dots. Track/card sizing is driven imperatively via refs, like the
// original; index/perView/paused are React state so the dots re-render.

import { useCallback, useEffect, useRef, useState } from "react";
import { materialFamilies } from "@/lib/products-content";

const GAP = 24;
const AUTOPLAY = 4000;
const PLACEHOLDER =
  "radial-gradient(120% 120% at 30% 20%, #4d503b 0%, #3f4232 46%, #2b2e22 100%)";

const perViewFor = (w: number) => (w < 640 ? 1 : w < 900 ? 2 : w < 1120 ? 3 : 4);

export default function MaterialCarousel() {
  const cats = materialFamilies;
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const [paused, setPaused] = useState(false);

  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const reduceRef = useRef(false);

  const maxIndex = Math.max(0, cats.length - perView);
  const pages = maxIndex + 1;

  const goTo = useCallback(
    (k: number) => {
      const railW = railRef.current?.clientWidth || 1200;
      const max = Math.max(0, cats.length - perViewFor(railW));
      let idx = k;
      if (idx > max) idx = 0; // loop to start
      if (idx < 0) idx = max; // loop to end
      setIndex(idx);
    },
    [cats.length],
  );

  const applyTrack = useCallback(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;
    const railW = rail.clientWidth;
    const per = perViewFor(railW);
    const w = (railW - GAP * (per - 1)) / per;
    cardsRef.current.forEach((c) => {
      if (c) c.style.width = `${w}px`;
    });
    const step = w + GAP;
    const max = Math.max(0, cats.length - per);
    const idx = Math.min(index, max);
    const maxShift = Math.max(0, track.scrollWidth - railW);
    const shift = Math.min(idx * step, maxShift);
    track.style.transform = `translateX(${-shift}px)`;
    cardsRef.current.forEach((c, k) => {
      if (!c) return;
      const active = k >= idx && k < idx + per;
      c.style.opacity = active ? "1" : "0.35";
      c.style.transform = active ? "scale(1)" : "scale(0.94)";
    });
    if (per !== perView) setPerView(per);
  }, [index, perView, cats.length]);

  // Mount: reduced-motion + initial sizing + resize handling.
  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPerView(perViewFor(railRef.current?.clientWidth || 1200));
    const onResize = () => {
      setPerView(perViewFor(railRef.current?.clientWidth || 1200));
      applyTrack();
    };
    window.addEventListener("resize", onResize);
    // apply after first paint so measurements are correct
    const raf = requestAnimationFrame(applyTrack);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-apply layout + (re)arm autoplay whenever index/perView/paused change.
  useEffect(() => {
    applyTrack();
    if (paused || reduceRef.current) return;
    const t = setTimeout(() => goTo(index + 1), AUTOPLAY);
    return () => clearTimeout(t);
  }, [index, perView, paused, applyTrack, goTo]);

  return (
    <section
      style={{
        padding: "var(--section-y) 0",
        background: "#26281E",
        borderTop: "1px solid rgba(234,232,221,.12)",
        overflow: "hidden",
      }}
    >
      {/* header */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem", flexWrap: "wrap", marginBottom: "clamp(2rem,4vw,3rem)" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: ".75rem", fontWeight: 500, letterSpacing: ".24em", textTransform: "uppercase", color: "#B99A6B" }}>
              Material Families
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-.01em", color: "#F5F4EE", margin: "1rem 0 0" }}>
              เลื่อนดูวัสดุทั้งหมด
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
            <button onClick={() => goTo(index - 1)} aria-label="Previous" data-cursor className="texx-navbtn" style={navBtn}>←</button>
            <button onClick={() => goTo(index + 1)} aria-label="Next" data-cursor className="texx-navbtn" style={navBtn}>→</button>
          </div>
        </div>
      </div>

      {/* viewport + track */}
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ overflow: "visible", padding: "0 var(--gutter)" }}>
        <div ref={railRef} style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={trackRef} style={{ display: "flex", gap: GAP, transition: "transform 850ms cubic-bezier(0.16,1,0.3,1)", willChange: "transform" }}>
            {cats.map((c, k) => (
              <article
                key={c.title}
                ref={(el) => { cardsRef.current[k] = el; }}
                data-cursor
                className="texx-slide"
                style={{ flex: "0 0 auto", width: 300, background: "#434634", border: "1px solid rgba(234,232,221,.12)", borderRadius: 12, overflow: "hidden", transition: "transform 850ms cubic-bezier(0.16,1,0.3,1), box-shadow 700ms cubic-bezier(0.16,1,0.3,1), opacity 850ms cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
                  <div data-zoom data-bg={c.img} data-pos={c.pos} style={{ position: "absolute", inset: 0, background: PLACEHOLDER, transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 100% at 30% 20%,rgba(185,154,107,.2),transparent 60%)" }} />
                </div>
                <div style={{ padding: "1.4rem 1.5rem 1.6rem" }}>
                  <span style={{ display: "block", fontSize: ".72rem", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: "#B99A6B", marginBottom: ".6rem" }}>{c.tag}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", color: "#F5F4EE", margin: 0 }}>{c.title}</h3>
                  <p style={{ color: "#A9A99A", fontSize: ".95rem", margin: ".6rem 0 0" }}>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* dots */}
      <div style={{ maxWidth: 1280, margin: "clamp(2rem,4vw,3rem) auto 0", padding: "0 var(--gutter)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
          {Array.from({ length: pages }, (_, k) => {
            const active = k === Math.min(index, maxIndex);
            return (
              <button
                key={k}
                onClick={() => goTo(k)}
                aria-label={`Go to slide ${k + 1}`}
                data-cursor
                style={{ height: 4, border: "none", borderRadius: 2, padding: 0, cursor: "pointer", background: "rgba(234,232,221,.18)", overflow: "hidden", transition: "width 500ms cubic-bezier(0.16,1,0.3,1), background 500ms", width: active ? 38 : 18 }}
              >
                <span style={{ display: "block", height: "100%", background: "#B99A6B", transformOrigin: "left", transform: `scaleX(${active ? 1 : 0})`, transition: `transform ${active ? AUTOPLAY : 300}ms linear` }} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const navBtn: React.CSSProperties = {
  width: 52,
  height: 52,
  borderRadius: "50%",
  border: "1px solid rgba(234,232,221,.24)",
  background: "transparent",
  color: "#EAE8DD",
  fontSize: "1.2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 400ms cubic-bezier(0.16,1,0.3,1), border-color 400ms, color 400ms",
};
