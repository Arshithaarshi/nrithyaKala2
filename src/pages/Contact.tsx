import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import LocationInfo from "@/components/LocationInfo";
import OfficeHours from "@/components/OfficeHours";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
        <LocationInfo />
        <OfficeHours />
        <ContactFAQ />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
