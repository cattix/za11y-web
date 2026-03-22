const LOGO_URL = "/assets/za11y-logo.svg";

function IssuesMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden text-xs ${className}`}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-0 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-gray-500 truncate max-w-[200px]">
              cathy.villamar.com/projects/dog-walking-app-case-study
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex">
          <button className="flex-1 py-2 text-center text-gray-500 border-b-2 border-transparent text-[11px]">
            Issues
          </button>
          <button className="flex-1 py-2 text-center text-gray-900 font-medium border-b-2 border-gray-900 text-[11px]">
            Checklist
          </button>
        </div>
      </div>

      {/* Filter row */}
      <div className="px-4 py-2 flex items-center gap-1.5 border-b border-gray-100">
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-100 text-red-700 font-medium">
          Critical: 1
        </span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-orange-100 text-orange-700 font-medium">
          Serious: 3
        </span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 text-amber-700 font-medium">
          Moderate: 1
        </span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-700 font-medium">
          Minor: 1
        </span>
        <div className="ml-auto">
          <span className="text-[10px] text-gray-500 flex items-center gap-0.5">
            WCAG
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
      </div>

      {/* Issues list */}
      <div className="divide-y divide-gray-50">
        {/* Critical group */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
            <span className="font-semibold text-gray-700 text-[11px]">
              Critical (1)
            </span>
            <span className="ml-auto text-[10px] text-gray-400">WCAG AA</span>
          </div>
          <p className="text-gray-600 text-[11px] pl-3">
            ARIA attributes must conform to valid values
          </p>
          <div className="flex gap-2 mt-1 pl-3 text-[10px] text-gray-400">
            <span>WCAG A</span>
            <span>p=0</span>
          </div>
        </div>

        {/* Serious group */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
            <span className="font-semibold text-gray-700 text-[11px]">
              Serious (3)
            </span>
          </div>
          <p className="text-gray-600 text-[11px] pl-3 mb-1">
            Elements must meet minimum color contrast ratio thresholds
          </p>
          <div className="flex items-center gap-2 pl-3 mb-1">
            <span className="text-[10px] text-gray-400">WCAG AA</span>
            <span className="text-[10px] text-gray-400">Mid-3a</span>
          </div>
          <p className="text-gray-600 text-[11px] pl-3">
            Elements must meet minimum color contrast ratio thresholds
          </p>
        </div>
      </div>
    </div>
  );
}

function ChecklistMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden text-xs ${className}`}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-0 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-gray-500 truncate max-w-[180px]">
              cathy.villamar.com/projects/dog-walking-app-case-study
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex">
          <button className="flex-1 py-2 text-center text-gray-900 font-medium border-b-2 border-gray-900 text-[11px]">
            Checklist
          </button>
          <button className="flex-1 py-2 text-center text-gray-500 border-b-2 border-transparent text-[11px]">
            Issues
          </button>
        </div>
      </div>

      {/* Automated Checks section */}
      <div className="border-b border-gray-100">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="font-semibold text-gray-700 text-[11px]">
              Automated Checks Requiring Review
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-gray-400">0/3</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        </div>

        {/* Expanded issue item */}
        <div className="mx-3 mb-3 rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
            <p className="text-[11px] text-gray-800 font-medium">
              ARIA role should be appropriate for the element
            </p>
            <p className="text-[10px] text-gray-500 mt-0.5">
              Ensure role attribute has an appropriate value for the element.
            </p>
            <button className="text-[10px] text-gray-500 mt-1 flex items-center gap-0.5">
              Learn more
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-[10px] text-gray-500">
              Set Status for the element
            </span>
            <button className="text-[10px] text-gray-600 border border-gray-200 rounded px-2 py-0.5 flex items-center gap-0.5">
              Set Status
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
          <div className="px-3 py-2 border-t border-gray-100 flex gap-3">
            <label className="flex items-center gap-1 text-[10px] text-gray-600">
              <input
                type="radio"
                name="status"
                className="accent-green-500"
                readOnly
              />
              Passed
            </label>
            <label className="flex items-center gap-1 text-[10px] text-gray-600">
              <input type="radio" name="status" readOnly />
              Failed
            </label>
            <label className="flex items-center gap-1 text-[10px] text-gray-600">
              <input type="radio" name="status" readOnly />
              N/A
            </label>
          </div>
          <div className="px-3 py-2 border-t border-gray-100 space-y-1">
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-500">WCAG Criteria</span>
              <span className="text-[10px] text-gray-700">143</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-500">Impact</span>
              <span className="text-[10px] text-gray-700">Serious</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-500">Confidence</span>
              <span className="text-[10px] text-gray-700">Medium</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[10px] text-gray-500">Show highlights</span>
              <div className="w-7 h-4 rounded-full bg-green-400 relative">
                <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Validation */}
      <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-500"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <div>
            <p className="font-semibold text-gray-700 text-[11px]">
              Manual Validation
            </p>
            <p className="text-[10px] text-gray-400">
              Verify keyboard accessibility without a mouse
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-gray-400">0/3</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-500"
          >
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
          </svg>
          <div>
            <p className="font-semibold text-gray-700 text-[11px]">
              Keyboard Navigation
            </p>
            <p className="text-[10px] text-gray-400">
              Verify keyboard accessibility without a mouse
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-gray-400">0/5</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-9 w-full">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_URL} alt="Za11y" height={32} className="h-8 w-auto" />
        <a
          href="/privacy-policy"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Privacy Policy
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          {/* Decorative ellipses */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "1907px",
              height: "1429px",
              left: "50%",
              top: "200px",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(ellipse, oklch(0.844 0.093 167.022 / 0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-0 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-2xl">
              Instantly uncover WCAG accessibility issues
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-[500px] leading-relaxed">
              Scan any webpage in seconds. Powered by axe-core and running
              locally in your browser for fast, secure results.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#47D4AA] hover:bg-[#3bbf97] text-white font-medium px-8 py-3.5 rounded-full text-sm transition-colors shadow-sm"
            >
              Get Extension
            </a>
          </div>

          {/* App Mockup */}
          <div className="relative z-10 mt-14 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/za11y-hero-image.png"
              alt="Za11y accessibility scanner interface"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </section>

        {/* How Za11y Works */}
        <section className="bg-gray-50 py-24 mt-16">
          <div className="max-w-6xl mx-auto px-16 flex items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How Za11y works
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/za11y-how-it-works.png"
                alt="How Za11y works"
                className="w-full max-w-[420px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* Manual Checks */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-16 flex items-center gap-16">
            <div className="flex-1 flex justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/za11y-manual-checks.png"
                alt="Za11y manual checks"
                className="w-full max-w-[420px] h-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Manual Checks
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
