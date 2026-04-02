import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { AppIcon } from '../components/app-icon';
import { getTheme, themeTokens } from '../theme';

export default function AboutScreen() {
  const router = useRouter();
  const theme = getTheme(useColorScheme());

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
      <View style={styles.container}>
        <View
          style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
        >
          <Text style={[styles.heading, { color: theme.colors.text }]}>Navigation works!</Text>
          <Text style={[styles.body, { color: theme.colors.textMuted }]}>
            This is the About screen, demonstrating Expo Router v4 file-based navigation. Each
            file in the <Text style={[styles.mono, { color: theme.colors.text }]}>app/</Text>{' '}
            directory automatically becomes a route.
          </Text>
          <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />
          <Text style={[styles.tip, { color: theme.colors.textMuted }]}>
            Add new screens by creating files in{' '}
            <Text style={[styles.mono, { color: theme.colors.text }]}>app/</Text>
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? theme.colors.accentPressed : theme.colors.accent },
          ]}
          onPress={() => router.back()}
        >
          <View style={styles.buttonContent}>
            <AppIcon name="arrow-left" size={16} color={theme.colors.accentContrast} />
            <Text style={[styles.buttonText, { color: theme.colors.accentContrast }]}>Go Back</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 20,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: themeTokens.fonts.sans,
    marginBottom: 12,
  },
  body: {
    fontSize: 15,
    fontFamily: themeTokens.fonts.sans,
    lineHeight: 22,
    marginBottom: 20,
  },
  mono: {
    fontFamily: themeTokens.fonts.mono,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    marginBottom: 16,
  },
  tip: {
    fontSize: 14,
    fontFamily: themeTokens.fonts.sans,
    lineHeight: 20,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: themeTokens.fonts.sans,
  },
});
