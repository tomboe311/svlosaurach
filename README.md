# SV Losaurach e.V.

## Development

- Install dependencies: `npm ci`
- Start local dev server: `npm run dev`
- Build production (server mode): `npm run build`

## GitHub Pages Build

- Build static export for GitHub Pages: `npm run build:pages`
- The static output is written to `out/`.
- The site is served from the root of the custom domain `sv-losaurach.de` (configured in the GitHub repository's Pages settings), so no `basePath` is configured.