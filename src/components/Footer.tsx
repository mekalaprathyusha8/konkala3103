import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Courses", path: "/courses" },
  { label: "Gallery", path: "/gallery" },
  { label: "Workshops", path: "/workshops" },
  { label: "Services", path: "/services" },
  { label: "Achievements", path: "/achievements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "linear-gradient(180deg, #2E0A12 0%, #170407 100%)", position: "relative" }} className="relative mt-auto">
      {/* Brilliant Gold Top Divider */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #8B1E2D 0%, #D4AF37 50%, #8B1E2D 100%)", width: "100%", opacity: 0.9 }} />
      
      {/* Decorative top border glow */}
      <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 1, background: "rgba(212,175,55,0.15)" }} />
      
      {/* Main footer content */}
      <div className="container" style={{ paddingTop: "clamp(48px,7vh,72px)", paddingBottom: "clamp(32px,5vh,56px)" }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <button onClick={() => goTo("/")} style={{ display: "flex", alignItems: "center", marginBottom: 16, background: "none", border: "none", cursor: "pointer" }}>
              <img src={logo} alt="Konkala Fine Arts" style={{ height: "4.5rem", objectFit: "contain", borderRadius: "10px", filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.25))" }} />
            </button>
            <p style={{ color: "#FFFFFF", fontFamily: "Poppins, sans-serif", fontSize: "0.87rem", fontWeight: 700, lineHeight: 1.7, marginBottom: 14 }}>
              Premier Arts & Music Academy in Madhapur, Hyderabad. Nurturing creativity and artistic excellence since 2013.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#E5E5E5" }}>
              <Clock size={15} style={{ color: "#D4AF37", flexShrink: 0 }} />
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.83rem", fontWeight: 700, color: "#FFFFFF" }}>Mon–Sun: 10:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#D4AF37", marginBottom: 18, fontSize: "1.05rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => goTo(link.path)}
                    style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: "0.87rem", fontWeight: 700, color: "#FFFFFF", transition: "color 0.2s", display: "flex", alignItems: "center", gap: 8, padding: 0 }}
                    className="footer-link"
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#D4AF37", opacity: 0.5, flexShrink: 0 }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#D4AF37", marginBottom: 18, fontSize: "1.05rem" }}>Contact Info</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              <li>
                <a href="https://maps.google.com/?q=Srija+Heights+Madhapur+Hyderabad" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#FFFFFF", textDecoration: "none", fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", fontWeight: 700, lineHeight: 1.5, transition: "color 0.2s" }} className="footer-link">
                  <MapPin size={16} style={{ color: "#D4AF37", flexShrink: 0, marginTop: 2 }} />
                  Srija Heights, Plot 1214, 1st Floor, Balaji Grand Bazar, Ayyappa Society Main Rd, Madhapur, Hyderabad 500081
                </a>
              </li>
              <li>
                <a href="tel:+919666955182" style={{ display: "flex", alignItems: "center", gap: 10, color: "#FFFFFF", textDecoration: "none", fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", fontWeight: 700, transition: "color 0.2s" }} className="footer-link">
                  <Phone size={15} style={{ color: "#D4AF37", flexShrink: 0 }} />
                  +91 96669 55182
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=konkalafinearts@gmail.com" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "#FFFFFF", textDecoration: "none", fontFamily: "Poppins, sans-serif", fontSize: "0.85rem", fontWeight: 700, transition: "color 0.2s" }} className="footer-link">
                  <Mail size={15} style={{ color: "#D4AF37", flexShrink: 0 }} />
                  konkalafinearts@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, Georgia, serif", fontWeight: 700, color: "#D4AF37", marginBottom: 18, fontSize: "1.05rem" }}>Follow Us</h4>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              {[
                { href: "https://www.instagram.com/konkala_finearts?igsh=MTY4dDNkaW5vd2UweQ==", Icon: Instagram, label: "Instagram" },
                { href: "https://facebook.com/KonkalaFINEARTS", Icon: Facebook, label: "Facebook" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(212,175,55,0.08)", border: "1.5px solid rgba(212,175,55,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", textDecoration: "none", transition: "all 0.25s" }}
                  className="social-icon"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <div className="container" style={{ padding: "18px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#FFFFFF" }}>
            © 2026 Konkala Fine Arts. All rights reserved.
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#FFFFFF", display: "flex", alignItems: "center", gap: 4 }}>
            Made with <Heart size={12} style={{ color: "#8B1E2D" }} /> in Hyderabad
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #D4AF37 !important; }
        .social-icon:hover { background: rgba(139,30,45,0.7) !important; border-color: rgba(212,175,55,0.5) !important; color: #D4AF37 !important; transform: translateY(-2px); }
        .footer-cta-btn:hover { box-shadow: 0 4px 20px rgba(139,30,45,0.5); transform: translateY(-1px); }
      `}</style>
    </footer>
  );
};

export default Footer;
