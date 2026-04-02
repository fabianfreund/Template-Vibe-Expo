# Custom Fonts

## Adding Fonts

1. Place font files in `assets/fonts/`
2. Load them in `app/_layout.tsx`:

```ts
const [fontsLoaded] = useFonts({
  'MyFont-Regular': require('../assets/fonts/MyFont-Regular.ttf'),
});
```

3. Set the font family names in `theme/index.ts` so the rest of the app picks them up from one place.
