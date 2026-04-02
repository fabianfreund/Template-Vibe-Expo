# Theming

This template keeps design tokens in [`theme/index.ts`](../theme/index.ts).

## What lives there

- `palette`: base colors
- `fonts`: default sans and mono font families
- `spacing`: spacing scale
- `radii`: border radius scale
- `typography`: shared font sizes
- `getTheme(colorScheme)`: resolved light/dark theme values used by screens and layouts

## Change Brand Colors

Update the `palette` values in `theme/index.ts`:

```ts
const palette = {
  brand500: '#6366f1',
  brand600: '#5458e8',
};
```

`theme.colors.accent` and related UI colors are derived from these values.

## Change Fonts

Update the `fonts` object in `theme/index.ts`:

```ts
const fonts = {
  sans: 'YourFont-Regular',
  mono: 'YourMonoFont-Regular',
};
```

Then load those fonts in [`app/_layout.tsx`](../app/_layout.tsx) with `useFonts`.

## Recommended Workflow

1. Add or rename fonts in `assets/fonts/`
2. Load them in `app/_layout.tsx`
3. Set the family names in `theme/index.ts`
4. Reuse `getTheme(useColorScheme())` in screens instead of hardcoding colors

## Icons

- iOS tabs use SF Symbols through `expo-router/unstable-native-tabs`
- Screen icons use [`components/app-icon.tsx`](../components/app-icon.tsx)
- Non-iOS platforms fall back to Ionicons automatically
