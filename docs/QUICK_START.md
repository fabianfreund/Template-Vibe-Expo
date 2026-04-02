# Quick Start

## Prerequisites

- Node.js 20+
- [EAS CLI](https://docs.expo.dev/eas/): `npm install -g eas-cli`
- An [Expo account](https://expo.dev) (free)

## Clone & Install

```bash
git clone https://github.com/YOUR_ORG/Template-Vibe-Expo.git my-app
cd my-app
npm install --legacy-peer-deps
```

## Rename the Template

Replace placeholders in `app.json`:

| Placeholder             | Replace with                          |
| ----------------------- | ------------------------------------- |
| `com.vibeexpo.template` | Your bundle ID, e.g. `com.acme.myapp` |
| `template-vibe-expo`    | Your app slug, e.g. `my-app`          |
| `Vibe Expo Template`    | Your app name                         |

Update submit credentials in `eas.json` → `submit.production`.

## Run Locally

```bash
npx expo start
# Press i → iOS Simulator
# Press a → Android Emulator
# Scan QR → Expo Go on device
```
