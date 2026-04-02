import { type ColorSchemeName, Platform } from 'react-native';

const palette = {
  white: '#ffffff',
  black: '#0a0a0a',
  neutral50: '#f8f8f8',
  neutral100: '#f0f0f0',
  neutral200: '#e5e5e5',
  neutral400: '#888888',
  neutral500: '#666666',
  neutral800: '#2a2a2a',
  neutral900: '#1a1a1a',
  brand500: '#6366f1',
  brand600: '#5458e8',
};

const fonts = {
  sans: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'System',
  }),
  mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'monospace',
  }),
};

export const themeTokens = {
  palette,
  fonts,
  radii: {
    sm: 12,
    md: 16,
    lg: 20,
    full: 999,
  },
  spacing: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 48,
  },
  typography: {
    hero: 32,
    title: 26,
    heading: 22,
    body: 15,
    small: 14,
    caption: 12,
    overline: 11,
  },
};

export function getTheme(colorScheme: ColorSchemeName) {
  const isDark = colorScheme === 'dark';

  return {
    isDark,
    colors: {
      background: isDark ? palette.black : palette.neutral50,
      surface: isDark ? palette.neutral900 : palette.white,
      surfaceMuted: isDark ? '#121212' : palette.neutral100,
      border: isDark ? palette.neutral800 : palette.neutral200,
      text: isDark ? palette.white : palette.black,
      textMuted: isDark ? palette.neutral400 : palette.neutral500,
      accent: palette.brand500,
      accentPressed: palette.brand600,
      accentContrast: palette.white,
      tabBarBackground: isDark ? palette.neutral900 : palette.white,
      tabBarInactive: isDark ? '#ffffff90' : '#00000090',
      indicator: `${palette.brand500}25`,
    },
    fonts,
    radii: themeTokens.radii,
    spacing: themeTokens.spacing,
    typography: themeTokens.typography,
  };
}
