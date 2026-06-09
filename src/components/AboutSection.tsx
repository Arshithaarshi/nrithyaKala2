import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  const achievements = [
    "Founded in 2006 with a vision to preserve and promote Bharathanatyam.",
    "Presented over 400 performances across India and Malaysia.",
    "Operates successfully through 9 branches.",
    "Structured Merit Certification Curriculum for students.",
    "Regular workshops and masterclasses by eminent artists.",
    "Dedicated Teacher Training Programme for future educators.",
    "Training in Bharathanatyam, Carnatic Music, Veena, Violin, Flute & Mridangam.",
    "Free Bharathanatyam education for deserving students.",
  ];

  const stats = [
    { number: "20+", label: "Years of Legacy" },
    { number: "500+", label: "Students Trained" },
    { number: "400+", label: "Performances" },
    { number: "9", label: "Branches" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="font-accent text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Kavinaya Natiyalaya®
          </h2>

          <div className="w-24 h-[2px] bg-accent mx-auto mb-6" />

          <p className="max-w-3xl mx-auto text-foreground/70 text-lg leading-relaxed">
            A centre dedicated to preserving the timeless tradition of
            Bharathanatyam while nurturing artistic excellence, cultural
            awareness, and holistic learning in Indian classical arts.
          </p>
        </div>

        {/* Main Section */}
        <div
          className={`grid lg:grid-cols-[1.7fr_0.9fr] gap-16 transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-4">
                A Legacy of Excellence
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg">
                Founded in 2006 with just a handful of students, Kavinaya
                Natiyalaya has grown into a respected institution dedicated to
                Bharathanatyam education and cultural enrichment. Guided by the
                belief that “Tiny drops make a mighty ocean,” the academy has
                nurtured generations of students through disciplined training
                and artistic excellence.
              </p>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-4">
                Artistic Achievements
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg">
                The institution has successfully presented more than 400
                performances at prestigious venues across India and Malaysia,
                including Chennai, Chidambaram, Tirupati, Coimbatore, Pazhani,
                Udupi, and many other cultural centres. Its acclaimed dance
                production <strong>“Maaveeran Karnan”</strong> was recognized as
                the Best Tamil Natiya Nadagam by the Government of Tamil Nadu in
                2025.
              </p>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-4">
                Education & Training
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg">
                Beyond Bharathanatyam, Kavinaya Natiyalaya offers diploma and
                certification programmes in Carnatic Music, Veena, Violin,
                Flute, and Mridangam. Through workshops, masterclasses, and a
                dedicated Teacher Training Programme, students receive a
                comprehensive education rooted in tradition and excellence.
              </p>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold text-primary mb-4">
                Vision for the Future
              </h3>

              <p className="text-foreground/80 leading-relaxed text-lg">
                Committed to preserving India’s rich cultural heritage, the
                institution provides opportunities for deserving students and
                continues to build a vibrant platform for learning,
                performance, research, and cultural growth for generations to
                come.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div>
            <div className="sticky top-28 bg-card border border-border rounded-3xl p-8 shadow-sm">
              <h3 className="font-display text-2xl font-bold mb-8 text-center">
                At a Glance
              </h3>

              <div className="space-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center border-b border-border pb-6 last:border-0 last:pb-0"
                  >
                    <div className="font-display text-5xl font-bold text-accent mb-2">
                      {stat.number}
                    </div>

                    <div className="uppercase tracking-widest text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Highlights
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Banner */}
        <div className="mt-24">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Preserving Heritage, Inspiring Generations
            </h3>

            <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg leading-relaxed">
              Through disciplined training, artistic excellence, and cultural
              education, Kavinaya Natiyalaya continues its mission of nurturing
              accomplished artists while preserving the timeless traditions of
              Indian classical arts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}