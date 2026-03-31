import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    content: "Srija Heights, Plot No:1214, 1st Floor, Balaji Grand Bazar Building, Ayyappa Society Main Rd, Mega Hills, Madhapur, Hyderabad, Telangana 500081",
    href: "https://maps.google.com/?q=Srija+Heights+Madhapur+Hyderabad",
    isLink: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 96669 55182",
    href: "tel:+919666955182",
    isLink: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "artistmadhukuruva@gmail.com",
    href: "mailto:artistmadhukuruva@gmail.com",
    isLink: true,
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday – Saturday: 9:00 AM – 9:00 PM\nSunday: Closed",
    href: null,
    isLink: false,
  },
];

const stats = [
  { value: "1000+", label: "Happy Students" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Courses Offered" },
  { value: "4.9★", label: "Google Rating" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="contact" style={{ background: "#F7F3EB", padding: "clamp(60px,8vh,100px) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-5%", right: "-3%", width: 340, height: 340, borderRadius: "55% 45% 60% 40%", background: "rgba(139,30,45,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-3%", width: 280, height: 280, borderRadius: "45% 60% 40% 65%", background: "rgba(212,175,55,0.05)", pointerEvents: "none" }} />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,64px)" }}
        >
          <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
            Get in Touch
          </span>
          <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, marginBottom: 12 }}>
            Contact <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Us</span>
          </h2>
          <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
            We'd love to hear from you! Reach out for queries about courses, admissions, or workshops — we respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-5" style={{ marginBottom: 24 }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ background: "#FFFFFF", borderRadius: 16, padding: "22px 20px", border: "1.5px solid rgba(139,30,45,0.08)", boxShadow: "0 3px 16px rgba(139,30,45,0.06)", display: "flex", gap: 14, alignItems: "flex-start", transition: "all 0.3s" }}
                  className="contact-card"
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(139,30,45,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={20} style={{ color: "#8B1E2D" }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, fontSize: "0.92rem", color: "#2E0A12", marginBottom: 6 }}>{item.title}</h3>
                    {item.isLink ? (
                      <a href={item.href!} target={item.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                        style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#777", lineHeight: 1.6, textDecoration: "none", transition: "color 0.2s" }}
                        className="contact-link"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", color: "#777", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", borderRadius: 16, padding: "24px 28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, boxShadow: "0 8px 32px rgba(139,30,45,0.3)" }}
              className="stats-row"
            >
              {stats.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, fontSize: "1.4rem", color: "#D4AF37", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.72rem", color: "rgba(247,243,235,0.65)", marginTop: 6, letterSpacing: "0.05em" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ marginTop: 24, borderRadius: 16, overflow: "hidden", border: "1.5px solid rgba(139,30,45,0.15)", boxShadow: "0 4px 20px rgba(139,30,45,0.1)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4!2d78.3925555!3d17.4454964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c4c16c4b1%3A0x63eab00e19e804c6!2sKONKALA%20FINE%20ARTS%20(Art's%20%26%20Music%20Academy.)!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konkala Fine Arts Location"
              />
            </motion.div>
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ background: "linear-gradient(155deg, #1A0508, #2E0A12, #3D0E18)", borderRadius: 20, padding: "36px 28px", display: "flex", flexDirection: "column", gap: 20, border: "1.5px solid rgba(212,175,55,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
          >
            <div>
              <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37", background: "rgba(212,175,55,0.1)", borderRadius: 50, padding: "4px 14px", marginBottom: 14 }}>
                Join Us Today
              </span>
              <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, fontSize: "1.5rem", color: "#FFFFFF", lineHeight: 1.3, marginBottom: 12 }}>
                Start Your Creative Journey
              </h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "rgba(247,243,235,0.65)", lineHeight: 1.7 }}>
                Book a free trial class today and experience firsthand what makes Konkala Fine Arts Hyderabad's most trusted arts academy.
              </p>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["Free trial class for new students", "All ages & skill levels welcome", "Flexible batch timings", "Certified instructors"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(212,175,55,0.15)", border: "1.5px solid rgba(212,175,55,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10, color: "#D4AF37" }}>✓</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", color: "rgba(247,243,235,0.7)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/register")}
              style={{ background: "linear-gradient(135deg, #5C0F1A, #8B1E2D, #B7323C)", color: "#D4AF37", border: "2px solid rgba(212,175,55,0.5)", borderRadius: 50, padding: "14px 0", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.25s", boxShadow: "0 4px 20px rgba(139,30,45,0.4)" }}
              className="contact-cta-btn"
            >
              Book Free Trial →
            </button>

            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {[
                { href: "https://instagram.com/konkala_finearts", Icon: Instagram },
                { href: "https://facebook.com/KonkalaFINEARTS", Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(212,175,55,0.08)", border: "1.5px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(247,243,235,0.55)", textDecoration: "none", transition: "all 0.25s" }}
                  className="contact-social"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-card:hover { border-color: rgba(212,175,55,0.3) !important; box-shadow: 0 8px 28px rgba(139,30,45,0.1) !important; transform: translateY(-3px); }
        .contact-link:hover { color: #8B1E2D !important; }
        .contact-cta-btn:hover { box-shadow: 0 8px 32px rgba(139,30,45,0.55) !important; transform: translateY(-2px); }
        .contact-social:hover { background: rgba(139,30,45,0.6) !important; color: #D4AF37 !important; }
        @media (max-width: 640px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
