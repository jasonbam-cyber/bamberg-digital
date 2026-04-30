import type { Metadata } from "next";
import StoryClient from "./StoryClient";

export const metadata: Metadata = {
  title: "Our Story | Bamberg Digital",
  description:
    "See why Sacramento businesses choose Bamberg Digital. Web design from $497, social media from $199/mo, SEO from $297/mo.",
  alternates: { canonical: "https://www.bambergdigital.com/story" },
  openGraph: {
    title: "Bamberg Digital — Sacramento's AI-Powered Digital Agency",
    description: "See why Sacramento businesses choose Bamberg Digital.",
    url: "https://www.bambergdigital.com/story",
    siteName: "Bamberg Digital",
    type: "website",
  },
  robots: { index: false, follow: false },
};

const CSS_STRING = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

#story-root{
  position:fixed;top:0;left:0;width:100%;height:100%;
  background:#000;overflow:hidden;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  color:#fff;
}

#progress-bar{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;gap:3px;padding:8px 12px;
}
.progress-seg{
  flex:1;height:3px;background:rgba(255,255,255,0.2);border-radius:2px;
  transition:background 0.3s ease;
}
.progress-seg.active{background:rgba(255,255,255,0.9);}

#slides-wrap{
  position:absolute;top:0;left:0;
  display:flex;width:100%;height:100%;
  transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);
  will-change:transform;
}
.slide{
  min-width:100%;height:100%;overflow-y:auto;
  display:flex;flex-direction:column;justify-content:center;
  padding:60px 28px 80px;
}

.tap-hint{
  position:absolute;bottom:28px;left:50%;transform:translateX(-50%);
  text-align:center;font-size:13px;color:rgba(255,255,255,0.45);
  letter-spacing:0.05em;
}

