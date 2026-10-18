# za11y Companion Dashboard — Product Brief

## Context

za11y-web currently is only the marketing site for the za11y Chrome extension (hero, features, install CTA, privacy policy). The extension itself is local-only, no-account, no-telemetry — it runs axe-core entirely in the browser. The privacy policy states scan history is stored (capped at 10 scans/URL) in `chrome.storage.local`, but a code review of the `za11y` extension repo found this isn't actually happening in the running app today — see **Extension Codebase Findings** below.

This document captures a discovery discussion on the value prop, positioning, and MVP scope for a companion web dashboard, meant to be shared with the developer to align on technical stack before implementation begins. Two things are still open and block further scoping: (1) the auth/database/hosting stack, pending the developer's input, and (2) a handful of extension-side decisions, now that the `github.com/ivstudio/za11y` repo has been reviewed — flagged below for discussion with the dev partner before anything is finalized.

## Value Proposition

> **za11y Dashboard** — for existing za11y users. Opt-in sync from the extension (triggered manually, by re-running a scan — not automated/scheduled) builds a per-page history, so a user can see whether a page's accessibility is improving or regressing over time. The extension itself stays exactly as-is: local-only, no account required, nothing changes by default for someone who never touches the dashboard. Free core stays free; team collaboration and automated re-scanning are natural paid additions later, once the single-user version proves out.

**Per-page regression tracking is table stakes, not the differentiator.** Competitive research confirmed "see whether accessibility is improving or regressing over time" is the standard pitch across the whole category — axe DevTools Pro, Siteimprove, Accesstive, GetWCAG, and Accessibility Tracker all say close to the same thing (see Positioning below). It's still a required, expected feature — durable history (beyond the 10-scan/URL cap and beyond one browser profile) and shareable reports are expected to fall out of it almost for free — but it can't be the whole pitch, or the dashboard just reads as "axe DevTools Pro, but smaller."

**The actual differentiator: recurring pattern detection traceable to a shared component.** Rather than surfacing "page X has 12 issues," the dashboard's distinguishing job is grouping the *same* issue when it recurs across multiple pages in a project — "this color-contrast failure appears on 8 pages" — so a designer or developer can trace it back to a shared component or design token and fix it once, instead of page-by-page. Regression tracking then becomes sharper too: instead of "did this page's count go down," it's "did this pattern shrink across the whole project after the component was fixed." See **Recurring Pattern Detection** below.

## Positioning

The closest existing competitor is **axe DevTools Pro** (Deque — the company behind axe-core, the same engine za11y runs on): free extension → paid Pro tier (~$40/mo/seat, or $1,200–2,500/seat/year negotiated) adding a dashboard, reporting, issue tracking, and team collaboration. This is structurally the same upgrade path being proposed here, so differentiation has to be explicit, not incidental:

- **Price** — priced for solo devs/freelancers/small agencies, not $40+/seat/month enterprise orgs.
- **Simplicity** — stays true to za11y's "no setup, no learning curve" brand; a lean regression view, not a full compliance-program suite.
- **Audience** — explicitly not chasing enterprise compliance teams (that's Siteimprove's territory, $20k+/year); built for the indie/small-team developer who already uses the extension.

Other tools surveyed: **WAVE** is free-only with no dashboard (a UX bar, not a competitor). **accessiBe** is a different category (AI auto-remediation overlay) — those are widely criticized in the accessibility community for papering over issues rather than fixing them; if za11y's dashboard is ever compared to that category, the answer is explicit: za11y surfaces issues for a human to fix, it doesn't auto-patch the DOM.

**On "track progress over time"**: this exact framing is not differentiated — axe DevTools Pro ("track progress, spot recurring issues... see how your accessibility improves over time"), Siteimprove (an "Accessibility Score" with trend graphs), Accesstive, GetWCAG, and Accessibility Tracker all pitch essentially the same thing. axe DevTools Pro gets adjacent to pattern detection with a "top failing criteria" view, but that's aggregated by WCAG rule only — not tied to *where in the codebase or design system* the issue is coming from. No competitor found explicitly pitches tracing recurring issues back to a shared component, which is where za11y's dashboard differentiation should concentrate (see Value Proposition and Recurring Pattern Detection).

## Recurring Pattern Detection

This is two related but separately-scoped features — one belongs to the extension, one to the dashboard.

