import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Clock, Palette, Music, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const workshops = [
  { title: "Weekend Painting Workshop", batch: "Weekend batches", duration: "3 Hours", icon: Palette, desc: "Explore acrylic and watercolor techniques in guided weekend sessions with professional artists.", color: "#D4AF37" },
  { title: "Summer Art Camp", batch: "Weekday batches", duration: "2 Weeks", icon: Sparkles, desc: "An immersive summer program covering drawing, painting, pottery and craft activities for all ages.", color: "#8B1E2D" },
  { title: "Pottery Weekend Special", batch: "Weekend batches", duration: "4 Hours", icon: Calendar, desc: "Hands-on pottery experience — learn wheel throwing, hand building and glazing techniques.", color: "#B7323C" },
  { title: "Music Jam Session", batch: "Weekday batches", duration: "2 Hours", icon: Music, desc: "Interactive music sessions covering guitar, keyboard, vocals and rhythm training for beginners.", color: "#D4AF37" },
];

const WorkshopsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  return (
    <section id="workshops" style={{ background: "linear-gradient(180deg, #F7F3EB 0%, #EDE8E0 100%)", padding: "clamp(60px,8vh,100px) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #E6C65C 50%, #D4AF37 70%, transparent)" }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
        >
          <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
            Special Programs
          </span>
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, marginBottom: 12 }}>
            Workshops & <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Special Events</span>
          </h2>
          <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
            Short-term immersive experiences designed to ignite creativity, build skills, and create lasting memories for artists of all ages.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((ws, i) => (
            <motion.div
              key={ws.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "#FFFFFF", borderRadius: 18,
                border: "1.5px solid rgba(139,30,45,0.1)",
                boxShadow: "0 4px 20px rgba(139,30,45,0.06)",
                padding: "28px 22px", display: "flex", flexDirection: "column",
                transition: "all 0.3s",
              }}
              className="workshop-card"
            >
              <div style={{ width: 56, height: 56, borderRadius: 14, background: `${ws.color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, border: `1.5px solid ${ws.color}25` }}>
                <ws.icon size={26} style={{ color: ws.color }} />
              </div>
              <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, fontSize: "1.02rem", color: "#2E0A12", lineHeight: 1.35, marginBottom: 10 }}>{ws.title}</h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", color: "#777", lineHeight: 1.65, flexGrow: 1, marginBottom: 16 }}>{ws.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <Clock size={12} style={{ color: "#8B1E2D" }} />
                <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#999" }}>{ws.batch}</span>
                <span style={{ color: "#CCC" }}>·</span>
                <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "#999" }}>{ws.duration}</span>
              </div>
              <button
                onClick={() => navigate("/register")}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", color: "#D4AF37", border: "none", borderRadius: 50, padding: "10px 20px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer", letterSpacing: "0.04em", transition: "all 0.25s" }}
                className="workshop-btn"
              >
                Join Now <ArrowRight size={13} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA to workshops page */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <button
            onClick={() => navigate("/workshops")}
            style={{ background: "transparent", color: "#8B1E2D", border: "2px solid rgba(139,30,45,0.4)", borderRadius: 50, padding: "12px 32px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", letterSpacing: "0.05em", transition: "all 0.25s" }}
            className="view-all-btn"
          >
            View All Workshops →
          </button>
        </motion.div>
      </div>

      <style>{`
        .workshop-card:hover {
          border-color: rgba(212,175,55,0.35) !important;
          box-shadow: 0 12px 40px rgba(139,30,45,0.12) !important;
          transform: translateY(-6px);
        }
        .workshop-btn:hover { box-shadow: 0 4px 20px rgba(139,30,45,0.4); transform: translateY(-1px); background: linear-gradient(135deg, #8B1E2D, #B7323C, #D4AF37) !important; }
        .view-all-btn:hover { background: rgba(139,30,45,0.06) !important; border-color: rgba(139,30,45,0.7) !important; }
      `}</style>
    </section>
  );
};

export default WorkshopsSection;
