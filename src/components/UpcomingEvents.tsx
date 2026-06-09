import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    date: "July 5th ",
    title: "Annual Arangetram Ceremony",
    location: "Kalakshetra Auditorium, Chennai",
    description: "Join us as we celebrate the Arangetram of our students from the USA, marking a significant milestone in their Bharatanatyam journey. This debut performance showcases years of dedication, discipline, and artistic excellence.",
  },
  {
    date: "June 28th",
    title: "Prayathnam Examination",
    location: "Chidambaram Nataraja Temple",
    description: "Kavinaya Natiyalaya is proud to be associated with the Prayathnam Institution in offering structured diploma examinations in Bharatanatyam. The Prayathnam exams provide students with an opportunity to assess their progress and achieve nationally recognised certification.",
  },
  {
    date: "September 14th",
    title: "Salangai Poojai",
    location: "NrityaKala Studio, Mylapore",
    description: "Join us for the Salangai Poojai of our adult batch students, to be held in the gracious presence of our Acharya's Guru, Dr. Supriya Ravikumar, as the Chief Guest. This auspicious occasion celebrates commitment to learning and reminds us that age is never a barrier to pursuing one's passion for dance",
  },
];

export default function UpcomingEvents() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Upcoming</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Events & Performances</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className={`group bg-secondary/50 rounded-sm overflow-hidden hover:shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="h-1.5 bg-accent group-hover:h-2 transition-all duration-300" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-accent mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <span className="font-accent text-xs tracking-[0.15em] uppercase">{event.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed mb-3">{event.description}</p>
                <div className="flex items-center gap-1.5 text-foreground/50 text-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
