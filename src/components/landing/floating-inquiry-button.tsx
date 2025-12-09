"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const form = document.getElementById("inquiry-form-exact");
    if (!form) return;

    // Header height
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 70;

    // ⭐ Final accurate position
    const finalY =
      window.scrollY +
      form.getBoundingClientRect().top -
      headerHeight -
      20; // clean buffer

    window.scrollTo({
      top: finalY,
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
