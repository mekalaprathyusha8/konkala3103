import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpeg";

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ background: "#F7F3EB", padding: "clamp(60px,8vh,100px) 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle decorative blobs */}
      <div style={{ position: "absolute", top: "-8%", right: "-5%", width: 380, height: 380, borderRadius: "55% 45% 60% 40%", background: "rgba(139,30,45,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-6%", left: "-4%", width: 300, height: 300, borderRadius: "45% 60% 40% 65%", background: "rgba(212,175,55,0.06)", pointerEvents: "none" }} />

      <div className="container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
        >
          {/* <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
            Director's Note
          </span> */}
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, maxWidth: 800, margin: "0 auto 12px" }}>
            About - <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Konkala Fine Arts</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
            <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
            <div style={{ width: 8, height: 8, background: "#D4AF37", transform: "rotate(45deg)" }} />
            <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Founder image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}
            style={{ display: "flex", justifyContent: "center", position: "sticky", top: "100px" }}
          >
            <div style={{ maxWidth: 420, width: "100%" }}>
              <div style={{
                borderRadius: 16, overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                width: "100%",
              }}>
                <img
                  src={founderImg}
                  alt="Madhu Kuruva - Founder"
                  style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              </div>
              <div style={{
                paddingTop: "20px",
                textAlign: "center"
              }}>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: 6, color: "#5C0F1A" }}>
                  Madhu Kuruva
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0, color: "#8B1E2D" }}>
                  Director, Konkala Fine Arts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ paddingTop: 16 }}
          >
            <div style={{ marginBottom: 24, lineHeight: 1.8 }}>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 14 }}>
                <strong style={{ color: "#8B1E2D" }}>Konkala Fine Arts</strong> was established in 2013 with a deep-rooted vision to nurture creativity, preserve artistic traditions, and inspire individuals to discover their inner voice through art. Born from my own journey as an artist—from a small village to national and international platforms—this <em style={{ color: "#D4AF37", fontStyle: "normal", fontWeight: 600 }}>संस्था</em> (institution) stands as a bridge between raw passion and refined artistic expression.
              </p>
              
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 24 }}>
                Art, for me, is not merely a skill but a way of life—a language beyond words that connects emotion, culture, and consciousness. Konkala Fine Arts was created to offer that experience to every individual, regardless of age, background, or prior training.
              </p>

              <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#5C0F1A", marginBottom: 10 }}>
                Why Konkala Fine Arts?
              </h4>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 10 }}>
                In today’s fast-paced, screen-driven world, the connection to creativity is slowly fading. Konkala Fine Arts was founded to reawaken that connection—to provide a space where imagination breathes, hands create, and minds evolve.
              </p>
              <p style={{ color: "#555", fontFamily: "Poppins, sans-serif", fontSize: "0.97rem", marginBottom: 24 }}>
                We believe that every individual carries an artist within. What they need is the right guidance, environment, and encouragement. This institution is dedicated to identifying and nurturing that hidden potential, transforming curiosity into creativity and creativity into mastery.
              </p>

              <div style={{ background: "rgba(212,175,55,0.08)", padding: "16px 24px", borderRadius: "0 16px 16px 16px", borderLeft: "4px solid #D4AF37", marginBottom: 24 }}>
                <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#5C0F1A", marginBottom: 8 }}>
                  Our Motto
                </h4>
                <p style={{ color: "#8B1E2D", fontFamily: "Georgia, serif", fontSize: "1.1rem", fontStyle: "italic", margin: 0, fontWeight: 600 }}>
                  “Art for Life – Awakening Creativity, Enriching Souls.”
                </p>
              </div>



            </div>
          </motion.div>
        </div>
      </div>

      <style>{``}</style>
    </section>
  );
}

export default AboutSection;
