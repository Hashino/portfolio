# Deployment Guide

## Quick Deploy to GitHub Pages

### 1. Create GitHub Repository

Go to GitHub and create a new repository named `portfolio`.

### 2. Initialize Git and Push

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/hashino/portfolio.git
git push -u origin main
```

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React app (`npm run build`)
- Push the `dist` folder to the `gh-pages` branch

### 4. Enable GitHub Pages

1. Go to: https://github.com/hashino/portfolio/settings/pages
2. Under "Source", select "Deploy from a branch"
3. Select branch: `gh-pages`
4. Select folder: `/ (root)`
5. Click "Save"

### 5. View Your Portfolio

After a few minutes, your portfolio will be live at:
**https://hashino.github.io/portfolio/**

## Update Portfolio

To update your portfolio after making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## Development

```bash
# Run local development server
npm run dev

# Visit http://localhost:5173 in your browser
```

## Troubleshooting

### Build errors
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors in your components

### 404 on GitHub Pages
- Ensure the `base` in `vite.config.js` matches your repository name
- Make sure `.nojekyll` file exists in the `public` folder
- Wait a few minutes for GitHub Pages to update

### Astronaut image not showing
- Check that `public/astronaut.png` exists
- Ensure the path in `Astronaut.css` is correct: `url('/astronaut.png')`
