# Workstreams

## Phase 0: Prepare the source (before any EDS work)

Done when:
- The source site has a `/writing.html` listing and at least 3 real articles in `/writing/`.
- Each article uses the same layout: title, date, reading time, body with headings, one code block or one callout, and previous and next links.
- Everything is pushed to `main` and live on GitHub Pages.

## Phase 1: Foundation (goal prompt 1)

1. Inventory the source: pages, shared header and footer, tokens in `assets/style.css`, the theme toggle in `assets/site.js`.
2. Map the design to EDS: tokens go to `styles/styles.css`, header and footer become the `header` and `footer` blocks, the theme toggle goes into `scripts/scripts.js` or a small block.
3. Block plan: hero, stats, cards, timeline, tag list, contact list, article, writing listing. Agree the list before building any of them.
4. Build the home page and one article end to end in da.live.
5. Run the gate on both pages at 1440 px and 360 px.

Done when:
- The staging URL (`https://main--portfolio-eds--raviprashanth22035.aem.page/`) returns 200 with the home page.
- Home and one article pass the pass bar in README decision 9, with the numbers printed.
- Lighthouse mobile performance is 100 on both.
- The editability probe passes for every block built so far.
- `start-here.md` has an updated status and run log.

Stop point: ask Ravi to review the two pages before going wide.

## Phase 2: Go wide (goal prompt 2)

1. Finish any missing blocks first, before parallel work.
2. Migrate remaining pages: experience, projects, contact, writing listing, remaining articles. Articles can run as parallel streams in separate git worktrees, each writing only its own files.
3. Shared files (styles, scripts, blocks) are changed only by the coordinating session, on request from a stream with a measured difference.
4. Validate every page with the same gate as Phase 1.

Done when: every page passes at both widths and the final sweep table is printed.

## Phase 3: Verify and hand off

- Dark mode sweep on every page.
- Link check: every in-page anchor and internal link resolves.
- Lighthouse on each page type.
- Query index and sitemap configured.
- `whats-left.md` lists what Ravi still needs to do.
- `inconsistencies.md` lists every deliberate difference for review.
