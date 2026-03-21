---
name: create-pr
description: Creates a GitHub pull request with a well-structured description. Triggers on /create-pr or when the user asks to open or create a pull request.
user-invocable: true
allowed-tools: Bash(git log *), Bash(git diff *), Bash(git status), Bash(git branch *), Bash(git push *), Bash(gh pr create *), Bash(gh pr view *), Bash(gh repo view *)
---

# create-pr

Create a GitHub pull request with a clear, structured description based on the branch's commits and diff.

## Workflow

1. **Check branch state** — run these in parallel:
   - `git status` — confirm working tree is clean (if not, suggest committing first)
   - `git branch --show-current` — get the current branch name
   - `git log main...HEAD --oneline` — list all commits on this branch
   - `git diff main...HEAD --stat` — summarize files changed

2. **Read the full diff** — run `git diff main...HEAD` to understand all changes in detail. Look at every commit, not just the latest.

3. **Push if needed** — check if the branch has a remote upstream. If not, run `git push -u origin <branch>` before creating the PR.

4. **Draft the PR** — write a title and body based on the actual changes:

   **Title rules:**
   - Under 70 characters
   - Use conventional commit style: `feat: ...`, `fix: ...`, `chore: ...`
   - Be specific — describe what changed, not just "update code"

   **Body structure:**
   ```markdown
   ## Summary
   - <bullet point of what changed and why>
   - <another bullet if needed>

   ## Changes
   - <specific file or area changed>: <what was done>

   ## Test plan
   - [ ] <manual or automated test step>
   - [ ] <another verification step>

   🤖 Generated with [Claude Code](https://claude.com/claude-code)
   ```

5. **Create the PR** — use `gh pr create` with a HEREDOC for the body:

   ```bash
   gh pr create --title "feat: your title here" --body "$(cat <<'EOF'
   ## Summary
   - ...

   ## Changes
   - ...

   ## Test plan
   - [ ] ...

   🤖 Generated with [Claude Code](https://claude.com/claude-code)
   EOF
   )"
   ```

6. **Return the PR URL** — always show the user the URL of the created PR.

## Rules

- Never create a PR from `main` or `master` into itself — warn the user.
- Never force-push to set up the remote — use `git push -u origin <branch>`.
- If there are uncommitted changes, stop and ask the user to commit first (or offer to run `/commit-git`).
- Base branch defaults to `main` unless the user specifies otherwise.
- Do not add reviewers, labels, or assignees unless the user explicitly asks.
- If `gh` is not authenticated, tell the user to run `gh auth login` first.
