/**
 * Bamberg Digital brandmark — Sacramento Tower Bridge edition.
 *
 * The mark is a monoline silhouette of Sacramento's iconic Tower Bridge:
 * two flanking pylons, a horizontal deck, and the cable suspension lines.
 * Locally recognizable, nationally distinctive, and decisively NOT a
 * letter-arrow stack.
 *
 * Wordmark uses Fraunces serif for the editorial, founder-led tone.
 */

type LogoProps = {
  variant?: "mark" | "wordmark";
  theme?: "dark" | "light" | "cream";
  size?: number;
  href?: string | null;
  className?: string;
  style?: React.CSSProperties;
};

export default function Logo({
  variant = "wordmark",
  theme = "cream",
  size = 36,
  href = "/",
  className,
  style,
}: LogoProps) {
  // Color tokens per theme
  const tokens = {
    dark: { ink: "#fff", accent: "#d8472f", muted: "rgba(255,255,255,0.45)" },
    light: { ink: "#1a1410", accent: "#d8472f", muted: "#7a6f63" },
    cream: { ink: "#1a1410", accent: "#d8472f", muted: "#7a6f63" },
  }[theme];

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
      {/* Tower Bridge silhouette
          Two pylons (left at x=16, right at x=48) with crowns,
          a deck running across at y=44, and three suspension cables
          arcing down between them. */}

      {/* Bridge deck — horizontal road */}
      <line
        x1="6"
        y1="44"
        x2="58"
        y2="44"
        stroke={tokens.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Water hint — a single calm line below */}
      <line
        x1="10"
        y1="52"
        x2="54"
        y2="52"
        stroke={tokens.muted}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Left pylon */}
      <line
        x1="16"
        y1="44"
        x2="16"
        y2="14"
        stroke={tokens.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left pylon crossbar */}
      <line
        x1="11"
        y1="22"
        x2="21"
        y2="22"
        stroke={tokens.ink}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left pylon crown — small block */}
      <rect
        x="13.5"
        y="10"
        width="5"
        height="5"
        fill={tokens.ink}
      />

      {/* Right pylon */}
      <line
        x1="48"
        y1="44"
        x2="48"
        y2="14"
        stroke={tokens.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Right pylon crossbar */}
      <line
        x1="43"
        y1="22"
        x2="53"
        y2="22"
        stroke={tokens.ink}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Right pylon crown */}
      <rect
        x="45.5"
        y="10"
        width="5"
        height="5"
        fill={tokens.ink}
      />

      {/* Suspension cables — three arcs between the pylons */}
      <path
        d="M 16 18 Q 32 26 48 18"
        stroke={tokens.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 16 24 Q 32 32 48 24"
        stroke={tokens.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 16 30 Q 32 38 48 30"
        stroke={tokens.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
    </svg>
  );

  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
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
                "var(--font-fraunces), Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: tokens.ink,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              fontStyle: "italic",
            }}
          >
            Bamberg
          </span>
          <span
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.62rem",
              color: tokens.muted,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginTop: 3,
              lineHeight: 1,
            }}
          >
            Digital · Sacramento
          </span>
        </span>
      )}
    </span>
  );

  if (href === null) return inner;

  return (
    <a
      href={href}
      style={{ textDecoration: "none" }}
      aria-label="Bamberg Digital — Sacramento home"
    >
      {inner}
    </a>
  );
}
