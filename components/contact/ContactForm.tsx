"use client";

import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { MagnetFx } from "@/components/home/MagnetFx";

const labelStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: ".55rem",
};

const labelTextStyle: CSSProperties = {
  fontSize: ".72rem",
  fontWeight: 500,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "#A9A99A",
};

const fieldStyle: CSSProperties = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(234,232,221,.24)",
  color: "#F5F4EE",
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: ".6rem 0",
  outline: "none",
  transition: "border-color 300ms cubic-bezier(0.16,1,0.3,1)",
};

const selectStyle: CSSProperties = { ...fieldStyle, background: "#26281E" };

const textareaStyle: CSSProperties = { ...fieldStyle, resize: "vertical" };

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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
        gap: "1.6rem",
        background: "#26281E",
        border: "1px solid rgba(234,232,221,.12)",
        borderRadius: 12,
        padding: "clamp(1.75rem,4vw,2.75rem)",
      }}
    >
      <input type="hidden" name="_subject" value="ข้อความใหม่จากเว็บ TEXX — Contact form" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.6rem" }}>
        <label style={labelStyle}>
          <span style={labelTextStyle}>ชื่อ</span>
          <input
            className="texx-field"
            name="name"
            type="text"
            required
            placeholder="ชื่อ–นามสกุล"
            data-cursor
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
            data-cursor
            style={fieldStyle}
          />
        </label>
      </div>

      <label style={labelStyle}>
        <span style={labelTextStyle}>ประเภทโปรเจกต์</span>
        <select className="texx-field" name="type" data-cursor style={selectStyle}>
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
          data-cursor
          style={textareaStyle}
        />
      </label>

      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap", marginTop: ".5rem" }}>
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cursor
          data-magnet
          className="texx-btn-primary"
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            gap: ".6rem",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: ".95rem",
            background: "#EAE8DD",
            color: "#26281E",
            padding: ".95rem 2rem",
            border: "none",
            borderRadius: 4,
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            opacity: status === "submitting" ? 0.7 : 1,
            transition: "background 400ms cubic-bezier(0.16,1,0.3,1), color 400ms",
          }}
        >
          <MagnetFx />
          {status === "submitting" ? "กำลังส่ง…" : "ส่งข้อความ"}
          <span data-arrow style={{ display: "inline-block", transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }}>→</span>
        </button>
        {status === "success" && (
          <span style={{ fontSize: ".92rem", color: "#B99A6B" }}>
            ขอบคุณครับ — เราได้รับข้อความแล้ว จะติดต่อกลับโดยเร็ว
          </span>
        )}
        {status === "error" && (
          <span style={{ fontSize: ".92rem", color: "#C98B6B" }}>
            ส่งไม่สำเร็จ ลองใหม่อีกครั้ง หรืออีเมลหา hello@texx.co
          </span>
        )}
      </div>
    </form>
  );
}
