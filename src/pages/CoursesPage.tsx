import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageWrapper from "@/components/PageWrapper";

const CoursesPage = () => (
  <>
    <Header />
    <PageWrapper page="courses">
      <div className="pt-16">
        <PageHero title="Our Art & Music" highlight="Courses" subtitle="" />
        <CoursesSection hideHeader />
      </div>
    </PageWrapper>
    <Footer />
    <WhatsAppButton />
  </>
);
export default CoursesPage;
