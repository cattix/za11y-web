---
name: commit-git
description: Stages changes, writes a conventional commit message, and pushes to GitHub. Triggers on /commit-git or when the user asks to commit and push changes.
user-invocable: true
allowed-tools: Bash(git add *), Bash(git status), Bash(git diff *), Bash(git commit *), Bash(git push *), Bash(git log *), Bash(git branch *)
---

# commit-git

Stage, commit, and push changes to GitHub using conventional commits.

## Workflow

1. **Check status** — run `git status` and `git diff --staged` to see what has changed.
2. **Stage files** — run `git add` for relevant files. Prefer specific file paths over `git add -A`. Never stage `.env` files or secrets.
3. **Review diff** — run `git diff --cached` to confirm what will be committed.
4. **Write commit message** — follow the Conventional Commits format:

   ```
   <type>(<scope>): <short summary>

   [optional body]

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   ```

   **Types:** `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `build`, `ci`

   Examples:
   - `feat(auth): add login page`
   - `fix(api): handle null response from endpoint`
   - `chore: install prettier and tailwind plugin`

5. **Commit** — use a HEREDOC to pass the message:

   ```bash
   git commit -m "$(cat <<'EOF'
   feat(scope): summary

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   ```

6. **Push** — run `git push` to push to the current branch's remote. If the branch has no upstream, run `git push -u origin <branch>`.
7. **Confirm** — run `git status` to verify the working tree is clean.

## Rules

- Never commit `.env`, secrets, or credential files — warn the user if asked.
- Never use `--no-verify` to skip hooks unless the user explicitly asks.
- Never amend published commits — create a new commit instead.
- Never force-push to `main`/`master` — warn the user if asked.
- If a pre-commit hook fails, fix the issue and create a **new** commit (never `--amend`).
- Always confirm with the user before pushing if this is their first push or if targeting a protected branch.
