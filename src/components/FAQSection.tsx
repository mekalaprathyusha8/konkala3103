import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What disciplines are offered in the academy?", a: "We offer painting, sketching, pottery, music theory, guitar, vocal training, and various other visual and performing arts programs for all age groups starting from age 5." },
  { q: "What is the admission process?", a: "Simply visit our academy or contact us via phone or email. We offer trial classes so you can experience our teaching before enrolling. You can also register online through our website." },
  { q: "What facilities are available for students?", a: "Our academy features modern art studios with natural lighting, pottery wheels,  music rooms with instruments, and a gallery space for student exhibitions." },
  { q: "Who are the instructors and faculty members?", a: "Our team consists of experienced professional artists and musicians led by founder Madhu Kuruva, each with years of teaching experience and recognized certifications in their respective fields." },
  { q: "Are there opportunities for exhibitions and collaborations?", a: "Yes! We regularly organize art exhibitions, competitions, workshops, and cultural events where students can showcase their talents. We also participate in national and international art contests." },
  { q: "How flexible is the curriculum?", a: "We offer weekday and weekend batches with flexible timing from 10 AM to 9 PM (Monday–Sunday). Students can choose beginner to advanced programs based on their skill level." },
  { q: "Are there workshops or guest lectures?", a: "Yes, we conduct monthly workshops, seasonal art camps, and invite guest artists for special sessions and masterclasses throughout the year." },
  { q: "What career opportunities are available after completing courses?", a: "Students can pursue careers in fine arts, design, music, art education, digital media, art therapy, museum curation, and more. We also prepare students for recognized certifications like BFA and MFA." },
  { q: "What age groups do you accept?", a: "We welcome students from age 5 to any age. Our programs are designed to suit different age groups with age-appropriate teaching methods and curriculum." },
  { q: "Do you provide materials and instruments?", a: "Yes, all necessary art materials, paints, canvases, pottery tools, and musical instruments are provided during classes. Students can also bring their own materials if they prefer." },
  { q: "What are the batch timings?", a: "We operate from 10:00 AM to 9:00 PM, Monday through Sunday. Multiple batch timings are available — morning, afternoon, and evening — to suit your schedule." },
  { q: "Do you offer online classes?", a: "Currently, we focus on in-person classes to provide hands-on experience. However, we occasionally conduct online workshops and sessions for students who cannot visit the academy." },
];

const FAQSection = ({ hideHeader }: { hideHeader?: boolean } = {}) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "linear-gradient(180deg, #F7F3EB 0%, #EDE8E0 100%)", padding: "clamp(60px,8vh,100px) 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #E6C65C 50%, #D4AF37 70%, transparent)" }} />

      <div className="container" style={{ maxWidth: 820, margin: "0 auto" }}>
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,60px)" }}
          >
            <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
              Common Questions
            </span>
            <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", lineHeight: 1.2, marginBottom: 12 }}>
              Frequently Asked <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
            </h2>
            <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto" }}>
              Everything you need to know about our courses, classes, and enrollment process.
            </p>
          </motion.div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{
                background: "#FFFFFF",
                border: `1.5px solid ${open === i ? "rgba(212,175,55,0.45)" : "rgba(139,30,45,0.1)"}`,
                borderRadius: 14, overflow: "hidden",
                boxShadow: open === i ? "0 6px 28px rgba(139,30,45,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.3s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
              >
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: open === i ? "#8B1E2D" : "#1C1C1C", transition: "color 0.2s", lineHeight: 1.4 }}>{faq.q}</span>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: open === i ? "rgba(139,30,45,0.1)" : "rgba(139,30,45,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s" }}>
                  <ChevronDown size={16} style={{ color: "#8B1E2D", transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }} />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 24px 22px", borderTop: "1px solid rgba(139,30,45,0.06)" }}>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.88rem", color: "#666", lineHeight: 1.75, paddingTop: 14 }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 40, padding: "32px", background: "linear-gradient(135deg, rgba(139,30,45,0.06), rgba(212,175,55,0.06))", borderRadius: 20, border: "1.5px solid rgba(139,30,45,0.1)" }}
        >
          <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, fontSize: "1.15rem", color: "#5C0F1A", marginBottom: 8 }}>Still have questions?</p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.88rem", color: "#777", marginBottom: 18 }}>Call us at <a href="tel:+919666955182" style={{ color: "#8B1E2D", fontWeight: 600 }}>+91 96669 55182</a> or visit our studio in Madhapur, Hyderabad</p>
          <a
            href="tel:+919666955182"
            style={{ display: "inline-block", background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", color: "#D4AF37", border: "2px solid rgba(212,175,55,0.5)", borderRadius: 50, padding: "12px 32px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", letterSpacing: "0.05em", transition: "all 0.25s", boxShadow: "0 4px 20px rgba(139,30,45,0.3)" }}
          >
            Call Us Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
