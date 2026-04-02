# Architecture

## Overview

The project uses Expo Router for file-based routing. The app directory contains all routes and layouts.

## Routing

- `app/_layout.tsx` — Root layout with splash screen, fonts, status bar
- `app/index.tsx` — Home screen
- `app/about.tsx` — About screen
- `app/(tabs)/` — Tab-based navigation with nested layouts

## State Management

- No external state library by default — use React Context for global state
- For complex state, consider Zustand or Jotai (install with `npx expo install`)

## Native Modules

- **New Architecture enabled** — Required for Reanimated 4
- Full native module support via development builds
- Run `npx expo prebuild` to generate native directories

## Theming

- Dark/light mode via `useColorScheme()` hook
- Automatic system theme detection

## Performance

- Use React Server Components where possible
- Lazy load screens with `next()` in layout
- Optimize images with `expo-image`
