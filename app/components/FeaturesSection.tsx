"use client";

import { BookOpenCheck, Eye, ListFilter } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: ListFilter,
    title: "Filter by standards",
    description:
      "Choose the WCAG versions and conformance levels that matter most to your project. Scan against all standards, or focus on specific requirements to streamline testing and compliance reviews.",
    mockup: "/assets/za11y-feature-filter-mockup.png",
    alt: "Za11y filter by WCAG standards interface",
  },
  {
    icon: Eye,
    title: "Understand every issue",
    description:
      "Get clear explanations for every accessibility issue, including why it matters, who it impacts, and how to fix it. Highlight affected elements directly on the page to quickly locate and resolve problems.",
    mockup: "/assets/za11y-feature-issues-mockup.png",
    alt: "Za11y issues panel showing detailed issue breakdown",
  },
  {
    icon: BookOpenCheck,
    title: "Complete the manual review",
    description:
      "Use the built-in manual checklist to review keyboard navigation, focus management, content clarity, and other experiences that require human judgment.",
    mockup: "/assets/za11y-feature-checklist-mockup.png",
    alt: "Za11y manual review checklist interface",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-700 pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-semibold text-gray-50 leading-tight tracking-[-0.3px]">
            Clear actionable testing
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-100 mt-6 max-w-[851px] mx-auto leading-8">
            From automated WCAG testing to guided manual reviews, Za11y helps
            you identify issues, understand their impact, and locate exactly
            where they occur on the page.
          </p>
        </div>

        {/* Cards + mockup */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Feature cards */}
          <div className="flex flex-col gap-2 md:w-[477px] shrink-0">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isActive = active === i;
              return (
                <button
                  key={feature.title}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-2xl px-4 py-5 flex gap-4 transition-colors cursor-pointer ${
                    isActive ? "bg-gray-800" : "bg-gray-700 hover:bg-gray-800/60"
                  }`}
                >
                  <div className="shrink-0 mt-1">
                    <Icon className="text-gray-50 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-gray-50 leading-8">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] text-gray-100 mt-3 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right mockup — switches based on active card */}
          <div className="flex-1 overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={features[active].mockup}
              src={features[active].mockup}
              alt={features[active].alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