**Detection heuristic** (shared by both): axe-core reports each violation's DOM selector and HTML, not a component identity, so pattern detection has to be inferred rather than instrumented — no code changes required on the user's side. Group violation instances by a "fingerprint" (rule ID + shared class name(s), falling back to structural/tag similarity when there's no shared class), then surface any fingerprint that recurs as one callout instead of N separate line items. Confidence tiers, highest to lowest:

1. **Shared class name(s)** — e.g., "12 elements sharing class `.btn-primary` failed color-contrast." Can name the likely component directly.
2. **Shared CSS-module/hashed class** (React/CSS Modules/styled-components) — same grouping logic, less human-readable, but the class is still a useful pointer.
3. **No shared class** (common with Tailwind-only styling) — fall back to matching the full set of utility classes, or tag + role structure: "12 similarly-structured `<button>` elements failed color-contrast" — hedged language since it can't claim to be literally one component.
4. **Nothing matches** — report the count/rule without a pattern claim.

**Extension feature (separate scope, ships independently)**: within-page clustering. Applying this fingerprint grouping to a single scan's results needs no account, no sync, no dashboard — it's computable entirely client-side from the scan just run. Belongs in the `za11y` extension repo as its own improvement, not gated on the dashboard shipping.

**Dashboard feature (the actual differentiator)**: cross-page, cross-time pattern tracking. The same fingerprint grouping applied *across all pages in a project* — "this pattern shows up on 8 pages" — and, over time, "it used to show up on 8 pages, now only 2 since the component was updated." This is the piece that genuinely requires synced history and can't be replicated by the extension alone; it's the sharpest differentiation point against competitors (see Positioning).

## Extension Codebase Findings (Open Decisions)

A review of the `za11y` extension repo turned up three things that don't require a decision from this session, but do need to be discussed with the dev partner before the dashboard scope is finalized. No recommendation is baked in below — these are presented as open options.

### 1. Privacy policy doesn't match current behavior

The published privacy policy states scan results are stored in `chrome.storage.local` and pruned to 10 scans per URL. In the actual code, that persistence path (`saveScanResult` in `src/services/storage.ts`) is never called anywhere in the running app — no scan result is currently saved. The **only** thing from `storage.ts` that's actually wired up is the manual checklist (`saveChecklist` / `getLatestChecklist`), which does persist and restore correctly per URL.

**Open question**: fix the policy to describe what's actually happening (no scan-result persistence today), or treat this as motivation to finish the code so it matches the policy (see #2)? Either way, this is a real discrepancy between what's published and what ships, worth resolving independent of the dashboard timeline.

### 2. Local scan-history and diff logic already exists, but is disconnected

Also in `storage.ts`: `getScanResultsForUrl`, `getLatestScanResult`, and — notably — `compareScanResults`, a fully built and unit-tested function that diffs two scans into new/resolved/existing issues. This is effectively the same regression-comparison logic the dashboard's value prop depends on, already written, just never called from any UI or scan flow today.

Two directions to weigh:

- **Finish it locally**: wire `saveScanResult` into the scan flow and build a small UI surfacing the existing diff ("3 new issues, 2 resolved since last scan"). Gives users local, no-account value, and reuses code that's already written and tested. Adds scope to the extension before the dashboard ships.
- **Leave it, go straight to sync**: don't invest in finishing local history/diffing; treat the dashboard as the only place multi-scan comparison ever lives. Less extension work, but the existing `saveScanResult`/`compareScanResults` code likely becomes dead weight to remove rather than a foundation to build on, and local-only users (who never create a dashboard account) never get any before/after comparison.

### 3. Issue status/notes tracking also exists, also unused

`updateIssueStatus` (mark an issue fixed/ignored, with notes) is defined in `storage.ts` but not called anywhere either. Not a decision point on its own, but worth keeping in mind as a possible input to the dashboard's recurring-pattern view later — e.g., "marked fixed on 3 of the 8 pages this pattern appears on."

## Product Principles

1. **Extension default behavior is untouched.** Local-only scanning, no required signup — this is not renegotiable, it's the trust foundation the extension is already marketed on.
2. **Sync is opt-in and explicit**, initiated from the extension (e.g., "Save to za11y account" after a scan). Never automatic, never silent.
3. **Minimize what's sent.** Only scan/issue data needed for the dashboard's regression view — not raw page HTML — should leave the browser. Privacy policy needs an honest addendum describing exactly what syncing sends and how to delete it, without rewriting the existing local-only guarantees.

## Free vs. Paid Boundary

Open question, not decided — flagged for in-depth discussion with the dev partner before anything is finalized.

**Why this needs more care than the extension's pricing did**: the extension is free at zero marginal cost — it runs entirely in the user's browser, so giving it away costs nothing per install. The dashboard breaks that assumption: every synced scan is server storage, every account is auth infrastructure, every query across `Project → Page → Scan` has a real cost. Where the free/paid line sits directly determines how much of that cost gets absorbed before a user converts.

**Competitor precedent doesn't point either way.** axe DevTools Pro (the closest comparable) has *no* free dashboard tier at all — free extension, then a hard wall at ~$40/mo/seat for any account/history/reporting capability. Siteimprove has effectively no free tier either. Nothing in the category establishes "free dashboard, paid upgrade" as a proven model, which cuts both ways: doing it anyway could reinforce the price/audience differentiation already in this brief's Positioning — or there may be a reason no other tool in the space offers it.

**Two candidate approaches, with different implications:**

1. **Gate by volume/retention, not feature.** Free tier includes both regression tracking *and* recurring pattern detection (the actual differentiator) — but scoped down: e.g., one project, a handful of tracked pages, history depth capped similarly to the extension's existing 10-scan/URL cap. Paid unlocks more projects/pages, longer retention, plus the already-planned team/automation features. Rationale: a genuine solo dev on one project can stay free indefinitely (consistent with the "no friction" brand), while anyone managing multiple sites or a real client roster — the users generating real cost — hits the line naturally as usage grows.
2. **Gate by feature depth.** Free = regression tracking only; paid = recurring pattern detection. A more conventional freemium shape, but it works against the differentiation strategy: it hides the one thing that makes za11y's dashboard different from "axe DevTools Pro but smaller" behind the exact wall meant to keep free users out — they'd never experience the reason to pay before being asked to.

**Leaning, not a decision**: approach 1 (gate by volume/retention) fits the existing price/simplicity/audience positioning better, since it lets the differentiator do the work of convincing people to upgrade instead of withholding it from them. This should be worked through with the dev partner alongside the stack decision and the Extension Codebase Findings above — retention limits in particular interact directly with storage/infra cost on whatever backend gets chosen, so the two decisions aren't fully independent.

## MVP Scope

- **Audience**: existing za11y extension users (not a new non-technical audience yet).
- **Users**: single-user only. No team/sharing/invite UI at MVP — see Data Model below for why the shape still anticipates it.
- **Scan trigger**: manual only. A new synced scan is created when a user re-runs a scan in the extension and chooses to sync it. No server-side/scheduled re-scanning at MVP (that's a plausible later paid feature).
- **Notifications**: none at MVP (open question, deliberately deferred — revisit once the regression-detection UI exists to hang it off of).
- **Recurring pattern detection (cross-page)**: in scope for MVP, not a later add-on — it's the differentiator, not a nice-to-have. See Recurring Pattern Detection above.
- **Monetization**: free core; open to a paid tier later (team sharing, automated re-scanning) once single-user MVP validates. See **Free vs. Paid Boundary** above for where that line should actually be drawn — still open.

### Data model

Organize scans as **`Project → Page → Scan`**, even though MVP has one user:

- `Scan` — leaf record: timestamp, issue results/summary counts, tied to one `Page`.
- `Page` — a tracked URL. Owns an ordered history of `Scan`s. This is the unit regression tracking operates on (diff latest scan vs. previous for a given page).
- `Project` — container that owns one or more `Page`s. Trivial at MVP (can be a single default project per user), but this is the natural sharing boundary for team features later — you invite people to a project, not to individual scans. Retrofitting this grouping after users have months of ungrouped history would be a painful migration, so it's worth the small upfront cost now. No team/role/invite logic should be built yet — only this shape.

**Implication for Recurring Pattern Detection**: this feature needs violations to be queryable/groupable by fingerprint (rule ID + class/structural signature) *across all `Page`s within a `Project`*, not just within a single `Scan`. This is a query/aggregation capability on top of the model above, not necessarily a new stored entity — but it should be factored into schema design now given it's the MVP's actual differentiator, not treated as a later add-on.

## Explicitly Out of Scope for This Brief

- **Stack selection** (auth provider, database, hosting) — pending input from the user's developer. Revisit scoping once that's decided.
- **Extension-side implementation** (adding the "sync to account" capability, designing what payload it sends; and separately, within-page recurring-pattern clustering — see Recurring Pattern Detection above) — both confirmed in scope for the overall project, but require the `github.com/ivstudio/za11y` repo in a working session. The within-page clustering feature doesn't depend on the dashboard and could ship first.
- **Sync API contract** (request/response shape between extension and dashboard) — deferred until stack is chosen, since the API shape will follow from the backend/auth choice.
- Team collaboration features (accounts beyond single-user, invites, roles, shared projects).
- Automated/scheduled monitoring and alerting/notifications.
- Non-technical/new-audience-facing features (public URL scanner, non-account report sharing) — these were considered but explicitly not the chosen MVP direction.

## Next Steps

1. Share this brief with the developer to align on auth/DB/hosting stack, and to discuss the three open items in **Extension Codebase Findings** above (privacy policy accuracy, whether to finish local scan-history/diffing, issue status/notes tracking) plus the **Free vs. Paid Boundary** question — where the free tier line sits interacts with the stack's storage/infra cost, so these should be discussed together.
2. Once stack is chosen, resume scoping: define the sync API contract, dashboard UI/pages, and auth flow.
3. Scope and implement the "sync to account" capability in the `za11y` extension repo alongside the dashboard, and separately, the within-page recurring-pattern clustering feature (which could ship independently, sooner) — informed by whatever's decided in Extension Codebase Findings.
