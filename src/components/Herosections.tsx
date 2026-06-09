import { Link } from "react-router-dom";
import heroImage from "@/assets/Hero-Sections.jpeg";

export default function HeroSections() {
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
          <p className="font-accent text-gold-light text-lg md:text-xl tracking-[0.3em] uppercase mb-7">
            Classical Indian Dance Academy
          </p>
        </div>

        <h1 className="animate-reveal-delay-1 font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8" style={{ textWrap: 'balance' }}>
        Preserving Tradition, Inspiring Excellence
        </h1>

        <p className="animate-reveal-delay-2 font-body text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ textWrap: 'pretty' }}>
        Dedicated to nurturing the timeless art of Bharatanatyam through disciplined training, cultural understanding, and artistic expression.

About Page Content
        </p>

      
      </div>

  
      
    </section>
  );
}