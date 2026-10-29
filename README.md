# varekai.ai

The Varekai website: hand-built static HTML and CSS, no build step.

- `index.html` home page, `work.html` design concepts, one page per service
- `real-estate.html` KeyLink for real estate agents
- `privacy.html` and `terms.html` (includes the SMS terms that A2P texting registration checks)
- `vercel.json` turns on clean URLs, so `/real-estate` serves `real-estate.html`

Deploy: Vercel serves this folder as-is (Framework preset: Other, no build command, output directory: root).

The older Next.js version of the site lives on the `nextjs-july` branch.
