"use client";
import { useEffect, useRef, useState } from "react";

const CSS = `
  @keyframes bd-letter {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bd-pop {
    0%   { transform: scale(0.65); opacity: 0; }
    60%  { transform: scale(1.06); opacity: 1; }
    100% { transform: scale(1);    opacity: 1; }
  }
  @keyframes bd-up {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bd-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes bd-glow {
    0%, 100% { text-shadow: 0 0 0 transparent; }
    50%      { text-shadow: 0 0 40px rgba(0,240,255,0.45), 0 0 80px rgba(0,240,255,0.2); }
  }
  @keyframes bd-word {
    from { opacity: 0; transform: translateY(32px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  html {
    scroll-snap-type: y mandatory;
    scroll-padding-top: 64px;
  }

  .bd-scene {
    scroll-snap-align: start;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 80px 8vw 48px;
    box-sizing: border-box;
  }

  .bd-footer-wrap {
    scroll-snap-align: start;
  }
`;

const QUESTION = "What if your\nbusiness was\ninvisible?";

function Scene1({ active, version }: { active: boolean; version: number }) {
  const chars = QUESTION.split("");
  const answerDelay = chars.length * 0.035 + 0.8;
  return (
    <div
      key={version}
      style={{ textAlign: "center", maxWidth: 540, width: "100%" }}
    >
      {active && (
        <>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              marginBottom: "3rem",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            {chars.map((ch, i) =>
              ch === "\n" ? (
                <br key={i} />
              ) : (
                <span
                  key={i}
                  style={{
                    display: "inline",
                    opacity: 0,
                    animation: `bd-letter 0.04s linear ${0.05 + i * 0.035}s forwards`,
                  }}
                >
                  {ch === " " ? "\u00a0" : ch}
                </span>
              ),
            )}
          </h1>
          <p
            style={{
              fontSize: "clamp(1.7rem, 5.5vw, 3rem)",
              fontWeight: 700,
              color: "#00f0ff",
              letterSpacing: "-0.02em",
              opacity: 0,
              animation: `bd-up 0.7s ease-out ${answerDelay}s forwards`,
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            It probably is.
          </p>
        </>
      )}
    </div>
  );
}

function Scene2({ active, version }: { active: boolean; version: number }) {
  return (
    <div
      key={version}
      style={{ textAlign: "center", maxWidth: 540, width: "100%" }}
    >
      {active && (
        <>
          <p
            style={{
              fontSize: "clamp(7rem, 25vw, 14rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
              opacity: 0,
              animation:
                "bd-pop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) 0.2s forwards, bd-glow 3.5s ease-in-out 1s infinite",
            }}
          >
            93
            <span style={{ fontSize: "0.5em", color: "#00f0ff" }}>%</span>
          </p>
          <p
            style={{
              fontSize: "clamp(1.05rem, 3.5vw, 1.5rem)",
              color: "rgba(255,255,255,0.5)",
              marginTop: "2rem",
              lineHeight: 1.55,
              opacity: 0,
              animation: "bd-up 0.6s ease-out 0.9s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            of local searches never reach
            <br />
            page one.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              color: "#00f0ff",
              marginTop: "1.2rem",
              fontStyle: "italic",
              opacity: 0,
              animation: "bd-in 0.6s ease-out 1.6s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            If you&apos;re not there, you don&apos;t exist.
          </p>
        </>
      )}
    </div>
  );
}

const VERBS = [
  { w: "DESIGN", c: "#00f0ff", s: "Websites that convert in 2 weeks." },
  { w: "BUILD", c: "#7c3aed", s: "AI systems that run without you." },
  { w: "GROW", c: "#10b981", s: "SEO that compounds every month." },
];

function Scene3({ active, version }: { active: boolean; version: number }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!active) {
      setIdx(0);
      return;
    }
    const t = setInterval(() => setIdx((p) => (p + 1) % VERBS.length), 1800);
    return () => clearInterval(t);
  }, [active]);

  const v = VERBS[idx];

  return (
    <div style={{ textAlign: "center", width: "100%", maxWidth: 640 }}>
      {active && (
        <>
          <p
            style={{
              fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              opacity: 0,
              animation: "bd-in 0.5s ease-out 0.2s forwards",
              fontFamily: "ui-monospace, 'Fira Code', monospace",
            }}
          >
            Bamberg Digital
          </p>
          <p
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "rgba(255,255,255,0.22)",
              letterSpacing: "0.08em",
              marginBottom: "0.8rem",
              opacity: 0,
              animation: "bd-in 0.5s ease-out 0.35s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            We
          </p>
          <div
            style={{
              position: "relative",
              height: "clamp(4rem, 15vw, 8.5rem)",
              overflow: "hidden",
              marginBottom: "1.8rem",
            }}
          >
            <p
              key={`${version}-${idx}`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "clamp(3.5rem, 14vw, 8rem)",
                fontWeight: 900,
                color: v.c,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                margin: 0,
                opacity: 0,
                animation: "bd-word 0.35s ease-out 0s forwards",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, sans-serif",
              }}
            >
              {v.w}
            </p>
          </div>
          <p
            key={`${version}-${idx}-s`}
            style={{
              fontSize: "clamp(1rem, 3.2vw, 1.35rem)",
              color: "rgba(255,255,255,0.5)",
              opacity: 0,
              animation: "bd-in 0.4s ease-out 0.2s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            {v.s}
          </p>
        </>
      )}
    </div>
  );
}

function Scene4({ active, version }: { active: boolean; version: number }) {
  return (
    <div
      key={version}
      style={{ textAlign: "center", maxWidth: 540, width: "100%" }}
    >
      {active && (
        <>
          <p
            style={{
              fontSize: "clamp(5rem, 22vw, 13rem)",
              fontWeight: 900,
              color: "#00f0ff",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              opacity: 0,
              animation:
                "bd-pop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) 0.15s forwards, bd-glow 3s ease-in-out 1.2s infinite",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            $497
          </p>
          <p
            style={{
              fontSize: "clamp(1.5rem, 5.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "1.8rem",
              letterSpacing: "-0.02em",
              opacity: 0,
              animation: "bd-up 0.6s ease-out 0.7s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            That&apos;s your new website.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              color: "rgba(255,255,255,0.4)",
              marginTop: "0.8rem",
              opacity: 0,
              animation: "bd-up 0.5s ease-out 1.2s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            2 weeks. Flat rate. Zero setup fees.
          </p>
          <p
            style={{
              fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
              color: "rgba(255,255,255,0.18)",
              marginTop: "0.5rem",
              opacity: 0,
              animation: "bd-in 0.5s ease-out 1.7s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            Monthly retainer from $199/mo.
          </p>
        </>
      )}
    </div>
  );
}

function Scene5({ active, version }: { active: boolean; version: number }) {
  return (
    <div
      key={version}
      style={{ textAlign: "center", maxWidth: 480, width: "100%" }}
    >
      {active && (
        <>
          <p
            style={{
              fontSize: "clamp(2.2rem, 7.5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "0.35rem",
              opacity: 0,
              animation: "bd-up 0.6s ease-out 0.2s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            Jason Bamberg.
          </p>
          <p
            style={{
              fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
              color: "#00f0ff",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "2rem",
              opacity: 0,
              animation: "bd-in 0.5s ease-out 0.6s forwards",
              fontFamily: "ui-monospace, 'Fira Code', monospace",
            }}
          >
            Founder, Bamberg Digital
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              opacity: 0,
              animation: "bd-up 0.6s ease-out 0.9s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            Sacramento small businesses deserve
            <br />
            enterprise-grade marketing — without
            <br />
            the enterprise price tag.
          </p>
          <a
            href="tel:9169077782"
            style={{
              display: "block",
              fontSize: "clamp(1.8rem, 7vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "-0.025em",
              marginBottom: "0.4rem",
              opacity: 0,
              animation: "bd-up 0.5s ease-out 1.35s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            (916) 907-7782
          </a>
          <p
            style={{
              fontSize: "clamp(0.78rem, 2vw, 0.88rem)",
              color: "rgba(255,255,255,0.22)",
              marginBottom: "2.5rem",
              opacity: 0,
              animation: "bd-in 0.4s ease-out 1.65s forwards",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            I pick up.
          </p>
          <a
            href="mailto:hello@bambergdigital.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2.2rem",
              background: "rgba(0,240,255,0.07)",
              border: "1px solid rgba(0,240,255,0.28)",
              color: "#00f0ff",
              borderRadius: "3rem",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "clamp(0.88rem, 2.8vw, 1rem)",
              opacity: 0,
              animation: "bd-up 0.5s ease-out 1.9s forwards",
              letterSpacing: "0.01em",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
          >
            hello@bambergdigital.com
          </a>
        </>
      )}
    </div>
  );
}

const BG = ["#0a0a0f", "#0a0a0f", "#0c0c14", "#0a0a0f", "#080810"];

export default function HomeNarrative() {
  const [active, setActive] = useState([true, false, false, false, false]);
  const [versions, setVersions] = useState([0, 0, 0, 0, 0]);
  const [sceneH, setSceneH] = useState("100vh");
  const sectionRefs = useRef<(HTMLElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    const update = () => {
      if (window.innerHeight > 0) setSceneH(`${window.innerHeight}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number(entry.target.getAttribute("data-bd"));
          if (entry.isIntersecting) {
            setActive((prev) => {
              const n = [...prev];
              n[i] = true;
              return n;
            });
            setVersions((prev) => {
              const n = [...prev];
              n[i] = n[i] + 1;
              return n;
            });
          } else {
            setActive((prev) => {
              const n = [...prev];
              n[i] = false;
              return n;
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {[0, 1, 2, 3, 4].map((i) => (
        <section
          key={i}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          data-bd={String(i)}
          className="bd-scene"
          style={{ background: BG[i], minHeight: sceneH }}
        >
          {i === 0 && <Scene1 active={active[0]} version={versions[0]} />}
          {i === 1 && <Scene2 active={active[1]} version={versions[1]} />}
          {i === 2 && <Scene3 active={active[2]} version={versions[2]} />}
          {i === 3 && <Scene4 active={active[3]} version={versions[3]} />}
          {i === 4 && <Scene5 active={active[4]} version={versions[4]} />}
        </section>
      ))}

      {/* Hidden SEO content */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
      >
        <h1>Bamberg Digital — Sacramento AI-Powered Digital Agency</h1>
        <p>What if your business was invisible? It probably is.</p>
        <p>93% of local searches never reach page one.</p>
        <p>We design, build, and grow Sacramento businesses online.</p>
        <p>$497 complete website. 2 weeks flat rate.</p>
        <p>Jason Bamberg, Founder. (916) 907-7782. hello@bambergdigital.com.</p>
      </div>
    </>
  );
}
