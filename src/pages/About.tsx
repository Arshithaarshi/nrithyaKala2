import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import GuruProfile from "@/components/GuruProfile";
import MissionValues from "@/components/MissionValues";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSections from "@/components/Herosections";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSections />
        <AboutSection />
        <GuruProfile />
        <MissionValues />
        <Testimonials />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
