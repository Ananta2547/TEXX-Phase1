# TEXX — Motion & Interaction Guide

ส่วนขยายของ `design-system.md` ว่าด้วย **parallax scrolling · micro-interactions · animation**
ปรัชญา: *ดูแพง = ช้า, นุ่ม, มีจังหวะ, ไม่รก* — เคลื่อนไหวเพื่อนำสายตา ไม่ใช่เพื่อโชว์

> กติกาเหล็ก: เคารพ `prefers-reduced-motion: reduce` เสมอ — ปิดหรือลดทุกเอฟเฟกต์ให้เหลือ fade สั้นๆ

---

## 0. Tech stack ที่แนะนำ

| งาน | เครื่องมือ | เหตุผล |
|-----|-----------|--------|
| Smooth scroll (พื้นฐานของ parallax ที่ลื่น) | **Lenis** (`@studio-freight/lenis`) | เลื่อนนุ่มแบบ inertia คุมง่าย เข้ากับ scroll effect |
| Parallax / scroll-linked | **Framer Motion** `useScroll` + `useTransform` | ผูกค่ากับ scroll progress ตรงๆ |
| Reveal / stagger / micro | **Framer Motion** `whileInView`, `whileHover`, `variants` | ประกาศ state ชัด อ่านง่าย |
| งานเบา ไม่อยากลง lib | CSS `@keyframes` + `IntersectionObserver` + `scroll-timeline` | บางหน้าพอ |

ค่ากลาง (อ้างจาก tokens): `--ease-out: cubic-bezier(0.16,1,0.3,1)` · durations `fast 200 / base 400 / slow 700 / reveal 900ms`

---

## 1. Parallax Scrolling

หลักการ: ชั้นที่ "ไกล" เลื่อนช้ากว่าชั้นที่ "ใกล้" → เกิดความลึก
**คุมให้เบามือ** — ระยะเยื้อง 5–20% ของ viewport พอ ถ้าเยอะจะเวียนหัวและดูถูก

### แพทเทิร์นที่ใช้
1. **Hero background parallax** — ภาพพื้นหลัง hero เลื่อนขึ้นช้ากว่าเนื้อหา (factor ~0.3) + ken-burns zoom ช้าตลอด
2. **Layered depth** — 3 ชั้น: background (ช้าสุด) / midground / foreground text (เร็วสุด/ปกติ)
3. **Reveal-on-scroll image** — รูปในกรอบ overflow:hidden เลื่อนภายในกรอบ (image ขยับ -15% → 15%) เผยแบบ cinematic
4. **Section pinning** (ระวังใช้เท่าที่จำเป็น) — ตรึง section แล้วเปลี่ยนคอนเทนต์ตาม scroll สำหรับ storytelling วัสดุ

### Framer Motion (มาตรฐานโปรเจกต์)
```tsx
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);   // ชั้นภาพ
// <motion.img style={{ y }} ... />
```

### กติกา parallax
- แกน Y เท่านั้นเป็นหลัก (แนวนอนใช้เฉพาะ marquee/gallery)
- ปิด parallax บนมือถือถ้าทำให้ scroll กระตุก — degrade เป็นภาพนิ่ง
- อย่าใส่ parallax กับตัวอักษรเนื้อหา (อ่านยาก) — ใช้กับ media/decoration
- `will-change: transform` เฉพาะตอนกำลังเคลื่อน แล้วปลด

---

## 2. Micro-interactions

รายละเอียดเล็กๆ ตอนผู้ใช้ทำอะไร → ให้ feedback ที่ประณีต นี่คือสิ่งที่แยก "เว็บทั่วไป" กับ "เว็บแพง"

