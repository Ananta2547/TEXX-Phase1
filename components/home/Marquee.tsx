import { Fragment } from "react";
import { marqueeItems } from "@/lib/home-content";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        paddingRight: "3rem",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "clamp(1.1rem,2vw,1.6rem)",
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

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(234,232,221,.12)",
        borderBottom: "1px solid rgba(234,232,221,.12)",
        overflow: "hidden",
        padding: "1.4rem 0",
        background: "#26281E",
      }}
    >
      <div
        data-marquee
        style={{
          display: "flex",
          width: "max-content",
          gap: 0,
          animation: "texx-marquee 34s linear infinite",
        }}
      >
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
