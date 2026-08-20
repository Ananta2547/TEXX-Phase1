import type { ReactNode } from "react";

export interface FieldProps {
  /** Uppercase label above the control. */
  label: string;
  /** Form field name. */
  name?: string;
  /**
   * Which control to render. `select` needs `children` holding the options.
   */
  as?: "input" | "textarea" | "select";
  type?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  defaultValue?: string;
  /** `<option>` elements, when `as="select"`. */
  children?: ReactNode;
  className?: string;
}

/**
 * A labelled form control on the design system's underline treatment.
 *
 * There is no box — just a hairline under the text that warms to bronze on
 * focus. Fields sit in a flex column with the label stacked above.
 */
export function Field({
  label,
  name,
  as = "input",
  type = "text",
  placeholder,
  required,
  rows = 4,
  defaultValue,
  children,
  className,
}: FieldProps) {
  const classes = ["texx-fieldgroup"];
  if (className) classes.push(className);

  return (
    <label className={classes.join(" ")}>
      <span className="texx-fieldgroup__label">{label}</span>
      {as === "textarea" ? (
        <textarea
          className="texx-field"
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      ) : as === "select" ? (
        <select
          className="texx-field"
          name={name}
          required={required}
          defaultValue={defaultValue}
        >
          {children}
        </select>
      ) : (
        <input
          className="texx-field"
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      )}
    </label>
  );
}
