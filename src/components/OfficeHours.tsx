import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 8:30 PM" },
  { day: "Saturday", time: "8:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function OfficeHours() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Availability</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Office Hours & Contact</h2>
          <div className="gold-separator" />
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-background rounded-sm p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="font-display text-xl font-bold text-foreground">Working Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                  <span className="font-body text-foreground font-medium text-sm">{h.day}</span>
                  <span className={`font-body text-sm ${h.time === 'Closed' ? 'text-destructive' : 'text-foreground/70'}`}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-sm p-6 md:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Reach Us Directly</h3>
            <div className="space-y-5">
              <a href="tel:+919876543210" className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-body text-foreground font-medium text-sm">Phone</p>
                  <p className="font-body text-foreground/60 text-sm">+91 98765 43210</p>
                </div>
              </a>
              <a href="mailto:info@nrityakala.com" className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-body text-foreground font-medium text-sm">Email</p>
                  <p className="font-body text-foreground/60 text-sm">info@nrityakala.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
