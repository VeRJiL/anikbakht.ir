# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Create production build in `build/` directory
- `npm test` - Run test suite with Jest and React Testing Library
- `npm run eject` - Eject from Create React App (irreversible)

### Development Workflow
- Use `npm start` for local development with hot reloading
- Run `npm run build` before deployment to ensure production bundle works
- Test changes with `npm test` to ensure component functionality

## Architecture Overview

### Tech Stack
- **React 18.2.0** with functional components and hooks
- **Tailwind CSS 3.4.17** for styling with custom animations
- **Create React App 5.0.1** for build tooling
- **Lucide React** for icons
- **PostCSS + Autoprefixer** for CSS processing

### Component Architecture
The codebase follows a modular React architecture with clear separation of concerns:

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Navigation and Footer
│   └── sections/        # Main page sections
├── data/               # Static content and configuration
├── hooks/              # Custom React hooks
├── styles/             # Custom CSS animations
└── utils/              # Utility functions and constants
```

### Key Custom Hooks
- `useTheme()` - Manages dark/light mode with localStorage persistence
- `useScrollAnimation()` - Handles scroll-based animations and intersection observer

### State Management
- Theme state managed via `useTheme` hook with localStorage
- Scroll animations managed via `useScrollAnimation` hook
- No external state management library (Redux, Zustand) - uses React built-in state

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **Custom animations** defined in `src/styles/animations.css`
- **Responsive design** with mobile-first approach
- **Dark/light mode** support throughout all components

### Component Patterns
- All components are functional components using hooks
- Props are passed down for theme state (`isDarkMode`)
- Animation state managed through `visibleElements` from scroll hook
- Components use `data-animate` attributes for scroll-triggered animations

### Data Structure
- Static data stored in `src/data/` directory (skills, experiences, achievements)
- Content is modularized for easy updates without touching component code
- Personal information centralized in data files for maintainability

### Performance Considerations
- IntersectionObserver for efficient scroll animations
- Tailwind CSS purging for minimal bundle size
- React 18 features for optimal rendering
- CSS animations preferred over JavaScript animations for performance