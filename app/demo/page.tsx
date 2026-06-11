/* eslint-disable @next/next/no-img-element */
/**
 * Intentional accessibility violations for za11y demonstration:
 * - Missing alt text on images
 * - Low-contrast text
 * - Empty buttons (no accessible label)
 * - Form fields without labels
 * - Improper heading hierarchy (h1 → h4, skips h2/h3; uses h5 later)
 * - Missing link names (icon-only links with no aria-label)
 */

export const metadata = {
  title: "Demo Page — Za11y",
  description: "A demo page with intentional accessibility issues to demonstrate Za11y's scanning capabilities.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo notice banner */}
      <div className="bg-[#47D4AA] text-gray-900 text-sm text-center py-2.5 px-4 font-medium">
        This page contains intentional accessibility issues — scan it with Za11y to see them detected.
      </div>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────
            Violations:
            - Hero image has no alt attribute
            - Subtitle text (white/25) is low-contrast against the gradient
            - "Watch demo" link contains only an SVG with no accessible name
        ──────────────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-950 text-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
            <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1 rounded-full mb-6 font-medium">
              Now in public beta
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build habits that<br />actually stick
            </h1>
            {/* LOW CONTRAST — white/25 on dark background, fails WCAG AA */}
            <p className="text-xl mb-10 text-white/25 max-w-lg mx-auto leading-relaxed">
              Bloom helps you track goals, build routines, and celebrate every
              small win on your journey to a healthier, happier life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full text-base hover:bg-gray-100 transition-colors">
                Get started free
              </button>
              {/* MISSING LINK NAME — SVG icon only, no text or aria-label */}
              <a
                href="#features"
                className="border border-white/30 w-12 h-12 rounded-full flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>
          </div>
          {/* MISSING ALT TEXT — meaningful hero product screenshot */}
          <div className="max-w-4xl mx-auto px-6">
            <img
              src="https://picsum.photos/1200/600?random=1"
              className="w-full rounded-t-2xl shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* ── Trusted By ───────────────────────────────────────────────────
            Violations:
            - Label text (gray-300 on white) is low-contrast
        ──────────────────────────────────────────────────────────────── */}
        <section className="bg-white py-12 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            {/* LOW CONTRAST — gray-300 on white */}
            <p className="text-sm text-gray-300 mb-6 uppercase tracking-widest font-medium">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center gap-10 items-center">
              {["Acme Corp", "Orbit Labs", "Nexus", "Verido", "Stackwise"].map((name) => (
                <span key={name} className="text-gray-300 font-semibold text-lg">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────────
            Violations:
            - Heading jumps h1 → h4 (skips h2 and h3)
            - Feature card images have no alt attribute
            - Card action button is icon-only with no aria-label
        ──────────────────────────────────────────────────────────────── */}
        <section id="features" className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              {/* HEADING HIERARCHY — h4 directly after h1 in hero, skips h2/h3 */}
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything you need to grow
              </h4>
              <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
                Simple, powerful tools designed to help you build momentum and
                stay on track — one habit at a time.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Daily Check-ins",
                  desc: "Log your habits every day with a frictionless one-tap interface. Build streaks and see your consistency grow.",
                  img: "https://picsum.photos/600/400?random=2",
                },
                {
                  title: "Progress Charts",
                  desc: "Visualize your streaks and progress over time with beautiful, easy-to-understand charts and heatmaps.",
                  img: "https://picsum.photos/600/400?random=3",
                },
                {
                  title: "Smart Reminders",
                  desc: "Stay on track with gentle nudges at just the right moment. Never miss a day with adaptive scheduling.",
                  img: "https://picsum.photos/600/400?random=4",
                },
              ].map(({ title, desc, img }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  {/* MISSING ALT TEXT — informative feature illustration */}
                  <img src={img} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-gray-900 text-lg">{title}</p>
                      {/* EMPTY BUTTON — icon only, no text or aria-label */}
                      <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it Works ─────────────────────────────────────────────────
            Violations:
            - Continues h4 heading (heading hierarchy still broken)
            - Step images have no alt attribute
        ──────────────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              {/* HEADING HIERARCHY — another h4, never used h2 */}
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Get started in minutes
              </h4>
              <p className="text-gray-500 max-w-md mx-auto">
                Three simple steps to your first habit streak.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { step: "01", label: "Create your account", img: "https://picsum.photos/400/300?random=5" },
                { step: "02", label: "Add your first habit", img: "https://picsum.photos/400/300?random=6" },
                { step: "03", label: "Check in every day", img: "https://picsum.photos/400/300?random=7" },
              ].map(({ step, label, img }) => (
                <div key={step} className="flex flex-col items-center">
                  {/* MISSING ALT TEXT — step illustration */}
                  <img src={img} className="w-full max-w-[260px] rounded-2xl object-cover mb-6 shadow-sm" />
                  <span className="text-4xl font-bold text-indigo-100 mb-2">{step}</span>
                  <p className="font-semibold text-gray-900">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────────
            Violations:
            - Heading continues with h4 (still never used h2/h3)
            - Quote and role text are low-contrast (gray-300 on white)
            - Avatar images have no alt attribute
        ──────────────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#EEFFFA]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              {/* HEADING HIERARCHY — still h4 */}
              <h4 className="text-3xl font-bold text-gray-900 mb-4">What our users say</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Bloom completely changed how I approach my mornings. It's the only app I open every day without fail.",
                  name: "Sarah K.",
                  role: "Product Designer",
                  img: "https://picsum.photos/80/80?random=10",
                },
                {
                  quote: "I've tried dozens of habit apps. This is the first one that kept me coming back after week one.",
                  name: "Marcus T.",
                  role: "Software Engineer",
                  img: "https://picsum.photos/80/80?random=11",
                },
                {
                  quote: "The reminders are just enough — never annoying, always timely. I love the simplicity.",
                  name: "Priya M.",
                  role: "Founder",
                  img: "https://picsum.photos/80/80?random=12",
                },
              ].map(({ quote, name, role, img }) => (
                <div key={name} className="bg-white rounded-2xl p-6 shadow-sm">
                  {/* LOW CONTRAST — gray-300 quote text on white background */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    {/* MISSING ALT TEXT — avatar image */}
                    <img src={img} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{name}</p>
                      {/* LOW CONTRAST — gray-300 role label on white */}
                      <p className="text-gray-300 text-xs">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Signup Form ───────────────────────────────────────────────────
            Violations:
            - Heading uses h4 (hierarchy still broken)
            - All inputs identified by placeholder only — no <label> elements
            - Submit button has no text content or aria-label
        ──────────────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-md mx-auto text-center">
            {/* HEADING HIERARCHY — h4 again */}
            <h4 className="text-3xl font-bold text-gray-900 mb-3">
              Start your journey today
            </h4>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Join thousands of people already building better habits with Bloom.
            </p>
            <form className="space-y-3 text-left">
              {/* MISSING FORM LABELS — inputs have only placeholder text */}
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 transition-colors"
              />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 transition-colors"
              />
              {/* EMPTY BUTTON — submit with no text content or aria-label */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors py-3.5 rounded-xl"
              />
            </form>
            {/* LOW CONTRAST — gray-300 fine print on white */}
            <p className="text-gray-300 text-xs mt-4">
              By signing up you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────────
            Violations:
            - Heading jumps to h5 (hierarchy now h1→h4→h5, never used h2/h3)
            - Body text is white/20 on dark bg — extreme low contrast
            - Social icon links have no text or aria-label
        ──────────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            {/* HEADING HIERARCHY — h5, still no h2/h3 ever used */}
            <h5 className="text-4xl md:text-5xl font-bold mb-5">Ready to bloom?</h5>
            {/* LOW CONTRAST — white/20 on gray-900 */}
            <p className="text-white/20 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              It&apos;s free to get started. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#47D4AA] hover:bg-[#3bbf97] transition-colors text-gray-900 font-semibold px-8 py-3.5 rounded-full">
                Create free account
              </button>
              {/* MISSING LINK NAMES — icon-only social links, no aria-label */}
              <div className="flex gap-3 items-center">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white px-9 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-bold text-xl">bloom</span>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
            {/* MISSING LINK NAME — link contains only whitespace */}
            <a href="#" className="text-gray-500">&nbsp;</a>
            <span className="text-gray-600">&copy; 2026 Bloom</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
