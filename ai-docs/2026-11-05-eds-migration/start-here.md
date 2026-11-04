# Start here

You are migrating a static portfolio site to Adobe Edge Delivery Services.

- Source (live): https://raviprashanth22035.github.io, repo `raviprashanth22035/raviprashanth22035.github.io`
- Target code repo: `raviprashanth22035/portfolio-eds` (created by Ravi from the EDS boilerplate)
- Content: da.live
- Read `README.md` for the decisions and `workstreams.md` for phases and definitions of done.

## Rules

- The EDS site must look identical to the source. Any difference goes in `inconsistencies.md`, never fixed silently.
- Follow EDS best practices: blocks are small and reusable, no framework, no build step beyond what the boilerplate provides, images optimised, lazy loading kept.
- Content must be authorable. Every visible text element comes from the da.live document, not hard-coded in JavaScript.
- No em dashes or long dashes in any copy. Use plain hyphens.
- Stop and ask Ravi for anything that needs his logins or a deploy approval.
- Keep a run log at the bottom of this file. Update it as you go.

## Goal prompt 1: foundation

Paste into Claude Code after `/goal`:

> Read `ai-docs/2026-11-05-eds-migration/start-here.md` and the files it links to. Complete Phase 1 of `workstreams.md`. Do not stop until the conversation shows all of these: (1) the staging URL returns HTTP 200 with the home page; (2) the gate output for the home page and one article, at 1440 px and 360 px, shows pixel diff at most 10 percent, height within 5 percent, and no missing content, with the actual numbers printed; (3) mobile Lighthouse performance of 100 on both pages, printed; (4) the editability probe passes for every block built so far, printed; (5) `start-here.md` is updated with status, remaining work and a run log. If you need anything from me, stop and ask.

## Goal prompt 2: go wide

Paste into Claude Code after `/goal`, once you have reviewed the first two pages:

> The first pages look good. Migrate everything else using the same tests. Move the design system first, work out every block still needed and build them before going wide, then use parallel subagents in separate git worktrees to migrate the remaining pages. Shared files are changed only by you as coordinator. Done when every page passes the same gate at 1440 px and 360 px, a final sweep table of all pages is printed, dark mode and links are checked, and `whats-left.md` and `inconsistencies.md` are written.

## Run log

- 2026-11-05: Phase 0 done. Writing section and one article added to the source site.
- 2026-11-05: Phase 1 and 2 built in one pass in Claude Code. Code pushed to `portfolio-eds` main, content in `portfolio-eds/da-content/`.
- 2026-11-05: Local gate passes on all 6 pages at 1440 px and 360 px in light and dark. aem.page and da.live were not reachable from the session, so the staging check, editability probe and import are open. See `whats-left.md` and `inconsistencies.md`.
