import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Trophy, Users, BookOpen, Heart } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Best Art Academy", subtitle: "Hyderabad Cultural Awards 2023", color: "#D4AF37", bg: "rgba(212,175,55,0.12)" },
  { icon: Award, title: "500+ Students Trained", subtitle: "Across all disciplines since 2014", color: "#8B1E2D", bg: "rgba(139,30,45,0.12)" },
  { icon: Star, title: "10+ Years of Excellence", subtitle: "Established & trusted since 2014", color: "#B7323C", bg: "rgba(183,50,60,0.12)" },
  { icon: Users, title: "Community Impact", subtitle: "Art workshops in 20+ local schools", color: "#D4AF37", bg: "rgba(212,175,55,0.12)" },
  { icon: BookOpen, title: "15+ Structured Courses", subtitle: "From beginner to advanced levels", color: "#8B1E2D", bg: "rgba(139,30,45,0.12)" },
  { icon: Heart, title: "4.9★ Average Rating", subtitle: "Loved by students across all ages", color: "#B7323C", bg: "rgba(183,50,60,0.12)" },
];

const AchievementsSection = ({ hideHeader }: { hideHeader?: boolean } = {}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #0D0D0D 0%, #1A0508 15%, #3D0E18 35%, #6B1A28 55%, #A02535 75%, #C8384A 90%, #8B1E2D 100%)",
        padding: "clamp(60px,8vh,100px) 0",
      }}
      ref={ref}
    >
      {/* Background grain */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.035, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "5%", left: "3%", width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(212,175,55,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "3%", width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(212,175,55,0.1)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
            style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
          >
            <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37", background: "rgba(212,175,55,0.1)", border: "1.5px solid rgba(212,175,55,0.3)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
              Recognition & Milestones
            </span>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 12 }}>
              Our <span style={{ background: "linear-gradient(135deg, #D4AF37, #E6C65C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Achievements</span>
            </h2>
            <p style={{ color: "rgba(247,243,235,0.7)", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
              A decade of dedication recognized through national awards, thousands of students, and deep community impact.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 16 }}>
              <div style={{ width: 48, height: 1.5, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.7))" }} />
              <div style={{ width: 7, height: 7, background: "#D4AF37", transform: "rotate(45deg)" }} />
              <div style={{ width: 48, height: 1.5, background: "linear-gradient(90deg, rgba(212,175,55,0.7), transparent)" }} />
            </div>
          </motion.div>
        )}

        {/* Achievements grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: 18, padding: "32px 24px", textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                cursor: "default", transition: "border-color 0.25s",
              }}
              className="achievement-card"
            >
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: `2px solid ${a.color}30` }}>
                <a.icon size={30} style={{ color: a.color }} />
              </div>
              <h3 style={{ color: "#FFFFFF", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{a.title}</h3>
              <p style={{ color: "rgba(247,243,235,0.65)", fontSize: "0.82rem", fontFamily: "Poppins, sans-serif" }}>{a.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .achievement-card:hover {
          border-color: rgba(212,175,55,0.45) !important;
          box-shadow: 0 12px 48px rgba(0,0,0,0.35) !important;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;
