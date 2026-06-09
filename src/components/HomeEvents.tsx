import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    title: "Taal — The Rhythm of Dance",
    date: "April 15, 2026",
    time: "6:30 PM",
    venue: "Ravindra Bharathi, Hyderabad",
    type: "Annual Recital",
  },
  {
    title: "Navarasam — Nine Emotions",
    date: "May 20, 2026",
    time: "5:00 PM",
    venue: "Music Academy, Chennai",
    type: "Group Performance",
  },
  {
    title: "Summer Workshop 2026",
    date: "June 1–15, 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "NrityaKala Academy Studio",
    type: "Workshop",
  },
];

export default function HomeEvents() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Upcoming</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Events</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`group relative bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Type badge */}
              <div className="bg-primary px-4 py-2">
                <span className="font-body text-primary-foreground text-xs tracking-widest uppercase">{event.type}</span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-foreground/70">
                    <Calendar className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-body text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-foreground/70">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-body text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-foreground/70">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-body text-sm">{event.venue}</span>
                  </div>
                </div>

                <button className="mt-5 w-full border border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold py-2 rounded-sm text-sm uppercase tracking-wide transition-all duration-300">
                <Link to="/contact">  Book Now </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
