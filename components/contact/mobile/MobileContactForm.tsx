"use client";

import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";

// The Design Composer source only flips a local status string; the real page
// posts to Formspree exactly like the desktop ContactForm, so that behaviour
// is what ships here — the design supplies the layout, not the transport.

const labelStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: ".5rem" };

const labelTextStyle: CSSProperties = {
  fontSize: ".68rem",
  fontWeight: 500,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "#A9A99A",
};

const fieldStyle: CSSProperties = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(234,232,221,.24)",
  borderRadius: 0,
  color: "#F5F4EE",
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: ".7rem 0",
  outline: "none",
  transition: "border-color 300ms var(--ease-out)",
};

const selectStyle: CSSProperties = { ...fieldStyle, background: "#26281E" };
const textareaStyle: CSSProperties = { ...fieldStyle, resize: "vertical" };

type Status = "idle" | "submitting" | "success" | "error";

export default function MobileContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      data-reveal
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.4rem",
        background: "#26281E",
        border: "1px solid rgba(234,232,221,.12)",
        borderRadius: 12,
        padding: "1.5rem 1.35rem 1.75rem",
      }}
    >
      <input type="hidden" name="_subject" value="ข้อความใหม่จากเว็บ TEXX — Contact form (mobile)" />

      <label style={labelStyle}>
        <span style={labelTextStyle}>ชื่อ</span>
        <input
          className="texx-field"
          name="name"
          type="text"
          required
          placeholder="ชื่อ–นามสกุล"
          style={fieldStyle}
        />
      </label>

      <label style={labelStyle}>
        <span style={labelTextStyle}>อีเมล</span>
        <input
          className="texx-field"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          style={fieldStyle}
        />
      </label>

      <label style={labelStyle}>
        <span style={labelTextStyle}>ประเภทโปรเจกต์</span>
        <select className="texx-field" name="type" style={selectStyle}>
          <option>ที่พักอาศัย (Residential)</option>
          <option>โรงแรม / ฮอสพิทาลิตี้</option>
          <option>รีเทล / ออฟฟิศ</option>
          <option>อื่นๆ</option>
        </select>
      </label>

      <label style={labelStyle}>
        <span style={labelTextStyle}>รายละเอียด</span>
        <textarea
          className="texx-field"
          name="message"
          rows={4}
          placeholder="เล่าเกี่ยวกับพื้นที่ วัสดุที่สนใจ หรือช่วงเวลาโปรเจกต์"
          style={textareaStyle}
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        data-magnet
        className="texx-btn-primary"
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: ".6rem",
          minHeight: 52,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: ".95rem",
          background: "#EAE8DD",
          color: "#26281E",
          border: "none",
          borderRadius: 4,
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
          transition: "background 400ms var(--ease-out), color 400ms",
        }}
      >
        <span
          data-sheen
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(105deg,transparent 42%,rgba(245,244,238,.35) 50%,transparent 58%)",
            transform: "translateX(-120%)",
            transition: "transform 750ms var(--ease-out)",
            zIndex: 1,
          }}
        />
        {status === "submitting" ? "กำลังส่ง…" : "ส่งข้อความ"}
        <span data-arrow style={{ display: "inline-block", transition: "transform 400ms var(--ease-out)" }}>
          →
        </span>
      </button>

      {status === "success" && (
        <span style={{ fontSize: ".88rem", color: "#B99A6B", textAlign: "center" }}>
          ขอบคุณครับ — เราได้รับข้อความแล้ว จะติดต่อกลับโดยเร็ว
        </span>
      )}
      {status === "error" && (
        <span style={{ fontSize: ".88rem", color: "#C98B6B", textAlign: "center" }}>
          ส่งไม่สำเร็จ ลองใหม่อีกครั้ง หรืออีเมลหา hello@texx.co
        </span>
      )}
    </form>
  );
}
