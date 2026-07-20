"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import TexxLogo from "@/components/TexxLogo";
import { navLinks } from "@/lib/home-content";

const linkStyle: CSSProperties = {
  position: "relative",
  fontSize: ".9rem",
  fontWeight: 500,
  paddingBottom: 4,
};

const underlineStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  height: 1.5,
  background: "#B99A6B",
  transformOrigin: "left",
  transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)",
};

export default function Nav({ logoHref = "/" }: { logoHref?: string }) {
  const pathname = usePathname();

  return (
    <nav
      data-nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem clamp(1.5rem,5vw,6rem)",
        background: "transparent",
        borderBottom: "1px solid transparent",
        transition:
          "background 400ms cubic-bezier(0.16,1,0.3,1), border-color 400ms",
      }}
    >
      <a
        href={logoHref}
        data-cursor
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "#F5F4EE",
          height: 40,
          overflow: "visible",
        }}
      >
        <TexxLogo height={140} />
      </a>
      <div data-navmenu style={{ display: "flex", alignItems: "center", gap: "clamp(1.25rem,2.5vw,2.5rem)" }}>
        {navLinks.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              data-cursor
              data-active={active || undefined}
              style={{ ...linkStyle, color: active ? "#B99A6B" : "#EAE8DD" }}
            >
              {l.label}
              <span
                data-underline
                style={{ ...underlineStyle, transform: active ? "scaleX(1)" : "scaleX(0)" }}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
