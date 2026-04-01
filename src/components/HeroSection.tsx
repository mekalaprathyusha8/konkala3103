import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Imported images from assets
import img1 from "../assets/492356986_1251135083689739_1255324562041729510_n.jpg";
import img2 from "../assets/495293089_1258981669571747_4693515321883132767_n.jpg";
import img3 from "../assets/546592938_1373223274814252_7216387905622457055_n.jpg";
import img4 from "../assets/hero-slide2-img4.jpg";
import img5 from "../assets/627196450_1503946931741885_3731461679605161424_n.jpg";
import img6 from "../assets/628038501_1505957138207531_3798120997786308507_n.jpg";
import img7 from "../assets/651044007_1535504571919454_8464848720093164676_n.jpg";
import img8 from "../assets/hero-slide3-img4.jpg";
import img9 from "../assets/hero-slide4-img1.jpg";
import img10 from "../assets/images.jpg";
import img11 from "../assets/hero-slide4-img3.jpg";
import img12 from "../assets/student-painting-ganesha.jpg";
import img13 from "../assets/student-sketch-1.jpg";
// New hero images from academy photos
import imgHero1 from "../assets/hero-pottery-wheel.jpg";
import imgHero2 from "../assets/hero-ganesha-painting.jpg";
import imgHero3 from "../assets/hero-students-art.jpg";
import imgHero4 from "../assets/hero-art-studio.jpg";

// 4 slides of 4 images each (16 total) — includes new real academy photos
const SLIDES = [
  [imgHero1, imgHero2, imgHero3, imgHero4],
  [img1, img2, img3, img4],
  [img5, img6, img7, img8],
  [img9, img10, img11, img12],
];

const SLIDE_MS = 5000; // 5 seconds as requested
const disciplines = ["Painting", "Sketching", "Pottery", "Guitar", "Vocals"];

