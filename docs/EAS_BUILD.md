# EAS Build

## First-time Setup

Link the project to your EAS account (creates a project ID):

```bash
npx eas init
```

## Development Build

Supports full native module set. Install once on device/simulator, then use with `expo start`.

```bash
# iOS Simulator
eas build --profile development --platform ios

# Android device (APK)
eas build --profile development --platform android
```

## Preview Build

Release-mode binary shared internally via TestFlight / direct APK link.

```bash
eas build --profile preview --platform all
```

## Production Build

For store submission:

```bash
# Build
eas build --profile production --platform all

# Submit to stores
eas submit --platform ios
eas submit --platform android
```
