"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven phone-pickup narrative.
 *
 * One pinned section. The viewer scrolls; the section stays put while
 * the story progresses through 4 beats:
 *
 *   beat 0  — quiet morning, dim phone on a desk
 *   beat 1  — phone rings (waveform pulses, label fades in)
 *   beat 2  — Jason picks up (receiver lifts off the cradle)
 *   beat 3  — handwritten note appears with the customer's
 *             problem solved
 *
 * Built deliberately to match the warm cream / Sacramento aesthetic.
 * No 3D, no GSAP — pure SVG, CSS, and a scroll listener.
 */

const C = {
  surface: "#f4ede0",
  surfaceWarm: "#ebe2d0",
  card: "#fefcf6",
  ink: "#1a1410",
  ink2: "#4a3f33",
  mute: "#7a6f63",
  hot: "#d8472f",
  soft: "#c89e5d",
  hairline: "rgba(26,20,16,0.12)",
};

const FONT_DISPLAY = "var(--font-fraunces), Georgia, 'Times New Roman', serif";
const FONT_BODY = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const FONT_SCRIPT = "var(--font-caveat), 'Brush Script MT', cursive";
const FONT_MONO = "ui-monospace, 'SF Mono', Menlo, monospace";

const BEATS = [
  {
    eyebrow: "06:42 AM",
    line: "It starts quiet.",
    sub: "Most mornings, your phone doesn't ring. That's the problem most agencies pretend isn't there.",
  },
  {
    eyebrow: "Day 12",
    line: "Then it rings.",
    sub: "Your new site is live. Google starts to notice. Someone in Folsom searches \"contractor near me.\" Your phone lights up.",
  },
  {
    eyebrow: "Right now",
    line: "I pick up.",
    sub: "Not a receptionist. Not a chatbot. Me. We talk through what they need, and I quote it on the spot.",
  },
  {
    eyebrow: "By Friday",
    line: "They book.",
    sub: "Estimate sent, deposit cleared, calendar booked. That's the loop. We just keep running it.",
  },
];

