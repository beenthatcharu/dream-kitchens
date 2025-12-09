"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const form = document.getElementById("inquiry-form-exact");
    if (!form) return;

    const headerHeight =
      document.querySelector("header")?.offsetHeight || 80;

    const floatingHeight =
      document.getElementById("floating-btn-bar")?.offsetHeight || 70;

    // ⭐ FINAL PERFECT SCROLL POSITION
    const y =
      form.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      10;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
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
