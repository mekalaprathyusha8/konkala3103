import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageWrapper from "@/components/PageWrapper";

const GalleryPage = () => (
  <>
    <Header />
    <PageWrapper page="gallery">
      <div className="pt-16">
        <PageHero title="Our" highlight="Gallery" subtitle="Explore our creative works, student art and studio moments" />
        <GallerySection />
      </div>
    </PageWrapper>
    <Footer />
    <WhatsAppButton />
  </>
);
export default GalleryPage;
