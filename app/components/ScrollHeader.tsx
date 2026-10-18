"use client";

import { useEffect, useState } from "react";

/** Sticky header that switches to a darker background once the page is scrolled. */
export default function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 motion-reduce:transition-none ${
        scrolled ? "bg-[#1F1F1F]" : "bg-[#282828]"
      }`}
    >
      {children}
    </header>
  );
}
