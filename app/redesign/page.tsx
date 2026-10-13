/* eslint-disable @next/next/no-img-element */
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Za11y — Catch accessibility issues before they ship",
  description:
    "A free Chrome side panel that scans any page, pinpoints every issue, and walks you through the manual checks automation can't catch.",
};

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/za11y/jckcbiebopjcodmdigkajekpkohnjegg";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#47D4AA]";

function PrimaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHROME_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-13 items-center justify-center rounded-xl bg-[#47D4AA] px-7 text-base font-semibold text-[#0B1220] transition-colors hover:bg-[#6EE0BE] ${focusRing} ${className}`}
    >
      {children}
      <span className="sr-only"> (opens Chrome Web Store in a new tab)</span>
    </a>
  );
}

function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-13 items-center justify-center rounded-xl border border-white/25 px-7 text-base font-semibold text-gray-50 transition-colors hover:border-white/50 hover:bg-white/5 ${focusRing} ${className}`}
    >
      {children}
    </Link>
  );
}

const heroPoints = ["Powered by axe-core", "No account", "Data stays in your browser"];

function Glow({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(closest-side,rgba(71,212,170,0.22),rgba(71,212,170,0))] ${className}`}
    />
  );
}

const severity = [
  { label: "Serious 3", className: "bg-[#FEE2E2] text-[#991B1B]" },
  { label: "Moderate 1", className: "bg-[#FEF3C7] text-[#92400E]" },
  { label: "Minor 1", className: "bg-[#DBEAFE] text-[#1E40AF]" },
];

const audience = [
  "Designers",
  "Front-end developers",
  "QA engineers",
  "Content designers",
  "Product managers",
];

const smallFeatures = [
  {
    title: "Highlight on the page",
    description: "Jump from an issue straight to the element that caused it.",
  },
  {
    title: "Download results",
    description: "Export findings to share with your team or attach to a ticket.",
  },
  {
    title: "Powered by axe-core",
    description: "The industry-standard rules engine behind trusted a11y tools.",
  },
];

const comparison = [
  {
    title: "Automated scan",
    tag: "Seconds per page",
    items: [
      "Color contrast ratios",
      "Missing alt text and labels",
      "ARIA and landmark errors",
      "Heading structure",
    ],
    accent: false,
  },
  {
    title: "Guided manual review",
    tag: "Human judgment, structured",
    items: [
      "Keyboard navigation",
      "Focus order and visibility",
      "Content clarity",
      "Screen reader experience",
    ],
    accent: true,
  },
];

const card = "rounded-[20px] border border-[#233047] bg-[#131C2E] md:rounded-3xl";

function MockupCard({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <article className={`${card} flex flex-col overflow-hidden px-6 pt-6 md:px-9 md:pt-9`}>
      <p className="text-xs font-semibold tracking-[1px] text-[#47D4AA]">{eyebrow}</p>
      <h3 className="mt-2.5 text-[22px] font-bold tracking-[-0.3px] md:mt-3 md:text-[26px]">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-6 text-gray-400 md:mt-3 md:text-base md:leading-[26px]">
        {description}
      </p>
      <img
        src={image}
        alt={alt}
        width={700}
        height={600}
        className="mt-6 w-full rounded-t-xl md:mt-8 md:rounded-t-[14px]"
      />
    </article>
  );
}

