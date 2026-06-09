import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Navigation, Car, Train } from "lucide-react";

export default function LocationInfo() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Find Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Our Location</h2>
          <div className="gold-separator" />
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-sm overflow-hidden aspect-video bg-muted">
          
          <iframe 
          title="NrityaKala Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15495.838928125882!2d77.31938546977537!3d11.132861200000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906f6dd587ee7%3A0xfc5ec454626a05d1!2sGandhi%20Nagar%20Post%20Office%20(641603)!5e1!3m2!1sen!2sin!4v1775494504912!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          >
       
          </iframe>


          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">Address</h3>
                <p className="font-body text-foreground/70 text-sm">16/17, Spider Palanidamy Nagar , Gandhi Nagar Post , Tirupur <br />Coimbatore , Tamil Nadu</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Navigation className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">Landmarks</h3>
                <p className="font-body text-foreground/70 text-sm">Near metro , opposite to Post Office</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Train className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">By Metro</h3>
                <p className="font-body text-foreground/70 text-sm">tirupur Metro Station — 5 min walk</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Car className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">Parking</h3>
                <p className="font-body text-foreground/70 text-sm">Free parking available in the temple complex parking lot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
