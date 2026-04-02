import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { AppIcon } from '../../components/app-icon';
import { getTheme, themeTokens } from '../../theme';

const FEATURES = [
  { icon: 'bolt', title: 'Expo SDK 55', description: 'Latest stable SDK with new architecture enabled' },
  { icon: 'compass', title: 'Expo Router v4', description: 'File-based routing with typed routes support' },
  { icon: 'palette', title: 'Dark / Light Mode', description: 'Automatic theme switching via useColorScheme' },
  { icon: 'devices', title: 'iOS & Android', description: 'Native SF Symbol tabs on iOS, vector icons on Android' },
  { icon: 'code', title: 'TypeScript', description: 'Fully typed codebase out of the box' },
  { icon: 'rocket', title: 'EAS Build Ready', description: 'Pre-configured eas.json for CI/CD deployment' },
] as const;

export default function ExploreScreen() {
  const theme = getTheme(useColorScheme());

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.heading, { color: theme.colors.text }]}>Explore</Text>
        <Text style={[styles.subheading, { color: theme.colors.textMuted }]}>
          What&apos;s included in this template
        </Text>

        <View style={styles.grid}>
          {FEATURES.map(feature => (
            <View
              key={feature.title}
              style={[
                styles.card,
                { backgroundColor: theme.colors.surface, borderColor: theme.colors.border },
              ]}
            >
              <View style={[styles.iconWrap, { backgroundColor: theme.colors.surfaceMuted }]}>
                <AppIcon name={feature.icon} size={20} color={theme.colors.accent} />
              </View>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>{feature.title}</Text>
              <Text style={[styles.featureDesc, { color: theme.colors.textMuted }]}>
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
    fontFamily: themeTokens.fonts.sans,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 15,
    fontFamily: themeTokens.fonts.sans,
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
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: themeTokens.fonts.sans,
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 12,
    fontFamily: themeTokens.fonts.sans,
    lineHeight: 17,
  },
});