| องค์ประกอบ | interaction | ค่า |
|-----------|-------------|-----|
| ปุ่มหลัก | hover: พื้น cream→bronze, ตัวอักษรขยับ, ลูกศร → เลื่อนขวา 4px | 400ms ease-out |
| ปุ่ม | press: `scale(0.97)` | 120ms |
| ลิงก์ | underline bronze วิ่งจากซ้าย→ขวา | 400ms |
| การ์ด | hover: ยกขึ้น 6px + เงานุ่ม + ภาพ zoom 1.06 | 700ms |
| Nav link | hover: สีจาง→cream + จุด/เส้น bronze ใต้ | 300ms |
| Input | focus: ขอบจาง→bronze + label เลื่อนขึ้นเป็น float | 300ms |
| ไอคอน | hover: หมุน/เลื่อนเล็ก 2–4px หรือ draw-in | 300ms |
| Cursor (desktop) | custom dot ตามเมาส์ + ขยายตอน hover ปุ่ม/ลิงก์ | lerp นุ่ม |
| Magnetic button | ปุ่ม/โลโก้ขยับเข้าหาเมาส์เล็กน้อย (~6px) | spring |
| Image reveal | เผยด้วย clip-path/curtain ตอนเข้า viewport | 900ms |
| Number counter | ตัวเลขสถิตินับขึ้นตอนเห็น | 1.2s ease-out |
| Scroll progress | เส้น bronze บางบนสุดบอกความคืบหน้า | linked |

### หลักคิด micro-interaction
- **มีจุดเริ่ม–ระหว่าง–จบ** ชัด และ reversible (ถอยกลับนุ่มพอๆ กับตอนเข้า)
- เปลี่ยนเฉพาะ `transform` และ `opacity` (ราคาถูก ไม่ทำ layout reflow)
- ทุก transition ต้องรู้สึก "ตั้งใจ" ไม่ใช่ default 150ms linear
- อย่าซ้อนหลายเอฟเฟกต์บนองค์ประกอบเดียวจนรก — 1–2 อย่างพอ

---

## 3. Animation Patterns (รวม)

### เข้า viewport
- **Fade + rise** — opacity 0→1, translateY 24px→0, 900ms — ดีฟอลต์ของทุก block
- **Stagger** — ลูกในกลุ่มหน่วง 80–120ms ต่อตัว (การ์ด, list, รายการเมนู)
- **Text reveal** — หัวข้อเผยทีละบรรทัด/คำด้วย mask (overflow:hidden + translateY)
- **Line draw** — เส้นคั่น/กรอบวาดจาก 0→100% width

### ต่อเนื่อง (ambient)
- **Ken-burns** — ภาพ hero zoom ช้ามาก (scale 1→1.08 ใน 20s loop)
- **Marquee** — แถบชื่อวัสดุ/แบรนด์เลื่อนแนวนอนช้าๆ วนไม่รู้จบ
- **Floating accent** — จุด/รูปทรง bronze ลอยเบาๆ (translateY sine)

### เปลี่ยนหน้า
- **Page transition** — fade/slide นุ่ม 400–600ms (Next.js View Transitions หรือ Framer `AnimatePresence`)
- **Curtain wipe** — ม่านสี olive ปาดผ่านตอนเปลี่ยนหน้า (ออปชัน premium)

### ตาราง easing/duration อ้างอิง
| เอฟเฟกต์ | duration | easing |
|----------|----------|--------|
| micro (press/underline) | 200–400ms | ease-out expo |
| hover card/image | 700ms | ease-out expo |
| reveal on scroll | 900ms | ease-out expo |
| page transition | 400–600ms | ease-inout quint |
| ambient loop | 8–20s | linear / sine |

---

## 4. Performance & A11y — ห้ามลืม

- `prefers-reduced-motion: reduce` → ปิด parallax, ambient loop, magnetic, ให้เหลือแค่ fade ≤200ms
- ใช้ `transform`/`opacity` เท่านั้นสำหรับ animation ที่วิ่งต่อเนื่อง (60fps)
- `IntersectionObserver` unobserve หลัง reveal แล้ว (ไม่รันซ้ำ)
- ถอด `will-change` เมื่อไม่เคลื่อน, throttle scroll ด้วย rAF
- Parallax/cursor effects = desktop-first; มือถือ degrade เป็น static
- อย่าให้ animation ขวาง LCP/interaction — คอนเทนต์สำคัญต้องเห็นก่อน animate
