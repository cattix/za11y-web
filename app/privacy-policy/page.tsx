const LOGO_URL = "/assets/za11y-logo.svg";

export const metadata = {
  title: "Privacy Policy — Za11y",
  description: "Za11y privacy policy. All processing happens locally in your browser.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-9 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/">
          <img src={LOGO_URL} alt="Za11y" className="h-8 w-auto" />
        </a>
        <a
          href="/privacy-policy"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Privacy Policy
        </a>
      </nav>

      {/* Content */}
      <main className="flex-1 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <header className="mb-10 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500">
              Za11y &mdash; Last updated: March 2026
            </p>
          </header>

          {/* Summary box */}
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg px-5 py-4 mb-10">
            <p className="text-[#166534] font-medium">
              This extension does not collect, transmit, or share any personal
              data or browsing data. All processing happens locally in your
              browser.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Data Processing
              </h2>
              <p>
                All accessibility scanning is performed locally in your Chrome
                browser using{" "}
                <a
                  href="https://github.com/dequelabs/axe-core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  axe-core
                </a>
                , an open-source accessibility engine. No page content, URLs,
                HTML, or scan results are sent to any external server or
                service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Data Storage
              </h2>
              <p>
                Scan results and manual checklist state are stored in
                Chrome&rsquo;s local storage (<code className="bg-gray-100 px-1 rounded text-sm">chrome.storage.local</code>)
                on your device only. This data is not synced to any server and
                is never accessible to the extension developer.
              </p>
              <p className="mt-3">
                Storage is automatically pruned to a maximum of 10 scans per
                URL. You can clear all stored data at any time from within the
                extension.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Analytics and Telemetry
              </h2>
              <p>
                This extension does not include any analytics, telemetry, crash
                reporting, or usage tracking of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Permissions
              </h2>
              <p className="mb-4">
                The extension requests the following Chrome permissions solely
                to provide its core functionality:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-3 py-2 bg-gray-50 border border-gray-200 font-semibold text-gray-700">
                        Permission
                      </th>
                      <th className="text-left px-3 py-2 bg-gray-50 border border-gray-200 font-semibold text-gray-700">
                        Why it&rsquo;s needed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        permission: "host_permissions (<all_urls>)",
                        reason:
                          'To scan any webpage the user chooses to audit. The content script only runs axe-core when the user actively clicks "Run Scan."',
                      },
                      {
                        permission: "storage",
                        reason:
                          "To save scan history on your device. No data is uploaded or transmitted.",
                      },
                      {
                        permission: "scripting",
                        reason:
                          "To inject Za11y into the active tab when a scan is requested.",
                      },
                      {
                        permission: "tabs",
                        reason:
                          "To detect tab switches and URL changes so the panel can display the correct current URL and clear highlights on navigation.",
                      },
                      {
                        permission: "webNavigation",
                        reason:
                          "To detect single-page app navigations that tabs.onUpdated does not report, keeping URL tracking accurate.",
                      },
                      {
                        permission: "sidePanel",
                        reason:
                          "To open the results panel via chrome.sidePanel.open().",
                      },
                      {
                        permission: "activeTab",
                        reason:
                          "To run the accessibility scan on the user's current tab.",
                      },
                    ].map(({ permission, reason }) => (
                      <tr key={permission}>
                        <td className="px-3 py-2 border border-gray-200 align-top">
                          <code className="bg-gray-100 px-1 rounded text-xs">
                            {permission}
                          </code>
                        </td>
                        <td className="px-3 py-2 border border-gray-200 align-top">
                          {reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Third-Party Libraries
              </h2>
              <p>
                The extension uses{" "}
                <a
                  href="https://github.com/dequelabs/axe-core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  axe-core
                </a>{" "}
                (Deque Systems, Apache 2.0 license), which runs entirely in
                your browser. No data is sent to Deque Systems or any third
                party.
              </p>
              <p className="mt-3">
                Za11y provides automated accessibility checks for informational
                purposes only. While we strive to deliver accurate results, we
                do not guarantee the completeness or accuracy of any findings.
                Users are responsible for reviewing and verifying results and
                ensuring their content meets applicable accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Changes to This Policy
              </h2>
              <p>
                If this policy changes, the updated version will be published
                at this URL with a revised date. Significant changes will also
                be noted in the extension&rsquo;s release notes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Contact
              </h2>
              <p>
                Questions or concerns? Open an issue on{" "}
                <a
                  href="https://github.com/ivstudio/za11y/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>
              Za11y &mdash;{" "}
              <a
                href="https://github.com/ivstudio/za11y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/ivstudio/za11y
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
