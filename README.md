# varekai.ai

The Varekai website: hand-built static HTML and CSS, no build step.

- `index.html` home page, `work.html` design concepts, one page per service
- `real-estate.html` KeyLink for real estate agents
- `privacy.html` and `terms.html` (includes the SMS terms that A2P texting registration checks)
- `vercel.json` turns on clean URLs, so `/real-estate` serves `real-estate.html`

Deploy: the Vercel project `varekai-site` (which owns www.varekai.ai) is connected to this repo.
Every push to `main` goes live. Framework preset: Other, no build command, output directory: root.
Don't drag-and-drop deploys anymore; they get overwritten by the next push.

The older Next.js version of the site lives on the `nextjs-july` branch.
