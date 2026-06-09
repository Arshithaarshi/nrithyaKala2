import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Monday", beginner: " 5:30 – 8:00 PM", intermediate: "—", advanced: "7:00 – 8:30 PM" },
  { day: "Tuesday", beginner: " 5:30 – 8:00 PM", intermediate: "11:00 AM – 2:00 PM", advanced: "7:00 – 8:30 PM" },
  { day: "Thursday", beginner: " 5:30 – 8:00 PM", intermediate: "—", advanced: "5:30 – 7:30 PM" },
  { day: "Saturday", beginner: " 5:30 – 8:00 PM", intermediate: "—", advanced: "12:00 – 2:00 PM" },
  { day: "Sunday", beginner: " 7:00 – 6:30 PM", intermediate: "—", advanced: "12:00 – 2:00 PM" },
];

export default function CourseSchedule() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Plan Your Practice</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Class Schedule</h2>
          <div className="gold-separator" />
        </div>

        <div className={`overflow-x-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-accent/30">
                <th className="text-left font-display font-semibold text-foreground py-4 px-4">
                  <Clock className="inline w-4 h-4 text-accent mr-2" />Day
                </th>
                <th className="text-center font-display font-semibold text-foreground py-4 px-4">Beginner</th>
                <th className="text-center font-display font-semibold text-foreground py-4 px-4">Intermediate</th>
                {/* <th className="text-center font-display font-semibold text-foreground py-4 px-4">Advanced</th> */}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={row.day} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-secondary/30' : ''}`}>
                  <td className="py-4 px-4 font-semibold text-foreground">{row.day}</td>
                  <td className="py-4 px-4 text-center text-foreground/70">{row.beginner}</td>
                  <td className="py-4 px-4 text-center text-foreground/70">{row.intermediate}</td>
                  {/* <td className="py-4 px-4 text-center text-foreground/70">{row.advanced}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
