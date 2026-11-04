# What is left

## Done in this session
- EDS code on `raviprashanth22035/portfolio-eds` main: 10 blocks, design system, header and footer, section metadata handling.
- Content for all 8 documents (6 pages, nav, footer) in `portfolio-eds/da-content/`.
- Local gate: 6 pages at 1440 px and 360 px, light and dark. Highest pixel difference 1.69 percent, highest height difference 0.25 percent, every heading, link, label and the full page text matching.
- Lighthouse mobile on the local dev server: performance 100 and CLS 0 on all 6 pages.

## Not verified here (this session cannot reach aem.page, aem.live or da.live)
1. **Content in da.live.** Until it is imported, the staging site shows the boilerplate sample content with the new code. Run `DA_TOKEN=<ims token> node qa/import-da.mjs` in `portfolio-eds`. The token comes from the `da-auth` skill in `adobe/skills` or `aem login`. The importer was tested against a mock admin API only.
2. **Staging URL.** Confirm `https://main--portfolio-eds--raviprashanth22035.aem.page/` returns 200 with the home page after the import.
3. **Editability probe.** Open each page in da.live and confirm every text element is editable.
4. **Lighthouse on staging.** The 100s above are from the local dev server. Re-run on aem.page.
5. **Re-run the gate against staging.** `EDS_URL=https://main--portfolio-eds--raviprashanth22035.aem.page node qa/gate.mjs`.
6. **Config in da.live and aem.live.** Query index, sitemap, robots.txt, and any redirects, using tools.aem.live.

## Decisions for you
- Review `inconsistencies.md`.
- Confirm the employment dates on the Experience page (EXL has no start date, NeoSOFT has no dates).
- Add more articles. Only one exists, so the writing listing has no previous and next links.
- Cutover: GitHub Pages stays live at `raviprashanth22035.github.io`. There is no custom domain, so there is nothing to switch.
