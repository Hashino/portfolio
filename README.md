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

This portfolio is configured to deploy to GitHub Pages at `hashino.github.io/portfolio`.

### Initial Setup

1. Create a repository named `portfolio` on GitHub
2. Initialize git and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/hashino/portfolio.git
git push -u origin main
```

### Deploy

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the `gh-pages` branch and `/ (root)` folder
5. Click "Save"

Your portfolio will be available at: `https://hashino.github.io/portfolio/`

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
