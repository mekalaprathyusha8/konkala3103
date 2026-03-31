import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  image?: string;
}

const PageHero = ({ title, highlight, subtitle }: PageHeroProps) => (
  <section style={{
    position: "relative", padding: "clamp(52px,8vh,90px) 16px clamp(48px,7vh,80px)",
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
    background: "linear-gradient(155deg, #1A0508 0%, #3D0E18 40%, #6B0F1A 70%, #3D0E18 100%)",
    borderBottom: "3px solid transparent",
    borderImage: "linear-gradient(90deg, #2E0A12, #C8A84B 30%, #F0D080 50%, #C8A84B 70%, #2E0A12) 1",
  }}>
    {/* Radial glow behind text */}
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
      background: "radial-gradient(ellipse at 50% 60%, rgba(200,168,75,0.1) 0%, transparent 65%)" }} />

    {/* Decorative blob left */}
    <div style={{ position: "absolute", top: "-20%", left: "-4%", width: 320, height: 320,
      borderRadius: "55% 45% 60% 40%", background: "rgba(200,168,75,0.06)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: "-25%", right: "-3%", width: 260, height: 260,
      borderRadius: "45% 60% 40% 65%", background: "rgba(160,30,48,0.08)", pointerEvents: "none" }} />

    <div style={{ position: "relative", zIndex: 5, textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
      {/* Gold ornament */}
      <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: 14 }}>
        <div style={{ width: 44, height: 1.5, background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.7))" }} />
        {[1, 0.45, 1].map((o, i) => (
          <div key={i} style={{ width: 7, height: 7, background: "#C8A84B", transform: "rotate(45deg)", opacity: o }} />
        ))}
        <div style={{ width: 44, height: 1.5, background: "linear-gradient(90deg, rgba(200,168,75,0.7), transparent)" }} />
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1 }}
        style={{ fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
          textShadow: "0 3px 20px rgba(20,4,10,0.7)", lineHeight: 1.2, marginBottom: 12 }}>
        {title}{" "}
        <span style={{ background: "linear-gradient(135deg, #C8A84B, #F0D080)", WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          {highlight}
        </span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        style={{ color: "rgba(255,228,180,0.78)", fontSize: "clamp(0.85rem,1.8vw,1.05rem)",
          fontFamily: "Georgia, serif", lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default PageHero;
