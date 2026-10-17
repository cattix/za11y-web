/* eslint-disable @next/next/no-img-element */
import { Check } from "lucide-react";
import Link from "next/link";
import HeroVideo from "./HeroVideo";

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

const demoSteps = [
  "Open the demo page in Chrome.",
  "Click the Za11y icon in your toolbar to open the side panel.",
  "Run a scan and explore the issues it finds.",
];

const severity = [
  { label: "Serious 3", className: "bg-[#4A1D1D] text-[#FCA5A5]" },
  { label: "Moderate 1", className: "bg-[#47391A] text-[#FCD34D]" },
  { label: "Minor 1", className: "bg-[#1E2A4A] text-[#93C5FD]" },
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
  },
];

// Spacing system — mobile / tablet / desktop
// Section padding: 64 / 96 / 112. Heading → content: 32 / 40 / 48. Card gaps: 16 / 24 / 24.
// The hero and the bottom of the final CTA get extra room on purpose.
const sectionX = "px-5 md:px-16 lg:px-28";
const headingGap = "gap-8 md:gap-10 lg:gap-12";
const cardGap = "gap-4 md:gap-6";

const card = "rounded-[20px] border border-white/10 bg-[#313131] md:rounded-3xl";
// Features sit on a light band, so their cards are white
const lightCard = "rounded-[20px] border border-[#E3E1DC] bg-white text-[#1F1F1F] md:rounded-3xl";

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
    <article className={`${lightCard} flex min-w-0 flex-1 flex-col overflow-hidden px-6 pt-6 md:px-9 md:pt-9`}>
      <div className="flex-1 pb-6 md:pb-8">
        <p className="text-xs font-semibold tracking-[1px] whitespace-pre text-[#0D5944] md:text-[13px]">{eyebrow}</p>
        <h3 className="mt-2.5 text-[22px] font-bold tracking-[-0.3px] md:mt-3 md:text-[26px]">
          {title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-6 text-[#4A4845] md:mt-3 md:text-base md:leading-[26px]">
          {description}
        </p>
      </div>
      <div className="aspect-[7/5] w-full overflow-hidden rounded-t-xl md:rounded-t-[14px]">
        <img
          src={image}
          alt={alt}
          width={700}
          height={600}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </article>
  );
}

