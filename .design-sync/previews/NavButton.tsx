import { Heading, NavButton, TexxRoot } from "@texx/ui";

export const Pair = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", display: "flex", gap: ".75rem" }}>
      <NavButton direction="prev" />
      <NavButton direction="next" />
    </div>
  </TexxRoot>
);

export const BesideAHeading = () => (
  <TexxRoot>
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: "2rem",
      }}
    >
      <Heading level="h2">เลื่อนดูวัสดุทั้งหมด</Heading>
      <div style={{ display: "flex", gap: ".75rem", flex: "0 0 auto" }}>
        <NavButton direction="prev" />
        <NavButton direction="next" />
      </div>
    </div>
  </TexxRoot>
);

export const AtTheStart = () => (
  <TexxRoot>
    <div style={{ padding: "2rem", display: "flex", gap: ".75rem" }}>
      <NavButton direction="prev" disabled />
      <NavButton direction="next" />
    </div>
  </TexxRoot>
);
