# TEXX — Design System

แบรนด์วัสดุพรีเมียม โทน **หรูหรา เรียบง่าย (quiet luxury)** อารมณ์เดียวกับโชว์รูมหิน/วัสดุระดับไฮเอนด์
หลักคิด: พื้นที่ว่างเยอะ, คอนทราสต์ต่ำแต่คม, ดีเทลโลหะบรอนซ์แต้มเล็กน้อย, แอนิเมชันช้า–นุ่ม–แพง

> ไฟล์นี้เป็น **source of truth** ของงานดีไซน์ ทุก agent (frontend / architect) ต้องยึดตามนี้

---

## 1. Color Palette

โทนหลัก: **Olive เข้ม + ครีม** พร้อมแอคเซนต์ **Bronze** (โลหะอุ่น) สำหรับดีเทลระดับพรีเมียม

### Olive (แบรนด์หลัก / พื้นหลัง)
| Token | HEX | ใช้ตรงไหน |
|-------|-----|-----------|
| `olive-950` | `#1E2016` | พื้นหลังลึกสุด, footer |
| `olive-900` | `#26281E` | พื้นหลัง section สลับ |
| `olive-800` | `#34372A` | **พื้นหลังหลัก** (ตรงกับพื้นโลโก้) |
| `olive-700` | `#434634` | การ์ด / surface ยกระดับ |
| `olive-600` | `#565A45` | เส้นขอบเข้ม, hover surface |

### Cream (ตัวอักษร / off-white)
| Token | HEX | ใช้ตรงไหน |
|-------|-----|-----------|
| `cream` | `#EAE8DD` | **ตัวอักษรหลัก** บนพื้น olive |
| `cream-muted` | `#A9A99A` | ตัวอักษรรอง, คำอธิบาย |
| `cream-dim` | `#7B7C6E` | ตัวอักษรจาง, caption, meta |
| `white` | `#F5F4EE` | ไฮไลต์, หัวข้อใหญ่, โลโก้ |

### Bronze (แอคเซนต์)
| Token | HEX | ใช้ตรงไหน |
|-------|-----|-----------|
| `bronze` | `#B99A6B` | **แอคเซนต์หลัก** เส้นใต้ลิงก์, ไอคอน, เส้นคั่น |
| `bronze-light` | `#D0B588` | hover ของแอคเซนต์ |
| `bronze-dark` | `#8C7550` | เงา/ขอบของแอคเซนต์ |

### กติกาการใช้สี
- ใช้ olive เป็นฐาน 90%, cream เป็นตัวอักษร, bronze **แต้มไม่เกิน 5%** ของหน้า (นั่นคือสิ่งที่ทำให้ดูแพง อย่าใช้เยอะ)
- คอนทราสต์ตัวอักษรหลัก cream บน olive-800 ผ่าน WCAG AA (≥ 4.5:1)
- เส้นขอบ default = `rgba(234,232,221,0.12)` (cream โปร่ง) ไม่ใช้เส้นดำ
- ห้ามใช้สีสด/นีออน หรือ gradient ฉูดฉาด — luxury = flat + subtle

---

## 2. Typography

**Display / Heading:** `Sora` (geometric sans หนา ให้อารมณ์เดียวกับโลโก้ TEXX — เหลี่ยม กว้าง คม)
**Body:** `Inter` (อ่านง่าย เป็นกลาง)
**ภาษาไทย:** `Noto Sans Thai` (heading) / `IBM Plex Sans Thai` (body) เป็น fallback

```
--font-display: 'Sora', 'Noto Sans Thai', sans-serif;
--font-body:    'Inter', 'IBM Plex Sans Thai', sans-serif;
```

### Type Scale (fluid, clamp)
| ระดับ | ขนาด | น้ำหนัก | tracking | ใช้ตรงไหน |
|-------|------|---------|----------|-----------|
| Display | `clamp(2.75rem, 6vw, 5.5rem)` | 700 | -0.02em | hero headline |
| H1 | `clamp(2rem, 4vw, 3.5rem)` | 700 | -0.015em | หัว page |
| H2 | `clamp(1.6rem, 3vw, 2.5rem)` | 600 | -0.01em | หัว section |
| H3 | `1.5rem` | 600 | -0.005em | หัวการ์ด |
| Body-lg | `1.125rem` | 400 | 0 | นำเรื่อง / lead |
| Body | `1rem` | 400 | 0 | เนื้อหาทั่วไป |
| Small | `0.875rem` | 400 | 0 | caption |
| Eyebrow | `0.75rem` | 500 | **0.24em, UPPERCASE** | ป้ายกำกับเหนือหัวข้อ |

