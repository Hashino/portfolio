# Iam Ravara - Portfolio

A modern portfolio website built with React and Vite, featuring an animated starfield background and floating astronaut, styled with the Nord color palette.

## Features

- Animated starfield background (multiple layers)
- Random floating astronaut animation
- Nord color theme matching hashino.github.io blog
- Responsive design
- Glassmorphic UI elements
- Smooth animations and transitions

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

The built files are in the `/docs` folder on the `main` branch.

### Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the `main` branch and `/docs` folder
5. Click "Save"

Your portfolio will be available at: `https://hashino.github.io/portfolio/`

### Deploy Updated Version

```bash
# Build and copy to docs folder
npm run build
cp -r dist docs

# Commit and push
git add docs -f
git commit -m "deploy: build for production"
git push origin main
```

Or use the deploy script:
```bash
npm run deploy
```

## Tech Stack

- React 19
- Vite 7
- CSS3 (with CSS Variables)
- Nord Color Palette

## Project Structure

```
src/
├── components/
│   ├── Astronaut.jsx       # Floating astronaut animation
│   ├── Stars.jsx            # Animated starfield background
│   ├── Hero.jsx             # Header section with name and links
│   ├── Section.jsx          # Reusable section wrapper
│   ├── Experience.jsx       # Work experience timeline
│   ├── Skills.jsx           # Technical skills grid
│   ├── Achievements.jsx     # Key achievements list
│   └── Education.jsx        # Education and languages
├── App.jsx                  # Main app component
├── App.css                  # App-specific styles
└── index.css                # Global styles and Nord theme

public/
└── astronaut.png            # Astronaut image asset
```

## License

© 2024 Iam Ravara
