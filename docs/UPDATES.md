# EAS Update (OTA)

## Setup

```bash
# Install expo-updates
npx expo install expo-updates

# Configure
npx eas update:configure
```

## Add Channels

Add update channels to `eas.json` build profiles:

- `"channel": "production"` — for production profile
- `"channel": "preview"` — for preview profile
