import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';

const STACK = [
  { label: 'Expo SDK', value: '55.0' },
  { label: 'React Native', value: '0.83' },
  { label: 'React', value: '19.2' },
  { label: 'Expo Router', value: 'v4' },
  { label: 'TypeScript', value: '5.3' },
];

const BADGES = ['SDK 55', 'TypeScript', 'EAS Build'];

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const colors = {
    background: isDark ? '#0a0a0a' : '#f8f8f8',
    card: isDark ? '#1a1a1a' : '#ffffff',
    border: isDark ? '#2a2a2a' : '#e5e5e5',
    text: isDark ? '#ffffff' : '#0a0a0a',
    subtext: isDark ? '#888888' : '#666666',
    badge: isDark ? '#1e1e1e' : '#f0f0f0',
    badgeText: isDark ? '#aaaaaa' : '#555555',
    accent: '#6366f1',
    accentText: '#ffffff',
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={[styles.logo, { backgroundColor: colors.accent }]}>
          <Text style={styles.logoText}>VE</Text>
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: colors.text }]}>Vibe Expo Template</Text>
        <Text style={[styles.subtitle, { color: colors.subtext }]}>
          Production-ready Expo starter
        </Text>

        {/* Badges */}
        <View style={styles.badges}>
          {BADGES.map(badge => (
            <View key={badge} style={[styles.badge, { backgroundColor: colors.badge }]}>
              <Text style={[styles.badgeText, { color: colors.badgeText }]}>{badge}</Text>
            </View>
          ))}
        </View>

        {/* Stack info card */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.subtext }]}>TECH STACK</Text>
          {STACK.map((item, index) => (
            <View
              key={item.label}
              style={[
                styles.stackRow,
                index < STACK.length - 1 && { borderBottomWidth: 1, borderBottomColor: colors.border },
              ]}
            >
              <Text style={[styles.stackLabel, { color: colors.text }]}>{item.label}</Text>
              <Text style={[styles.stackValue, { color: colors.subtext }]}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* CTA */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: colors.accent, opacity: pressed ? 0.85 : 1 },
          ]}
          onPress={() => router.push('/about')}
        >
          <Text style={[styles.buttonText, { color: colors.accentText }]}>
            Go to About Screen →
          </Text>
        </Pressable>

        <Text style={[styles.hint, { color: colors.subtext }]}>
          Clone • Rename bundle ID • Ship
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
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
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
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
  },
  stackValue: {
    fontSize: 15,
    fontFamily: 'monospace',
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  hint: {
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
