import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Varshini",
    role: "Student",
    quote: "Kavinaya natiyalaya school of bharathanatyam provides excellent training and a positive atmosphere.teachers are so patient and dedicated, truly grateful for their guidance.I really appreciate discipline and creativity. Excellent teaching, beautiful choreography, and great encouragement.Best place to grow, learn, and dance.Blessed to be part of this dance family.",
  },
  {
    name: "Jagan Gopal",
    role: "Parent ",
    quote: "My daughter is having the privilege to learn the bharadhanatiyam and carnatic music from KNBS. She always feels happy going to classes is what I have observed.Thank you Harshitha for the wonderful training.Thank you Menagha mam for the wonderful contribution that you do for the Art and for the society.",
  },
  {
    name: "Suganya senthil kumar",
    role: "Parent",
    quote: "Best dance school in tirupur I'm proudly say that student of KNSB and this school has special to make all the dancers into best performers,best student,and best women in everything  Sincerely thanks to my guru,S.Menaga ma'am and the management.",
  },
  {
    name: "Rajesh kumar",
    role: "Parent",
    quote: "Kavinaya Natiyalaya Bharathanatiam School is an excellent choice for studying Bharatanatyam. It is a great option for our kids, as each and every child is treated with care and affection, as if they were their own. We are very grateful to Menaka Mam for her heartfelt dedication. Thank you so much.",
  },
  {
    name: "Baranesree",
    role: "Student",
    quote: "Learning Bharatanatyam at KNSB has been a transformative journey. The professionalism in dance training is exceptional, but what makes it truly special is how discipline and health routines are equally emphasized. Our guru not only shapes us into skilled dancers but also instills values that go beyond the art form.She believes in every student’s potential, and I’m grateful for the trust and guidance she has given me. Having pursued dance for over seven years, I can proudly say that KNSB has played a crucial role in my growth. With numerous stage performances, faculty training, and a nurturing environment, this is undoubtedly the best place to study Bharatanatyam.A proud KNSBian! Highly recommended for anyone passionate about this divine art.",
  },
  {
    name: "Karthikeyan",
    role: "Student",
    quote: "A person like me would have never continued if the teacher wasn't supportive and wasn't understanding me individually. She is very supportive and understands each one and tries to find a way to help. She will also make sure the exposure is high and she will pull you through. A proper teacher and a superb place to learn dance if you are interested.",
  },
];

export default function HomeTestimonials() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Kavinaya Natiyalaya School of Bharatanatiyam (KNSB)</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">What People Say</h2>
          <div className="gold-separator" />
        </div>

        <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-background rounded-sm shadow-md p-8 md:p-12 text-center relative">
            <Quote className="w-10 h-10 text-accent/20 mx-auto mb-4" />

            <div className="min-h-[120px] flex items-center justify-center">
              <p className="font-accent text-foreground/80 text-lg md:text-xl italic leading-relaxed max-w-2xl transition-opacity duration-500">
                "{testimonials[active].quote}"
              </p>
            </div>

            <div className="flex justify-center gap-1 my-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <h4 className="font-display text-lg font-bold text-foreground">{testimonials[active].name}</h4>
            <p className="font-body text-accent text-xs tracking-wide mt-1">{testimonials[active].role}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-accent w-6' : 'bg-foreground/20 hover:bg-foreground/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
