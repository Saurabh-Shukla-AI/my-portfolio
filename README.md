# Saurabh Shukla - Portfolio Website

Personal portfolio built with React, TypeScript, Vite, and Three.js to showcase AI engineering, GenAI, and computer vision work.

## Live Link

- GitHub Pages: https://saurabh-shukla-ai.github.io/my-portfolio/

## Features

- Modern single-page portfolio layout
- Hero, About, Skills, Experience, Projects, and Contact sections
- Data-driven content from [src/data/siteContent.ts](src/data/siteContent.ts)
- Three.js + React Three Fiber visuals
- GitHub Actions based deployment to GitHub Pages

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- GSAP
- Three.js, React Three Fiber, Drei

## Quick Start

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

### Build production bundle

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment (GitHub Pages)

Workflow file: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

- Deploys on push to main
- Builds with npm run build
- Publishes dist as Pages artifact

### One-time GitHub setup

1. Open repository Settings -> Pages
2. Set Source to GitHub Actions

## Important Files

- App entry: [src/App.tsx](src/App.tsx)
- Content data: [src/data/siteContent.ts](src/data/siteContent.ts)
- Vite config: [vite.config.ts](vite.config.ts)
- Deployment workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## Notes

- The Vite base path is configured to work correctly for GitHub Pages repository deployment.
- If the site appears blank after deploy, verify Pages source is GitHub Actions and re-run the latest workflow.

## License

See [LICENSE](LICENSE).

