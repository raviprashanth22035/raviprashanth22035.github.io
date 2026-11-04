# Inconsistency register

Every deliberate difference between the GitHub Pages source and the EDS build. Review each one.

1. **URLs.** The source links to `index.html`, `experience.html` and `writing/forms-on-eds.html`. EDS uses clean paths: `/`, `/experience`, `/writing/forms-on-eds`. Link text is identical.
2. **Source CSS quirk kept.** In the source, `section.block h2` outranks `.post-list h2` and `.article h2`, so post titles and article headings render at the section heading size (1.5rem), not the smaller sizes written in the stylesheet. The EDS build reproduces what the source actually renders. Decide whether the smaller sizes were intended.
3. **Header and footer placeholders.** The EDS header reserves its height (65 px desktop, 126 px phone) and the footer stays hidden until loaded. This removes layout shift that late-loaded blocks would cause. There is no visual difference once loaded.
4. **Boilerplate pieces removed.** Web fonts (the site uses the system font stack), the unused columns and widget blocks, and the consent-check script load.
5. **Section styles.** Page-title, article and column-list layouts come from Section Metadata styles (`page-title`, `article`, `list-columns`). The home hero section is detected with `:has()`.
6. **Theme toggle.** Same behaviour as the source. The saved theme is applied in `scripts/scripts.js` before first paint.