export default function RedesignPage({
  heroMedia = "mockup",
}: {
  /** "mockup": issues panel with severity summary card. "video": production hero video. */
  heroMedia?: "mockup" | "video";
}) {
  const isVideo = heroMedia === "video";
  return (
    <div className="min-h-screen bg-[#282828] text-gray-50">
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-[#47D4AA] focus:px-4 focus:py-2 focus:font-semibold focus:text-[#0B1220] ${focusRing}`}
      >
        Skip to content
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[#282828]">
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
              className={`hidden rounded text-[15px] font-medium text-[#F2F0ED]/80 hover:text-[#F2F0ED] md:inline ${focusRing}`}
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
        {/* The video variant gives the video more room: side-by-side only from xl, with a
            narrower text column and smaller type; below xl the video spans the full width. */}
        <section className="relative overflow-hidden px-5 pt-10 pb-20 md:px-16 md:pt-22 md:pb-28 lg:pb-32 lg:pl-28">
          <div
            className={`relative mx-auto flex max-w-[1264px] flex-col gap-10 ${
              isVideo ? "md:gap-14 xl:flex-row xl:items-center xl:gap-12" : "xl:flex-row xl:items-center xl:gap-16"
            }`}
          >
            <div
              className={`flex flex-col gap-5 md:gap-7 ${
                isVideo ? "xl:w-[460px] xl:shrink-0 xl:gap-6" : "xl:w-[620px] xl:shrink-0"
              }`}
            >
              <h1
                className={`text-[42px] leading-[46px] font-bold tracking-[-1.4px] md:text-[62px] md:leading-[68px] md:tracking-[-2px] ${
                  isVideo ? "xl:text-[48px] xl:leading-[54px] xl:tracking-[-1.5px]" : ""
                }`}
              >
                Catch accessibility issues{" "}
                <span className="text-[#47D4AA]">
                  before <span className="whitespace-nowrap">they ship.</span>
                </span>
              </h1>
              <p
                className={`text-[17px] leading-[27px] text-[#F2F0ED]/80 md:text-xl md:leading-8 ${
                  isVideo ? "xl:my-2 xl:text-base xl:leading-[26px]" : ""
                }`}
              >
                Find accessibility issues, understand what needs attention, and catch what
                automated testing misses. All in one Chrome extension.
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <PrimaryButton>Get Za11y for Free</PrimaryButton>
              </div>
              <ul
                className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-[#F2F0ED]/80 md:text-sm ${
                  isVideo ? "xl:text-[13px]" : ""
                }`}
              >
                {heroPoints.map((point, i) => (
                  <li key={point} className="flex items-center gap-2.5">
                    {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-current" />}
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product shot */}
            {isVideo ? (
              <div className="w-full xl:min-w-0 xl:flex-1">
                <HeroVideo />
              </div>
            ) : (
              <div className="relative mx-auto w-full max-w-[600px] xl:mx-0">
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
                  className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] flex-col gap-2.5 rounded-[14px] border border-white/10 bg-[#313131] px-3.5 py-3 text-[#F2F0ED] shadow-[0_30px_70px_rgba(0,0,0,0.45)] md:bottom-6 md:left-6 md:rounded-2xl md:px-[18px] md:py-4"
                >
                  <p className="flex items-center gap-2 text-[13px] font-semibold md:text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#47D4AA]">
                      <Check aria-hidden className="h-3 w-3 text-[#0B1220]" strokeWidth={3} />
                    </span>
                    Scan complete · 5 issues
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
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
            )}
          </div>
        </section>

        {/* Audience */}
        <section
          aria-labelledby="audience-heading"
          className={`py-6 md:py-7 ${sectionX}`}
        >
          <div className="mx-auto flex max-w-[1216px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h2
              id="audience-heading"
              className="text-[13px] font-medium text-[#F2F0ED]/80 md:text-[15px]"
            >
              Built for the whole product team
            </h2>
            <ul className="flex flex-wrap gap-2 lg:gap-10">
              {audience.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm font-semibold text-[#F2F0ED]/90 lg:border-0 lg:p-0 lg:text-[17px] lg:font-normal lg:text-[#F2F0ED]/80"
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
          className={`bg-[#F4F3F0] text-[#1F1F1F] ${sectionX} py-16 md:py-24 lg:py-30`}
        >
          <div className={`mx-auto flex max-w-[1216px] flex-col ${headingGap}`}>
            <div className="flex flex-col gap-2.5 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <p className="text-xs font-semibold tracking-[1.2px] text-[#0D5944] md:text-sm">
                  FEATURES
                </p>
                <h2
                  id="features-heading"
                  className="text-[30px] leading-9 font-bold tracking-[-0.8px] md:text-5xl md:leading-14 md:tracking-[-1.2px]"
                >
                  Clear, actionable testing
                  <br className="hidden lg:block" /> in one side panel
                </h2>
              </div>
              <p className="text-base leading-[25px] text-[#4A4845] md:text-lg md:leading-[29px] lg:w-[440px]">
                From automated WCAG testing to guided manual reviews — identify issues,
                understand their impact, and find exactly where they are.
              </p>
            </div>

            <div className={`flex flex-col ${cardGap}`}>
              {/* Row 1 */}
              <div className={`flex flex-col lg:flex-row ${cardGap}`}>
                <article
                  className={`${lightCard} flex flex-1 flex-col overflow-hidden pt-6 pl-6 md:pt-9 md:pl-9 xl:flex-row xl:items-end xl:gap-8`}
                >
                  <div className="pr-6 pb-0 md:pr-9 xl:w-[360px] xl:shrink-0 xl:self-start xl:pr-0 xl:pb-9">
                    <p className="text-xs font-semibold tracking-[1px] whitespace-pre text-[#0D5944] md:text-[13px]">{"01  SCAN"}</p>
                    <h3 className="mt-2.5 text-[22px] font-bold tracking-[-0.3px] md:mt-3 md:text-[26px]">
                      Filter by standards
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-6 text-[#4A4845] md:mt-3 md:text-base md:leading-[26px]">
                      Choose the WCAG versions and conformance levels that matter to your
                      project — scan against all of them, or focus on specific requirements.
                    </p>
                  </div>
                  <div className="mt-6 overflow-hidden rounded-tl-xl md:mt-8 md:rounded-tl-[14px] xl:mt-0 xl:min-w-0 xl:flex-1">
                    <img
                      src="/assets/za11y-feature-filter-mockup.png"
                      alt="Za11y WCAG standards dropdown with versions 2.0 through 2.2 and levels A to AAA selected"
                      width={700}
                      height={600}
                      className="w-full xl:w-[420px] xl:max-w-none"
                    />
                  </div>
                </article>
                <article className="flex flex-col justify-between gap-3.5 rounded-[20px] bg-[#282828] p-6 text-[#F2F0ED] md:rounded-3xl md:p-9 lg:w-[380px]">
                  <p className="text-xs font-bold tracking-[1px] text-[#56DBB3] md:text-[13px]">
                    PRIVATE BY DESIGN
                  </p>
                  <div className="flex flex-col gap-2.5 md:gap-3">
                    <h3 className="text-2xl leading-[29px] font-bold tracking-[-0.4px] md:text-[32px] md:leading-[38px] md:tracking-[-0.6px]">
                      No accounts. No uploads. Just scan.
                    </h3>
                    <p className="text-[15px] leading-[23px] text-[#F2F0ED]/80 md:text-base md:leading-[25px]">
                      Za11y runs entirely in your browser, so you can test staging and internal
                      pages with confidence.
                    </p>
                  </div>
                </article>
              </div>

              {/* Row 2 */}
              <div className={`flex flex-col lg:flex-row ${cardGap}`}>
                <MockupCard
                  eyebrow="02  UNDERSTAND"
                  title="Understand every issue"
                  description="Why it matters, who it impacts, and how to fix it — with affected elements highlighted right on the page."
                  image="/assets/za11y-feature-issues-mockup.png"
                  alt="Za11y issue detail showing WCAG criteria, impact, confidence and a show highlights toggle"
                />
                <MockupCard
                  eyebrow="03  VERIFY"
                  title="Complete the manual review"
                  description="A built-in checklist for keyboard navigation, focus management, content clarity, and everything else that needs human judgment."
                  image="/assets/za11y-feature-checklist-mockup.png"
                  alt="Za11y manual review checklist with keyboard navigation, screen reader and zoom checks"
                />
              </div>

              {/* Row 3 */}
              <ul className={`flex flex-col lg:flex-row ${cardGap}`}>
                {smallFeatures.map((f) => (
                  <li
                    key={f.title}
                    className={`${lightCard} flex flex-1 gap-3.5 p-[18px] md:rounded-[20px] md:p-7 lg:flex-col lg:gap-2.5`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#47D4AA]/14 md:h-10 md:w-10">
                      <Check aria-hidden className="h-5 w-5 text-[#0D5944]" strokeWidth={2.5} />
                    </span>
                    <div className="flex flex-col gap-1 lg:gap-2.5">
                      <h3 className="text-base font-bold md:text-[19px]">{f.title}</h3>
                      <p className="text-sm leading-[21px] text-[#4A4845] md:text-[15px] md:leading-6">
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
          className={`bg-[#161616] ${sectionX} py-16 md:py-24 lg:py-28`}
        >
          <div className={`mx-auto flex max-w-[1216px] flex-col md:items-center ${headingGap}`}>
            <h2
              id="compare-heading"
              className="text-[28px] leading-[34px] font-bold tracking-[-0.7px] md:max-w-[760px] md:text-center md:text-[40px] md:leading-12 md:tracking-[-1px]"
            >
              Automation finds a lot. Za11y helps you find the rest.
            </h2>
            <div className={`flex w-full flex-col lg:flex-row ${cardGap}`}>
              {comparison.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-1 flex-col gap-3 rounded-[20px] border border-white/10 bg-[#313131] p-[22px] md:gap-5 md:rounded-3xl md:p-8"
                >
                  <div className="flex flex-col-reverse gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-[19px] font-bold md:text-2xl">{c.title}</h3>
                    <p className="text-xs font-medium text-[#56DBB3] md:text-sm">{c.tag}</p>
                  </div>
                  <ul>
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 border-t border-white/10 py-2.5 text-[15px] text-[#F2F0ED]/90 md:gap-3 md:py-3 md:text-[17px]"
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
          className="relative overflow-hidden px-5 pt-16 pb-20 text-center md:px-16 md:pt-24 md:pb-28 lg:pt-28 lg:pb-34"
        >
          <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-4 md:gap-6">
            <h2
              id="cta-heading"
              className="text-[40px] leading-11 font-bold tracking-[-1.2px] md:text-[64px] md:leading-[70px] md:tracking-[-2px]"
            >
              Ship <span className="text-[#47D4AA]">accessible</span> experiences.
            </h2>
            <p className="max-w-[620px] text-base leading-[25px] text-[#F2F0ED]/80 md:text-xl md:leading-[30px]">
              Install Za11y in seconds and run your first scan on the page you’re already
              looking at.
            </p>
            <div className="flex w-full flex-col pt-2 sm:w-auto">
              <PrimaryButton className="md:h-14 md:px-8 md:text-lg">
                Get Za11y for Free
              </PrimaryButton>
            </div>
          </div>

          {/* Demo — only useful once the extension is installed, so it's kept separate */}
          <div
            aria-labelledby="demo-heading"
            role="region"
            className={`${card} relative mx-auto mt-14 flex max-w-[740px] flex-col gap-6 p-6 text-left md:mt-20 md:flex-row md:items-center md:gap-10 md:p-9`}
          >
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-xs font-semibold tracking-[1px] text-[#56DBB3]">
                ALREADY INSTALLED?
              </p>
              <h3 id="demo-heading" className="text-[22px] font-bold tracking-[-0.3px] md:text-2xl">
                Try it on our demo page
              </h3>
              <p className="text-[15px] leading-6 text-[#F2F0ED]/80 md:text-base md:leading-[26px]">
                We built a sample page full of intentional accessibility issues so you can see
                Za11y in action.
              </p>
              <ol className="mt-1 flex flex-col gap-2.5 text-[15px] text-[#F2F0ED]/90">
                {demoSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    {/* Number rendered via CSS so it isn't read twice alongside the <ol> numbering */}
                    <span
                      aria-hidden
                      data-step={i + 1}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#47D4AA]/14 text-xs font-bold text-[#56DBB3] before:content-[attr(data-step)]"
                    />
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <GhostButton href="/demo" className="shrink-0">
              Open the demo page
            </GhostButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t border-white/10 bg-[#161616] py-8 md:py-10 ${sectionX}`}>
        <div className="mx-auto flex max-w-[1216px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <img
            src="/assets/za11y-cat-logo.svg"
            alt="Za11y"
            width={165}
            height={48}
            className="h-[29px] w-auto self-start md:h-[34px] md:self-auto"
          />
          <p className="order-last text-[13px] text-[#F2F0ED]/80 md:order-none md:text-sm">
            © 2026 Za11y · Instantly uncover WCAG accessibility issues
          </p>
          <ul className="flex gap-5 text-sm text-[#F2F0ED]/80 md:gap-7">
            <li>
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className={`rounded hover:text-[#F2F0ED] ${focusRing}`}>
                Chrome Web Store
              </a>
            </li>
            <li>
              <Link href="/demo" className={`rounded hover:text-[#F2F0ED] ${focusRing}`}>
                Demo
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className={`rounded hover:text-[#F2F0ED] ${focusRing}`}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
