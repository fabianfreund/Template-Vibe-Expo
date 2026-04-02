# Project Structure

```
├── app/
│   ├── _layout.tsx        # Root Stack layout (splash screen, fonts, status bar)
│   ├── index.tsx          # Home / demo screen
│   └── about.tsx          # About screen (navigation demo)
├── app/(tabs)/            # Tab-based navigation
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── explore.tsx
│   └── profile.tsx
├── assets/
│   └── images/
│       ├── icon.png           # 1024×1024 app icon
│       ├── adaptive-icon.png  # Android adaptive icon foreground
│       ├── splash-icon.png    # Splash screen image
│       └── favicon.png        # Web favicon
├── app.json               # Expo config (bundle ID, plugins, etc.)
├── components/
│   └── app-icon.tsx       # Shared icon wrapper (SF Symbols on iOS, Ionicons elsewhere)
├── theme/
│   └── index.ts           # Central design tokens and light/dark theme resolver
├── eas.json               # EAS Build profiles
├── tsconfig.json          # TypeScript config (strict, @/* alias)
├── babel.config.js        # Babel config (babel-preset-expo only)
├── eslint.config.js       # ESLint flat config
└── .prettierrc            # Prettier config
```

## Note

`android/` and `ios/` are gitignored. This is a **managed workflow** project — native directories are generated on-demand by `expo prebuild` and should not be committed.

For colors, fonts, spacing, and radii, start in `theme/index.ts`. See `docs/THEMING.md`.
