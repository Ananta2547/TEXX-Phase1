import { Marquee, TexxRoot } from "@texx/ui";

export const MaterialNames = () => (
  <TexxRoot>
    <div style={{ padding: "2rem 0" }}>
      <Marquee
        items={[
          "Travertine",
          "Calacatta Gold",
          "Terrazzo",
          "Brushed Bronze",
          "Smoked Oak",
          "Basalt",
          "Onyx",
          "Limestone",
        ]}
      />
    </div>
  </TexxRoot>
);

export const Slower = () => (
  <TexxRoot>
    <div style={{ padding: "2rem 0" }}>
      <Marquee
        duration={45}
        items={["Italy", "Turkey", "Portugal", "Brazil", "Vietnam", "Japan"]}
      />
    </div>
  </TexxRoot>
);
