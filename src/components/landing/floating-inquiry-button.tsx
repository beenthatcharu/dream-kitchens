"use client";

import { Button } from "@/components/ui/button";

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const form = document.getElementById("inquiry-form");
    if (!form) return;

    // Sticky header height
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    // Exact Y position of the form
    const formY = form.offsetTop - headerHeight - 12;

    window.scrollTo({
      top: formY,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t z-40">
      <Button
        size="lg"
        onClick={scrollToForm}
        className="
          w-full bg-accent text-accent-foreground font-bold
          text-lg py-6 rounded-full shadow-lg
          hover:bg-accent/90 active:bg-accent/80
          transition-all duration-300
        "
        style={{
          WebkitTapHighlightColor: "transparent",
          WebkitTouchCallout: "none",
        }}
      >
        Enquire Now
      </Button>
    </div>
  );
}
