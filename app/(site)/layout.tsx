export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-50 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-9 w-full">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/za11y-logo.svg" alt="Za11y" height={32} className="h-8 w-auto" />
        </a>
        <a
          href="/privacy-policy"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Privacy Policy
        </a>
      </nav>
      {children}
    </>
  );
}
