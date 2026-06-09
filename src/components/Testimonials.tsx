import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Suganya Senthil ",
    role: "Parent of Student",
    text: "Best dance school in tirupur I'm proudly say that student of KNSB and this school has special to make all the dancers into best performers,best student,and best women in everything  Sincerely thanks to my guru,S.Menaga ma'am and the management.",
  },
  {
    name: "Baranesree",
    role: "Advanced Student",
    text: "Learning Bharatanatyam at KNSB has been a transformative journey. The professionalism in dance training is exceptional, but what makes it truly special is how discipline and health routines are equally emphasized. Our guru not only shapes us into skilled dancers but also instills values that go beyond the art form.She believes in every student’s potential, and I’m grateful for the trust and guidance she has given me. Having pursued dance for over seven years, I can proudly say that KNSB has played a crucial role in my growth. With numerous stage performances, faculty training, and a nurturing environment, this is undoubtedly the best place to study Bharatanatyam.A proud KNSBian! Highly recommended for anyone passionate about this divine art.",
  },
  {
    name: "Rajesh kumar",
    role: "Parent of Student",
    text: "Kavinaya Natiyalaya Bharathanatiam School is an excellent choice for studying Bharatanatyam. It is a great option for our kids, as each and every child is treated with care and affection, as if they were their own. We are very grateful to Menaka Mam for her heartfelt dedication. Thank you so much.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Kind Words</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">What People Say</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-background rounded-sm p-6 md:p-8 shadow-sm transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="font-body text-foreground/75 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-base font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-foreground/50 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
