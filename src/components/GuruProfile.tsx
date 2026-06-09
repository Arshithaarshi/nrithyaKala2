import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, GraduationCap, Users, Star } from "lucide-react";
import guruImage from "@/assets/menaga.jpeg"; // Replace with your image

export default function GuruProfile() {
  const { ref, isVisible } = useScrollReveal();

  const achievements = [
    {
      icon: Star,
      count: "300+",
      label: "Stage Performances",
    },
    {
      icon: Users,
      count: "34",
      label: "Salangai Poojas",
    },
    {
      icon: GraduationCap,
      count: "12",
      label: "Arangetrams",
    },
    {
      icon: Award,
      count: "20+",
      label: "Years of Teaching",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Meet The Acharya
          </p>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            SMT. S. MENAGA
          </h2>

          <div className="w-24 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Hero Section */}
        <div
          className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={guruImage}
              alt="Acharya Smt. S. Menaga"
              className="w-full aspect-[4/5] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white text-3xl font-display font-bold">
                SMT. S. MENAGA
              </h3>

              <p className="text-white/80 mt-1">
                Founder & Director
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="space-y-8">
            <div className="bg-background rounded-3xl border border-border p-8">
              <p className="text-accent uppercase tracking-widest text-sm mb-3">
                Founder & Director
              </p>

              <h3 className="font-display text-3xl font-bold mb-4">
                Acharya S. Menaga
              </h3>

              <p className="text-foreground/70 font-medium mb-6">
                B.Sc., Diploma, M.F.A., M.Phil. in Bharathanatyam
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Founder of Kavinaya Natiyalaya and President of the
                Tirupur District Fine Arts Cultural Forum Trust, Acharya
                Menaga has dedicated her life to preserving Bharathanatyam
                through education, performance, mentorship, and cultural
                leadership.
              </p>
            </div>

            <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-foreground/80">
              "Small drops make an ocean. Every student nurtured today
              becomes a torchbearer of our cultural heritage tomorrow."
            </blockquote>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <item.icon className="w-8 h-8 text-accent mx-auto mb-4" />

              <h3 className="font-display text-4xl font-bold text-accent">
                {item.count}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wide text-foreground/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Biography Sections */}
        <div className="mt-24 space-y-14">
          <div>
            <h3 className="font-display text-3xl font-bold mb-5">
              Classical Training
            </h3>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Acharya Menaga began learning Bharathanatyam at a young age
              under Mrs. Geetha in the Pandhanallur Bani and later
              continued advanced training in the Tanjore Bani under
              Mrs. Kannagi Rajan. Her foundation in traditional styles
              shaped her artistic excellence and commitment to preserving
              classical heritage.
            </p>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold mb-5">
              Academic Excellence
            </h3>

            <p className="text-foreground/80 leading-relaxed text-lg">
              She pursued formal Bharathanatyam education at Kalaikaviri
              Fine Arts College, Trichy, earning a Diploma, M.F.A., and
              M.Phil. under the guidance of Dr. Supriya Ravikumar. Her
              academic journey strengthened both her practical expertise
              and scholarly understanding of classical dance.
            </p>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold mb-5">
              Contributions & Recognition
            </h3>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Through more than 300 performances, mentorship of numerous
              students, free Bharathanatyam education initiatives, and
              active cultural leadership, Acharya Menaga has earned
              prestigious honours including Kalaivalarmani, Natiya
              Kalaiyarasi, Tamil Mamani, and the Golden Woman Award.
            </p>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold mb-5">
              Beyond the Arts
            </h3>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Passionate about personal development, wellness, and
              fitness, she has participated in international training
              programs across Asia and continues to integrate holistic
              growth into her philosophy of teaching and leadership.
            </p>
          </div>
        </div>

        {/* Vision Banner */}
        <div className="mt-24">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Vision For The Future
            </h3>

            <p className="max-w-4xl mx-auto text-primary-foreground/80 text-lg leading-relaxed">
              Acharya Menaga envisions transforming Kavinaya Natiyalaya
              into a prestigious Bharathanatyam University that nurtures
              world-class artists, researchers, educators, and cultural
              ambassadors while ensuring quality arts education remains
              accessible to deserving students from all backgrounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

