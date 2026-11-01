# Strait Live Frontend Deployment

This project is a Vite + React frontend and is configured for deployment on GitHub Pages.

## Requirements

- GitHub repository
- Node.js 20+
- GitHub Pages enabled in repository settings

## Deployment steps

1. Make sure your repository name matches the `base` path in `vite.config.ts`.
   - Current config uses:
     - `/strait-live/`
   - If your repository name changes, update it accordingly.

2. Push the project to the `main` branch.

3. In GitHub:
   - Go to `Settings`
   - Open `Pages`
   - Set `Source` to `GitHub Actions`

4. GitHub Actions will automatically run:
   - `npm ci`
   - `npm run build`
   - deploy the generated `dist` folder to GitHub Pages

## Important notes

- The project is a frontend static deployment.
- The `server.ts` file is not used in GitHub Pages deployment.
- If you use React Router or client-side routes, ensure the app is configured for SPA routing.

## Site URL

After deployment, the site should be available at:

https://jerryang2-lab.github.io/strait-live/

## Troubleshooting

### 1. Page loads but assets are broken
Check if `base` in `vite.config.ts` matches the repo name exactly.

### 2. 404 on refresh
If the app uses client-side routing, configure a fallback route or add a redirect rule for SPA routes.

### 3. Deployment does not start
Verify the workflow file is in:
- `.github/workflows/deploy.yml`

### 4. Build fails
Run locally:

```bash
npm install
npm run build
