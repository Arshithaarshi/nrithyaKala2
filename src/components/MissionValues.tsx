import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Flame, Music, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Devotion",
    description: "Dance as an offering — we approach Bharatanatyam as a spiritual practice rooted in devotion, discipline, and reverence for tradition.",
  },
  {
    icon: Music,
    title: "Rhythm & Precision",
    description: "Mastery of Tala and Nritta form the backbone of our training. Every step is deliberate, every beat is purposeful.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a warm, inclusive community where students of all ages and backgrounds come together through the love of classical dance.",
  },
  {
    icon: Sparkles,
    title: "Artistic Growth",
    description: "Beyond technique, we nurture creativity, emotional expression, and individual artistry in every dancer we train.",
  },
];

export default function MissionValues() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">What We Stand For</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Mission & Values</h2>
          <div className="gold-separator" />
          <p className="font-body text-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
            At Kavinaya Natiyalaya Academy, our mission is to keep the flame of Bharatanatyam alive by training
            the next generation of dancers with authenticity, passion, and artistic excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`group p-6 md:p-8 bg-secondary/50 rounded-sm hover:bg-secondary transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <value.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{value.title}</h3>
              <p className="font-body text-foreground/70 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
