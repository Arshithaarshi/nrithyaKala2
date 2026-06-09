import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Book an Admission</h2>
          <div className="gold-separator" />
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-background rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-10 space-y-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-foreground/60 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-foreground/60 mb-1.5">Phone</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
                placeholder="+91 95436 11112"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium tracking-wide uppercase text-foreground/60 mb-1.5">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-border bg-background px-4 py-3 rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium tracking-wide uppercase text-foreground/60 mb-1.5">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-border bg-background px-4 py-3 rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow resize-none"
              placeholder="Tell us about your interest in Bharatanatyam..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-sm text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
