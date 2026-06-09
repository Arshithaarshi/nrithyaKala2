import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen, Heart } from "lucide-react";

export default function GuruProfile() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Meet the Acharya</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Smt . Menaga</h2>
          <div className="gold-separator" />
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-accent/20 border-2 border-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-4xl text-accent font-bold">KN</span>
                </div>
                <p className="font-display text-xl text-foreground font-semibold">35+ Years of Dedication</p>
                <p className="font-body text-foreground/60 text-sm mt-1">Thanjavur Tradition</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
              Acharya Menaga is a distinguished Bharatanatyam exponent trained in the revered
              Thanjavur tradition. With over three decades of performing and teaching experience, she
              has dedicated her life to preserving and propagating this sacred dance form.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
              Having performed across major cultural festivals in India, Europe, and Southeast Asia,
              Guru Lakshmi brings a wealth of stage experience and artistic depth to her teaching.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Award, label: "National Awards", count: "12+" },
                { icon: BookOpen, label: "Research Papers", count: "8" },
                { icon: Heart, label: "Arangetrams Guided", count: "85+" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-background rounded-sm shadow-sm">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-display text-xl font-bold text-foreground">{item.count}</p>
                  <p className="font-body text-foreground/60 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
