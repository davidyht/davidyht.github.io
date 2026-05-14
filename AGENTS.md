# Codex Notes

This is Huitao Yang's personal academic website, based on the Jekyll `al-folio` theme.

## Site Shape

- Live URL in `_config.yml`: `https://davidyht.github.io`.
- Main source branch: `main`, tracking `origin/main`.
- Remote: `https://github.com/davidyht/davidyht.github.io.git`.
- The public-facing pages currently kept active are mainly `_pages/about.md`, `_pages/research.md`, `_pages/news.md`, and `_pages/404.md`.
- Inactive al-folio demo pages/data such as CV, repositories, books, people, and teaching were removed from the repo.

## High-Value Edit Paths

- Homepage bio/profile: `_pages/about.md`; profile image comes from `assets/img/self_pic.jpg`.
- Publications: `_bibliography/papers.bib`.
- Publication venue badges/colors: `_data/venues.yml`.
- Social/contact icons: `_data/socials.yml`.
- News items: `_news/*.md`.
- Site-wide settings/navigation/exclusions/features: `_config.yml`.
- Styling: `_sass/*.scss` and `assets/css/main.scss`.

## Build And Verification

- Local build command: `bundle exec jekyll build`.
- If `bundle` resolves to `/usr/bin/bundle` and fails on Bundler 2.6.6, use `/Users/yanghuitao/.rbenv/shims/bundle exec jekyll build`.
- Build currently succeeds locally. Expected nonfatal warnings:
  - Sass deprecation warnings from bundled theme/icon Sass.
- `_site/`, `.jekyll-cache/`, `.tweet-cache/`, `node_modules/`, and `Gemfile.lock` are ignored by git.

## Publish Flow

- Default publish path: commit changes on `main`, then `git push origin main`; GitHub Actions deploys the site from `_site`.
- Avoid using `bin/deploy` unless explicitly requested; it builds locally and force-pushes a `gh-pages` branch.
- Before pushing, run `git status --short --branch`, review the diff, build with `bundle exec jekyll build`, commit intentionally, then push.

## Token-Efficient Operating Strategy

- Do not reread bundled/vendor-heavy files unless editing them: `assets/js/search/**`, `assets/css/bootstrap*`, `assets/css/mdb*`, `lighthouse_results/**`, `readme_preview/**`, fonts/webfonts, and generated `_site/**`.
- For content changes, inspect only the relevant source path plus `_config.yml` when navigation/build behavior matters.
- For publication changes, inspect `_bibliography/papers.bib`, `_data/venues.yml`, and `_layouts/bib.liquid` only if rendering behavior changes.
