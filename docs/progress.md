# TEXX — Progress

## 2026-07-20 — Products page updated to new design (carousel + Services)
- Design source `Products.dc.html` was updated upstream: the 4-card grid became a **Material Families carousel** (8 cards) and a real **Services** section was added.
- **MaterialCarousel** (`components/products/MaterialCarousel.tsx`, client) ports the DCLogic slider: responsive perView (1/2/3/4), autoplay 4s, pause-on-hover, looping prev/next arrows, progress dots (active dot fills over autoplay), imperative track/card sizing via refs + index/perView/paused state. Cards use `.texx-slide` (hover shadow); no lift/curtain.
- **Services** (`components/products/Services.tsx`) = design version: header "มากกว่าการขายวัสดุ" + 4-cell hairline-bordered grid (Material Consulting / Sampling & Mockup / Fabrication & Cut / Delivery & Install), `.texx-service` hover.
- Content in `lib/products-content.ts` (materialFamilies 8, services 4). Old `Categories.tsx` deleted.
- Products flow now: Hero → MaterialCarousel → Sourcing → Finishing → Services → CTA.
- Verified: tsc + build pass (/products 2.97kB client), carousel autoplay/arrows/dots work, 8 slides, 4 services.

---


## 2026-07-20 — Contact page (built via frontend-engineer agent) — ALL PAGES DONE
- **Contact page** (`app/contact/page.tsx`) ported 1:1 from `Contact.dc.html`: Heading (olive, two-line mask) + FormSection (grid 1.4fr/1fr: client form left, info column right) + footer. Sections in `components/contact/`.
- **ContactForm** = client component (`useState(submitted)`); onSubmit = `preventDefault + setSubmitted(true)` only — **no network/backend**, state-only per design. Fields use `.texx-field` (focus → bronze underline, placeholder color added to globals). Submit = cream `texx-btn-primary`. Shows thank-you on submit.
- Verified: build passes (6 routes static), form submit shows thank-you without reload, nav Contact active.
- **All 5 content pages complete**: Home, About, Products, Portfolio, Contact. Remaining work = real photos into `public/assets/`, optional Supabase wiring for the contact form (needs a Server Action/endpoint — currently state-only).

---


## 2026-07-20 — Portfolio page (built via frontend-engineer agent)
- **Portfolio page** (`app/portfolio/page.tsx`) ported 1:1 from `Portfolio.dc.html`: Hero (64vh, showroom-right) · 6-project grid (`.texx-card-work` lift, aspect 16/11) · Stats (accent `#8C7550`, portfolio order) · CTA (dark bg, cream primary button) + footer. Sections in `components/portfolio/`, data in `lib/portfolio-content.ts`.
- `Stats` extended: now takes optional `items` prop (default = home stats) + existing `accentColor`.
- Built by the `frontend-engineer` subagent; verified in-browser (4 sections, 6 cards, nav Work active, cream button).
- **Gotcha**: running `next build` while the dev server is live corrupts `.next` (`Cannot find module './448.js'`). Fix = stop dev, `rm -rf .next`, restart. Don't build against a running dev server.
- Remaining page: **Contact** (has a form — source in hand).

---


## 2026-07-20 — Products page
- **Products page** (`app/products/page.tsx`) ported 1:1 from `Products.dc.html`: Hero (66vh, materials) · 4-category grid (reuses `products` from home-content, `.texx-card` lift) · Sourcing (image-left) · Finishing (image-left, dark, order-swap) · CTA + footer. Sections in `components/products/`.
- Reuses shared `MotionRoot` / `Nav` (auto-active on /products) / `Footer`.
- Verified: `tsc` + build pass (6 routes, /products static), nav active correct, all content present.

---


## 2026-07-20 — About page + shared chrome + fixes
- **About page** (`app/about/page.tsx`) ported 1:1 from `About.dc.html`: Hero (72vh, ken-burns soft) · Our Story · Values (3 principles) · Stats · Quote · CTA + footer. Sections in `components/about/`. Content in `lib/about-content.ts`.
- **Shared chrome**: `Nav` now client + route-aware (`usePathname` → active link bronze + underline). `Stats` takes `accentColor` prop (About uses `#8C7550`). Home + About both reuse `MotionRoot` / `Nav` / `Footer` / `Stats`.
- **Card hover lift fixed**: `data-reveal` sets inline `transform:none`, which overrode the CSS `:hover` lift → cards never lifted. Now driven inline via MotionRoot delegation (translateY(-6px) + shadow, 700ms) for `.texx-card`/`.texx-card-work`.
- **Removed cursor-follow glow** on buttons (per request); kept sheen sweep + arrow + hover bg. Custom cursor (dot/ring) already removed earlier.
- **Fidelity fixes**: body bg `#1E2016` → `#34372A` (match design); button text/z-index cleaned so sheen sweeps over text like source.
- Verified: `tsc` + `next build` pass (5 routes, /about static); About renders, nav active correct, card lift works.

---


## 2026-07-20 — Home page implemented from Claude Design import
- Scaffolded Next.js 14 (App Router) + TypeScript + Tailwind. Tokens wired from `styles/tailwind.tokens.ts` + `styles/tokens.css`.
- Imported design project `5bb70dd6-9fe4-4c8b-b078-90732e3e7997` (`TEXX Home.dc.html`) via claude_design MCP; ported 1:1 from Design Composer format to React.
- Fonts via `next/font` (Sora, Inter, Noto Sans Thai, IBM Plex Sans Thai) mapped onto `--font-display` / `--font-body`.

### หน้า Home — โครง
- `app/page.tsx` → `<MotionRoot>` ครอบ 9 ส่วน: Nav · Hero · Marquee · About · Collections(Products) · Stats · Work · Contact · Footer
- Section components = server (markup + `data-*` hooks) ใน `components/home/`
- `components/home/MotionRoot.tsx` ("use client") = port ของ DCLogic `componentDidMount` ทั้งก้อน (intro curtain, scroll progress, custom cursor+ring, nav blur+stagger, hero parallax, reveal fade/rise/blur + line-mask + image curtain, card hover zoom, animated underline, magnetic button + glow + sheen, counters, marquee, floating accents) + cleanup ครบ. เคารพ `prefers-reduced-motion`
- Content data: `lib/home-content.ts`
- Logo: `components/TexxLogo.tsx` (SVG wordmark)

### ยังไม่เสร็จ / ต้องทำต่อ
- **รูปภาพจริงยังไม่มี** — ไฟล์ .jpg ต้นฉบับเกินลิมิตถ่ายโอน MCP (256KB) ตอนนี้ใช้ placeholder gradient. ดาวน์โหลดจากโปรเจกต์ design แล้ววางที่ `public/assets/` (ดู `public/assets/README.md`) — หน้าเว็บจะ swap ให้อัตโนมัติผ่าน `data-bg`
- หน้าอื่นยังไม่ทำ: About, Products, Portfolio, Contact (routes ลิงก์ไว้แล้ว: /about /products /portfolio /contact)
- ยังไม่ได้ต่อ Supabase

### Verify
- `npx tsc --noEmit` ✓ · `npm run build` ✓ (home prerendered static) · dev server 200, no console errors, DOM/motion hooks ครบ
