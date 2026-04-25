/**
 * Bamberg Digital brandmark.
 *
 * Concept: an interlocking B+D monogram built from a single continuous
 * stroke that traces a bracket — left vertical, top arc forward, bottom
 * counter-arc back — symbolising the design loop (input → build → ship).
 * The terminal has a slight upward kick (an arrow tip) to suggest motion.
 *
 * Two visual modes:
 *  - "dark"  → for dark backgrounds (default for homepage)
 *  - "light" → for light backgrounds (other pages)
 *
 * Two layout variants:
 *  - "mark"     → just the symbol
 *  - "wordmark" → symbol + "Bamberg Digital" lockup
 */

type LogoProps = {
  variant?: "mark" | "wordmark";
  theme?: "dark" | "light";
  size?: number;
  href?: string | null;
  className?: string;
  style?: React.CSSProperties;
};

export default function Logo({
  variant = "wordmark",
  theme = "dark",
  size = 36,
  href = "/",
  className,
  style,
}: LogoProps) {
  const fg = theme === "dark" ? "#fff" : "#0a0a0f";
  const accent = theme === "dark" ? "#6366f1" : "#4f46e5";
  const accent2 = "#06b6d4";

  const Mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="bd-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accent2} />
        </linearGradient>
        <linearGradient id="bd-grad-soft" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent2} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Soft tile background */}
      <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#bd-grad-soft)" />

      {/* B-stroke: vertical spine + two stacked counters that read as a B */}
      <path
        d="M 16 12 L 16 52"
        stroke={fg}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 16 14 L 30 14 Q 40 14 40 22 Q 40 30 30 30 L 16 30"
        stroke="url(#bd-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 16 32 L 32 32 Q 44 32 44 42 Q 44 52 32 52 L 16 52"
        stroke="url(#bd-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* D-arrow terminal: a forward-pointing arrowhead that doubles as the
          stem of a D, anchored to the right of the B */}
      <path
        d="M 50 22 L 56 32 L 50 42"
        stroke="url(#bd-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );

  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        textDecoration: "none",
        ...style,
      }}
      className={className}
    >
      {Mark}
      {variant === "wordmark" && (
        <span
          style={{
            display: "inline-flex",
            flexDirection: "column",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily:
                "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "1.05rem",
              color: fg,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Bamberg
          </span>
          <span
            style={{
              fontFamily:
                "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.7rem",
              color: theme === "dark" ? "rgba(255,255,255,0.45)" : accent,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: 2,
              lineHeight: 1,
            }}
          >
            Digital
          </span>
        </span>
      )}
    </span>
  );

  if (href === null) return inner;

  return (
    <a href={href} style={{ textDecoration: "none" }} aria-label="Bamberg Digital home">
      {inner}
    </a>
  );
}
