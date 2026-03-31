import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(160deg, #1A0508 0%, #2E0A12 40%, #3D0E18 70%, #2E0A12 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ textAlign: "center", maxWidth: 480 }}
      >
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }}
          style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(5rem,15vw,9rem)", fontWeight: 900, color: "#D4AF37", lineHeight: 1, marginBottom: 8, textShadow: "0 0 60px rgba(212,175,55,0.25)" }}
        >
          404
        </motion.p>
        <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.4rem,4vw,2rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: 14 }}>Page Not Found</h1>
        <p style={{ fontFamily: "Poppins, sans-serif", color: "rgba(247,243,235,0.6)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back to creating something beautiful.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate(-1)}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(212,175,55,0.08)", color: "#E6C65C", border: "2px solid rgba(212,175,55,0.4)", borderRadius: 50, padding: "12px 28px", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.25s" }}
          >
            <ArrowLeft size={16} /> Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #5C0F1A, #8B1E2D)", color: "#D4AF37", border: "2px solid rgba(212,175,55,0.5)", borderRadius: 50, padding: "12px 28px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.25s", boxShadow: "0 4px 20px rgba(139,30,45,0.4)" }}
          >
            <Home size={16} /> Go Home
          </button>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;