export default function RedesignPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-gray-50">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-[#47D4AA] focus:px-4 focus:py-2 focus:font-semibold focus:text-[#0B1220] ${focusRing}`}
      >
        Skip to content
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-transparent bg-[#0B1220]/85 backdrop-blur">
        <nav
          aria-label="Main"
          className="flex h-16 items-center justify-between px-5 md:h-20 md:px-16"
        >
          <Link href="/" className={`rounded-md ${focusRing}`}>
            <img
              src="/assets/za11y-cat-logo.svg"
              alt="Za11y home"
              width={165}
              height={48}
              className="h-[34px] w-auto md:h-[38px]"
            />
          </Link>
          <div className="flex items-center gap-7">
            <Link
              href="/privacy-policy"
              className={`hidden rounded text-[15px] font-medium text-[#C7CDD6] hover:text-white md:inline ${focusRing}`}
            >
              Privacy Policy
            </Link>
            <PrimaryButton className="h-9 rounded-xl px-3.5 text-sm md:h-[42px] md:px-5 md:text-[15px]">
              <span className="md:hidden">Install</span>
              <span className="hidden md:inline">Add to Chrome</span>
            </PrimaryButton>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pt-10 pb-14 md:px-16 md:pt-22 md:pb-30 lg:pl-28">
          <Glow className="-left-15 top-75 h-[520px] w-[520px] md:top-[-220px] md:left-auto md:right-[-160px] md:h-[900px] md:w-[900px]" />
          <div className="relative mx-auto flex max-w-[1264px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col gap-5 md:gap-7 lg:w-[620px] lg:shrink-0">
              <h1 className="text-[42px] leading-[46px] font-bold tracking-[-1.4px] md:text-[62px] md:leading-[68px] md:tracking-[-2px]">
                Catch accessibility issues{" "}
                <span className="text-[#47D4AA]">before they ship.</span>
              </h1>
              <p className="text-[17px] leading-[27px] text-[#C7CDD6] md:text-xl md:leading-8">
                Find accessibility issues, understand what needs fixing, and catch what
                automated testing misses. All in one simple Chrome extension.
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <PrimaryButton>Add to Chrome — free</PrimaryButton>
                <GhostButton href="/demo">Scan the demo page</GhostButton>
              </div>
              <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-gray-400 md:text-sm">
                {heroPoints.map((point, i) => (
                  <li key={point} className="flex items-center gap-2.5">
                    {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-current" />}
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product shot */}
            <div className="relative mx-auto w-full max-w-[600px] pb-24 pl-5 md:pb-10 md:pl-10 lg:mx-0">
              <img
                src="/assets/za11y-feature-issues-mockup.png"
                alt="Za11y issues panel listing color contrast issues grouped by severity, with details for the selected issue"
                width={700}
                height={600}
                className="w-full rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.45)] md:rounded-[20px]"
              />
              <div
                role="img"
                aria-label="Scan complete: 5 issues — 3 serious, 1 moderate, 1 minor"
                className="absolute bottom-6 left-0 flex flex-col gap-2.5 rounded-[14px] bg-white px-3.5 py-3 text-gray-900 shadow-[0_24px_48px_rgba(0,0,0,0.55)] md:bottom-0 md:rounded-2xl md:px-[18px] md:py-4"
              >
                <p className="flex items-center gap-2 text-[13px] font-semibold md:text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#47D4AA]">
                    <Check aria-hidden className="h-3 w-3 text-[#0B1220]" strokeWidth={3} />
                  </span>
                  Scan complete · 5 issues
                </p>
                <div className="flex gap-1.5 md:gap-2">
                  {severity.map((s) => (
                    <span
                      key={s.label}
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold md:px-3 md:py-1.5 md:text-[13px] ${s.className}`}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section
          aria-labelledby="audience-heading"
          className="border-y border-[#233047] px-5 py-6 md:px-16 md:py-7 lg:px-28"
        >
          <div className="mx-auto flex max-w-[1216px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h2
              id="audience-heading"
              className="text-[13px] font-medium text-gray-400 md:text-[15px]"
            >
              Built for the whole product team
            </h2>
            <ul className="flex flex-wrap gap-2 lg:gap-10">
              {audience.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-[#233047] px-3 py-1.5 text-sm font-semibold text-gray-200 lg:border-0 lg:p-0 lg:text-[17px]"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="px-5 py-16 md:px-16 md:py-30 lg:px-28"
        >
          <div className="mx-auto max-w-[1216px]">
            <div className="flex flex-col gap-2.5 pb-4 md:pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <p className="text-xs font-semibold tracking-[1.2px] text-[#47D4AA] md:text-sm">
                  {"// FEATURES"}
                </p>
                <h2
                  id="features-heading"
                  className="text-[30px] leading-9 font-bold tracking-[-0.8px] md:text-5xl md:leading-14 md:tracking-[-1.2px]"
                >
                  Clear, actionable testing
                  <br className="hidden md:block" /> in one side panel
                </h2>
              </div>
              <p className="text-base leading-[25px] text-gray-400 md:text-lg md:leading-[29px] lg:w-[440px]">
                From automated WCAG testing to guided manual reviews — identify issues,
                understand their impact, and find exactly where they are.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              {/* Row 1 */}
              <div className="flex flex-col gap-4 md:gap-5 lg:flex-row">
                <article
                  className={`${card} flex flex-1 flex-col overflow-hidden pt-6 pl-6 md:pt-9 md:pl-9 lg:flex-row lg:items-end lg:gap-8`}
                >
                  <div className="pr-6 pb-0 md:pr-9 lg:w-[360px] lg:shrink-0 lg:self-start lg:pr-0 lg:pb-9">
                    <p className="text-xs font-semibold tracking-[1px] text-[#47D4AA]">01 SCAN</p>
                    <h3 className="mt-2.5 text-[22px] font-bold tracking-[-0.3px] md:mt-3 md:text-[26px]">
                      Filter by standards
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-6 text-gray-400 md:mt-3 md:text-base md:leading-[26px]">
                      Choose the WCAG versions and conformance levels that matter to your
                      project — scan against all of them, or focus on specific requirements.
                    </p>
                  </div>
                  <img
                    src="/assets/za11y-feature-filter-mockup.png"
                    alt="Za11y WCAG standards dropdown with versions 2.0 through 2.2 and levels A to AAA selected"
                    width={700}
                    height={600}
                    className="mt-6 w-full rounded-tl-xl md:mt-8 lg:mt-0 lg:w-[420px] lg:rounded-tl-[14px]"
                  />
                </article>
                <article className="flex flex-col justify-between gap-3.5 rounded-[20px] bg-gradient-to-r from-[#47D4AA] to-[#8CE2C8] p-6 text-[#0B1220] md:rounded-3xl md:p-9 lg:w-[380px]">
                  <p className="text-xs font-bold tracking-[1px] md:text-[13px]">
                    PRIVATE BY DESIGN
                  </p>
                  <div className="flex flex-col gap-2.5 md:gap-3">
                    <h3 className="text-2xl leading-[29px] font-bold tracking-[-0.4px] md:text-[32px] md:leading-[38px] md:tracking-[-0.6px]">
                      No accounts. No uploads. Just scan.
                    </h3>
                    <p className="text-[15px] leading-[23px] text-gray-800 md:text-base md:leading-[25px]">
                      Za11y runs entirely in your browser, so you can test staging and internal
                      pages with confidence.
                    </p>
                  </div>
                </article>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-4 md:gap-5 lg:flex-row">
                <MockupCard
                  eyebrow="02 UNDERSTAND"
                  title="Understand every issue"
                  description="Why it matters, who it impacts, and how to fix it — with affected elements highlighted right on the page."
                  image="/assets/za11y-feature-issues-mockup.png"
                  alt="Za11y issue detail showing WCAG criteria, impact, confidence and a show highlights toggle"
                />
                <MockupCard
                  eyebrow="03 VERIFY"
                  title="Complete the manual review"
                  description="A built-in checklist for keyboard navigation, focus management, content clarity, and everything else that needs human judgment."
                  image="/assets/za11y-feature-checklist-mockup.png"
                  alt="Za11y manual review checklist with keyboard navigation, screen reader and zoom checks"
                />
              </div>

              {/* Row 3 */}
              <ul className="flex flex-col gap-4 md:gap-5 lg:flex-row">
                {smallFeatures.map((f) => (
                  <li
                    key={f.title}
                    className={`${card} flex flex-1 gap-3.5 p-[18px] md:rounded-[20px] md:p-7 lg:flex-col lg:gap-2.5`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#47D4AA]/14 md:h-10 md:w-10">
                      <Check aria-hidden className="h-[18px] w-[18px] text-[#47D4AA]" strokeWidth={2.5} />
                    </span>
                    <div className="flex flex-col gap-1 lg:gap-2.5">
                      <h3 className="text-base font-bold md:text-[19px]">{f.title}</h3>
                      <p className="text-sm leading-[21px] text-gray-400 md:text-[15px] md:leading-6">
                        {f.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Automated + manual */}
        <section
          aria-labelledby="compare-heading"
          className="bg-[#0F1726] px-5 py-16 md:px-16 md:py-28 lg:px-28"
        >
          <div className="mx-auto flex max-w-[1216px] flex-col gap-6 md:items-center md:gap-12">
            <h2
              id="compare-heading"
              className="text-[28px] leading-[34px] font-bold tracking-[-0.7px] md:max-w-[760px] md:text-center md:text-[40px] md:leading-12 md:tracking-[-1px]"
            >
              Automation finds a lot. Za11y helps you find the rest.
            </h2>
            <div className="flex w-full flex-col gap-4 md:gap-5 lg:flex-row">
              {comparison.map((c) => (
                <div
                  key={c.title}
                  className={`flex flex-1 flex-col gap-3 rounded-[20px] border bg-[#131C2E] p-[22px] md:gap-5 md:rounded-3xl md:p-8 ${
                    c.accent ? "border-[#47D4AA]/60" : "border-[#233047]"
                  }`}
                >
                  <div className="flex flex-col-reverse gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-[19px] font-bold md:text-2xl">{c.title}</h3>
                    <p className="text-xs font-medium text-[#47D4AA] md:text-sm">{c.tag}</p>
                  </div>
                  <ul>
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 border-t border-[#233047] py-2.5 text-[15px] text-gray-200 md:gap-3 md:py-3 md:text-[17px]"
                      >
                        <Check aria-hidden className="h-4 w-4 shrink-0 text-[#47D4AA] md:h-[18px] md:w-[18px]" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="cta-heading"
          className="relative overflow-hidden px-5 py-20 text-center md:px-16 md:py-34"
        >
          <Glow className="top-0 left-1/2 h-[400px] w-[500px] -translate-x-1/2 md:h-[600px] md:w-[1100px]" />
          <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-4 md:gap-6">
            <h2
              id="cta-heading"
              className="text-[40px] leading-11 font-bold tracking-[-1.2px] md:text-[64px] md:leading-[70px] md:tracking-[-2px]"
            >
              Ship <span className="text-[#47D4AA]">accessible</span> experiences.
            </h2>
            <p className="max-w-[620px] text-base leading-[25px] text-[#C7CDD6] md:text-xl md:leading-[30px]">
              Install Za11y in seconds and run your first scan on the page you’re already
              looking at.
            </p>
            <div className="flex w-full flex-col gap-2.5 pt-2 sm:w-auto sm:flex-row sm:gap-3">
              <PrimaryButton className="md:h-14 md:px-8 md:text-lg">
                Add to Chrome — free
              </PrimaryButton>
              <GhostButton href="/demo" className="md:h-14 md:text-lg">
                Try the demo
              </GhostButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#233047] px-5 py-8 md:px-16 md:py-10 lg:px-28">
        <div className="mx-auto flex max-w-[1216px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <img
            src="/assets/za11y-cat-logo.svg"
            alt="Za11y"
            width={165}
            height={48}
            className="h-[29px] w-auto self-start md:h-[34px] md:self-auto"
          />
          <p className="order-last text-[13px] text-gray-400 md:order-none md:text-sm">
            © 2026 Za11y · Instantly uncover WCAG accessibility issues
          </p>
          <ul className="flex gap-5 text-sm text-[#C7CDD6] md:gap-7">
            <li>
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className={`rounded hover:text-white ${focusRing}`}>
                Chrome Web Store
              </a>
            </li>
            <li>
              <Link href="/demo" className={`rounded hover:text-white ${focusRing}`}>
                Demo
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className={`rounded hover:text-white ${focusRing}`}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
