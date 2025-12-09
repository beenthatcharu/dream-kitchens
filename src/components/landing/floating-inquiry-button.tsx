"use client";

import { Button } from "@/components/ui/button";

export default function floatingInquiryButton() {
  const scrollToForm = () => {
    const el = document.getElementById("inquiry-form");

    if (!el) return;

    // Sticky header ka height adjust karlo (80px dono mobile/desktop me safe hai)
    const headerHeight = document.querySelector("header")?.offsetHeight || 80;

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t z-40">
      <Button
        size="lg"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 rounded-full"
        onClick={scrollToForm}   {/* ⭐ Updated */}
      >
        Enquire Now
      </Button>
    </div>
  );
}
