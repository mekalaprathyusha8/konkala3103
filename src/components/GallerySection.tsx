import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
const formatImages = (globConfig: Record<string, unknown>, label: string) => 
  Object.values(globConfig).map(mod => ({
    src: (mod as { default: string }).default,
    label
  }));

const GALLERY_IMAGES = [
  ...formatImages(import.meta.glob('@/assets/painting/*.{jpg,jpeg,png,webp,avif}', { eager: true }), "Painting"),
  ...formatImages(import.meta.glob('@/assets/pottery/*.{jpg,jpeg,png,webp,avif}', { eager: true }), "Pottery"),
  ...formatImages(import.meta.glob('@/assets/sketching/*.{jpg,jpeg,png,webp,avif}', { eager: true }), "Sketching"),
  ...formatImages(import.meta.glob('@/assets/music/*.{jpg,jpeg,png,webp,avif}',  { eager: true }), "Music"),
  ...formatImages(import.meta.glob('@/assets/workshop/*.{jpg,jpeg,png,webp,avif}', { eager: true }), "Workshop"),
];


const FILTERS = ["All", "Painting", "Sketching", "Pottery", "Music", "Workshop"];
const LABEL_COLORS: Record<string, string> = { Painting: "#8B1E2D", Sketching: "#5C0F1A", Pottery: "#B7323C", Music: "#1E6B8B", Workshop: "#D4AF37" };

const GallerySection = ({ hideHeader }: { hideHeader?: boolean }) => {
  const location = useLocation();
  const initialFilter = (location.state as { filter?: string })?.filter || "All";
  const [active, setActive] = useState(initialFilter);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const navigate = useNavigate();

  const filtered = active === "All" ? GALLERY_IMAGES.filter(g => g.label !== "Workshop") : GALLERY_IMAGES.filter(g => g.label === active);

  return (
    <section id="gallery" style={{ background: "linear-gradient(180deg, #EDE8E0 0%, #F7F3EB 100%)", padding: "clamp(60px,8vh,100px) 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #E6C65C 50%, #D4AF37 70%, transparent)" }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(32px,5vh,52px)" }}
        >
          {!hideHeader && (
            <>
              <span style={{ display: "inline-block", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B1E2D", background: "rgba(139,30,45,0.08)", border: "1.5px solid rgba(139,30,45,0.2)", borderRadius: 50, padding: "5px 18px", marginBottom: 14 }}>
                Student Portfolio
              </span>
              <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.9rem,4vw,3.2rem)", fontWeight: 900, color: "#5C0F1A", marginBottom: 12, lineHeight: 1.2 }}>
                Student <span style={{ background: "linear-gradient(135deg, #8B1E2D, #B7323C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Artworks</span>
              </h2>
              <p style={{ color: "#777", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", maxWidth: 500, margin: "0 auto 24px" }}>
                A glimpse into the creative journey of our students — from first brushstrokes to masterpieces.
              </p>
            </>
          )}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: hideHeader ? 0 : undefined }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{ padding: "8px 22px", borderRadius: 50, fontFamily: "Poppins, sans-serif", fontSize: "0.84rem", fontWeight: 600, cursor: "pointer", transition: "all 0.25s", background: active === f ? "linear-gradient(135deg, #8B1E2D, #B7323C)" : "rgba(255,255,255,0.8)", color: active === f ? "#D4AF37" : "#8B1E2D", border: `2px solid ${active === f ? "transparent" : "rgba(139,30,45,0.25)"}`, boxShadow: active === f ? "0 4px 16px rgba(139,30,45,0.3)" : "0 2px 8px rgba(0,0,0,0.06)" }}>
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div key={img.src} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3, delay: i * 0.03 }}
                style={{ position: "relative", cursor: "pointer", borderRadius: 14, overflow: "hidden", background: "#2E0A12", boxShadow: "0 4px 18px rgba(0,0,0,0.12)", border: "1.5px solid rgba(212,175,55,0.12)" }}
                className="gallery-card" onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.label} loading="lazy" referrerPolicy="no-referrer" className="gallery-img"
                  style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                  onError={e => { e.currentTarget.style.opacity = "0.3"; }}
                />
                <div className="gallery-overlay" style={{ position: "absolute", inset: 0, background: "rgba(28,4,8,0.65)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, opacity: 0, transition: "opacity 0.3s" }}>
                  <ZoomIn size={26} style={{ color: "#D4AF37" }} />
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.72rem", color: "#E6C65C", letterSpacing: "0.1em" }}>{img.label}</span>
                </div>
                <div style={{ position: "absolute", top: 8, left: 8, background: `${LABEL_COLORS[img.label] || "#8B1E2D"}CC`, borderRadius: 50, padding: "2px 9px", backdropFilter: "blur(6px)" }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.62rem", fontWeight: 600, color: "#F0D080", letterSpacing: "0.08em" }}>{img.label}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ textAlign: "center", marginTop: 36 }}>
          <button onClick={() => navigate("/gallery")} className="gallery-view-btn"
            style={{ background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", color: "#D4AF37", border: "2px solid rgba(212,175,55,0.5)", borderRadius: 50, padding: "13px 36px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.05em", transition: "all 0.25s", boxShadow: "0 4px 20px rgba(139,30,45,0.3)" }}>
            View Full Gallery →
          </button>
        </motion.div> */}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "rgba(10,3,6,0.93)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(12px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", damping: 25 }}
              style={{ position: "relative", maxWidth: 600, width: "100%" }} onClick={e => e.stopPropagation()}
            >
              <img src={lightbox} alt="Artwork" referrerPolicy="no-referrer"
                style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 16, border: "2px solid rgba(212,175,55,0.3)", boxShadow: "0 32px 80px rgba(0,0,0,0.8)" }} />
              <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: -14, right: -14, width: 40, height: 40, borderRadius: "50%", background: "#8B1E2D", border: "2px solid rgba(212,175,55,0.4)", color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card:hover .gallery-img { transform: scale(1.07); }
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-card:hover { border-color: rgba(212,175,55,0.35) !important; }
        .gallery-view-btn:hover { box-shadow: 0 8px 32px rgba(139,30,45,0.5) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
};

export default GallerySection;