export default function PhonePickupSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 → 1 across the pin

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const totalScroll = el.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const p = Math.max(0, Math.min(1, scrolled / Math.max(1, totalScroll)));
        setProgress(p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Determine current beat (0..3)
  const beatFloat = progress * (BEATS.length - 1);
  const beat = Math.min(BEATS.length - 1, Math.floor(beatFloat + 0.001));
  // local 0→1 progression within the current beat for sub-animations
  const localT = beatFloat - beat;

  // Phone receiver lift — interpolated 0..1 across beats 1→2
  const lift = (() => {
    if (beatFloat <= 1) return 0;
    if (beatFloat >= 2) return 1;
    return beatFloat - 1; // 0..1
  })();

  // Ring intensity — peaks during beat 1
  const ringStrength = (() => {
    if (beatFloat < 0.6) return 0;
    if (beatFloat < 1) return (beatFloat - 0.6) / 0.4; // ramp up
    if (beatFloat < 1.6) return 1;
    if (beatFloat < 2.2) return Math.max(0, 1 - (beatFloat - 1.6) / 0.6); // ramp down after pickup
    return 0;
  })();

  // Note reveal — only beat 3
  const noteReveal = beatFloat > 2.4 ? Math.min(1, (beatFloat - 2.4) / 0.6) : 0;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        // 4 beats × ~95vh of scroll = a deliberate, breathable narrative
        height: `${BEATS.length * 95}vh`,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes pulse-fast {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          40% { opacity: 0.8; }
          80% { opacity: 0; transform: scale(1.5); }
        }
        .phone-shake-active {
          animation: phone-shake-fast 0.6s ease-in-out infinite;
          transform-origin: 50% 60%;
        }
        @keyframes phone-shake-fast {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-4deg); }
          75% { transform: rotate(4deg); }
        }
      `,
        }}
      />

      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: C.surfaceWarm,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
          alignItems: "center",
          padding: "120px clamp(24px, 6vw, 80px) 80px",
          gap: "clamp(2rem, 5vw, 5rem)",
        }}
      >
        {/* LEFT — copy column with beat indicator + crossfading text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            position: "relative",
          }}
        >
          {/* Beat ticker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 6,
              }}
            >
              {BEATS.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i === beat ? 36 : 8,
                    height: 4,
                    borderRadius: 2,
                    background: i <= beat ? C.ink : C.hairline,
                    transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.7rem",
                color: C.hot,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {BEATS[beat].eyebrow}
            </span>
          </div>

          {/* Beat headline — crossfades */}
          <div style={{ position: "relative", minHeight: "9rem" }}>
            {BEATS.map((b, i) => {
              const isActive = i === beat;
              const opacity = isActive ? 1 - Math.abs(localT - 0.5) * 0.2 : 0;
              return (
                <h2
                  key={i}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    margin: 0,
                    fontFamily: FONT_DISPLAY,
                    fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                    fontWeight: 800,
                    fontStyle: "italic",
                    lineHeight: 1.05,
                    letterSpacing: "-0.035em",
                    color: i === 2 ? C.hot : C.ink,
                    opacity,
                    transform: isActive
                      ? "translateY(0)"
                      : `translateY(${i < beat ? -20 : 20}px)`,
                    transition:
                      "opacity 0.5s ease, transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  {b.line}
                </h2>
              );
            })}
          </div>

          {/* Beat sub */}
          <div style={{ position: "relative", minHeight: "5.5rem" }}>
            {BEATS.map((b, i) => {
              const isActive = i === beat;
              return (
                <p
                  key={i}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    margin: 0,
                    fontFamily: FONT_BODY,
                    fontSize: "clamp(1rem, 1.7vw, 1.2rem)",
                    color: C.ink2,
                    lineHeight: 1.6,
                    maxWidth: 540,
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0)"
                      : `translateY(${i < beat ? -10 : 10}px)`,
                    transition:
                      "opacity 0.5s ease 0.1s, transform 0.5s cubic-bezier(0.23,1,0.32,1) 0.1s",
                  }}
                >
                  {b.sub}
                </p>
              );
            })}
          </div>

          {/* Hint to keep scrolling — fades after beat 0 */}
          <div
            style={{
              opacity: beat === 0 ? 0.4 : 0,
              transition: "opacity 0.5s ease",
              marginTop: "1rem",
              fontFamily: FONT_MONO,
              fontSize: "0.7rem",
              color: C.mute,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            ↓ Keep scrolling
          </div>
        </div>

        {/* RIGHT — staged phone scene */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Desk surface — a flat plane the phone sits on */}
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              right: "5%",
              height: 1,
              background: `linear-gradient(90deg, transparent, ${C.hairline} 20%, ${C.hairline} 80%, transparent)`,
            }}
          />

          {/* Sun warmth — gradient that intensifies as the story progresses */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(216,71,47,0.18) 0%, transparent 70%)",
              filter: "blur(40px)",
              opacity: 0.4 + progress * 0.5,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          />

          {/* Phone SVG with handwritten note overlay */}
          <div
            style={{
              position: "relative",
              width: 360,
              height: 360,
            }}
          >
            <svg
              viewBox="0 0 360 360"
              width="360"
              height="360"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              {/* Ring waveform — three arcs that pulse during ring */}
              <g style={{ transformOrigin: "270px 90px" }}>
                {[0, 0.2, 0.4].map((delay, i) => (
                  <circle
                    key={i}
                    cx="270"
                    cy="90"
                    r={28 + i * 12}
                    fill="none"
                    stroke={C.hot}
                    strokeWidth={2 - i * 0.4}
                    opacity={ringStrength * (0.8 - i * 0.2)}
                    style={{
                      transformOrigin: "270px 90px",
                      transform: `scale(${0.6 + ringStrength * 0.5 + Math.sin(Date.now() / 200 + i) * 0.1})`,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                ))}
              </g>

              {/* Phone group — base + cradle + receiver */}
              <g
                className={
                  ringStrength > 0.4 && lift < 0.2 ? "phone-shake-active" : ""
                }
                style={{ transformOrigin: "180px 220px" }}
              >
                {/* Soft shadow under the base */}
                <ellipse
                  cx="180"
                  cy="295"
                  rx="120"
                  ry="10"
                  fill={C.ink}
                  opacity="0.12"
                />

                {/* Phone base body */}
                <rect
                  x="72"
                  y="200"
                  width="216"
                  height="92"
                  rx="12"
                  fill={C.ink}
                />
                {/* Cradle ridge */}
                <rect
                  x="90"
                  y="190"
                  width="180"
                  height="14"
                  rx="6"
                  fill={C.ink2}
                />
                {/* Dial pad — 4×3 dots */}
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2].map((col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={126 + col * 36}
                      cy={222 + row * 18}
                      r="4.5"
                      fill={C.surface}
                      opacity={0.7 + progress * 0.3}
                    />
                  ))
                )}
              </g>

              {/* Receiver — translates up + rotates as it lifts off */}
              <g
                style={{
                  transform: `translateY(${-lift * 70}px) translateX(${lift * 40}px) rotate(${-12 - lift * 18}deg)`,
                  transformOrigin: "180px 180px",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {/* Receiver body */}
                <g transform="translate(60, 100)">
                  <rect
                    x="0"
                    y="30"
                    width="240"
                    height="32"
                    rx="16"
                    fill={C.ink}
                  />
                  {/* Earpiece */}
                  <ellipse cx="22" cy="46" rx="32" ry="30" fill={C.ink} />
                  <circle cx="22" cy="46" r="16" fill={C.ink2} />
                  {[
                    [16, 40],
                    [28, 40],
                    [16, 52],
                    [28, 52],
                    [22, 46],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.2" fill={C.surface} />
                  ))}
                  {/* Mouthpiece */}
                  <ellipse cx="218" cy="46" rx="32" ry="30" fill={C.ink} />
                  <circle cx="218" cy="46" r="16" fill={C.ink2} />
                  {[
                    [212, 40],
                    [224, 40],
                    [212, 52],
                    [224, 52],
                    [218, 46],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.2" fill={C.surface} />
                  ))}
                </g>

                {/* Coiled cord — longer the more lift */}
                <path
                  d={`M 268 158 Q ${288 + lift * 10} ${175 + lift * 5} ${280 + lift * 5} ${195 + lift * 5} Q ${268} ${205} ${280} ${215}`}
                  stroke={C.ink2}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            {/* Handwritten note — appears in beat 3 */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                background: C.card,
                border: `1px solid ${C.hairline}`,
                borderRadius: 8,
                padding: "1rem 1.2rem",
                boxShadow: `0 18px 36px rgba(26,20,16,0.12)`,
                transform: `rotate(${5 - noteReveal * 8}deg) translateY(${(1 - noteReveal) * 30}px)`,
                opacity: noteReveal,
                transition:
                  "opacity 0.5s ease, transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                maxWidth: 220,
              }}
            >
              <p
                style={{
                  fontFamily: FONT_SCRIPT,
                  fontSize: "1.55rem",
                  color: C.ink,
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Thanks Jason — booked the job.
              </p>
              <p
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.62rem",
                  color: C.mute,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                — D., Folsom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