const HeroSection = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((idx: number) => {
    setDir(idx >= slide ? 1 : -1);
    setSlide(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  }, [slide]);

  const prev = useCallback(() => go((slide - 1 + SLIDES.length) % SLIDES.length), [go, slide]);
  const next = useCallback(() => go((slide + 1) % SLIDES.length), [go, slide]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDir(1);
      setSlide(s => (s + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, [paused]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section
      id="home"
      style={{
        position: "relative", width: "100%", overflow: "hidden",
        background: "linear-gradient(165deg, var(--secondary) 0%, var(--primary-dark) 20%, var(--primary) 45%, var(--primary-light) 65%, var(--primary) 80%, var(--primary-dark) 95%, var(--secondary) 100%)",
      }}
    >
      {/* Gold top stripe */}
      <div style={{ height: 3, background: "linear-gradient(90deg, var(--secondary), var(--primary) 15%, var(--accent) 30%, var(--accent-bright) 50%, var(--accent) 70%, var(--primary) 85%, var(--secondary))" }} />

      {/* Ambient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.07) 0%, transparent 55%)", zIndex: 1 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, opacity: 0.03, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      {/* CONTENT — compact layout, smaller height */}
      <div
        className="relative flex flex-col items-center w-full"
        style={{ zIndex: 10, paddingTop: "clamp(72px,10vh,100px)", paddingBottom: "clamp(16px,3vh,32px)" }}
      >
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: 14 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "Poppins, sans-serif", color: "var(--accent)", fontSize: "clamp(8px,1vw,10px)", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", background: "rgba(var(--secondary-rgb),0.75)", border: "1.5px solid rgba(var(--accent-rgb),0.5)", borderRadius: 50, padding: "5px 18px", backdropFilter: "blur(10px)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} className="pulse-dot" />
            Konkala Fine Arts Academy · Hyderabad
          </span>
        </motion.div>

        {/* Headline — compact */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
          style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.7rem, 4.5vw, 3.6rem)", fontWeight: 900, color: "#FFFFFF", textShadow: "0 4px 28px rgba(20,4,8,0.9)", lineHeight: 1.15, textAlign: "center", maxWidth: 680, margin: "0 auto 10px", padding: "0 16px" }}
        >
          Where Every Stroke
          <br />
          <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Tells a Story
          </span>
        </motion.h1>

        {/* Discipline pills — compact row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 14, padding: "0 16px" }}
        >
          {disciplines.map((d) => (
            <span key={d} style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.7rem", fontWeight: 500, color: "rgba(var(--white-rgb),0.7)", letterSpacing: "0.08em", padding: "3px 12px", borderRadius: 50, background: "rgba(var(--white-rgb),0.06)", border: "1px solid rgba(var(--accent-rgb),0.18)" }}>
              {d}
            </span>
          ))}
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", marginBottom: 18 }}
        >
          <div style={{ width: 48, height: 1.5, background: "linear-gradient(90deg, transparent, rgba(var(--accent-rgb),0.7))" }} />
          {[1, 0.4, 1].map((o, i) => <div key={i} style={{ width: 6, height: 6, background: "var(--accent)", transform: "rotate(45deg)", opacity: o }} />)}
          <div style={{ width: 48, height: 1.5, background: "linear-gradient(90deg, rgba(var(--accent-rgb),0.7), transparent)" }} />
        </motion.div>

        {/* IMAGE SLIDER — the main feature */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          style={{ width: "100%", maxWidth: 1200, padding: "0 clamp(10px,2.5vw,36px)", marginBottom: 14 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{ position: "relative", overflow: "hidden", borderRadius: 16 }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={slide}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="hero-slider-grid"
              >
                {SLIDES[slide].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="art-frame-hover"
                  >
                    {/* Frame */}
                    <div style={{ background: "linear-gradient(145deg, #2a1a1e, #1a1012)", padding: "clamp(5px,0.8vw,10px)", borderRadius: 12, boxShadow: "0 0 0 1px rgba(212,175,55,0.16), 0 16px 48px rgba(0,0,0,0.75)" }}>
                      <div style={{ position: "relative", borderRadius: 7, overflow: "hidden" }}>
                        <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(var(--accent-rgb),0.3)", borderRadius: 7, zIndex: 1, pointerEvents: "none" }} />
                        <img
                          src={src}
                          alt={`Artwork ${slide * 4 + i + 1}`}
                          loading="lazy"
                          className="art-img-zoom"
                          style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", borderRadius: 7, background: "rgba(var(--secondary-rgb),0.5)" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button onClick={prev} className="slider-arrow-btn" style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", zIndex: 30, background: "rgba(var(--secondary-rgb),0.88)", border: "1.5px solid rgba(var(--accent-rgb),0.45)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(8px)", boxShadow: "0 3px 12px rgba(0,0,0,0.5)", transition: "all 0.2s" }}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="slider-arrow-btn" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", zIndex: 30, background: "rgba(var(--secondary-rgb),0.88)", border: "1.5px solid rgba(var(--accent-rgb),0.45)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(8px)", boxShadow: "0 3px 12px rgba(0,0,0,0.5)", transition: "all 0.2s" }}>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dots + progress */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginTop: 10 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => go(i)} style={{ width: i === slide ? 28 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", transition: "all 0.35s ease", background: i === slide ? "linear-gradient(90deg, var(--primary), var(--accent))" : "rgba(var(--white-rgb),0.28)" }} />
              ))}
            </div>
            <div style={{ width: "100%", maxWidth: 200, height: 2, background: "rgba(var(--white-rgb),0.08)", borderRadius: 2, overflow: "hidden" }}>
              <motion.div key={`pb-${slide}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: SLIDE_MS / 1000, ease: "linear" }} style={{ height: "100%", background: "linear-gradient(90deg, var(--primary), var(--accent))" }} />
            </div>
          </div>
        </motion.div>

        {/* CTAs — compact */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 16, padding: "0 16px" }}
        >
          <button
            onClick={() => navigate("/courses")}
            className="cta-primary-btn"
            style={{ background: "var(--gradient-secondary)", color: "var(--accent)", border: "2px solid rgba(var(--accent-rgb),0.6)", borderRadius: 50, padding: "12px 32px", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.05em", cursor: "pointer", fontFamily: "Poppins, sans-serif", boxShadow: "0 5px 24px rgba(var(--primary-rgb),0.5)", transition: "all 0.25s" }}
          >
            Explore Courses
          </button>
        </motion.div>

        {/* Stats — compact pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }}
          style={{ display: "inline-flex", alignItems: "center", background: "rgba(var(--secondary-rgb),0.7)", backdropFilter: "blur(18px)", border: "1px solid rgba(var(--accent-rgb),0.22)", borderRadius: 50, padding: "8px 6px", boxShadow: "0 6px 24px rgba(0,0,0,0.35)" }}
        >
          {[{ n: "10+", l: "Years" }, { n: "1000+", l: "Students" }, { n: "15+", l: "Courses" }].map((s, i, arr) => (
            <div key={s.l} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px" }}>
                <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1rem", fontFamily: "Playfair Display, Georgia, serif", lineHeight: 1 }}>{s.n}</span>
                <span style={{ color: "rgba(var(--white-rgb),0.45)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 2 }}>{s.l}</span>
              </div>
              {i < arr.length - 1 && <div style={{ width: 1, height: 28, background: "rgba(var(--accent-rgb),0.18)" }} />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gold bottom stripe */}
      <div style={{ height: 3, background: "linear-gradient(90deg, var(--secondary), var(--primary) 15%, var(--accent) 30%, var(--accent-bright) 50%, var(--accent) 70%, var(--primary) 85%, var(--secondary))" }} />

      <style>{`
        .hero-slider-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(6px,1.2vw,14px);
        }
        @media (max-width: 640px) {
          .hero-slider-grid { grid-template-columns: 1fr !important; }
          .hero-slider-grid > div:nth-child(n+2) { display: none; }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .hero-slider-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-slider-grid > div:nth-child(n+3) { display: none; }
        }
        .art-frame-hover { cursor: pointer; transition: transform 0.25s ease; }
        .art-frame-hover:hover { transform: translateY(-7px) scale(1.03); z-index: 20; }
        .art-img-zoom { transition: transform 0.5s ease; }
        .art-frame-hover:hover .art-img-zoom { transform: scale(1.08); }
        .slider-arrow-btn:hover { background: rgba(var(--primary-rgb),0.95) !important; }
        .cta-primary-btn:hover { transform: scale(1.05) translateY(-2px); box-shadow: 0 10px 36px rgba(var(--primary-rgb),0.65) !important; }
        .cta-secondary-btn:hover { background: rgba(var(--accent-rgb),0.16) !important; transform: scale(1.05) translateY(-2px); }
        .pulse-dot { animation: dotPulse 2s ease-in-out infinite; }
        @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
      `}</style>
    </section>
  );
};

export default HeroSection;
