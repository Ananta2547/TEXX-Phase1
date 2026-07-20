# TEXX — Decisions

## 2026-07-20

### Motion: port vanilla JS แทน Framer Motion/Lenis
`docs/motion.md` แนะนำ Framer Motion + Lenis แต่ดีไซน์ต้นฉบับ (Design Composer) ใช้ vanilla JS
(CSS + IntersectionObserver + rAF) อยู่แล้ว. เลือก **port ตรง 1:1** เพื่อความเที่ยงตรงของ motion
และไม่เพิ่ม dependency. โครง = section components (server) + `MotionRoot` client เดียวที่ wire ทุกอย่าง
ผ่าน `querySelectorAll` + event delegation (สะท้อนสถาปัตยกรรม DCLogic เดิม)
> ถ้าจะเพิ่มหน้า/เปลี่ยน motion เป็น Framer Motion ทีหลัง ให้ทำทั้งเว็บให้สม่ำเสมอ

### รูปภาพ: placeholder gradient + drop-in folder
ไฟล์ .jpg ต้นฉบับในโปรเจกต์ design เกินลิมิต 256KB ของ MCP `get_file` (ดึงมาไม่ครบ = ไฟล์เสีย)
จึงใช้ **placeholder gradient โทน olive/bronze** ไปก่อน + คง `data-bg`/`data-pos` ไว้ให้ swap อัตโนมัติ
เมื่อวางไฟล์จริงที่ `public/assets/`. โลโก้ใช้ **SVG wordmark** (`TexxLogo`) เพราะ .png ก็ผ่าน MCP
ไม่ได้เชื่อถือได้ (คัดลอก base64 ยาวเสี่ยงเพี้ยน)

### Tailwind config: clone tokens เพื่อลบ readonly
`styles/tailwind.tokens.ts` เป็น `as const` (readonly tuples) ชนกับ type ของ Tailwind theme
แก้โดย `JSON.parse(JSON.stringify(texxTheme))` ใน `tailwind.config.ts` (ไม่แตะไฟล์ token ที่เป็น source of truth)

### Next.js 14.2.35 (patched)
เริ่มที่ 14.2.5 แต่มี security advisory (2025-12-11) → bump เป็น `^14.2.35`
