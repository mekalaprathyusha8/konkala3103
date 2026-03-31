import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Loader = ({ isLoading }: { isLoading: boolean }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ background: "linear-gradient(155deg, #1A0508 0%, #2E0A12 40%, #3D0E18 70%, #2E0A12 100%)" }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 60%)" }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, position: "relative", zIndex: 2 }}>
          {/* Spinning gold ring */}
          <div style={{ position: "relative", width: 120, height: 120 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid transparent", borderTop: "2px solid #D4AF37", borderRight: "2px solid rgba(212,175,55,0.3)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "1.5px solid transparent", borderBottom: "1.5px solid rgba(212,175,55,0.5)", borderLeft: "1.5px solid rgba(212,175,55,0.2)" }}
            />
            {/* Logo in center */}
            <motion.img
              src={logo}
              alt="Konkala Fine Arts"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 16, width: "calc(100% - 32px)", height: "calc(100% - 32px)", objectFit: "contain", filter: "drop-shadow(0 2px 12px rgba(212,175,55,0.4))" }}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 900, fontSize: "1.4rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: 4 }}
            >
              KONKALA
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "rgba(212,175,55,0.65)", letterSpacing: "0.4em", textTransform: "uppercase" }}
            >
              Fine Arts Academy
            </motion.p>
          </div>

          {/* Loading dots */}
          <div style={{ display: "flex", gap: 6 }}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37" }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;
