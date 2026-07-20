// Sheen sweep layer for buttons, rendered in JSX (React-owned) so MotionRoot
// only reads/animates it — never injects DOM into React's tree.
// Parent button must be position:relative; overflow:hidden.
// (No cursor-tracking glow — per request, buttons don't react to mouse position.)
export function MagnetFx() {
  return (
    <span
      data-sheen
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(105deg,transparent 42%,rgba(245,244,238,.35) 50%,transparent 58%)",
        transform: "translateX(-120%)",
        transition: "transform 750ms cubic-bezier(0.16,1,0.3,1)",
        zIndex: 1,
      }}
    />
  );
}
