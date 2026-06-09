import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sectionc.jpeg";

export default function HeroSectionc() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bharatanatyam dancer performing in temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-reveal">
          <p className="font-accent text-gold-light text-lg md:text-xl tracking-[0.3em] uppercase mb-6">
            Classical Indian Dance Academy
          </p>
        </div>

        <h1 className="animate-reveal-delay-1 font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6" style={{ textWrap: 'balance' }}>
        Master the Art of Bharatanatyam
        </h1>

        <p className="animate-reveal-delay-2 font-body text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ textWrap: 'pretty' }}>
        Structured training programs designed to guide students from foundational techniques to advanced performance mastery.

        </p>

        <div className="animate-reveal-delay-3">
          <Link
            to="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3.5 rounded-sm tracking-wide text-sm uppercase transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-[0.97]"
          >
            Join Our Classes
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}