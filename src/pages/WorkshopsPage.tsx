import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Clock, Palette, Music, Sparkles, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const workshops = [
  { title: "Weekend Painting Workshop", batch: "Weekend batches", duration: "3 Hours", icon: Palette, desc: "Explore acrylic and watercolor techniques in our guided weekend sessions with professional artists. Perfect for beginners and intermediate learners.", details: ["Acrylic & watercolor techniques", "Canvas preparation & color mixing", "Landscape & portrait painting", "Certificate on completion"], color: "#D4AF37" },
  { title: "Summer Art Camp", batch: "Weekday batches", duration: "2 Weeks", icon: Sparkles, desc: "An immersive summer program covering drawing, painting, pottery and craft activities for all ages. The highlight of every summer!", details: ["Drawing, painting & pottery", "Craft & mixed media", "Art exhibition at the end", "Open to all skill levels"], color: "#8B1E2D" },
  { title: "Pottery Weekend Special", batch: "Weekend batches", duration: "4 Hours", icon: Calendar, desc: "Hands-on pottery experience — learn wheel throwing, hand building and glazing techniques from our expert pottery instructor.", details: [ "Hand building & coiling", "Glazing & finishing", "Take home your creations"], color: "#B7323C" },
  { title: "Music Jam Session", batch: "Weekday batches", duration: "2 Hours", icon: Music, desc: "Interactive music sessions covering guitar, keyboard, vocals and rhythm training in a fun, collaborative group setting.", details: ["Guitar & keyboard basics", "Vocal warm-ups & techniques", "Rhythm & beat training", "Group jam performance"], color: "#D4AF37" },
  { title: "Sketch Marathon", batch: "Monthly event", duration: "5 Hours", icon: Users, desc: "A full-day sketching challenge covering portrait, landscape and still life drawing. Competitive and collaborative at the same time.", details: ["Portrait & figure sketching", "Landscape composition", "Still life techniques", "Awards for best sketches"], color: "#8B1E2D" },
  { title: "Kids Art Fiesta", batch: "Holiday special", duration: "3 Hours", icon: Clock, desc: "Fun-filled creative activities designed for young aspiring artists aged 4-12. A perfect holiday activity full of colour and creativity!", details: ["Finger painting & collage", "Clay modelling", "Story-based art activities", "Prizes & certificates"], color: "#B7323C" },
];

const stats = [
  { value: "50+", label: "Workshops Conducted" },
  { value: "1000+", label: "Students Trained" },
  { value: "4.9★", label: "Average Rating" },
  { value: "6+", label: "Workshop Types" },
];

const WorkshopsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="pt-16">
          <PageHero
            title="Our"
            highlight="Workshops"
            subtitle="Monthly workshops, short-term and long-term programs for students of all ages and skill levels"
          />

          <section style={{ background: "#F7F3EB", padding: "clamp(60px,8vh,100px) 0" }}>
            <div className="container">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: "clamp(40px,6vh,64px)", background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", borderRadius: 20, padding: "28px 32px", boxShadow: "0 12px 40px rgba(139,30,45,0.3)" }}
                className="workshop-stats-grid"
              >
                {stats.map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, fontSize: "1.6rem", color: "#D4AF37", lineHeight: 1 }}>{s.value}</p>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", color: "rgba(247,243,235,0.65)", marginTop: 6 }}>{s.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Workshop cards */}
              <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {workshops.map((ws, i) => (
                  <motion.div
                    key={ws.title}
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{ background: "#FFFFFF", border: "1.5px solid rgba(139,30,45,0.1)", borderRadius: 20, padding: "28px 24px", display: "flex", flexDirection: "column", boxShadow: "0 4px 20px rgba(139,30,45,0.06)", transition: "all 0.3s" }}
                    className="workshop-full-card"
                  >
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: `${ws.color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, border: `1.5px solid ${ws.color}25` }}>
                      <ws.icon size={26} style={{ color: ws.color }} />
                    </div>
                    <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, fontSize: "1.05rem", color: "#2E0A12", lineHeight: 1.35, marginBottom: 10 }}>{ws.title}</h3>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.83rem", color: "#777", lineHeight: 1.65, marginBottom: 18, flexGrow: 1 }}>{ws.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                      {ws.details.map(d => (
                        <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#8B1E2D", marginTop: 2, fontSize: "0.6rem" }}>◆</span>
                          <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#666" }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid rgba(139,30,45,0.08)" }}>
                      <div>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.72rem", color: "#AAA" }}>{ws.batch}</p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.78rem", color: "#8B1E2D", fontWeight: 600 }}>{ws.duration}</p>
                      </div>
                      <button
                        onClick={() => navigate("/register")}
                        style={{ display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", color: "#D4AF37", border: "none", borderRadius: 50, padding: "10px 20px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer", letterSpacing: "0.04em", transition: "all 0.25s" }}
                        className="ws-join-btn"
                      >
                        Join <ArrowRight size={13} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Workshop Gallery 
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ marginTop: "clamp(60px,8vh,80px)" }}
              >
                <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, color: "#5C0F1A", textAlign: "center", marginBottom: "clamp(30px,4vh,48px)" }}>
                  Glimpses of Our <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Workshops</span>
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                  {[
                    "https://lh3.googleusercontent.com/p/AF1QipO9M6t8cqUT14niDnEg1f9amr3rmdcVtiu4XbRo=w1024",
                    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerREN27u8k_sawHp1RblSV-INnE59Q85ylXNW7BUgov8KxNkNwFNm3KXMKGU0VkUFNXe21U6IyFHpyy2cg3KqHaxt66bDLaMpoHxfdkSrsKvGcN=w1024"
                  ].map((src, i) => (
<<<<<<< HEAD
                    <motion.div key={src} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} style={{ borderRadius: 16, overflow: "hidden", border: "2px solid rgba(212,175,55,0.15)", boxShadow: "0 8px 30px rgba(139,30,45,0.12)", cursor: "pointer", background: "#f8f8f8" }}>
=======
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} style={{ borderRadius: 16, overflow: "hidden", border: "2px solid rgba(212,175,55,0.15)", boxShadow: "0 8px 30px rgba(139,30,45,0.12)", cursor: "pointer", background: "#f8f8f8" }}>
>>>>>>> 574b394 (Preview Added)
                      <img src={src} alt="Workshop" style={{ width: "100%", height: 260, objectFit: "cover", display: "block", transition: "transform 0.5s ease" }} className="ws-gallery-img" onError={(e) => { e.currentTarget.style.opacity = '0.3' }} referrerPolicy="no-referrer" crossOrigin="anonymous" loading="lazy" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              */}
            </div>
          </section>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppButton />
      <style>{`
        .workshop-full-card:hover { border-color: rgba(212,175,55,0.3) !important; box-shadow: 0 12px 40px rgba(139,30,45,0.12) !important; transform: translateY(-5px); }
        .ws-join-btn:hover { background: linear-gradient(135deg, #8B1E2D, #B7323C, #D4AF37) !important; box-shadow: 0 4px 20px rgba(139,30,45,0.4); }
        .ws-gallery-img:hover { transform: scale(1.06); }
        @media (max-width: 640px) { .workshop-stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  );
};

export default WorkshopsPage;
