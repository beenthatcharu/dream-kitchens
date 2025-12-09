"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const el = document.getElementById("inquiry-form");
    if (!el) return;

    // Header ki real height detect karna
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;

    // Form ka exact Y coordinate
    const formTop = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: formTop - headerHeight - 10, // ⭐ Extra 10px smooth spacing
      behavior: "smooth",
    });
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
