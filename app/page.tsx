import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroSection from "@/components/sections/HeroSection";
import ActivitiesPreview from "@/components/sections/ActivitiesPreview";
import GamingSection from "@/components/sections/GamingSection";
import CafeSection from "@/components/sections/CafeSection";
import BirthdaySection from "@/components/sections/BirthdaySection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GallerySection from "@/components/sections/GallerySection";
import InstagramSection from "@/components/sections/InstagramSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ActivitiesPreview />
        <GamingSection />
        <CafeSection />
        <BirthdaySection />
        <BenefitsSection />
        <GallerySection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
