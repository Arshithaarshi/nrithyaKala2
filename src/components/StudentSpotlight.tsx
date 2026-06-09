import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award } from "lucide-react";

const spotlights = [
  {
    name: "abinaya Raghavan",
    achievement: "Performed at Rashtrapati Bhavan, New Delhi",
    years: "8 years of training",
    quote: "NrityaKala gave me wings to express my soul through dance.",
  },
  {
    name: "Meera Subramaniam",
    achievement: "Recipient of Yuva Kala Bharathi Award",
    years: "10 years of training",
    quote: "The discipline I learned here shaped every aspect of my life.",
  },
  {
    name: "Kavitha Rajan",
    achievement: "Now teaching Bharatanatyam in Singapore",
    years: "12 years of training",
    quote: "Guru Lakshmi's guidance turned my passion into my profession.",
  },
];

export default function StudentSpotlight() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Alumni Pride</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Student Spotlight</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spotlights.map((s, i) => (
            <div
              key={s.name}
              className={`text-center p-6 md:p-8 bg-background rounded-sm shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
              <p className="font-body text-accent text-xs tracking-wide mt-1">{s.years}</p>
              <p className="font-body text-foreground/70 text-sm mt-3 italic">"{s.quote}"</p>
              <p className="font-body text-foreground/60 text-xs mt-3 font-medium">{s.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
