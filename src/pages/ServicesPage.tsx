import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

// Using existing assets for placeholder images
import SketchImg from "@/assets/student-sketch-1.jpg";
import PotteryImg from "@/assets/pottery-class.jpg";
import PaintingImg from "@/assets/student-painting-ganesha.jpg";

const services = [
  {
    title: "Training / Internship",
    description: "Hands-on professional training and internships for aspiring artists. Gain real-world experience, build your portfolio, and learn from industry experts under personalized guidance.",
    img: PaintingImg,
  },
  {
    title: "Long Term Course",
    description: "An immersive program covering everything from fundamentals to advanced techniques. Tailored for dedicated students who want to deeply master painting, sketching, and traditional arts.",
    img: SketchImg, // Portrait/Sketch
  },
  {
    title: "Workshop",
    description: "Short-term intensive workshops focusing on specific mediums like clay modeling, pottery, acrylics, or specialized crafts. Perfect for quick learning and weekend activities.",
    img: PotteryImg, // Workshop vibe
  }
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      {/* Re-using page background "courses" or just omit for standard dark */}
      <PageWrapper page="courses">
        <div className="pt-16">
          <PageHero title="Our" highlight="Services" subtitle="Explore our premier training programs, professional internships, and intensive workshops." />
          
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="art-card group"
                    style={{ background: "rgba(60,8,18,0.75)", border: "1px solid rgba(212,175,55,0.2)" }}
                  >
                    <div className="overflow-hidden aspect-video">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="font-heading font-bold text-2xl text-white mb-3" style={{ color: "#D4AF37" }}>
                        {service.title}
                      </h3>
                      <p className="text-[#F7F3EB] opacity-80 leading-relaxed font-body text-sm md:text-base">
                        {service.description}
                      </p>
                      <button 
                         className="btn-gradient mt-6 py-2 px-5 text-sm"
                         onClick={() => { window.location.href = "/contact" }}
                      >
                        Inquire Now
                      </button>
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
    </>
  );
};

export default ServicesPage;
