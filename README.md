# varekai.ai

The Varekai website: hand-built static HTML and CSS, no build step.

- `index.html` real estate home page; `services.html` and one page per service, all written for real estate agents
- `keylink.html` (/keylink) everything included, plan by plan; `about`, `how-it-works`, `faq`, `book-a-walkthrough`
- `keylink-site.css` styles for these pages, on top of `varekai.css`
- `business.html` and the older service and `work` pages are the hidden general-business site: not in the menu or sitemap, and marked noindex
- `privacy.html` and `terms.html` (includes the SMS terms that A2P texting registration checks)
- `vercel.json` turns on clean URLs, so `/real-estate` serves `real-estate.html`

Deploy: the Vercel project `varekai-site` (which owns www.varekai.ai) is connected to this repo.
Every push to `main` goes live. Framework preset: Other, no build command, output directory: root.
Don't drag-and-drop deploys anymore; they get overwritten by the next push.

The older Next.js version of the site lives on the `nextjs-july` branch.
