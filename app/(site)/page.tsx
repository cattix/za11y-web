import FeaturesSection from "../components/FeaturesSection";
import HeroVideo from "../components/HeroVideo";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/za11y/jckcbiebopjcodmdigkajekpkohnjegg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero */}
        <section className="bg-gray-100 flex flex-col items-center pb-16">
          <div className="flex flex-col items-center text-center px-6 pt-[56px] pb-0 gap-6 w-full max-w-5xl mx-auto">
            <h1 className="text-[40px] md:text-[56px] font-bold text-gray-900 leading-[1.14] tracking-[-0.3px] max-w-[828px]">
              Catch Accessibility Issues Before They Ship
            </h1>
            <p className="text-xl md:text-[28px] text-gray-700 leading-8 whitespace-nowrap">
              No accounts, no setup, and no learning curve.
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-gray-100 font-medium px-8 h-12 rounded-full text-[20px] tracking-[-0.3px] transition-colors"
            >
              Get Extension
            </a>
          </div>

          {/* Hero browser mockup */}
          <div className="mt-14 w-full max-w-[1191px] mx-auto px-6">
            <HeroVideo />
          </div>
        </section>

        <FeaturesSection />

        {/* CTA banner */}
        <section className="bg-gray-700 py-16 px-6">
          <div className="max-w-[1200px] mx-auto bg-gray-50 rounded-3xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-10 max-w-[699px]">
                Build More Accessible Experiences
              </h2>
              <p className="text-[18px] md:text-[20px] font-medium text-gray-900 leading-7 max-w-[673px]">
                Identify accessibility issues, review manual checks, and improve
                compliance with confidence.
              </p>
            </div>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-gray-100 font-medium px-8 h-12 rounded-full text-[20px] tracking-[-0.3px] transition-colors whitespace-nowrap shrink-0"
            >
              Install Extension
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 px-10 py-8 flex items-end justify-between h-[280px]">
        <div className="flex flex-col justify-between h-full items-start w-[254px]">
          <div className="flex flex-col gap-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/za11y-cat-logo.svg"
              alt="Za11y"
              className="h-12 w-auto self-start"
            />
            <p className="text-gray-100 text-[16px] leading-7 tracking-[1px]">
              Instantly uncover WCAG
              <br />
              accessibility issues
            </p>
          </div>
          <p className="text-gray-100 text-[16px] leading-6">© 2026 Za11y</p>
        </div>
        <a
          href="/privacy-policy"
          className="text-gray-100 text-[16px] leading-6 hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
