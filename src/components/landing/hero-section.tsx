import Image from 'next/image';
import { InquiryForm } from '@/components/landing/inquiry-form';

export default function HeroSection() {
  return (
    <section
      id="inquiry-form"
      className="relative w-full flex items-center justify-center text-white py-24 md:py-16"
    >
      {/* 🔹 Background Image */}
      <Image
        src="https://res.cloudinary.com/dtc8bbbco/image/upload/v1763618118/Upper_bukit_timah_road_1_icp22b.jpg"
        alt="School Building"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">

            {/* ✅ Updated Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-headline leading-tight tracking-tight">
              Singapore’s Most Affordable Indian School Offering the Cambridge Curriculum
            </h1>

            {/* ✅ Added Subheading */}
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Delivering global Cambridge standards with a strong Indian foundation to help every child learn, grow, and excel.
            </p>

          </div>

          <div className="w-full max-w-md mx-auto">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
