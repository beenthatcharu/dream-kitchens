import { Quote } from "lucide-react";
import content from "@/lib/content.json";

const { testimonials } = content;

export default function TestimonialSection() {
  const testimonial = testimonials[0];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">

      {/* Decorative background blur elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-300/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary drop-shadow-sm">
            Clients Prefer Us Because
          </h2>

          {/* Underline Accent */}
          <div className="w-24 h-[3px] bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto text-center relative px-6 py-12
                        bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl">

          {/* Golden Quote Icons */}
          <Quote
            className="h-20 w-20 text-accent absolute -top-10 left-1/2 -translate-x-1/2 opacity-40"
            aria-hidden="true"
          />

          <blockquote className="text-2xl md:text-3xl italic text-gray-700 leading-relaxed animate-fadeIn">
            “{testimonial.quote}”
          </blockquote>

          <footer className="mt-6 font-semibold text-lg text-primary animate-fadeInUp">
            — {testimonial.author}
          </footer>

          {/* Right bottom quote mark */}
          <Quote
            className="h-16 w-16 text-accent absolute -bottom-6 right-6 opacity-30 rotate-180"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}
