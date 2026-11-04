# EDS migration decisions

Source site: https://raviprashanth22035.github.io (this repo, static HTML, no build step).
Target: Adobe Edge Delivery Services, content in da.live, code in a new GitHub repo.
Method: two `/goal` prompts in Claude Code, after a planning pass. Modeled on Jack Jin's migration write-up.

## Decisions

1. Fidelity: the EDS site must look identical to the source. No redesign during migration.
2. Source of truth for design: `assets/style.css` in this repo (tokens at the top, light and dark).
3. Code repo: a new repo, `raviprashanth22035/portfolio-eds`, created from the AEM EDS boilerplate. The existing `eds` repo is not touched.
4. Content authoring: da.live. Every page is an editable document.
5. URLs stay the same where possible: `/`, `/experience`, `/projects`, `/contact`, `/writing`, `/writing/<slug>`.
6. Scope: the four current pages plus a new writing section (listing plus articles). The writing section is added to the source site first (Phase 0) so there is something real to migrate.
7. Parallelism: single thread for foundation. Parallel agents only for article pages and blocks after the block set is agreed.
8. No custom domain. Staging and production both stay on the aem.page and aem.live hosts. GitHub Pages stays live as the rollback.
9. Pass bar per page, desktop 1440 px and phone 360 px: pixel diff at most 10 percent, page height within 5 percent, no clipped content, every heading, link and label present, every authored text element editable in da.live.
10. Performance bar: Lighthouse mobile performance 100 on home and on one article.
11. Design changes are only allowed through an inconsistency register (`inconsistencies.md`), reviewed by Ravi.
12. No em dashes or long dashes anywhere in site copy.

## Human-only steps

These need Ravi's logins, so Claude stops and asks.

- Create `portfolio-eds` from the boilerplate template on GitHub (this session cannot create repos).
- Install the AEM Code Sync GitHub app on `portfolio-eds`.
- Create the da.live site for the repo and grant access.
- Approve any push that a permission check flags as a deploy.

## Open items

- Real article content for the writing section (Phase 0). Do not ship placeholder articles.
- Employment dates on the Experience page need confirming.
