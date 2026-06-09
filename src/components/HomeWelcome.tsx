import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-dancer.jpg";

export default function HomeWelcome() {
  const { ref, isVisible } = useScrollReveal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Bharatanatyam dancer in traditional costume"
                className="w-full max-w-sm mx-auto rounded-sm shadow-xl object-cover aspect-[3/4]"
              />

              
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="font-accent text-accent text-sm tracking-[0.25em] uppercase mb-3">
              Welcome to
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">
              Kavinaya Natiyalaya Academy
            </h2>

            <div className="gold-separator !mx-0" />

            <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed mt-6 mb-4">
              Upholding the proverb that goes, “Tiny drops make a mighty
              ocean” as the Motto, the institution, Kavinaya Natiyalaya ®,
              Founded in 2006, with a very few students, now stands tall as an
              enlightening learning hub with a student count of 300.
            </p>

            <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
              As a mark of the institution’s and the Acharya’s artistic
              journey, We have successfully performed in 400 and above stages
              at both National and international locations including Trichy,
              Thiruvanaikkaval, Chidambaram, Pazhani, Chennai, Coimbatore,
              Udupi, Tirupati, Malaysia. The institution follows Merit
              certification curriculum in Bharathanatyam.
            </p>

            {/* Read More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-7 py-2.5 rounded-sm tracking-wide text-sm uppercase transition-all duration-300"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                showMore
                  ? "max-h-[1000px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mt-4">
                <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed">
                  Our institution is currently, successfully running with 9
                  branches and is training 40+ teacher training students in the
                  teaching of the sacred Art form. Smt. Menaga has been running
                  this institution successfully with her 20 year experience in
                  the industry. As a mark of artistic epitome and teaching
                  excellence, the institution and our Acharya has successfully
                  completed 34 salangai poojas and 13 Arangetrams. In addition
                  to it, she is doing her artistic service by teaching free
                  Bharathanatiyam classes for various Government schools. As a
                  recognition for her Strength and excellence she has received
                  the prestigious “Kalai Valarmani” award from the government
                  of Tamilnadu, and the title of “Natiya Kalaiyarasi” from
                  salem and “Tamizh Mamani” from Tiruppur governance, in
                  addition to the title of best artform teacher in the state
                  level. To flourish the fine arts in the Tiruppur city, she
                  has brought together fine artists from all over Tiruppur to
                  form Tiruppur District Fine Arts Cultural Forum Trust. She
                  has changed all her challenges into the staircase of success
                  and the award “Thanga Pen” justifies it. The support and love
                  of her family, her father, Mr. Selvaraj, her mother, Mrs
                  Valliyammal, and her beloved daughter Ms.Laya keep her
                  persevering and leveraging in life. She aims to teach the
                  divine and intricate art of bharathanatiyam to everyone and
                  to produce fine Bharathanatiyam artists in all of the world
                  in addition to aiming to establish, the institution,
                  Kavinaya Natiyalaya, a grand Bharathanatyam University in
                  Tiruppur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}