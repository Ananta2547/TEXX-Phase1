# TEXX WEB

เว็บไซต์บริษัท TEXX — แบรนด์วัสดุพรีเมียม (premium materials)
โทนแบรนด์: **หรูหรา เรียบง่าย (quiet luxury)** + แอนิเมชันช้า–นุ่ม–ดูแพง

## Tech stack (ที่วางไว้)
Next.js (App Router) · TypeScript · Tailwind CSS · Supabase

## หน้าเว็บ
Home · About Us · Services / Products · Portfolio · Contact Us

## Design System — สำคัญ
งานดีไซน์ **ทุกชิ้น** ต้องยึดตาม `docs/design-system.md` เป็น source of truth
- Design tokens: `styles/tokens.css` (CSS variables) และ `styles/tailwind.tokens.ts` (Tailwind extend)
- โทนสี: Olive เข้ม (`#34372A`) + ครีม (`#EAE8DD`) + แอคเซนต์ Bronze (`#B99A6B` ใช้ ≤5%)
- ฟอนต์: Sora (heading, geometric หนาแบบโลโก้) + Inter (body); ไทยใช้ Noto Sans Thai / IBM Plex Sans Thai
- แอนิเมชัน: ช้า นุ่ม (ease-out expo), scroll reveal + stagger, เคารพ `prefers-reduced-motion`
- Motion เต็มรูปแบบ (parallax · micro-interactions · animation): `docs/motion.md` — แนะนำ Lenis + Framer Motion

## ทีม AI agents (.claude/agents)
- `architect` — วาง schema / RLS / โครงโฟลเดอร์ / แตกงาน
- `frontend-engineer` — UI / React / Tailwind (ยึด design system)
- `backend-auth-expert` — Supabase / Auth / CRUD / Server Actions
- `qa-optimizer` — รีวิวความปลอดภัย / type safety / performance
- `memory-keeper` — บันทึกการตัดสินใจ + ความคืบหน้า (docs/decisions.md, docs/progress.md)
