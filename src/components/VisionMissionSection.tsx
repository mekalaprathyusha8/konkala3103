import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function VisionMissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="vision-mission" style={{ background: "#FFFFFF", padding: "clamp(60px,8vh,100px) 0", position: "relative", overflow: "hidden" }}>
      <div className="container" ref={ref}>
        {/* Section header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
           style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
        >
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, maxWidth: 800, margin: "0 auto 12px" }}>
            Our <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Philosophy</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
            <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div style={{ width: 8, height: 8, background: "#D4AF37", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div
             initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
             style={{ height: "100%" }}
          >
            <div style={{ background: "rgba(139,30,45,0.04)", padding: "32px", borderRadius: "12px", borderLeft: "4px solid #8B1E2D", height: "100%" }}>
              <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#5C0F1A", marginBottom: 16 }}>
                Our Vision
              </h4>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", marginBottom: 0, lineHeight: 1.7 }}>
                To serve as a sanctuary of artistic brilliance where timeless traditions harmonize with contemporary innovation. We aspire to elevate art beyond the canvas, making it an essential, transformative force in everyday life and personal evolution.
              </p>
              <div style={{ width: 40, height: 2, background: "#8B1E2D", marginTop: 20, marginBottom: 20, opacity: 0.5 }} />
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", marginBottom: 0, lineHeight: 1.7 }}>
                <strong style={{ color: "#5C0F1A", fontWeight: 600 }}>Building a Global Community:</strong> We envision a vibrant, inclusive environment where artists of all backgrounds can collaborate, inspire one another, and preserve our rich cultural heritage while pushing the boundaries of creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
             style={{ height: "100%" }}
          >
            <div style={{ background: "rgba(212,175,55,0.04)", padding: "32px", borderRadius: "12px", borderLeft: "4px solid #D4AF37", height: "100%" }}>
              <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#5C0F1A", marginBottom: 16 }}>
                Our Mission
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 6, height: 6, background: "#D4AF37", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                  <p style={{ margin: 0, color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    <strong style={{ color: "#5C0F1A", fontWeight: 600 }}>Igniting Creativity:</strong> To provide unparalleled, structured art education that awakens the dormant artist within individuals of all ages.
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 6, height: 6, background: "#D4AF37", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                  <p style={{ margin: 0, color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    <strong style={{ color: "#5C0F1A", fontWeight: 600 }}>Bridging Eras:</strong> To seamlessly weave the rich heritage of classical techniques with the vibrant pulse of modern artistic expression.
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 6, height: 6, background: "#D4AF37", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                  <p style={{ margin: 0, color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    <strong style={{ color: "#5C0F1A", fontWeight: 600 }}>Nurturing Excellence:</strong> To foster a dynamic environment where raw talent is transformed into mastery, preparing students for the global stage.
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 6, height: 6, background: "#D4AF37", borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                  <p style={{ margin: 0, color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    <strong style={{ color: "#5C0F1A", fontWeight: 600 }}>Cultivating Mindfulness:</strong> To champion the profound joy of hands-on creation, offering a soulful refuge from our screen-dominated world.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
             className="md:col-span-2"
          >
            <div style={{ background: "linear-gradient(135deg, rgba(92,15,26,0.06), rgba(139,30,45,0.02))", padding: "32px", borderRadius: "12px", border: "1px solid rgba(139,30,45,0.1)", marginTop: 8 }}>
              <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#5C0F1A", marginBottom: 16 }}>
                A Final Word
              </h4>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", marginBottom: 14, lineHeight: 1.7 }}>
                Art is the truest reflection of our innermost selves. At Konkala Fine Arts, our canvas extends far beyond the studio—we are shaping perspectives, nurturing souls, and building a legacy of beauty. Every brushstroke here is a testament to the boundless potential of the human spirit.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, rgba(139,30,45,0.2), transparent)" }} />
                <p style={{ color: "#8B1E2D", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontStyle: "italic", fontWeight: 700, margin: 0 }}>
                  Join us in this beautiful journey of creation and connection.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, borderTop: "1px solid rgba(139,30,45,0.1)", paddingTop: 20, marginTop: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#8B1E2D", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 700 }}>
                  M
                </div>
                <div>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, margin: 0, color: "#5C0F1A" }}>
                    Madhu Kuruva
                  </p>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "#8B1E2D", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginTop: 2 }}>
                    Director, Konkala Fine Arts
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;