- Line-height: heading `1.1`, body `1.7`
- Eyebrow (ตัวเล็ก uppercase เว้นวรรคกว้าง สี bronze) คือลายเซ็นของงาน luxury — ใช้เหนือหัวข้อ section
- หัวข้อใหญ่พิจารณาใช้ letter-spacing กว้างเล็กน้อยเพื่ออารมณ์แบรนด์

---

## 3. Spacing & Layout

- Base unit: **4px** (สเกล 4/8/12/16/24/32/48/64/96/128)
- Section padding แนวตั้ง: `clamp(5rem, 12vh, 10rem)` — เว้นเยอะ = แพง
- Max content width: `1280px`, gutter ข้าง `clamp(1.5rem, 5vw, 6rem)`
- Grid: 12 คอลัมน์, gap `24px`
- ใช้ whitespace เป็นพระเอก อย่าอัดของแน่น

### Radius (คม เรียบ)
`sm: 2px` · `md: 6px` · `lg: 12px` · `full: 9999px`
Luxury เอียงไปทางมุมคม — การ์ดใหญ่ใช้ 12px, ปุ่ม/อินพุตใช้ 2–6px

---

## 4. Components (แนวทาง)

- **ปุ่มหลัก:** พื้น cream, ตัวอักษร olive-900, hover เลื่อน bronze underline / เปลี่ยนเป็น bronze พื้น
- **ปุ่มรอง:** โปร่ง, ขอบ cream โปร่ง 1px, hover พื้น olive-700
- **ลิงก์:** cream + เส้นใต้ bronze ที่ค่อยๆ วิ่งเข้ามาตอน hover (animated underline)
- **การ์ด:** พื้น olive-700, ขอบ hairline, ภาพด้านบน, hover ยกเบาๆ + ภาพ zoom ช้า
- **Navbar:** โปร่งใสตอนบนสุด → พอ scroll พื้นเป็น olive-900 เบลอเล็กน้อย (backdrop)
- **รูปภาพ:** ratio 4:5 หรือ 3:2, overlay olive โปร่งเพื่อคุมโทน, ตัวอักษรวางทับได้

---

## 5. Animation (ดูแพง = ช้า + นุ่ม)

หัวใจของความ "แพง" คือจังหวะ ไม่ใช่ลูกเล่นเยอะ

### Durations
`fast: 200ms` · `base: 400ms` · `slow: 700ms` · `reveal: 900ms`

### Easing
- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` (expo out — ใช้เป็นหลัก)
- `--ease-inout: cubic-bezier(0.65, 0, 0.35, 1)`

### แพทเทิร์นมาตรฐาน
1. **Scroll reveal** — fade in + เลื่อนขึ้น 24px, duration 900ms, ease-out, ใช้ IntersectionObserver
2. **Stagger** — ลูกในกลุ่มหน่วงกันตัวละ 80–120ms
3. **Image hover** — zoom scale 1.0 → 1.06 ใน 700ms (ช้า นุ่ม)
4. **Animated underline** — เส้น bronze วิ่งจากซ้าย→ขวา 400ms ตอน hover ลิงก์
5. **Hero** — headline เผยทีละคำ/บรรทัด, ภาพ ken-burns zoom ช้าๆ ตลอด
6. **Page transition** — fade/slide นุ่ม 400–600ms (ถ้าใช้ framer-motion / view transitions)

### กติกา
- อย่าเด้ง (bounce) แรง อย่า spin เล่นๆ — ทุกอย่างต้อง smooth และมีเหตุผล
- เคารพ `prefers-reduced-motion` เสมอ (ปิดแอนิเมชันให้ผู้ใช้ที่ตั้งค่าไว้)
- แนะนำ lib: **Framer Motion** หรือ CSS + IntersectionObserver สำหรับงานเบา

> **Parallax scrolling · micro-interactions · animation แบบละเอียด** ดูที่ `docs/motion.md`
> (สเปกครบ: parallax layered depth, custom cursor, magnetic button, float label,
> counter, marquee, page transition + วิธี implement ด้วย Lenis + Framer Motion)

---

## 6. หน้าเว็บ (โครงที่วางไว้)
Home · About Us · Services / Products · Portfolio · Contact Us

แต่ละหน้าใช้โครงเดียวกัน: eyebrow (bronze) → หัวข้อใหญ่ (Sora) → เนื้อหา → CTA
คุมโทนภาพทั้งเว็บให้เป็นตระกูลเดียว (วัสดุ หิน สถาปัตย์ แสงอุ่น)
