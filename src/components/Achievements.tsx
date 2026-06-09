import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy, Star, Globe, Calendar } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    year: "2024",
    title: "National Dance Excellence Award",
    description: "Recognized by the Indian Council for Cultural Relations for outstanding contribution to Bharatanatyam education.",
  },
  {
    icon: Globe,
    year: "2023",
    title: "International Cultural Festival — London",
    description: "Our senior batch performed at the prestigious Southbank Centre, receiving a standing ovation from an audience of 2,000.",
  },
  {
    icon: Star,
    year: "2022",
    title: "Best Dance Academy — Tamil Nadu",
    description: "Awarded by the State Cultural Department for maintaining the highest standards in classical dance training.",
  },
  {
    icon: Calendar,
    year: "2021",
    title: "Silver Jubilee Celebration",
    description: "Celebrated 25 years of NrityaKala Academy with a grand 3-day festival featuring alumni from across the world.",
  },
];

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Milestones</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Achievements</h2>
          <div className="gold-separator" />
        </div>

        <div className="space-y-6">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`flex gap-6 items-start p-6 md:p-8 bg-background rounded-sm shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="font-accent text-accent text-xs tracking-[0.2em] uppercase">{item.year}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">{item.title}</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
