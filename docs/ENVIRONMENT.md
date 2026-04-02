# Environment Variables

## Local Development

Create `.env.local` for local secrets (gitignored):

```bash
MY_API_KEY=abc123
```

Access in code:

```ts
import Constants from 'expo-constants';
const key = Constants.expoConfig?.extra?.myApiKey;
```

## EAS Secrets

For EAS builds, use [EAS Secrets](https://docs.expo.dev/eas/environment-variables/):

```bash
eas secret:create --scope project --name MY_API_KEY --value abc123
```
