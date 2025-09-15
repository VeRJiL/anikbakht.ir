# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a React portfolio website built with Create React App, Tailwind CSS, and custom animations. The actual project files are in the `anikbakht.ir/` subdirectory.

### Key Architecture Patterns

- **Component Organization**: Components are organized into three main categories:
  - `src/components/common/` - Reusable UI components (AnimatedCounter, FloatingParticles, SkillBar, etc.)
  - `src/components/layout/` - Layout components (Navigation, Footer)
  - `src/components/sections/` - Main page sections (HeroSection, AboutSection, etc.)

- **Data Separation**: Static content is stored in `src/data/` files (skills.js, experiences.js, achievements.js, projects.js)

- **Custom Hooks**: Two main hooks manage application state:
  - `useTheme()` - Handles dark/light mode with localStorage persistence
  - `useScrollAnimation()` - Manages scroll-based animations using IntersectionObserver

- **Theme System**: Dark/light mode is implemented via the `useTheme` hook and passed as props to components. Theme preference is persisted in localStorage.

- **Animation System**: Uses custom CSS animations defined in `src/styles/animations.css` combined with Tailwind's extended animation config. Scroll-based animations are triggered via the `useScrollAnimation` hook using IntersectionObserver.

## Common Development Commands

```bash
# Development server (runs on localhost:3000)
cd anikbakht.ir && npm start

# Production build
cd anikbakht.ir && npm run build

# Run tests
cd anikbakht.ir && npm test

# Install dependencies
cd anikbakht.ir && npm install
```

## Key Files to Understand

- `src/App.jsx` - Main application component that renders all sections
- `src/hooks/useTheme.js` - Theme management with localStorage
- `src/hooks/useScrollAnimation.js` - Scroll-based animations
- `tailwind.config.js` - Extended animations configuration
- `src/styles/animations.css` - Custom CSS animations

## Development Notes

- All components are functional components using hooks
- The site uses Tailwind CSS with custom animation extensions
- Theme switching affects multiple components via prop drilling
- Animations are triggered by scroll position using IntersectionObserver
- Static content should be updated in the `src/data/` directory
- SEO content is managed in `public/index.html`