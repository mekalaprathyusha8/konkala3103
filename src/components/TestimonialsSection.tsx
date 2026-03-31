import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Mahesh A.", role: "Student", initials: "MA", text: "Music, arts, drawing, sketching, water colors, pastels… what not. This is the best place to learn. This place brings out the best in you. Highly recommend to everyone!", date: "Jan 2018" },
  { name: "Priya S.", role: "Parent", initials: "PS", text: "Wonderful place to learn arts and music! My child joined painting and drawing classes here and the improvement is amazing. The teachers are very patient and guide each student individually.", date: "Mar 2024" },
  { name: "Arjun K.", role: "Student", initials: "AK", text: "Excellent teachers and friendly environment. The faculty at Konkala Fine Arts are very supportive and professional. They encourage students and help them improve their artistic skills tremendously.", date: "Feb 2024" },
  { name: "Lakshmi R.", role: "Parent", initials: "LR", text: "Great institute for kids. My son attends guitar classes here and he enjoys every session. The teaching style is simple and engaging, making learning music fun and effective.", date: "Jan 2024" },
  { name: "Sanjay M.", role: "Student", initials: "SM", text: "Perfect place for creative learning. They offer a variety of activities like drawing, painting, music, and craft. The atmosphere is very positive, motivating and full of creativity.", date: "Dec 2023" },
  { name: "Deepa V.", role: "Parent", initials: "DV", text: "Very good art academy. The teachers take personal care of every student and help them build confidence in art. My daughter loves the painting classes and has improved remarkably.", date: "Nov 2023" },
  { name: "Rahul T.", role: "Student", initials: "RT", text: "Highly recommended for beginners. A great place for those who want to learn drawing and painting. The instructors explain techniques clearly and make learning genuinely enjoyable.", date: "Oct 2023" },
  { name: "Meera P.", role: "Parent", initials: "MP", text: "Amazing experience overall. My child enjoys every class and has learned many new art techniques. The environment is creative, inspiring and nurturing for young minds.", date: "Sep 2023" },
];

const SLIDE_MS = 5000;

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => { setDir(1); setCurrent((c) => (c + 1) % testimonials.length); }, SLIDE_MS);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => {
    setDir(d);
    setCurrent((c) => (c + d + testimonials.length) % testimonials.length);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  const getIdx = (offset: number) => (current + offset + testimonials.length) % testimonials.length;
  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(165deg, #7A1828 0%, #8B1E2D 30%, #9C2535 60%, #8B1E2D 85%, #7A1828 100%)",
        padding: "clamp(60px,8vh,100px) 0",
      }}
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")", backgroundSize: "200px", zIndex: 0 }} />
      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ top: "5%", left: "-4%", width: 300, height: 300, borderRadius: "60% 40% 50% 70%", background: "rgba(107,15,26,0.08)", zIndex: 0 }} />
      <div className="absolute pointer-events-none" style={{ bottom: "5%", right: "-5%", width: 260, height: 260, borderRadius: "40% 65% 55% 45%", background: "rgba(200,168,75,0.08)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
        >
          <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37", background: "rgba(212,175,55,0.1)", border: "1.5px solid rgba(212,175,55,0.3)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
            Student Stories
          </span>
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 12 }}>
            What Our Students <span style={{ background: "linear-gradient(135deg, #D4AF37, #E6C65C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Say</span>
          </h2>
          <p style={{ color: "rgba(247,243,235,0.6)", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto" }}>
            Real stories from students and parents who have experienced the transformative power of art education at Konkala.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div style={{ maxWidth: 760, margin: "0 auto" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{ position: "relative", minHeight: 280 }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(212,175,55,0.2)",
                  borderRadius: 24, padding: "clamp(28px,5vw,48px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                {/* Quote icon */}
                <div style={{ position: "absolute", top: 24, right: 28, opacity: 0.15 }}>
                  <Quote size={48} style={{ color: "#D4AF37" }} />
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} style={{ color: "#D4AF37", fill: "#D4AF37" }} />
                  ))}
                </div>

                {/* Text */}
                <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.9rem,1.8vw,1.05rem)", color: "rgba(247,243,235,0.88)", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #8B1E2D, #D4AF37)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(139,30,45,0.4)" }}>
                    <span style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#FFFFFF", fontSize: "0.95rem" }}>{t.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#FFFFFF", fontSize: "0.95rem" }}>{t.name}</p>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "rgba(212,175,55,0.7)" }}>{t.role} · {t.date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 28 }}>
            <button
              onClick={() => go(-1)}
              style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(139,30,45,0.6)", border: "1.5px solid rgba(212,175,55,0.4)", color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(6px)", transition: "all 0.2s" }}
              className="testi-arrow"
            >
              <ChevronLeft size={17} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i >= current ? 1 : -1); setCurrent(i); }}
                style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", transition: "all 0.35s", background: i === current ? "linear-gradient(90deg, #8B1E2D, #D4AF37)" : "rgba(255,255,255,0.25)" }}
              />
            ))}
            <button
              onClick={() => go(1)}
              style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(139,30,45,0.6)", border: "1.5px solid rgba(212,175,55,0.4)", color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(6px)", transition: "all 0.2s" }}
              className="testi-arrow"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
      <style>{`.testi-arrow:hover { background: rgba(139,30,45,0.9) !important; }`}</style>
    </section>
  );
};

export default TestimonialsSection;
