import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">About  Kavinaya Natiyalaya</h2>
          <div className="gold-separator" />
        </div>

        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="space-y-6">
            <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
                  Our institution is currently, successfully running with 9
                  branches and is training 40+ teacher training students in the
                  teaching of the sacred Art form. <span className="font-semibold text-foreground"> Smt. Menaga </span> has been running
                  this institution successfully with her 20 year experience in
                  the industry. As a mark of artistic epitome and teaching
                  excellence, the institution and our Acharya has successfully
                  completed 34 salangai poojas and 13 Arangetrams. In addition
                  to it, she is doing her artistic service by teaching free
                  Bharathanatiyam classes for various Government schools. As a
                  recognition for her Strength and excellence she has received
                  the prestigious “Kalai Valarmani” award from the government
                  of Tamilnadu, and the title of “Natiya Kalaiyarasi” from
                  salem and “Tamizh Mamani” from Tiruppur governance .
            </p>
            <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
                 In
                  addition to the title of best artform teacher in the state
                  level. To flourish the fine arts in the Tiruppur city, she
                  has brought together fine artists from all over Tiruppur to
                  form Tiruppur District Fine Arts Cultural Forum Trust. She
                  has changed all her challenges into the staircase of success
                  and the award “Thanga Pen” justifies it. The support and love
                  of her family, her father, Mr. Selvaraj, her mother, Mrs
                  Valliyammal, and her beloved daughter Ms.Laya keep her
                  persevering and leveraging in life. She aims to teach the
                  divine and intricate art of bharathanatiyam to everyone and
                  to produce fine Bharathanatiyam artists in all of the world
                  in addition to aiming to establish, the institution,
                  Kavinaya Natiyalaya, a grand Bharathanatyam University in
                  Tiruppur.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
              With over 500 students trained and countless Arangetrams conducted, NrityaKala
              continues to inspire a deep love for this sacred art form across generations.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { number: "25+", label: "Years of Legacy" },
              { number: "500+", label: "Students Trained" },
              { number: "120+", label: "Performances & Arangetrams" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl font-bold text-accent tabular-nums">{stat.number}</span>
                <span className="font-body text-foreground/70 text-sm tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
