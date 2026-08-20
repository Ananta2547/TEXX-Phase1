import type { ReactNode } from "react";

export interface TexxRootProps {
  children: ReactNode;
  /** Extra class names appended after the root class. */
  className?: string;
}

/**
 * Root wrapper for every TEXX layout.
 *
 * It carries the design tokens' ground, body font and line rhythm, so
 * everything nested inside inherits them. Components rendered outside a
 * TexxRoot fall back to the host page's font and background and will look
 * off-brand — always wrap.
 */
export function TexxRoot({ children, className }: TexxRootProps) {
  return (
    <div className={className ? `texx-root ${className}` : "texx-root"}>
      {children}
    </div>
  );
}
