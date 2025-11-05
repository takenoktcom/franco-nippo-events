import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import AdPlaceholder from "@/components/AdPlaceholder";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Events />
          <AdPlaceholder />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
