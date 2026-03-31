import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919666955182"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} fill="white" />
  </a>
);

export default WhatsAppButton;
