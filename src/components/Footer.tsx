import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
              Kavinaya<span className="text-accent">Natiyalaya</span>
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Preserving the sacred art of Bharatanatyam through dedicated teaching,
              discipline, and devotion to classical tradition.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent shrink-0" />
                +91 95436 11112
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent shrink-0" />
                Laya.menu@gmail.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>16/17, Spider Palanidamy Nagar , Gandhi Nagar Post , Tirupur <br />Coimbatore , Tamil Nadu </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} NrityaKala Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
