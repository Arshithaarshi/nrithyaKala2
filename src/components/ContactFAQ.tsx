import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I enroll my child?",
    a: "Simply fill out the admission form above or visit our studio during office hours. We'll schedule a brief orientation where you can meet the guru and see a demo class.",
  },
  {
    q: "What are the fees?",
    a: "Fees vary by course level and batch size. Please contact us for the latest fee structure. We also offer sibling discounts and scholarships for financially disadvantaged students.",
  },
  {
    q: "Can I attend a trial class?",
    a: "Yes! We offer one complimentary trial class for new students. Contact us to schedule your free session.",
  },
  {
    q: "Do you provide costumes and accessories?",
    a: "We guide students on purchasing practice wear. For performances and Arangetrams, we help coordinate with trusted costume designers and jewellery suppliers.",
  },
];

export default function ContactFAQ() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Need Help?</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Common Questions</h2>
          <div className="gold-separator" />
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary/50 rounded-sm border-none px-6">
                <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground/70 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