.feature-list{list-style:none;margin-top:12px;}
.feature-list li{padding:6px 0;font-size:15px;color:rgba(255,255,255,0.85);}
.feature-list li::before{content:'✓ ';color:#60a5fa;}

.service-card{
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:16px;padding:24px;margin-top:20px;
}
.service-price{
  font-size:2.2rem;font-weight:800;color:#60a5fa;line-height:1;
}
.service-cta{
  display:inline-block;margin-top:16px;color:#60a5fa;
  font-size:14px;font-weight:600;text-decoration:none;
  border-bottom:1px solid rgba(96,165,250,0.4);
  padding-bottom:2px;
  transition:color 0.2s,border-color 0.2s;
}
.service-cta:hover{color:#93c5fd;border-color:rgba(147,197,253,0.6);}

.stat-num{
  font-size:5rem;font-weight:900;color:#60a5fa;line-height:1;
}
.stat-label{font-size:14px;color:rgba(255,255,255,0.65);max-width:220px;line-height:1.5;}

.slide-title{
  font-size:1.75rem;font-weight:800;line-height:1.2;margin-bottom:12px;
}
.slide-body{font-size:1rem;color:rgba(255,255,255,0.75);line-height:1.6;}

.hook-headline{
  font-size:2.4rem;font-weight:900;line-height:1.15;
}
.hook-sub{
  margin-top:16px;font-size:1.05rem;
  color:rgba(255,255,255,0.65);line-height:1.6;
}

.word-reveal{
  display:inline-block;margin-right:5px;
}

.icons-row{
  display:flex;gap:20px;margin-top:28px;flex-wrap:wrap;
}
.icon-chip{
  background:rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.12);
  border-radius:99px;padding:8px 16px;
  font-size:13px;color:rgba(255,255,255,0.8);
  white-space:nowrap;
}

.testimonial-card{
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:14px;padding:20px;margin-bottom:14px;
}
.testimonial-text{font-size:14px;color:rgba(255,255,255,0.85);line-height:1.6;font-style:italic;}
.testimonial-author{margin-top:10px;font-size:12px;color:#60a5fa;font-weight:600;}

.pricing-row{
  display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;
}
.pricing-chip{
  flex:1;min-width:90px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;padding:16px 12px;text-align:center;
}
.pricing-chip-name{font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;}
.pricing-chip-price{font-size:1.1rem;font-weight:800;color:#60a5fa;}

.phone-link{
  display:block;font-size:1.9rem;font-weight:800;color:#60a5fa;
  text-decoration:none;margin:16px 0 10px;letter-spacing:-0.02em;
}
.phone-link:hover{color:#93c5fd;}
.email-link{
  display:block;font-size:1rem;color:rgba(255,255,255,0.65);
  text-decoration:none;margin-bottom:24px;
}
.email-link:hover{color:#60a5fa;}

.cta-btn{
  display:inline-block;background:#2563eb;color:#fff;
  font-size:1rem;font-weight:700;padding:16px 32px;
  border-radius:12px;text-decoration:none;
  border:none;cursor:pointer;
  transition:background 0.2s;
}
.cta-btn:hover{background:#1d4ed8;}
.cta-sub{margin-top:12px;font-size:13px;color:rgba(255,255,255,0.4);}

.close-logo{
  font-size:2.6rem;font-weight:900;letter-spacing:-0.03em;margin-bottom:12px;
}
.close-tagline{font-size:1.1rem;color:rgba(255,255,255,0.55);margin-bottom:8px;}
.close-url{font-size:14px;color:rgba(255,255,255,0.3);}

.cities-note{
  margin-top:16px;font-size:12px;
  color:rgba(255,255,255,0.35);letter-spacing:0.04em;
}

#desktop-overlay{
  position:fixed;top:0;left:0;width:100%;height:100%;
  background:rgba(0,0,0,0.92);z-index:999;
  display:none;align-items:center;justify-content:center;
  padding:24px;
}
.overlay-card{
  background:#111;border:1px solid rgba(255,255,255,0.1);
  border-radius:20px;padding:40px 32px;max-width:380px;
  text-align:center;
}
.overlay-card h2{font-size:1.5rem;font-weight:800;margin-bottom:12px;}
.overlay-card p{font-size:14px;color:rgba(255,255,255,0.65);line-height:1.6;margin-bottom:24px;}
.overlay-btn{
  display:inline-block;background:rgba(255,255,255,0.08);
  color:rgba(255,255,255,0.75);padding:12px 24px;
  border-radius:10px;text-decoration:none;font-size:14px;font-weight:600;
  transition:background 0.2s;
}
.overlay-btn:hover{background:rgba(255,255,255,0.14);}

@keyframes fadeUp{
  from{opacity:0;transform:translateY(20px);}
  to{opacity:1;transform:translateY(0);}
}
@keyframes pulse-glow{
  0%,100%{text-shadow:0 0 20px rgba(96,165,250,0.4);}
  50%{text-shadow:0 0 40px rgba(96,165,250,0.8),0 0 60px rgba(96,165,250,0.3);}
}
@keyframes tap-pulse{
  0%,100%{opacity:0.5;transform:translateX(-50%) scale(1);}
  50%{opacity:1;transform:translateX(-50%) scale(1.08);}
}
@keyframes btn-pulse{
  0%,100%{box-shadow:0 0 0 0 rgba(96,165,250,0.4);}
  50%{box-shadow:0 0 0 12px rgba(96,165,250,0);}
}
@keyframes glow-fade{
  0%{opacity:0;}
  100%{opacity:1;}
}

.fade-up{animation:fadeUp 0.6s ease forwards;opacity:0;}
.pulse-glow{animation:pulse-glow 2s ease infinite;}
.btn-pulse{animation:btn-pulse 2s ease infinite;}
.tap-hint{animation:tap-pulse 2s ease infinite;}

@keyframes radialGlow{
  0%{opacity:0;}
  100%{opacity:0.35;}
}
.radial-bg{
  position:absolute;top:50%;left:50%;
  width:600px;height:600px;
  transform:translate(-50%,-50%);
  background:radial-gradient(circle,rgba(96,165,250,0.25) 0%,transparent 70%);
  animation:radialGlow 2.5s ease forwards;
  pointer-events:none;
}

@media(min-width:769px){
  #desktop-overlay{display:flex;}
}
@media(max-width:768px){
  #desktop-overlay{display:none;}
}
`;

const slide3Words =
  "You're paying for tools that don't talk to each other. Your website was built 3 years ago. Your social media hasn't posted in weeks."
    .split(" ")
    .map((word, i) => (
      <span key={i} className="word-reveal fade-up">
        {word}
      </span>
    ));

export default function StoryPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS_STRING }} />
      <div id="story-root">
        {/* Progress bar */}
        <div id="progress-bar">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="progress-seg" />
          ))}
        </div>

        {/* Slides container */}
        <div id="slides-wrap">
          {/* Slide 1 — Hook */}
          <div className="slide" style={{ background: "#0a0a0f" }}>
            <div className="hook-headline fade-up">
              You&apos;re invisible
              <br />
              on Google.
            </div>
            <div className="hook-sub fade-up">
              Most local businesses are.
              <br />
              Let&apos;s fix that.
            </div>
            <div className="tap-hint">Tap to continue →</div>
          </div>

          {/* Slide 2 — Problem */}
          <div className="slide" style={{ background: "#0d0d1a" }}>
            <div className="slide-title fade-up">
              Your competitors are getting
              <br />
              the calls you should be getting.
            </div>
            <div style={{ marginTop: "28px" }}>
              <div className="stat-num pulse-glow fade-up">93%</div>
              <div className="stat-label fade-up">
                of online experiences start with a search engine
              </div>
            </div>
          </div>

          {/* Slide 3 — Reality */}
          <div className="slide" style={{ background: "#0f0d1f" }}>
            <div
              className="slide-title fade-up"
              style={{ marginBottom: "20px" }}
            >
              The reality most business owners face:
            </div>
            <div
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {slide3Words}
            </div>
          </div>

          {/* Slide 4 — What If */}
          <div
            className="slide"
            style={{
              background: "linear-gradient(160deg,#0d1128 0%,#1a0d28 100%)",
            }}
          >
            <div
              className="hook-headline fade-up"
              style={{ fontSize: "2.2rem" }}
            >
              What if one team
              <br />
              handled everything?
            </div>
            <div className="hook-sub fade-up">
              No more juggling vendors.
              <br />
              One team. One bill. One result.
            </div>
          </div>

          {/* Slide 5 — Web Design */}
          <div className="slide" style={{ background: "#0a0f1e" }}>
            <div className="slide-title fade-up">
              Websites that actually convert.
            </div>
            <div className="service-card fade-up">
              <div className="service-price">From $497</div>
              <ul className="feature-list">
                <li>Mobile-first design</li>
                <li>SEO-optimized structure</li>
                <li>Contact form + analytics</li>
                <li>Delivered in 7 days</li>
              </ul>
              <a href="/web-design" className="service-cta">
                See web design packages →
              </a>
            </div>
          </div>

          {/* Slide 6 — Social Media */}
          <div className="slide" style={{ background: "#0d0a1e" }}>
            <div className="slide-title fade-up">
              Social media that builds your brand.
            </div>
            <div className="service-card fade-up">
              <div className="service-price">From $199/mo</div>
              <ul className="feature-list">
                <li>3 posts/week</li>
                <li>Custom graphics</li>
                <li>Caption + hashtag strategy</li>
                <li>Monthly performance report</li>
              </ul>
              <a href="/social-media" className="service-cta">
                See social media packages →
              </a>
            </div>
          </div>

          {/* Slide 7 — SEO */}
          <div className="slide" style={{ background: "#0a1428" }}>
            <div className="slide-title fade-up">
              Get found on Google. Stay found.
            </div>
            <div className="service-card fade-up">
              <div className="service-price">Free audit + from $297/mo</div>
              <ul className="feature-list">
                <li>Keyword research</li>
                <li>On-page optimization</li>
                <li>Local SEO (maps)</li>
                <li>Monthly ranking report</li>
              </ul>
              <a href="/seo" className="service-cta">
                See SEO packages →
              </a>
            </div>
          </div>

          {/* Slide 8 — Difference */}
          <div
            className="slide"
            style={{
              background: "linear-gradient(160deg,#14001e 0%,#0a0014 100%)",
            }}
          >
            <div className="slide-title fade-up">
              Powered by AI. Run by humans.
            </div>
            <div className="slide-body fade-up">
              We use AI to deliver agency-quality work at freelancer prices.
              Every project is reviewed and overseen by Jason personally — you
              always have a human who cares.
            </div>
            <div className="icons-row fade-up">
              <div className="icon-chip">⚡ AI Speed</div>
              <div className="icon-chip">🤝 Human Touch</div>
              <div className="icon-chip">📍 Sacramento-Based</div>
            </div>
          </div>

          {/* Slide 9 — Social Proof */}
          <div className="slide" style={{ background: "#0a0a14" }}>
            <div className="slide-title fade-up">
              Sacramento businesses trust Bamberg Digital
            </div>
            <div className="testimonial-card fade-up">
              <div className="testimonial-text">
                &ldquo;They built our site in 5 days and we got 3 leads in the
                first week.&rdquo;
              </div>
              <div className="testimonial-author">
                — Maria T., Elk Grove Restaurant Owner
              </div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="testimonial-text">
                &ldquo;Finally, someone who explains digital marketing in plain
                English.&rdquo;
              </div>
              <div className="testimonial-author">
                — David R., Folsom Contractor
              </div>
            </div>
            <div className="cities-note fade-up">
              Serving Sacramento · Elk Grove · Folsom · Roseville
            </div>
          </div>

          {/* Slide 10 — Pricing */}
          <div className="slide" style={{ background: "#0d0d1e" }}>
            <div className="slide-title fade-up">
              No contracts. No surprises.
            </div>
            <div className="pricing-row fade-up">
              <div className="pricing-chip">
                <div className="pricing-chip-name">Web Design</div>
                <div className="pricing-chip-price">from $497</div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                  }}
                >
                  one-time
                </div>
              </div>
              <div className="pricing-chip">
                <div className="pricing-chip-name">Social Media</div>
                <div className="pricing-chip-price">from $199</div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                  }}
                >
                  /mo
                </div>
              </div>
              <div className="pricing-chip">
                <div className="pricing-chip-name">SEO</div>
                <div className="pricing-chip-price">from $297</div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                  }}
                >
                  /mo
                </div>
              </div>
            </div>
            <a
              href="/pricing"
              className="service-cta fade-up"
              style={{ marginTop: "20px" }}
            >
              See all pricing →
            </a>
          </div>

          {/* Slide 11 — CTA */}
          <div className="slide" style={{ background: "#0a0f28" }}>
            <div className="slide-title fade-up">
              Let&apos;s talk about your business.
            </div>
            <a href="tel:+19169077782" className="phone-link fade-up">
              (916) 907-7782
            </a>
            <a
              href="mailto:hello@bambergdigital.com"
              className="email-link fade-up"
            >
              hello@bambergdigital.com
            </a>
            <a href="/pricing" className="cta-btn btn-pulse fade-up">
              Get Started Today
            </a>
            <div className="cta-sub fade-up">
              Free consultation. No pressure.
            </div>
          </div>

          {/* Slide 12 — Close */}
          <div
            className="slide"
            style={{
              background: "#000000",
              position: "relative",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="radial-bg" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="close-logo fade-up">
                Bamberg
                <br />
                <span style={{ color: "#60a5fa" }}>Digital</span>
              </div>
              <div className="close-tagline fade-up">
                Your growth, automated.
              </div>
              <div className="close-url fade-up">bambergdigital.com</div>
            </div>
          </div>
        </div>

        {/* Desktop overlay */}
        <div id="desktop-overlay">
          <div className="overlay-card">
            <div style={{ fontSize: "2rem", marginBottom: "16px" }}>📱</div>
            <h2>Built for mobile</h2>
            <p>
              This experience is designed for your phone. Open on mobile for the
              full effect.
            </p>
            <a href="/" className="overlay-btn">
              ← Back to bambergdigital.com
            </a>
          </div>
        </div>

        {/* SEO fallback */}
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <h1>Bamberg Digital — Sacramento&apos;s AI-Powered Digital Agency</h1>
          <p>
            You&apos;re invisible on Google. Most local businesses are. Your
            competitors are getting the calls you should be getting. 93% of
            online experiences start with a search engine. You&apos;re paying
            for tools that don&apos;t talk to each other. Your website was built
            3 years ago. Your social media hasn&apos;t posted in weeks. What if
            one team handled everything? No more juggling vendors. One team. One
            bill. One result.
          </p>
          <p>
            Websites that actually convert. From $497. Mobile-first design.
            SEO-optimized structure. Contact form and analytics. Delivered in 7
            days.
          </p>
          <p>
            Social media that builds your brand. From $199 per month. 3 posts
            per week. Custom graphics. Caption and hashtag strategy. Monthly
            performance report.
          </p>
          <p>
            Get found on Google. Stay found. Free audit plus from $297 per
            month. Keyword research. On-page optimization. Local SEO. Monthly
            ranking report.
          </p>
          <p>
            Powered by AI. Run by humans. We use AI to deliver agency-quality
            work at freelancer prices. Sacramento&apos;s AI-powered digital
            agency. Serving Sacramento, Elk Grove, Folsom, Roseville.
          </p>
          <p>
            No contracts. No surprises. Web design from $497 one-time. Social
            media from $199 per month. SEO from $297 per month.
          </p>
          <p>
            Let&apos;s talk about your business. Call (916) 907-7782. Email
            hello@bambergdigital.com. Free consultation. No pressure.
          </p>
          <p>Bamberg Digital. Your growth, automated. bambergdigital.com</p>
        </div>
      </div>

      <StoryClient />
    </>
  );
}
