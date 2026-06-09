import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

const stats = [
  { number: 20, suffix: "+", label: "Years of Legacy" },
  { number: 13, suffix: "+", label: "Arangetrams" },
  { number: 300, suffix: "+", label: "Students Trained" },
  { number: 400, suffix: "+", label: "Stage Performances" },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HomeStats() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              <div className="w-8 h-0.5 bg-accent mx-auto my-3" />
              <p className="font-body text-primary-foreground/80 text-xs md:text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
