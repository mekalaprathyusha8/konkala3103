import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageWrapper from "@/components/PageWrapper";
import AchievementsSection from "@/components/AchievementsSection";

// Placeholder imports for the new certifications
import affiliationCert from "@/assets/affiliation-cert.jpg";
import isoCert from "@/assets/iso-cert.jpg";
import justdialCert from "@/assets/justdial-cert.jpg";
import maxCert from "@/assets/max-certificate.jpg";
import { motion } from "framer-motion";
import { Trophy, Star, Users, BookOpen, Award, Heart, Globe, School } from "lucide-react";

const milestones = [
  { year: "2013", title: "Academy Founded", desc: "Konkala Fine Arts established in Madhapur, Hyderabad with a vision to make quality art education accessible." },
  { year: "2016", title: "100 Students Milestone", desc: "Within two years, the academy crossed 100 enrolled students across painting, sketching, and music programs." },
  { year: "2018", title: "Expanded to Music", desc: "Launched guitar and vocal training programs, completing the arts & music vision of the academy." },
  { year: "2020", title: "Online Classes Launched", desc: "Adapted during the pandemic by successfully launching online classes, maintaining quality and continuity." },
  { year: "2022", title: "Community Outreach", desc: "Conducted workshops across 10+ schools, bringing quality art education to underprivileged communities." },
  { year: "2023", title: "Best Art Academy Award", desc: "Recognized with the Best Art Academy award at the Hyderabad Cultural Awards for outstanding contribution to arts education." },
  { year: "2024", title: "1000+ Students Trained", desc: "A proud milestone — over 500 students trained across all disciplines, ages 5 to 60+." },
  { year: "2025", title: "20+ Schools Reached", desc: "Community art workshops expanded to 20+ schools across Hyderabad, inspiring thousands of young minds." },
];

const AchievementsPage = () => (
  <>
    <Header />
    <PageWrapper page="achievements">
      <div className="pt-16">
        <PageHero
          title="Our"
          highlight="Achievements"
          subtitle="A decade of artistic excellence, community impact, and student success stories"
        />
        <AchievementsSection hideHeader />

        {/* Certifications & Affiliations */}
        <section style={{ padding: "clamp(60px,8vh,100px) 0", background: "linear-gradient(135deg, #1A0508, #2E0A12)" }}>
          <div className="container" style={{ maxWidth: 1280 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,60px)" }}
            >
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#D4AF37" }}>
                Certifications & Affiliations
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, justifyItems: "center" }}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ background: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 20, border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", maxWidth: 500, width: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <img src={affiliationCert} alt="Sarbabharatiya Sangeet-O-Sanskriti Parishad Affiliation" style={{ width: "100%", height: 320, objectFit: "contain", borderRadius: 12 }} />
                </div>
                <p style={{ color: "#F0D080", fontFamily: "Poppins, sans-serif", fontWeight: 600, textAlign: "center", marginTop: 16, fontSize: "1.1rem" }}>Affiliation Certificate</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ background: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 20, border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", maxWidth: 500, width: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <img src={isoCert} alt="ISO 9001:2015 Certification" style={{ width: "100%", height: 320, objectFit: "contain", borderRadius: 12 }} />
                </div>
                 <p style={{ color: "#F0D080", fontFamily: "Poppins, sans-serif", fontWeight: 600, textAlign: "center", marginTop: 16, fontSize: "1.1rem" }}>ISO 9001:2015</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                style={{ background: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 20, border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", maxWidth: 500, width: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <img src={justdialCert} alt="JustDial Certified 2020" style={{ width: "100%", height: 320, objectFit: "contain", borderRadius: 12 }} />
                </div>
                <p style={{ color: "#F0D080", fontFamily: "Poppins, sans-serif", fontWeight: 600, textAlign: "center", marginTop: 16, fontSize: "1.1rem" }}>JustDial 5 Stars</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                style={{ background: "rgba(255,255,255,0.05)", padding: 16, borderRadius: 20, border: "1px solid rgba(212,175,55,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", maxWidth: 500, width: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <img src={maxCert} alt="Max Kids Festival Certification" style={{ width: "100%", height: 320, objectFit: "cover", objectPosition: "center top", borderRadius: 12 }} />
                </div>
                <p style={{ color: "#F0D080", fontFamily: "Poppins, sans-serif", fontWeight: 600, textAlign: "center", marginTop: 16, fontSize: "1.1rem" }}>Student Award</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline section */}
        <section style={{ background: "#F7F3EB", padding: "clamp(60px,8vh,100px) 0" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
            >
              <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
                Our Journey
              </span>
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#5C0F1A" }}>
                A Decade of <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Excellence</span>
              </h2>
            </motion.div>

            <div style={{ position: "relative" }}>
              {/* Center line */}
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, transparent, rgba(139,30,45,0.3), rgba(212,175,55,0.5), rgba(139,30,45,0.3), transparent)", transform: "translateX(-50%)" }} className="timeline-line" />

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", position: "relative" }}
                    className="timeline-item"
                  >
                    {/* Center dot */}
                    <div style={{ position: "absolute", left: "50%", top: 22, width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg, #8B1E2D, #D4AF37)", transform: "translateX(-50%)", boxShadow: "0 0 0 3px rgba(212,175,55,0.2), 0 2px 8px rgba(139,30,45,0.4)", zIndex: 2 }} />

                    <div style={{ width: "44%", background: "#FFFFFF", border: "1.5px solid rgba(139,30,45,0.1)", borderRadius: 14, padding: "18px 20px", boxShadow: "0 3px 16px rgba(139,30,45,0.07)" }}>
                      <span style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, fontSize: "0.95rem", color: "#D4AF37", display: "block", marginBottom: 4 }}>{m.year}</span>
                      <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, fontSize: "0.98rem", color: "#2E0A12", marginBottom: 6 }}>{m.title}</h3>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#777", lineHeight: 1.6 }}>{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
    <Footer />
    <WhatsAppButton />
    <style>{`
      @media (max-width: 640px) {
        .timeline-line { left: 20px !important; }
        .timeline-item { justify-content: flex-end !important; padding-left: 44px; }
        .timeline-item > div:last-child { width: 100% !important; }
        .timeline-item > div:first-child { left: 14px !important; }
      @media (min-width: 1024px) {
        .cert-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; justify-items: center; }
      }
      @media (max-width: 1023px) {
        .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; justify-items: center; }
      }
    `}</style>
  </>
);

export default AchievementsPage;
