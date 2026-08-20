import { Fragment } from "react";
import { marqueeItems } from "@/lib/home-content";

// The strip is rendered twice so the -50% keyframe loops without a seam.
function Run({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.75rem",
        paddingRight: "1.75rem",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "1.05rem",
        letterSpacing: ".02em",
        color: "#A9A99A",
        whiteSpace: "nowrap",
      }}
    >
      {marqueeItems.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span style={{ color: "#B99A6B" }}>◆</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function MobileMarquee() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(234,232,221,.12)",
        borderBottom: "1px solid rgba(234,232,221,.12)",
        overflow: "hidden",
        padding: "1rem 0",
        background: "#26281E",
      }}
    >
      <div
        data-marquee
        style={{
          display: "flex",
          width: "max-content",
          animation: "texx-marquee 30s linear infinite",
        }}
      >
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
