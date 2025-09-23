# Wendy Dherin - Personal Website

A personal website showcasing my work as a full-stack developer and generative artist. Built with Vite, Tailwind CSS, and p5.js for interactive generative art pieces.

I purposely built the site without React, because I've been using (and loving) React since it came out, and I wanted to test my chops with pure vanilla HTML and JavaScript.

I will probably convert this to a React app at some point though, to leverage reusability and state management more easily.

## Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Generative Art Gallery**: Interactive p5.js sketches including "Nervure," "Steady Nerves," "Mandala Effect," and more
- **Clean URLs**: SPA-style routing for a modern browsing experience
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## Tech Stack

- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Interactive Art**: p5.js
- **Fonts**: Custom web fonts (GFS Didot, Geoform)
- **Deployment**: GitHub Pages

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/doubledherin/personal-website.git
cd personal-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is in use).

### 4. Build for Production

```bash
npm run build
```

This creates a `dist` folder with the optimized production build.

### 5. Preview Production Build Locally

```bash
npm run preview
```

Or serve the dist folder with any static file server:

```bash
npx serve dist
```

## Project Structure

```
personal-website/
├── public/
│   ├── javascript/
│   │   └── sketches/          # p5.js generative art sketches
│   ├── libraries/             # p5.js library files
│   ├── assets/               # Images, fonts, and other static assets
│   └── favicon.ico
├── css/
│   └── style.css             # Tailwind CSS styles
├── index.html                # Main HTML file
├── *.html                    # Individual sketch pages
├── vite.config.mjs           # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json
```

## Development Notes

### Generative Art Sketches

Each generative art piece is built with p5.js and has its own dedicated HTML page:

- **Nervure**: Slime mold simulation creating organic patterns
- **Steady Nerves**: Chladni pattern visualization
- **Mandala Effect**: Rotating mandala with oscillating complexity
- **Noise Flower**: Perlin noise-based flower pattern
- **Rippling Spots**: Animated rippling effect
- **Peter**: Triangular shapes with varied colors
- **Insecurity**: Overlapping circles pattern
- **Doubt**: Typography animation with waving text

### Custom Fonts

The project uses custom fonts that need to be properly loaded:

- **GFS Didot**: For elegant headings
- **Geoform**: For specific art pieces like "Doubt"

Fonts are loaded from the `public/assets/fonts/` directory.

### Tailwind CSS

The project uses Tailwind CSS 4 with custom configuration. The main stylesheet is located at `css/style.css`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

The site is configured for deployment to GitHub Pages. The build output goes to the `dist` folder, which can be deployed to any static hosting service.

For GitHub Pages deployment:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your `gh-pages` branch or configure GitHub Pages to serve from the `dist` folder

## Browser Compatibility

- Modern browsers with ES6+ support
- WebGL support required for some p5.js sketches
- Responsive design works on mobile and desktop

## Contributing

This is a personal portfolio website, but if you notice any issues or have suggestions, feel free to open an issue.

## License

Copyright © 2025 Wendy Dherin. All rights reserved.

## Contact

- Website: [wendydherin.com](https://wendydherin.com)
- LinkedIn: [linkedin.com/in/wendydherin](https://www.linkedin.com/in/wendydherin/)
- GitHub: [github.com/doubledherin](https://github.com/doubledherin)
