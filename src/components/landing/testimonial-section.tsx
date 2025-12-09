import { Quote } from "lucide-react";
import content from "@/lib/content.json";

const { testimonials } = content;

export default function TestimonialSection() {
  const testimonial = testimonials[0];

  return (
    <section
      className="py-20 md:py-28 
                 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] 
                 relative overflow-hidden text-white"
    >

      {/* Decorative background blur elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full"></div>

      {/* Black Blur */}
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-black/30 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-[#D4AF37] drop-shadow-sm">
            Clients Prefer Us Because
          </h2>

          {/* Black underline */}
          <div className="w-24 h-[3px] bg-black mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonial Card */}
        <div
          className="max-w-4xl mx-auto text-center relative px-6 py-12
                     bg-[#111]/70 backdrop-blur-xl border border-white/10 
                     rounded-2xl shadow-2xl"
        >

          {/* Quote Icon Top */}
          <Quote
            className="h-20 w-20 text-white absolute -top-10 left-1/2 
                       -translate-x-1/2 opacity-20"
            aria-hidden="true"
          />

          <blockquote className="text-2xl md:text-3xl italic text-gray-200 leading-relaxed animate-fadeIn">
            “{testimonial.quote}”
          </blockquote>

          <footer className="mt-6 font-semibold text-lg text-[#D4AF37] animate-fadeInUp">
            — {testimonial.author}
          </footer>

          {/* Quote Icon Bottom */}
          <Quote
            className="h-16 w-16 text-white absolute -bottom-6 right-6 opacity-20 rotate-180"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}
