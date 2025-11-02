# ApexPlanet Internship Projects

Comprehensive front-end builds completed during the ApexPlanet internship. The repository hosts five standalone mini-projects that showcase responsive layouts, interactive UI patterns, offline caching, and modern tooling. Each task can be opened directly in a browser, while Task&nbsp;4’s portfolio additionally supports a Vite-powered development workflow.

## Repository Structure

| Path | Description | Key Tech |
| --- | --- | --- |
| `ApexPlanet-Task-1/` | Single-page personal introduction with theme toggle and responsive hero layout. | HTML, CSS, JavaScript |
| `ApexPlanet-Task-2/` | Services landing page with testimonials, pricing cards, and mobile navigation. | HTML, CSS, JavaScript |
| `ApexPlanet-Task-3/` | Interactive quote generator with API integration and user-customisable themes. | HTML, CSS, JavaScript, Fetch API |
| `ApexPlanet-Task-4/Portfolio/` | Modular portfolio site assembled from reusable components, built with Vite. | HTML partials, CSS modules, Vanilla JS, Node.js (Vite) |
| `ApexPlanet-Task-4/ProductListing/` | Filterable product showcase with animated cards and semantic layout. | HTML, CSS, JavaScript |
| `ApexPlanet-Task-4/TodoList/` | Animated to-do manager demonstrating list state handling. | HTML, CSS, JavaScript |
| `ApexPlanet-Task-5/` | Mini e-commerce storefront with cart persistence, service worker, and polished UI. | HTML, CSS, JavaScript, Service Worker |

## Highlights

- Consistent branding and palettes aligned to the Soumyadeep Sarkar personal identity.
- Fluid responsive layouts leveraging `clamp`, CSS grid, flexbox, and sticky headers.
- Progressive enhancement: graceful fallbacks, semantic markup, accessible navigation.
- LocalStorage-backed cart and service worker caching for offline resilience (Task&nbsp;5).
- Modular component assembly and post-build script for the Task&nbsp;4 portfolio.

## Getting Started

### Prerequisites

- [Node.js 20+](https://nodejs.org/) for running the Task&nbsp;4 Vite-powered portfolio locally.
- A modern browser (Chrome, Edge, Firefox, Safari) for previewing all static tasks.
- Optional: VS Code Live Server or any static file server to avoid service worker caching conflicts.

### Clone the Repository

```cmd
git clone https://github.com/<your-username>/ApexPlanet-Internship.git
cd ApexPlanet-Internship
```

### Launch Static Tasks (1–3, 5, and Task 4 sub-projects except Portfolio)

Open the `index.html` file inside the desired task folder directly in a browser, or serve it via a lightweight server (for example, VS Code Live Server). Each task is fully self-contained.

### Run Task 4 – Portfolio (Vite)

```cmd
cd ApexPlanet-Task-4\Portfolio
npm install
npm run dev
```

The dev server URL (default `http://localhost:5173`) will be printed in the terminal. Use `npm run build` to create the production bundle and `npm run preview` to test the built output locally.

## Task-Specific Notes

- **Task 1:** Includes theme toggling and animated hero transitions.
- **Task 2:** Highlights modular cards, testimonial carousel logic, and responsive pricing grid.
- **Task 3:** Fetches inspirational quotes from an API with loading states and error handling.
- **Task 4 Product Listing / Todo List:** Emphasise motion design and clean card-based layouts.
- **Task 5:** Implements cart persistence through LocalStorage, animated product cards, and a service worker (`sw.js`) for offline-first capability.

## Offline & Caching Considerations (Task 5)

- The service worker caches the core assets on first load. When developing, hard refresh (`Ctrl+F5`) or unregister the service worker via browser dev tools to ensure style/script updates are reflected immediately.
- Product data lives in `app.js`. Update this file to adjust pricing, product images, or catalogue entries.

## Quality Checklist

- HTML validated and structured with semantic tags.
- CSS organised with shared design tokens and animations.
- JavaScript kept modular with helper utilities for formatting, storage, and rendering.
- Responsive behaviour manually tested across mobile, tablet, and desktop breakpoints.

## Pushing to GitHub (Command Line Workflow)

1. **Initialise Git (if not already initialised):**
	```cmd
	git init
	```
2. **Verify file status:**
	```cmd
	git status
	```
3. **Stage changes:**
	```cmd
	git add .
	```
4. **Commit with a descriptive message:**
	```cmd
	git commit -m "Add ApexPlanet internship project files"
	```
5. **Add the remote repository (replace URL with your GitHub repo):**
	```cmd
	git remote add origin https://github.com/<your-username>/ApexPlanet-Internship.git
	```
6. **Push to GitHub:**
	```cmd
	git push -u origin main
	```

For subsequent updates, repeat steps 2–4 with new commits, then `git push`. If your remote uses a different default branch name (e.g., `master`), substitute accordingly.

## License

The Task&nbsp;4 portfolio explicitly ships with an MIT license (`ApexPlanet-Task-4/Portfolio/LICENSE`). For all other tasks, please refer to project-specific licensing requirements or clarify with the project owner before redistribution.
