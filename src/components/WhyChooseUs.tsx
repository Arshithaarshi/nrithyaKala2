import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Star, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from Guru Lakshmi Narayan and a team of trained, experienced instructors who are passionate about the art.",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "Over 85 successful Arangetrams and hundreds of performances at national and international stages.",
  },
  {
    icon: Shield,
    title: "Authentic Tradition",
    description: "Our curriculum strictly follows the Thanjavur Bani, preserving the pure essence of classical Bharatanatyam.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Personalized attention with limited students per batch, ensuring every dancer gets focused guidance.",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Why NrityaKala</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`flex gap-5 p-6 bg-background rounded-sm shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{reason.title}</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
