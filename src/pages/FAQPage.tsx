import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageWrapper from "@/components/PageWrapper";

const FAQPage = () => (
  <>
    <Header />
    <PageWrapper page="faq">
      <div className="pt-16">
        <PageHero
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know about our courses, classes, and enrollment"
        />
        <FAQSection />
      </div>
    </PageWrapper>
    <Footer />
    <WhatsAppButton />
  </>
);

export default FAQPage;
