# Quick Start

## Prerequisites

- Node.js 20+
- [EAS CLI](https://docs.expo.dev/eas/): `npm install -g eas-cli`
- An [Expo account](https://expo.dev) (free)

## Clone & Install

### Option 1: GitHub (recommended)

Click **"Use this template"** on the repo page, then:

```bash
# Clone your new repo
git clone https://github.com/YOUR_USERNAME/my-app.git
cd my-app
npm install --legacy-peer-deps
```

### Option 2: Clone directly

```bash
git clone https://github.com/YOUR_ORG/Template-Vibe-Expo.git my-app
cd my-app
npm install --legacy-peer-deps
```

### Post-Clone (for agents)

If you cloned this template, reset the git history to start fresh:

```bash
rm -rf .git
git init
git add -A
git commit -m "Initial commit from Template-Vibe-Expo"
```

## Rename the Template

Replace placeholders in `app.json`:

| Placeholder             | Replace with                          |
| ----------------------- | ------------------------------------- |
| `com.vibeexpo.template` | Your bundle ID, e.g. `com.acme.myapp` |
| `template-vibe-expo`    | Your app slug, e.g. `my-app`          |
| `Vibe Expo Template`    | Your app name                         |

Update submit credentials in `eas.json` → `submit.production`.

## Find & Replace All Placeholders

Search these strings in the project and replace them:

| Search                  | Replace With         | Where                                           |
| ----------------------- | -------------------- | ----------------------------------------------- |
| `com.vibeexpo.template` | `com.yourname.myapp` | `app.json`, `ios/`, `android/` (after prebuild) |
| `template-vibe-expo`    | `my-app`             | `app.json`, `eas.json`                          |
| `Vibe Expo Template`    | `My App`             | `app.json`                                      |
| `Template Vibe Expo`    | `My App`             | `app.json`, `package.json`                      |

After running `npx expo prebuild`, also check `ios/` and `android/` directories for remaining references.

## Run Locally

```bash
npx expo start
# Press i → iOS Simulator
# Press a → Android Emulator
# Scan QR → Expo Go on device
```
