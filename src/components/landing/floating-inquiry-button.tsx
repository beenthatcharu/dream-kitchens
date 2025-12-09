"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const form = document.getElementById("inquiry-form");
    if (!form) return;

    // First smooth scroll to the form
    form.scrollIntoView({ behavior: "smooth", block: "start" });

    // Adjust scroll AFTER the animation completes
    setTimeout(() => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 70;

      const floatingBtn = document.getElementById("floating-btn-bar");
      const btnHeight = floatingBtn ? floatingBtn.offsetHeight : 70;

      // Final adjustment
      window.scrollBy({
        top: -(headerHeight + btnHeight + 10),
        behavior: "smooth",
      });
    }, 500); // delay ensures scrollIntoView completes fully
  };

  return (
    <div
      id="floating-btn-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t z-40"
    >
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
