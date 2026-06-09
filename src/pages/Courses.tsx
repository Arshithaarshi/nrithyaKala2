import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import CourseSchedule from "@/components/CourseSchedule";
import WhyChooseUs from "@/components/WhyChooseUs";
import CourseFAQ from "@/components/CourseFAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSectionc from "@/components/HeroSectionc";

export default function Courses() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroSectionc />
        <CoursesSection />
        <CourseSchedule />
        <WhyChooseUs />
        <CourseFAQ />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
