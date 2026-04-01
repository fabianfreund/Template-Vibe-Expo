# Vibe Expo Template

A production-ready **Expo SDK 55** starter for iOS and Android. Clone it, rename the bundle ID, and ship.

**Stack:** Expo 55 · React Native 0.83 · React 19 · Expo Router v4 · TypeScript · EAS Build

---

## What's included

- **Expo Router v4** — file-based navigation with typed routes
- **TypeScript** — strict mode with `@/*` path aliases
- **EAS Build** — development, preview, and production profiles pre-configured
- **Dark / light mode** — automatic system theme via `useColorScheme`
- **New Architecture** — enabled by default (required for Reanimated 4)
- **ESLint + Prettier** — pre-configured with Expo's flat config
- **Demo screens** — Home + About to verify navigation works out of the box

---

## Quick Start

### Prerequisites

- Node.js 20+
- [EAS CLI](https://docs.expo.dev/eas/): `npm install -g eas-cli`
- An [Expo account](https://expo.dev) (free)

### 1. Clone & install

```bash
git clone https://github.com/YOUR_ORG/Template-Vibe-Expo.git my-app
cd my-app
npm install --legacy-peer-deps
```

### 2. Rename the template

Replace all occurrences of the placeholder values in `app.json`:

| Placeholder | Replace with |
|---|---|
| `com.vibeexpo.template` | Your bundle ID, e.g. `com.acme.myapp` |
| `template-vibe-expo` | Your app slug, e.g. `my-app` |
| `Vibe Expo Template` | Your app name |

Then update the submit credentials in `eas.json` → `submit.production`.

### 3. Run locally

```bash
npx expo start
# Press i → iOS Simulator
# Press a → Android Emulator
# Scan QR → Expo Go on device
```

---

## EAS Build

### First-time setup

Link the project to your EAS account (creates a project ID):

```bash
npx eas init
```

### Development build (with dev client)

Supports the full native module set. Install once on device/simulator, then use with `expo start`.

```bash
# iOS Simulator
eas build --profile development --platform ios

# Android device (APK)
eas build --profile development --platform android
```

### Preview build (internal distribution)

Release-mode binary shared internally via TestFlight / direct APK link.

```bash
eas build --profile preview --platform all
```

### Production build (store submission)

```bash
# Build
eas build --profile production --platform all

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

---

## Project Structure

```
├── app/
│   ├── _layout.tsx        # Root Stack layout (splash screen, fonts, status bar)
│   ├── index.tsx          # Home / demo screen
│   └── about.tsx          # About screen (navigation demo)
├── assets/
│   └── images/
│       ├── icon.png           # 1024×1024 app icon (replace with your own)
│       ├── adaptive-icon.png  # Android adaptive icon foreground
│       ├── splash-icon.png    # Splash screen image
│       └── favicon.png        # Web favicon
├── app.json               # Expo config (bundle ID, plugins, etc.)
├── eas.json               # EAS Build profiles
├── tsconfig.json          # TypeScript config (strict, @/* alias)
├── babel.config.js        # Babel config (babel-preset-expo only)
├── eslint.config.js       # ESLint flat config
└── .prettierrc            # Prettier config
```

> **Note:** `android/` and `ios/` are gitignored. This is a **managed workflow** project — native directories are generated on-demand by `expo prebuild` and should not be committed.

---

## Adding Over-the-Air Updates (EAS Update)

```bash
# Install expo-updates
npx expo install expo-updates

# Configure
npx eas update:configure

# Add update channels to eas.json build profiles:
# "channel": "production"  ← for the production profile
# "channel": "preview"     ← for the preview profile
```

---

## Environment Variables

Create `.env.local` for local secrets (gitignored):

```bash
MY_API_KEY=abc123
```

Access in code:

```ts
import Constants from 'expo-constants';
const key = Constants.expoConfig?.extra?.myApiKey;
```

For EAS builds, use [EAS Secrets](https://docs.expo.dev/eas/environment-variables/):

```bash
eas secret:create --scope project --name MY_API_KEY --value abc123
```

---

## Adding Custom Fonts

1. Place font files in `assets/fonts/`
2. Load them in `app/_layout.tsx`:

```ts
const [fontsLoaded] = useFonts({
  'MyFont-Regular': require('../assets/fonts/MyFont-Regular.ttf'),
});
```

---

## License

MIT
