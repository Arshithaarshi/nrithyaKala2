import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the ideal age to start learning Bharatanatyam?",
    a: "Children can start as early as age 5 with our specially designed foundation program. However, it's never too late — we welcome adult beginners of all ages.",
  },
  {
    q: "Do I need any prior dance experience?",
    a: "No prior experience is needed for our Beginner level. Our curriculum starts from the very basics and gradually builds complexity.",
  },
  {
    q: "How long does it take to prepare for an Arangetram?",
    a: "Typically, students train for 6–8 years before their Arangetram, though this varies based on individual progress, practice dedication, and the guru's assessment.",
  },
  {
    q: "What should students wear to class?",
    a: "Students should wear a comfortable practice saree or a salwar kameez. Ghungroos (ankle bells) will be provided for beginners and can be purchased as they advance.",
  },
  {
    q: "Are online classes available?",
    a: "Yes, we offer hybrid classes with both in-person and online options for Intermediate and Advanced students. Beginners are encouraged to attend in-person for proper foundation.",
  },
];

export default function CourseFAQ() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">Questions</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked</h2>
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
