import Navbar from "@/components/Navbar";
import HeroSectionss from "@/components/HeroSectionss";
import GallerySection from "@/components/GallerySection";
import Achievements from "@/components/Achievements";
import UpcomingEvents from "@/components/UpcomingEvents";
import StudentSpotlight from "@/components/StudentSpotlight";
import Footer from "@/components/Footer";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSectionss />
        <GallerySection />
        <Achievements />
        <UpcomingEvents />
        <StudentSpotlight />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
