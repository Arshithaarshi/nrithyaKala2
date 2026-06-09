import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Group performance on stage" },
  { src: gallery2, alt: "Student practicing in studio" },
  { src: gallery3, alt: "Ghungroo ankle bells detail" },
  { src: gallery4, alt: "Arangetram ceremony performance" },
  { src: gallery5, alt: "Mudra hand gestures" },
  { src: gallery6, alt: "Guru teaching students" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Moments</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Gallery</h2>
          <div className="gold-separator" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-sm aspect-square cursor-pointer transition-all duration-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors active:scale-95"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
