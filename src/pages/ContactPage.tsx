import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageWrapper from "@/components/PageWrapper";

const ContactPage = () => (
  <>
    <Header />
    <PageWrapper page="contact">
      <div className="pt-16">
        <PageHero
          title="Get in"
          highlight="Touch"
          subtitle="We'd love to hear from you — reach out for courses, admissions, or any queries"
        />
        <ContactSection />
      </div>
    </PageWrapper>
    <Footer />
    <WhatsAppButton />
  </>
);

export default ContactPage;
