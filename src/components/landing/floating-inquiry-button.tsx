"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const target = document.getElementById("inquiry-form-exact");
    if (!target) return;

    // Step 1 — scroll to form naturally
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Step 2 — slight correction AFTER scroll finishes
    setTimeout(() => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 70;

      // small upward adjust
      window.scrollBy({
        top: -headerHeight - 10,
        behavior: "smooth",
      });
    }, 500);
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
