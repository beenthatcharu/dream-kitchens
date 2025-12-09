"use client";

import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative py-16 md:py-24 lg:py-28 overflow-hidden
        bg-gradient-to-r from-primary to-blue-700 text-primary-foreground
      "
    >
      {/* Glow Elements */}
      <div className="hidden md:block absolute top-10 left-10 w-40 h-40 bg-blue-300/30 blur-3xl rounded-full" />
      <div className="hidden md:block absolute bottom-10 right-10 w-56 h-56 bg-blue-100/30 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline drop-shadow-xl mb-4 sm:mb-6 animate-fadeInUp">
          Call Now for Free 3D Design + Smart Budget Planning
        </h2>

        {/* Required Note */}
        <p className="text-white/80 text-sm sm:text-base animate-fadeIn">
          Must have actual kitchen pics and videos for client engagement.
        </p>

        {/* WhatsApp + Call */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3 text-sm sm:text-base animate-fadeIn">

          <a
            href="https://wa.me/919403893424"
            target="_blank"
            className="text-accent-foreground font-semibold hover:underline"
          >
            📩 WhatsApp: +91 94038 93424
          </a>

          <span className="hidden sm:block text-white/60">|</span>

          <a
            href="tel:+919403893424"
            className="text-accent-foreground font-semibold hover:underline"
          >
            📞 Call: +91 94038 93424
          </a>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={scrollToTop}
          className="
            mt-8 bg-accent text-accent-foreground font-bold
            text-base sm:text-lg md:text-xl
            px-6 sm:px-10 py-4 sm:py-6
            rounded-full w-full sm:w-auto
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            hover:bg-accent/90 hover:scale-[1.05]
            transition-all duration-300 animate-fadeIn
            focus:ring-0 focus-visible:ring-0 focus:outline-none
          "
        >
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
