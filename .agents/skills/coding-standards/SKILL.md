---
name: coding-standards
description: Enforces senior-level coding standards for React, Next.js, and Tailwind CSS. Applies always — ensures modular, maintainable, type-safe, accessible, and performant code across all feature work. Triggers on any component, page, hook, or utility authoring task.
user-invocable: false
---

# Coding Standards

These rules apply to all code written in this project. No exceptions.

---

## Guiding Principles

1. **Readability over cleverness.** Code is read far more than it's written. Optimize for the next engineer.
2. **Modular by default.** Every unit of code has one job. Split early, merge only when it's simpler.
3. **No premature abstraction.** Three similar things before you abstract. One bespoke thing stays bespoke.
4. **Explicit over implicit.** Name things for what they do, not what they are. Avoid magic.
5. **Accessibility is not optional.** Every UI element must be operable and understandable without sight.

---

## TypeScript

- **Strict mode always.** `"strict": true` is non-negotiable.
- **No `any`.** Use `unknown` and narrow it. If you're reaching for `any`, you're missing a type.
- **Explicit return types on exported functions.** Inference is fine internally; exports must be explicit.
- **Prefer `type` over `interface`** unless you need declaration merging.
- **Use discriminated unions** for state machines and variant types — not boolean flags.

```ts
// Wrong — boolean flag sprawl
type ButtonProps = { loading: boolean; disabled: boolean; error: boolean }

// Right — discriminated union
type ButtonState = "idle" | "loading" | "disabled" | "error"
type ButtonProps = { state: ButtonState }
```

- **Never cast with `as` to suppress an error.** Fix the type instead.
- **Zod for all external data.** API responses, form inputs, URL params — validate and parse at the boundary.

---

## React

### Components

- **One component per file.** File name matches the component name exactly.
- **Function declarations, not arrow functions** for top-level components.

```tsx
// Wrong
const MyComponent = () => { ... }

// Right
export default function MyComponent() { ... }
```

- **Props interface directly above the component.** No prop types buried in the file.
- **Destructure props at the signature.** Don't do `props.foo` inside the body.
- **Default exports for pages and layouts. Named exports for everything else.**
- **Keep components under ~150 lines.** If it's growing, extract a sub-component or hook.
- **No logic in JSX.** Extract complex conditionals to variables or helper functions before the return.

```tsx
// Wrong
return (
  <div>
    {items.filter(i => i.active).map(i => (
      <Item key={i.id} {...i} />
    ))}
  </div>
)

// Right
const activeItems = items.filter(i => i.active)
return (
  <div>
    {activeItems.map(i => <Item key={i.id} {...i} />)}
  </div>
)
```

### Hooks

- **Custom hooks for all reusable logic.** If you write `useState` + `useEffect` together more than once, it's a hook.
- **Hooks live in `hooks/`.** One hook per file, named `use[Feature].ts`.
- **`useCallback` and `useMemo` only when profiling shows a problem.** Don't premature-optimize.
- **No `useEffect` for derived state.** Compute it during render.

```tsx
// Wrong
const [fullName, setFullName] = useState("")
useEffect(() => setFullName(`${first} ${last}`), [first, last])

// Right
const fullName = `${first} ${last}`
```

- **`useEffect` dependencies must be complete.** Never suppress the exhaustive-deps lint rule.

### State

- **Local state stays local.** Lift only when two siblings genuinely need it.
- **Server state via React Query or SWR** — never hand-roll fetch + `useEffect` + `useState`.
- **URL as state** for anything that should survive a refresh or be shareable.
- **Avoid `useReducer`** unless state transitions are complex enough to warrant it.

---

## Next.js (App Router)

- **Server Components by default.** Add `"use client"` only when you need interactivity, browser APIs, or React hooks.
- **Never put `"use client"` at the top of a page.** Push the client boundary down to the leaf component that needs it.

```
app/
  dashboard/
    page.tsx          ← Server Component (data fetching)
    DashboardShell.tsx ← Server Component (layout)
    RefreshButton.tsx  ← "use client" (needs onClick)
```

- **Data fetching in Server Components.** Use `async/await` directly — no `useEffect`, no `fetch` in client code unless building a mutation.
- **`loading.tsx` and `error.tsx`** for every route segment with async data.
- **`generateMetadata`** for every page — title and description minimum.
- **Route handlers in `app/api/`.** Keep business logic out of route handlers — call a service function.
- **Parallel routes and intercepting routes** when the UX calls for it — don't hack it with state.
- **`next/image` always** for images. Never raw `<img>` except for dynamic/unknown sources where `<img>` is intentional.
- **`next/link` always** for internal navigation. Never `<a href>`.
- **Environment variables:** public vars use `NEXT_PUBLIC_` prefix. Secret vars are server-only — never imported in client files.

