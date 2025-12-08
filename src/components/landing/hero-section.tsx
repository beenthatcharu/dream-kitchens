import Image from "next/image";
import { InquiryForm } from "@/components/landing/inquiry-form";

export default function HeroSection() {
  return (
    <section
      id="inquiry-form"
      className="relative w-full flex items-center justify-center text-white 
                 py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dtc8bbbco/image/upload/v1763618118/Upper_bukit_timah_road_1_icp22b.jpg"
        alt="Dream Kitchens Background"
        fill
        priority
        className="object-cover scale-110"
      />

      {/* Premium Multi-Layer Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 animate-fadeInUp">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline 
                           leading-tight tracking-tight drop-shadow-2xl">

              <span className="block">Premium Modular Kitchens.</span>

              <span className="block text-blue-400">
                Smart-Budget Planning.
              </span>

              <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl 
                               font-semibold text-yellow-300 drop-shadow">
                German Quality • Made to Order • Designer Finish
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl drop-shadow">
              Perfect for clients who want a premium home without overspending.
            </p>
          </div>

          {/* RIGHT SIDE — FORM BOX */}
          <div className="w-full max-w-md mx-auto animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20">
              <InquiryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

