# Building with TEXX

TEXX is a premium building-materials brand — natural stone, engineered surfaces, metal, wood. The
design language is quiet luxury: a dark olive ground, cream type, one warm bronze accent used
sparingly, generous whitespace, and slow soft motion. Copy is usually Thai with English headings.

## Always wrap in `TexxRoot`

`TexxRoot` paints the olive ground, sets the body typeface and the 1.7 line rhythm, and normalises
`box-sizing` for everything inside it. Components rendered outside it inherit the host page's white
background and default font, so they look broken even though nothing errored. Wrap once, at the top:

```jsx
<TexxRoot>
  <Section tone="olive">…</Section>
  <Section tone="olive-deep">…</Section>
</TexxRoot>
```

There is no theme provider and no context — `TexxRoot` is a plain styled wrapper, and nesting one
inside another is harmless.

## Style with tokens, not utility classes

There is no utility-class system here. Components are configured entirely through **props**, and any
layout glue you write yourself should read from the CSS custom properties the library defines. Never
hard-code a hex value; every colour in the brand already has a token.

Palette tokens: `--texx-olive-950` `--texx-olive-900` `--texx-olive-800` `--texx-olive-700`
`--texx-olive-600` · `--texx-cream` `--texx-cream-muted` `--texx-cream-dim` `--texx-white` ·
`--texx-bronze` `--texx-bronze-light` `--texx-bronze-dark`

Semantic aliases (prefer these): `--bg` `--bg-deep` `--surface` `--text` `--text-muted` `--text-dim`
`--accent` `--border` `--border-strong`

Scale and motion: `--fs-display` `--fs-h1` `--fs-h2` `--fs-h3` `--fs-body-lg` `--fs-body`
`--fs-small` `--fs-eyebrow` · `--radius-sm` (2px) `--radius-md` (6px) `--radius-lg` (12px) ·
`--dur-fast` (200ms) `--dur-base` (400ms) `--dur-slow` (700ms) `--dur-reveal` (900ms) ·
`--ease-out` `--ease-inout` · `--content-max` (1280px) `--gutter` `--section-y`

```jsx
<div style={{ display: "grid", gap: 24, padding: "var(--section-y) var(--gutter)" }}>
```

## Three rules that make it look like TEXX

1. **Bronze is a garnish, not a colour scheme.** Keep `--accent` under about 5% of any screen —
   eyebrows, a hairline, one hover state. Olive carries ~90%, cream is the type. Bronze used broadly
   is the single fastest way to make this brand look cheap.
2. **Every section opens with an `Eyebrow`.** Small, uppercase, 0.24em tracking, bronze, sitting
   directly above the `Heading`. It is the brand's signature — do not skip it, and do not invent a
   different label style.
3. **Space is the luxury.** Use `Section`, which already applies `--section-y` vertical rhythm and
   `--gutter` sides. Do not tighten it to fit more in.

## On light grounds, flip the `on` prop

`Section tone="light"` puts you on cream. `Eyebrow`, `Heading`, `Stat` and `TextLink` each take
`on="light"` (or `on="dark"` for `Stat`), which swaps to the darker bronze and near-black type.
Forgetting it leaves cream text on a cream ground.

## Where the truth is

Read `styles.css` and everything it `@import`s — that is the whole styling surface, tokens included.
Each component's `.prompt.md` carries its props and intent; each `.d.ts` is the exact API. Prefer
reading those over guessing from this summary.

## A typical composition

```jsx
<TexxRoot>
  <Section tone="olive-deep">
    <Eyebrow>Products</Eyebrow>
    <Heading level="h2">Signature materials</Heading>
    <div style={{
      marginTop: "2rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: 24,
    }}>
      <MaterialCard tag="Natural Stone" title="Marble & Travertine"
        description="หินธรรมชาติจากเหมืองคัดเกรด โทนอบอุ่น ลายเฉพาะตัวทุกแผ่น" />
      <MaterialCard tag="Metal" title="Brushed Bronze"
        description="โลหะบรอนซ์ผิวขัดด้าน ให้ดีเทลระดับพรีเมียม" />
    </div>
    <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.75rem", alignItems: "center" }}>
      <Button variant="primary" arrow>ดูคอลเลกชัน</Button>
      <TextLink href="/portfolio">ดูผลงาน</TextLink>
    </div>
  </Section>
</TexxRoot>
```

## Motion is CSS, and it is already there

Hover lift, image zoom, the bronze underline draw, the button sheen and the marquee all ship in the
stylesheet and respect `prefers-reduced-motion`. You do not need an animation library, and you should
not add scroll-reveal scripts — the components handle their own states.
