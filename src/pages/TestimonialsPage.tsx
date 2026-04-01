import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageWrapper from "@/components/PageWrapper";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const allTestimonials = [
  { name: "Mahesh A.", role: "Student", initials: "MA", text: "Music, arts, drawing, sketching, water colors, pastels… what not. This is the best place to learn. This place brings out the best in you. Highly recommend to everyone!", date: "Jan 2018", stars: 5 },
  { name: "Priya S.", role: "Parent", initials: "PS", text: "Wonderful place to learn arts and music! My child joined painting and drawing classes here and the improvement is amazing. The teachers are very patient and guide each student individually.", date: "Mar 2024", stars: 5 },
  { name: "Arjun K.", role: "Student", initials: "AK", text: "Excellent teachers and friendly environment. The faculty at Konkala Fine Arts are very supportive and professional. They encourage students and help them improve their artistic skills.", date: "Feb 2024", stars: 5 },
  { name: "Lakshmi R.", role: "Parent", initials: "LR", text: "Great institute for kids. My son attends guitar classes here and he enjoys every session. The teaching style is simple and engaging, making learning music fun.", date: "Jan 2024", stars: 5 },
  { name: "Sanjay M.", role: "Student", initials: "SM", text: "Perfect place for creative learning. They offer a variety of activities like drawing, painting, music, and craft. The atmosphere is very positive and motivating.", date: "Dec 2023", stars: 5 },
  { name: "Deepa V.", role: "Parent", initials: "DV", text: "Very good art academy. The teachers take personal care of every student and help them build confidence in art. My daughter loves the painting classes.", date: "Nov 2023", stars: 5 },
  { name: "Rahul T.", role: "Student", initials: "RT", text: "Highly recommended for beginners. A great place for beginners who want to learn drawing and painting. The instructors explain techniques clearly and make learning enjoyable.", date: "Oct 2023", stars: 5 },
  { name: "Meera P.", role: "Parent", initials: "MP", text: "Amazing experience. My child enjoys every class and has learned many new art techniques. The environment is creative and inspiring for young minds.", date: "Sep 2023", stars: 5 },
  { name: "Kavitha N.", role: "Student", initials: "KN", text: "Very inspiring art classes. My daughter joined the drawing and painting classes here and her skills improved tremendously in just a few months. Highly recommended.", date: "Aug 2023", stars: 5 },
  { name: "Ravi Kumar", role: "Student", initials: "RK", text: "Best academy for art learning. The instructors are talented and explain concepts very clearly. My child learned many drawing techniques within a short time period.", date: "Jul 2023", stars: 5 },
  { name: "Ananya S.", role: "Parent", initials: "AS", text: "My daughter has been attending pottery classes for 3 months and the progress is incredible. The teacher is very patient and creates such a fun learning environment.", date: "Jun 2023", stars: 5 },
  { name: "Vikram R.", role: "Student", initials: "VR", text: "The guitar classes here are outstanding. I went from knowing nothing to playing full songs in 3 months. The teaching methodology is systematic and very effective.", date: "May 2023", stars: 5 },
];

const TestimonialsPage = () => (
  <>
    <Header />
    <PageWrapper page="testimonials">
      <div className="pt-16">
        <PageHero
          title="Student"
          highlight="Testimonials"
          subtitle="Hear from our students and parents about their transformative creative journeys"
        />
        <TestimonialsSection hideHeader />

        {/* Full testimonials grid */}
        <section style={{ background: "#F7F3EB", padding: "clamp(60px,8vh,100px) 0" }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,56px)" }}
            >
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#5C0F1A", marginBottom: 12 }}>
                All <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Reviews</span>
              </h2>
              <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem" }}>4.9★ average rating from 500+ students and parents</p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {allTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ background: "#FFFFFF", border: "1.5px solid rgba(139,30,45,0.08)", borderRadius: 18, padding: "24px 22px", boxShadow: "0 4px 16px rgba(139,30,45,0.06)", transition: "all 0.3s" }}
                  className="testi-grid-card"
                >
                  <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
                    {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} style={{ color: "#D4AF37", fill: "#D4AF37" }} />)}
                  </div>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.75, fontStyle: "italic", marginBottom: 18 }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #8B1E2D, #D4AF37)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "Playfair Display", fontWeight: 700, color: "#FFF", fontSize: "0.82rem" }}>{t.initials}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#2E0A12", fontSize: "0.88rem" }}>{t.name}</p>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.72rem", color: "rgba(212,175,55,0.8)" }}>{t.role} · {t.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
    <Footer />
    <WhatsAppButton />
    <style>{`.testi-grid-card:hover { border-color: rgba(212,175,55,0.3) !important; box-shadow: 0 10px 32px rgba(139,30,45,0.1) !important; transform: translateY(-4px); }`}</style>
  </>
);

export default TestimonialsPage;