### File & Folder Conventions

```
app/
  (marketing)/          ← route group, no URL segment
    page.tsx
  dashboard/
    layout.tsx
    page.tsx
    loading.tsx
    error.tsx
components/
  ui/                   ← shadcn primitives, never edited directly
  [Feature]/            ← feature-scoped components
    FeatureCard.tsx
    FeatureCard.test.tsx
hooks/
  useFeature.ts
lib/
  utils.ts              ← cn() and other shared utils
  [service].ts          ← external API clients, db queries
types/
  index.ts              ← shared TypeScript types
```

---

## Tailwind CSS (v4)

- **Semantic tokens only.** `bg-primary`, `text-muted-foreground` — never `bg-green-400` or raw hex.
- **No `style=` for colors or spacing.** Everything goes through Tailwind classes.
- **`cn()` for conditional classes.** Never string template ternaries.

```tsx
// Wrong
<div className={`flex ${isActive ? "bg-primary" : "bg-muted"}`}>

// Right
<div className={cn("flex", isActive ? "bg-primary" : "bg-muted")}>
```

- **Mobile-first responsive.** Base styles are mobile. Use `md:`, `lg:` to scale up.
- **`gap-*` not `space-x-*` / `space-y-*`.** Use flex/grid with gap.
- **`size-*` when width equals height.** `size-10` not `w-10 h-10`.
- **No arbitrary values** (`w-[337px]`) unless absolutely required by a design spec. Prefer scale values.
- **No `!important` overrides** (`!text-red-500`). Fix the specificity root cause.
- **Dark mode via `.dark` class, not `prefers-color-scheme`** — this project uses class-based dark mode.
- **All theme tokens defined in `globals.css`** — not in `tailwind.config.*` (Tailwind v4 uses `@theme inline {}`).

---

## Modularity & File Organization

- **Co-locate tests with components.** `Button.tsx` → `Button.test.tsx` in the same folder.
- **Barrel files (`index.ts`) only for public APIs** of a feature folder. Don't barrel everything.
- **Feature folders, not type folders.** `components/Auth/` not `components/forms/AuthForm.tsx` buried in a generic folder.
- **Shared utilities in `lib/`.** If two features use the same function, it lives in `lib/`, not copied.
- **No cross-feature imports.** Feature A should not import from Feature B's internals. Go through `lib/` or lift to a shared location.

---

## Accessibility

- **Semantic HTML always.** `<button>` for buttons, `<nav>` for navigation, `<main>` for main content.
- **Never `<div onClick>`.** Use `<button>` — it's focusable, keyboard-operable, and has the right role.
- **`aria-label` when text content is absent** (icon-only buttons, close buttons).
- **`alt` on every `<img>`.** Empty string `alt=""` for decorative images.
- **Focus management in modals and drawers.** Focus must move into the dialog on open, return on close.
- **Color is never the only signal.** Error states need an icon or text, not just red color.
- **Minimum contrast 4.5:1** for normal text, 3:1 for large text (WCAG AA).
- **`Dialog`, `Sheet`, `Drawer` always need a `Title`** — use `className="sr-only"` if visually hidden.

---

## Naming

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `UserProfileCard` |
| Hooks | camelCase, `use` prefix | `useCurrentUser` |
| Utilities | camelCase | `formatDate` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRIES` |
| Types | PascalCase | `UserProfile` |
| Files (components) | PascalCase | `UserProfileCard.tsx` |
| Files (hooks/utils) | camelCase | `useCurrentUser.ts` |
| CSS variables | kebab-case | `--color-primary` |
| Route folders | kebab-case | `user-profile/` |

- **No abbreviations** unless universally understood (`id`, `url`, `api`, `db`).
- **Boolean variables start with `is`, `has`, `can`, `should`.**
- **Event handlers start with `handle` (definitions) or `on` (props).**

```tsx
// Definition
function handleSubmit() { ... }

// Prop
<Form onSubmit={handleSubmit} />
```

---

## Code Review Checklist

Before any code is considered done:

- [ ] TypeScript compiles with no errors (`pnpm build`)
- [ ] No `any`, no `// @ts-ignore`, no `// eslint-disable`
- [ ] Every Server Component is async with proper loading/error states
- [ ] No `"use client"` higher than it needs to be
- [ ] Semantic HTML — no `<div>` where a semantic element belongs
- [ ] All interactive elements are keyboard-accessible
- [ ] Colors use semantic tokens, not raw values
- [ ] Component is under ~150 lines or has a clear reason to be longer
- [ ] No copy-pasted logic — extracted to a hook or utility
- [ ] `cn()` used for conditional classes
