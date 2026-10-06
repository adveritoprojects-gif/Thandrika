import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import AboutSection from "@/components/AboutSection";
import SanthidhamSection from "@/components/SanthidhamSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function HomeView({
  afterFeatures,
}: {
  afterFeatures?: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <FeatureStrip />
      {afterFeatures}
      <AboutSection />
      <SanthidhamSection />
      <ServicesSection />
      <PhilosophySection />
      <GallerySection />
      <TestimonialsSection />
      <ConsultationCTA />
    </>
  );
}
