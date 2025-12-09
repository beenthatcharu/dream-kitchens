"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const el = document.getElementById("inquiry-form");
    if (!el) return;

    // Step 1 – Scroll exactly to the form first
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Step 2 – After smooth scroll ends, adjust position for header height
    setTimeout(() => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80;

      window.scrollBy({
        top: -headerHeight - 10,
        behavior: "smooth",
      });
    }, 350); // delay ensures scrollIntoView completes
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t z-40">
      <Button
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 rounded-full"
        onClick={scrollToForm}
      >
        Enquire Now
      </Button>
    </div>
  );
}
