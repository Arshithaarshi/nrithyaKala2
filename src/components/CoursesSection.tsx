import { useScrollReveal } from "@/hooks/useScrollReveal";

const courses = [
  {
    level: "Beginner",
    subtitle: "Arangetram Foundation",
    duration: "1–2 Years",
    description:
      "Start your journey with Adavus (basic steps), hand gestures (mudras), facial expressions (abhinaya), and foundational rhythmic patterns. Perfect for children aged 5+ and adult beginners.",
    highlights: ["Basic Adavus & Nritta", "Mudra Training", "Rhythm & Tala Basics"],
  },
  {
    level: "Intermediate",
    subtitle: "Expanding Expression",
    duration: "2–4 Years",
    description:
      "Deepen your technique with complex Jathis, Varnam compositions, and expressive storytelling through Abhinaya. Students learn stage presence and begin performing at cultural events.",
    highlights: ["Advanced Jathis & Varnam", "Abhinaya Mastery", "Stage Performance"],
  },
  {
    level: "Advanced",
    subtitle: "Towards Arangetram",
    duration: "4+ Years",
    description:
      "Master the full Margam repertoire in preparation for Arangetram — the solo debut performance. Refine artistry, choreography, and develop a personal style rooted in tradition.",
    highlights: ["Complete Margam", "Arangetram Preparation", "Choreography & Theory"],
  },
];

export default function CoursesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="courses" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Learn With Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Courses</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, i) => (
            <div
              key={course.level}
              className={`group bg-background rounded-sm shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="h-1.5 bg-accent group-hover:h-2 transition-all duration-300" />
              <div className="p-6 md:p-8">
                <p className="font-accent text-accent text-xs tracking-[0.2em] uppercase mb-1">{course.subtitle}</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">{course.level}</h3>
                <p className="font-body text-muted-foreground text-xs mb-4">{course.duration}</p>
                <p className="font-body text-foreground/75 text-sm leading-relaxed mb-6">{course.description}</p>
                <ul className="space-y-2">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
