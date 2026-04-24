import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { CheckCircle, Palette, Music, BookOpen } from "lucide-react";

const courses = [
  "Basic Drawing Course",
  "Junior Drawing Course",
  "Subjunior Drawing Course",
  "Senior Drawing Course",
  "Junior Oil (or) Acrylic Painting Course",
  "Senior Oil (or) Painting Course",
  "Fabric Painting",
  "Glass Painting",
  "Sketching",
  "Long Term Course",
  "Guitar",
  "Keyboard",
  "Hindustani Vocal",
  "Carnatic Vocal",
  "Pottery",
  "Other"
];
const batches = ["Morning (9 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 7 PM)", "Late Evening (7 PM - 9 PM)"];

const benefits = [
  { icon: Palette, text: "Free trial class for all new students" },
  { icon: BookOpen, text: "Flexible batch timings available" },
  { icon: Music, text: "All ages & skill levels welcome" },
  { icon: CheckCircle, text: "Expert certified instructors" },
];

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", age: "", course: "", batch: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (name: string) => ({
    width: "100%", padding: "13px 16px",
    borderRadius: 12,
    border: `1.5px solid ${focused === name ? "rgba(139,30,45,0.4)" : "rgba(139,30,45,0.15)"}`,
    background: focused === name ? "rgba(139,30,45,0.02)" : "#FAFAFA",
    color: "#2E0A12", fontFamily: "Poppins, sans-serif", fontSize: "0.9rem",
    outline: "none", transition: "all 0.25s",
    boxShadow: focused === name ? "0 0 0 3px rgba(139,30,45,0.1)" : "none",
  });

  const labelStyle = { display: "block", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#5C0F1A", marginBottom: 7, letterSpacing: "0.04em" };

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: "#F7F3EB" }}>
        <div className="pt-16">
          <PageHero title="Register" highlight="Now" subtitle="Take the first step towards your creative journey — book a free trial class today" />

          <div className="container" style={{ padding: "clamp(48px,7vh,80px) 16px", maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="register-grid">

              {/* Benefits sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div style={{ background: "#FFF", borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(139,30,45,0.1)", boxShadow: "0 4px 20px rgba(139,30,45,0.06)" }}>
                  <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, fontSize: "1.3rem", color: "#5C0F1A", marginBottom: 8 }}>Why Join Konkala?</h3>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.84rem", color: "#777", lineHeight: 1.65, marginBottom: 24 }}>
                    Join Hyderabad's most trusted arts & music academy. Start with a free trial class — no commitment required.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {benefits.map(({ icon: Icon, text }) => (
                      <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon size={16} style={{ color: "#8B1E2D" }} />
                        </div>
                        <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.84rem", color: "#555" }}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: "rgba(139,30,45,0.08)", border: "1px solid rgba(139,30,45,0.15)", borderRadius: 20, padding: "28px", textAlign: "center" }}>
                  <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, color: "#5C0F1A", fontSize: "1.15rem", marginBottom: 8 }}>Have Questions?</p>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", color: "#555", marginBottom: 16 }}>Call us directly to learn more about our courses</p>
                  <a href="tel:+919666955182" style={{ display: "inline-block", background: "rgba(139,30,45,0.05)", color: "#8B1E2D", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "10px 24px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", transition: "all 0.25s" }}>
                    +91 96669 55182
                  </a>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(212,175,55,0.25)", borderRadius: 20, padding: "48px 32px", textAlign: "center" }}
                  >
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ fontSize: "4rem", marginBottom: 20 }}>🎨🖌️</motion.div>
                    <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 800, fontSize: "1.8rem", color: "#5C0F1A", marginBottom: 12 }}>Thank You!</h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", color: "#666", lineHeight: 1.7 }}>Your registration has been submitted successfully. Our team will contact you within 24 hours to confirm your free trial class!</p>
                    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 24 }}>
                      {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ fontSize: "1.2rem" }}>⭐</span>)}
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ background: "#FFF", borderRadius: 20, padding: "clamp(24px,4vw,40px)", display: "flex", flexDirection: "column", gap: 18, border: "1px solid rgba(139,30,45,0.1)", boxShadow: "0 4px 20px rgba(139,30,45,0.06)" }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" name="name" required maxLength={100} value={formData.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputStyle("name")} placeholder="Enter your full name" />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input type="email" name="email" required maxLength={255} value={formData.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputStyle("email")} placeholder="your@email.com" />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone *</label>
                        <input type="tel" name="phone" required maxLength={15} value={formData.phone} onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={inputStyle("phone")} placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={labelStyle}>Age</label>
                        <input type="number" name="age" min="4" max="99" value={formData.age} onChange={handleChange} onFocus={() => setFocused("age")} onBlur={() => setFocused(null)} style={inputStyle("age")} placeholder="Your age" />
                      </div>
                      <div>
                        <label style={labelStyle}>Preferred Batch</label>
                        <select name="batch" value={formData.batch} onChange={handleChange} onFocus={() => setFocused("batch")} onBlur={() => setFocused(null)} style={{ ...inputStyle("batch"), cursor: "pointer" }}>
                          <option value="" style={{ background: "#2E0A12" }}>Select timing</option>
                          {batches.map(b => <option key={b} value={b} style={{ background: "#2E0A12" }}>{b}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Course of Interest *</label>
                      <select name="course" required value={formData.course} onChange={handleChange} onFocus={() => setFocused("course")} onBlur={() => setFocused(null)} style={{ ...inputStyle("course"), cursor: "pointer" }}>
                        <option value="" style={{ background: "#2E0A12" }}>Select a course</option>
                        {courses.map(c => <option key={c} value={c} style={{ background: "#2E0A12" }}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Message / Questions</label>
                      <textarea name="message" rows={3} value={formData.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={{ ...inputStyle("message"), resize: "vertical", minHeight: 80 }} placeholder="Any specific questions or requirements?" />
                    </div>
                    <button type="submit" style={{ background: "linear-gradient(135deg, #5C0F1A, #8B1E2D, #B7323C)", color: "#D4AF37", border: "2px solid rgba(212,175,55,0.55)", borderRadius: 50, padding: "16px 0", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1rem", cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.25s", boxShadow: "0 6px 28px rgba(139,30,45,0.45)", marginTop: 4 }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 10px 40px rgba(139,30,45,0.65)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 6px 28px rgba(139,30,45,0.45)"; e.currentTarget.style.transform = "none"; }}
                    >
                      Submit Registration →
                    </button>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.74rem", color: "#888", textAlign: "center" }}>
                      By submitting, you agree to be contacted by our team. No spam, ever.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <style>{`
        .register-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .register-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: rgba(247,243,235,0.3); }
        select option { color: white; }
      `}</style>
    </>
  );
};

export default RegisterPage;
