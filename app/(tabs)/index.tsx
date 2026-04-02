import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { getTheme, themeTokens } from '../../theme';

const STACK = [
  { label: 'Expo SDK', value: '55.0' },
  { label: 'React Native', value: '0.83' },
  { label: 'React', value: '19.2' },
  { label: 'Expo Router', value: 'v4' },
  { label: 'TypeScript', value: '5.3' },
];

const BADGES = ['SDK 55', 'TypeScript', 'EAS Build'];

export default function HomeScreen() {
  const theme = getTheme(useColorScheme());

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={[styles.logo, { backgroundColor: theme.colors.accent }]}>
          <Text style={styles.logoText}>VE</Text>
        </View>

        <Text style={[styles.title, { color: theme.colors.text }]}>Vibe Expo Template</Text>
        <Text style={[styles.subtitle, { color: theme.colors.textMuted }]}>
          Production-ready Expo starter
        </Text>

        <View style={styles.badges}>
          {BADGES.map(badge => (
            <View key={badge} style={[styles.badge, { backgroundColor: theme.colors.surfaceMuted }]}>
              <Text style={[styles.badgeText, { color: theme.colors.textMuted }]}>{badge}</Text>
            </View>
          ))}
        </View>

        <View
          style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
        >
          <Text style={[styles.cardTitle, { color: theme.colors.textMuted }]}>TECH STACK</Text>
          {STACK.map((item, index) => (
            <View
              key={item.label}
              style={[
                styles.stackRow,
                index < STACK.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.border,
                },
              ]}
            >
              <Text style={[styles.stackLabel, { color: theme.colors.text }]}>{item.label}</Text>
              <Text style={[styles.stackValue, { color: theme.colors.textMuted }]}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.hint, { color: theme.colors.textMuted }]}>
          Clone, rename the bundle ID, and ship.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 120,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    fontFamily: themeTokens.fonts.sans,
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: themeTokens.fonts.sans,
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: themeTokens.fonts.sans,
    textAlign: 'center',
    marginBottom: 24,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 28,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: themeTokens.fonts.sans,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 28,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: '600',
    fontFamily: themeTokens.fonts.sans,
    letterSpacing: 1,
    paddingTop: 16,
    paddingBottom: 12,
  },
  stackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  stackLabel: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: themeTokens.fonts.sans,
  },
  stackValue: {
    fontSize: 15,
    fontFamily: themeTokens.fonts.mono,
  },
  hint: {
    fontSize: 13,
    fontFamily: themeTokens.fonts.sans,
    letterSpacing: 0.5,
  },
});
