import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';

const FEATURES = [
  { icon: '⚡', title: 'Expo SDK 55', description: 'Latest stable SDK with new architecture enabled' },
  { icon: '🧭', title: 'Expo Router v4', description: 'File-based routing with typed routes support' },
  { icon: '🎨', title: 'Dark / Light Mode', description: 'Automatic theme switching via useColorScheme' },
  { icon: '📱', title: 'iOS & Android', description: 'Native liquid glass on iOS, Material tabs on Android' },
  { icon: '🔷', title: 'TypeScript', description: 'Fully typed codebase out of the box' },
  { icon: '🚀', title: 'EAS Build Ready', description: 'Pre-configured eas.json for CI/CD deployment' },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const colors = {
    background: isDark ? '#0a0a0a' : '#f8f8f8',
    card: isDark ? '#1a1a1a' : '#ffffff',
    border: isDark ? '#2a2a2a' : '#e5e5e5',
    text: isDark ? '#ffffff' : '#0a0a0a',
    subtext: isDark ? '#888888' : '#666666',
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.heading, { color: colors.text }]}>Explore</Text>
        <Text style={[styles.subheading, { color: colors.subtext }]}>
          What's included in this template
        </Text>

        <View style={styles.grid}>
          {FEATURES.map(feature => (
            <View
              key={feature.title}
              style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Text style={styles.icon}>{feature.icon}</Text>
              <Text style={[styles.featureTitle, { color: colors.text }]}>{feature.title}</Text>
              <Text style={[styles.featureDesc, { color: colors.subtext }]}>
                {feature.description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 120,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 15,
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '47%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
  icon: {
    fontSize: 28,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 12,
    lineHeight: 17,
  },
});
