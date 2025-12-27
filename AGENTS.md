# AGENTS.md - Development Guidelines for Landing React

## Project Overview
- **Stack**: React 19.2.0 + Vite + Tailwind CSS v4 + Framer Motion + React Router
- **Type**: JavaScript (ES modules) with TypeScript types for dev dependencies
- **Target**: Modern browsers with ES2020+ support
- **Architecture**: Component-based with custom hooks, layouts, and animated routes

## Build & Development Commands

### Core Commands
```bash
npm run dev          # Start development server with HMR (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on all files
```

### Testing
- **Current**: No test framework configured
- **Recommended**: Vitest + React Testing Library when adding tests
- **Single Test Pattern**: `npm test -- --run ComponentName.test.jsx` (when Vitest is added)
- **Coverage**: Aim for 80%+ coverage on critical components

### Linting & Code Quality
- **ESLint**: Configured with React hooks, React refresh, and recommended rules
- **Lint command**: `npm run lint` (run before every commit)
- **Key rule**: Unused variables allowed if starting with uppercase letter or underscore
- **No formatter**: Prettier not configured - follow established code style manually

## Code Style Guidelines

### File Structure & Naming
- **Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Files**: `.jsx` for React components, `.js` for utilities
- **Folders**: camelCase for feature folders, kebab-case for shared resources
- **Constants**: UPPER_SNAKE_CASE
- **Functions/Variables**: camelCase

### Import Organization
```javascript
// 1. React and core libraries
import React from 'react'
import { useState } from 'react'

// 2. Third-party libraries
import { SomeLibrary } from 'some-library'

// 3. Internal modules (relative imports)
import './Component.css'
import { HelperFunction } from '../utils/helpers'
```

### React Component Patterns
- Use functional components with hooks
- Export default for main component exports
- Prefer named exports for utilities and constants
- Use JSX fragment (`<>...</>`) when wrapping multiple elements without a container

### State Management
- Use React hooks (useState, useEffect, etc.) for local state
- Keep state close to where it's used
- For complex state, consider useReducer or external state management

### CSS & Styling
- **Primary**: Tailwind CSS v4 with Vite plugin
- Use utility classes for styling
- Component-specific CSS should be imported directly: `import './Component.css'`
- Avoid inline styles except for dynamic values

### ESLint Configuration
- Configured for ES2020+ with JSX support
- React Hooks rules enabled
- React Refresh for HMR compatibility
- Unused variables allowed if they start with uppercase letter or underscore

### Error Handling
- Use error boundaries for React components
- Implement try-catch for async operations
- Provide meaningful error messages and fallback UI

### Performance Considerations
- Use React.memo for expensive components
- Implement proper dependency arrays in hooks
- Consider code splitting for large applications
- Optimize images and assets

### Git & Development Workflow
- Branch naming: feature/description, bugfix/description, hotfix/description
- Commit messages: conventional commits preferred
- Always run `npm run lint` before commits
- Test in development before pushing

## Development Tips
- Use the Vite dev server for fast hot reload
- Tailwind CSS v4 provides improved performance and features
- React 19.2.0 with latest best practices
- Keep dependencies updated regularly
- Use browser dev tools for debugging React components

## Future Considerations
- Add TypeScript for better type safety
- Implement testing framework (Vitest recommended)
- Add Prettier for code formatting
- Consider adding Storybook for component documentation
- Set up CI/CD pipeline for automated testing and deployment

## Component Patterns from Codebase

### Custom Hooks
- Use `use-` prefix for custom hooks (e.g., `useSportsNews.js`)
- Return state objects: `{ data, loading, error }`
- Handle async operations with proper error boundaries
- Include cleanup functions for intervals/effect listeners

### Animation & Transitions
- Use Framer Motion for animations and page transitions
- Define variant objects for complex animations
- Use spring transitions for natural movement
- Implement hover states with `whileHover` and `whileTap`

### Layout Structure
- Use `<Router>` wrapper in main App component
- Implement animated routes with `AnimatedRoutes` component
- Create reusable layout components (e.g., `FacilitiesLayout`, `SportsNewsLayout`)
- Use semantic HTML5 elements (`<section>`, `<article>`, etc.)

### Data Fetching Patterns
- Use async/await within useEffect hooks
- Provide fallback data when API calls fail
- Implement loading states and error handling
- Use mock data during development (sample data functions)

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Use responsive utilities: `sm:`, `md:`, `lg:`, `xl:`
- Implement fluid typography and spacing
- Consider touch interactions for mobile devices