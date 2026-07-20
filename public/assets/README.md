# TEXX — image assets

## รูปที่ใช้อยู่ตอนนี้
- `texx-logo.png` — โลโก้ (nav / footer / intro) ✅ ของจริง
- `hero-full.jpg` — ภาพพื้นหลัง hero หน้า Home ✅ ของจริง
- **การ์ด/ฉากอื่นทั้งหมด** ใช้ **SVG texture แบบ procedural** (สร้างในเครื่อง โทน olive/bronze/cream):
  - `marble.svg` · `terrazzo.svg` · `bronze.svg` · `oak.svg` — สี่ตระกูลวัสดุ (การ์ด Products/Home)
  - `showroom-left.svg` · `showroom-right.svg` · `showroom-wall.svg` — ฉากโชว์รูม/ผนังวัสดุ (About/Work/Portfolio/Sourcing/Finishing)

> SVG พวกนี้ทำหน้าที่แทนรูปถ่ายจริง (รูปต้นฉบับ .jpg ในโปรเจกต์ Claude Design เกินลิมิต 256KB
> ของ MCP จึงดึงมาไม่ได้). ดูดี พอเป็น placeholder ระดับพรีเมียม

## แทนที่ด้วยรูปถ่ายจริง
วางไฟล์ `.jpg`/`.webp` แล้วแก้ path ที่ชี้:
- การ์ดวัสดุ: `img` ใน `lib/home-content.ts` (products) + `lib/portfolio-content.ts`
- ฉาก/hero: `data-bg` ใน `components/*/Hero.tsx`, `components/home/About.tsx`, `components/about/Story.tsx`, `components/products/Sourcing.tsx` + `Finishing.tsx`

motion จะ preload แล้ว swap `data-bg` ให้อัตโนมัติเมื่อไฟล์โหลดได้ (ถ้าโหลดไม่ได้ = คง gradient placeholder ไว้ใต้)
