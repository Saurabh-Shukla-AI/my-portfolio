# Saurabh Shukla Portfolio

Modern portfolio website for Saurabh Shukla, focused on AI engineering, computer vision, and production GenAI systems.

## Live Website

- GitHub Pages: https://saurabh-shukla-ai.github.io/my-portfolio/

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS (via @tailwindcss/vite)
- GSAP
- Three.js / React Three Fiber

## Project Highlights

- Responsive, modern portfolio sections (hero, skills, experience, projects, contact)
- Data-driven content from project data files
- GitHub Pages deployment via GitHub Actions
- Vite base path configured for repository-based pages deployment

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm ci
```

### Run Dev Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

Deployment is handled by GitHub Actions using [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

- Trigger: push to main
- Build command: npm run build
- Output directory: dist

For first-time setup on a new repository:

1. Open repository Settings > Pages
2. Under Build and deployment, set Source to GitHub Actions

## Repository Structure

- Source code: [src](src)
- Public assets: [public](public)
- Vite config: [vite.config.ts](vite.config.ts)
- Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## License

This project is licensed under the terms described in [LICENSE](LICENSE).

