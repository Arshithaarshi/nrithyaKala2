import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const courses = [
  { 
    name: "Bharatanatyam",
    image: gallery1,
    desc: "Classical South Indian temple dance"
  },

  { 
    name: "Nattuvangam",
    image: gallery2,
    desc: "The art of rhythmic recitation and coordination"
  },

  { 
    name: "Prayanthanam",
    image: gallery3,
    desc: "A graceful journey into expressive dance and creativity"
  },

  { 
    name: "Pro-Arangetram",
    image: gallery4,
    desc: "Advanced stage preparation and performance training"
  },

  { 
    name: "Salangai Poojai",
    image: gallery4,
    desc: "A traditional ceremonial milestone for dance students"
  },

  { 
    name: "Thattu Kazhi",
    image: gallery4,
    desc: "Foundational rhythmic footwork and coordination training"
  },

  { 
    name: "Teacher Training",
    image: gallery4,
    desc: "Professional guidance for aspiring dance instructors"
  },
];

export default function HomeCoursesPreview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">What We Teach</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Courses Offered</h2>
          <p className="font-body text-foreground/60 text-sm max-w-xl mx-auto">
            Kavinaya Natiyalaya Academy conducts short-term as well as long-term courses in various classical dance disciplines.
          </p>
          <div className="gold-separator" />
        </div>

        {/* Traditional Bharatanatyam Video */}
        <div className={`mb-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-accent/30">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-lg blur-sm -z-10" />
            <div className="relative pt-[56.25%]">
            <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/szIk9fFyL3c"
                title="Bharatanatyam Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            
            </div>
          </div>
          <p className="text-center font-body text-foreground/50 text-xs mt-3 italic">A glimpse into the beauty of Bharatanatyam</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {courses.map((course, i) => (
            <div
              key={course.name}
              className={`group text-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="relative overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto mb-4 shadow-lg">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-full" />
              </div>
              <h3 className="font-display text-base md:text-lg font-bold text-foreground">{course.name}</h3>
              <p className="font-body text-foreground/60 text-xs mt-1">{course.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Link
            to="/courses"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-sm tracking-wide text-sm uppercase transition-all duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
