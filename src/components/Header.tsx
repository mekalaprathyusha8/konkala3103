import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

/* ─── COLOR PALETTE (IMPORTED FROM CSS VARS) ──── */

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Gallery", path: "/gallery" },
  { label: "Workshops", path: "/workshops" },
  { label: "Services", path: "/services" },
  { label: "Achievements", path: "/achievements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goTo = (path: string) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bgStyle: React.CSSProperties = scrolled
    ? {
        background: "rgba(var(--primary-dark-rgb), 0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(var(--accent-rgb), 0.22)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.3)"
      }
    : isHome
    ? { background: "transparent" }
    : {
        background: "rgba(var(--primary-dark-rgb), 0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(var(--accent-rgb), 0.15)"
      };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1" style={bgStyle}>
      <div className="container flex items-center justify-between">
        {/* Logo + brand */}
        <button onClick={() => goTo("/")} className="flex items-center">
          <img
            src={logo}
            alt="Konkala Fine Arts"
            className={`transition-all duration-300 ${scrolled ? "h-[3.4rem]" : "h-[4rem]"} object-contain`}
            style={{ filter: "drop-shadow(0 2px 8px rgba(var(--accent-rgb), 0.25))", borderRadius: "10px" }}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.label}
                onClick={() => goTo(link.path)}
                className="px-3 py-2 text-sm font-medium relative group transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "rgba(var(--white-rgb), 0.68)",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.84rem"
                }}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "70%" : "0%",
                    background: "linear-gradient(90deg, var(--primary), var(--accent))"
                  }}
                />
                {/* Hover underline */}
                {!isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full w-0 group-hover:w-[70%] transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                  />
                )}
              </button>
            );
          })}
          <button
            onClick={() => goTo("/register")}
            className="ml-3 text-sm font-bold py-2.5 px-5 rounded-full transition-all duration-300"
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--gradient-primary)";
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.color = "var(--text-dark)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--gradient-secondary)";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            style={{
              background: "var(--gradient-secondary)",
              color: "var(--accent)",
              border: "1.5px solid rgba(var(--accent-rgb), 0.6)",
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "0.05em",
              boxShadow: "0 3px 16px rgba(var(--primary-rgb), 0.5)",
              transition: "all 0.22s"
            }}
          >
            REGISTER NOW
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors"
          style={{
            color: "var(--accent)",
            background: "rgba(var(--primary-rgb), 0.55)",
            border: "1px solid rgba(var(--accent-rgb), 0.28)"
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(var(--primary-dark-rgb), 0.98)", borderTop: "1px solid rgba(var(--accent-rgb), 0.18)" }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.label}
                    onClick={() => goTo(link.path)}
                    className="py-2.5 text-left font-medium text-sm transition-colors px-3 rounded-lg"
                    style={{
                      color: isActive ? "var(--accent)" : "rgba(var(--white-rgb), 0.68)",
                      fontFamily: "Poppins, sans-serif",
                      background: isActive ? "rgba(var(--primary-rgb), 0.35)" : "transparent",
                      borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent"
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => goTo("/register")}
                className="mt-2 py-3 text-center font-bold rounded-full transition-all"
                style={{
                  background: "var(--gradient-secondary)",
                  color: "var(--accent)",
                  border: "1.5px solid rgba(var(--accent-rgb), 0.55)",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.05em"
                }}
              >
                REGISTER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
