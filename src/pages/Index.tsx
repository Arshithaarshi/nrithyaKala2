import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeWelcome from "@/components/HomeWelcome";
import HomeCoursesPreview from "@/components/HomeCoursesPreview";
import HomeStats from "@/components/HomeStats";
import HomeEvents from "@/components/HomeEvents";
import HomeTestimonials from "@/components/HomeTestimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Video } from "lucide-react";
import VideoBanner from "@/components/VideoBanner";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoBanner />
      <HeroSection />
      <HomeWelcome />
      <HomeCoursesPreview />
      <HomeStats />
      <HomeEvents />
      <HomeTestimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
